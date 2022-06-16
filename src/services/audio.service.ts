import { grpc } from "@improbable-eng/grpc-web";
import { Config } from "../config";
import { AudioConfig, AuthenticateConfig, AuthenticateRequest, AuthenticateResponse, CreateEnrolledEventRequest, CreateEnrollmentEventConfig, CreateEnrollmentConfig, CreateEnrollmentRequest, CreateEnrollmentResponse, GetModelsRequest, GetModelsResponse, ThresholdSensitivity, ThresholdSensitivityMap, TranscribeConfig, TranscribeRequest, TranscribeResponse, ValidateEventConfig, ValidateEventRequest, ValidateEventResponse, ValidateEnrolledEventRequest, ValidateEnrolledEventConfig, ValidateEnrolledEventResponse, SynthesizeSpeechResponse, SynthesizeSpeechRequest, VoiceSynthesisConfig } from "../generated/v1/audio/audio_pb";
import { AudioBiometricsClient, AudioEventsClient, AudioModelsClient, AudioSynthesisClient, AudioTranscriptionsClient } from "../generated/v1/audio/audio_pb_service";
import { BidirectionalStream } from "../generated/v1/management/enrollment_pb_service";
import { ITokenManager } from "../token-manager/token.manager";
import { IAudioStreamInteractor } from "../interactors/audio-stream.interactor";
import { ResponseStream } from "../generated/oauth/oauth_pb_service";

export type AudioRecognitionSensitivity = ThresholdSensitivityMap[keyof ThresholdSensitivityMap];
export type AudioSecurityThreshold = AuthenticateConfig.ThresholdSecurityMap[keyof AuthenticateConfig.ThresholdSecurityMap];
export type EnrollmentIdentifier = {enrollmentId: string, enrollmentGroupId?: never} | {enrollmentId?: never, enrollmentGroupId: string};

/** Handles all audio requests to Sensory Cloud */
export class AudioService {
  constructor(
    private readonly config: Config,
    private readonly tokenManager: ITokenManager,
    private readonly audioStreamInteractor :IAudioStreamInteractor,
    private readonly modelsClient = new AudioModelsClient(config.cloud.host),
    private readonly biometricsClient = new AudioBiometricsClient(config.cloud.host, {transport: grpc.WebsocketTransport()}),
    private readonly eventClient = new AudioEventsClient(config.cloud.host, {transport: grpc.WebsocketTransport()}),
    private readonly transcribeClient = new AudioTranscriptionsClient(config.cloud.host, {transport: grpc.WebsocketTransport()}),
    private readonly synthesisClient = new AudioSynthesisClient(config.cloud.host, {transport: grpc.WebsocketTransport()})
  ) {}

  /**
   * Fetch all the audio models supported by your instance of Sensory Cloud.
   * @returns Promise<GetModelsResponse.AsObject>
   */
  public async getModels(): Promise<GetModelsResponse.AsObject> {
    const meta = await this.tokenManager.getAuthorizationMetadata();

    return new Promise((resolve, reject) => {
      const request = new GetModelsRequest();

      this.modelsClient.getModels(request, meta, (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res.toObject());
      });
    });
  }

  /**
   * Stream audio to Sensory Cloud as a means for user enrollment.
   * Only biometric models may be used with the streamEnrollment method.
   *
   * @param  {string} description - a description of this enrollment. Useful if a user could have multiple enrollments, as it helps differentiate between them.
   * @param  {string} userId - the unique userId for this enrollment.
   * @param  {string} modelName - the exact name of the model you intend to enroll into. This model name can be retrieved from the getModels() call.
   * @param  {boolean} isLivenessEnabled - indicates if liveness is enabled for this request
   * @param  {string} languageCode? - the language code of the enrollment. Defaults to language code specified in the config.
   * @param  {string} referenceId? - the external referenceId for this enrollment. Can be used by you in any way.
   * @returns Promise<BidirectionalStream<CreateEnrollmentRequest, CreateEnrollmentResponse>> - a bidirectional stream where CreateEnrollmentRequests can be passed to the cloud and CreateEnrollmentResponses are passed back
   */
  public async streamEnrollment(
    description: string,
    userId: string,
    modelName: string,
    isLivenessEnabled: boolean,
    languageCode?: string,
    referenceId?: string): Promise<BidirectionalStream<CreateEnrollmentRequest, CreateEnrollmentResponse>> {
    const meta = await this.tokenManager.getAuthorizationMetadata();
    const enrollmentStream = this.biometricsClient.createEnrollment(meta);

    const request = new CreateEnrollmentRequest();
    const config = new CreateEnrollmentConfig();
    const audio = new AudioConfig();

    config.setDescription(description);
    config.setUserid(userId);
    config.setDeviceid(this.config.device.deviceId);
    config.setModelname(modelName);
    config.setIslivenessenabled(isLivenessEnabled);

    if (referenceId) {
      config.setReferenceid(referenceId);
    }

    audio.setEncoding(this.audioStreamInteractor.getAudioConfig().encoding);
    audio.setSampleratehertz(this.audioStreamInteractor.getAudioConfig().sampleratehertz);
    audio.setAudiochannelcount(this.audioStreamInteractor.getAudioConfig().audiochannelcount);
    audio.setLanguagecode(languageCode || this.config.device.defaultLanguageCode);

    config.setAudio(audio)
    request.setConfig(config);

    // Send config
    enrollmentStream.write(request);

    return enrollmentStream;
  }

  /**
   * Authenticate against an existing audio enrollment in Sensory Cloud.
   * Only biometric models may be used with the streamAuthentication method.
   *
   * @param  {EnrollmentIdentifier} enrollment - the enrollmentId or groupId
   * @param  {boolean} isLivenessEnabled - indicates if liveness is enabled for this request
   * @param  {AudioRecognitionSensitivity=ThresholdSensitivity.MEDIUM} sensitivity - the sensitivity of the recognition engine. Defaults to medium.
   * @param  {AudioSecurityThreshold=AuthenticateConfig.ThresholdSecurity.HIGH} security - the security threshold enforced by the recognition engine. Defaults to high.
   * @param  {string} languageCode? - the language code of the enrollment. Defaults to language code specified in the config.
   * @returns Promise<BidirectionalStream<AuthenticateRequest, AuthenticateResponse>> - a bidirectional stream where AuthenticateRequests can be passed to the cloud and AuthenticateResponses are passed back
   */
  public async streamAuthentication(
    enrollment: EnrollmentIdentifier,
    isLivenessEnabled: boolean,
    sensitivity: AudioRecognitionSensitivity = ThresholdSensitivity.MEDIUM,
    security: AudioSecurityThreshold = AuthenticateConfig.ThresholdSecurity.HIGH,
    languageCode?: string): Promise<BidirectionalStream<AuthenticateRequest, AuthenticateResponse>> {
    const meta = await this.tokenManager.getAuthorizationMetadata();
    const authenticationStream = this.biometricsClient.authenticate(meta);

    const request = new AuthenticateRequest();
    const config = new AuthenticateConfig();
    const audio = new AudioConfig();

    if (enrollment.enrollmentId) {
      config.setEnrollmentid(enrollment.enrollmentId);
    }

    if (enrollment.enrollmentGroupId) {
      config.setEnrollmentgroupid(enrollment.enrollmentGroupId);
    }

    config.setSensitivity(sensitivity);
    config.setSecurity(security);
    config.setIslivenessenabled(isLivenessEnabled);

    audio.setEncoding(this.audioStreamInteractor.getAudioConfig().encoding);
    audio.setSampleratehertz(this.audioStreamInteractor.getAudioConfig().sampleratehertz);
    audio.setAudiochannelcount(this.audioStreamInteractor.getAudioConfig().audiochannelcount);
    audio.setLanguagecode(languageCode || this.config.device.defaultLanguageCode);

    config.setAudio(audio)
    request.setConfig(config);

    // Send config
    authenticationStream.write(request);

    return authenticationStream;
  }

  /**
   * Stream audio to Sensory Cloud in order to recognize a specific phrase or sound
   *
   * @param  {string} modelName - the exact name of the model you intend to recognize against. This model name can be retrieved from the getModels() call.
   * @param  {string} userId - the unique userId for the user requesting this event
   * @param  {AudioRecognitionSensitivity=ThresholdSensitivity.MEDIUM} sensitivity - the sensitivity of the recognition engine. Defaults to medium.
   * @param  {string} languageCode? - the language code of the enrollment. Defaults to language code specified in the config.
   * @returns Promise<BidirectionalStream<ValidateEventRequest, ValidateEventResponse>> - a bidirectional stream where ValidateEventRequests can be passed to the cloud and ValidateEventResponses are passed back
   */
  public async streamEvent(
    userId: string,
    modelName: string,
    sensitivity: AudioRecognitionSensitivity = ThresholdSensitivity.MEDIUM,
    languageCode?: string): Promise<BidirectionalStream<ValidateEventRequest, ValidateEventResponse>> {
    const meta = await this.tokenManager.getAuthorizationMetadata();
    const eventStream = this.eventClient.validateEvent(meta);

    const request = new ValidateEventRequest();
    const config = new ValidateEventConfig();
    const audio = new AudioConfig();

    config.setModelname(modelName);
    config.setUserid(userId);
    config.setSensitivity(sensitivity);
    audio.setEncoding(this.audioStreamInteractor.getAudioConfig().encoding);
    audio.setSampleratehertz(this.audioStreamInteractor.getAudioConfig().sampleratehertz);
    audio.setAudiochannelcount(this.audioStreamInteractor.getAudioConfig().audiochannelcount);
    audio.setLanguagecode(languageCode || this.config.device.defaultLanguageCode);

    config.setAudio(audio);
    request.setConfig(config);

    // Send config
    eventStream.write(request);

    return eventStream;
  }

  /**
   * Stream audio to Sensory Cloud as a means for general audio enrollment.
   * Enrolled events are not subjected to the same rigor that biometric enrollments are.
   * Any non-biometric enrollable model may be used with streamCreateEnrolledEvent.
   *
   * @param  {string} description - a description of this enrollment. Useful if a user could have multiple enrollments, as it helps differentiate between them.
   * @param  {string} userId - the unique userId for this enrollment.
   * @param  {string} modelName - the exact name of the model you intend to enroll into. This model name can be retrieved from the getModels() call.
   * @param  {string} languageCode? - the language code of the enrollment. Defaults to language code specified in the config.
   * @param  {string} referenceId? - the external referenceId for this enrollment. Can be used by you in any way.
   * @returns Promise<BidirectionalStream<CreateEnrolledEventRequest, CreateEnrollmentResponse>> - a bidirectional stream where CreateEnrolledEventRequests can be passed to the cloud and CreateEnrollmentResponses are passed back
   */
  public async streamCreateEnrolledEvent(
    description: string,
    userId: string,
    modelName: string,
    languageCode?: string,
    referenceId?: string): Promise<BidirectionalStream<CreateEnrolledEventRequest, CreateEnrollmentResponse>> {
    const meta = await this.tokenManager.getAuthorizationMetadata();
    const enrollmentStream = this.eventClient.createEnrolledEvent(meta);

    const request = new CreateEnrolledEventRequest();
    const config = new CreateEnrollmentEventConfig();
    const audio = new AudioConfig();

    config.setDescription(description);
    config.setUserid(userId);
    config.setModelname(modelName);

    if (referenceId) {
      config.setReferenceid(referenceId);
    }

    audio.setEncoding(this.audioStreamInteractor.getAudioConfig().encoding);
    audio.setSampleratehertz(this.audioStreamInteractor.getAudioConfig().sampleratehertz);
    audio.setAudiochannelcount(this.audioStreamInteractor.getAudioConfig().audiochannelcount);
    audio.setLanguagecode(languageCode || this.config.device.defaultLanguageCode);

    config.setAudio(audio)
    request.setConfig(config);

    // Send config
    enrollmentStream.write(request);

    return enrollmentStream;
  }

  /**
   * Validate against an existing enrolled event in Sensory Cloud.
   * Enrolled events are not subjected to the same rigor that biometric enrollments are.
   * Any enrollable model may be used with streamValidateEnrolledEvent.
   *
   * @param  {EnrollmentIdentifier} enrollment - the enrollmentId or groupId
   * @param  {AudioRecognitionSensitivity=ThresholdSensitivity.MEDIUM} sensitivity - the sensitivity of the recognition engine. Defaults to medium.
   * @param  {string} languageCode? - the language code of the enrollment. Defaults to language code specified in the config.
   * @returns Promise<BidirectionalStream<ValidateEnrolledEventRequest, ValidateEnrolledEventResponse>> - a bidirectional stream where ValidateEnrolledEventRequests can be passed to the cloud and ValidateEnrolledEventResponses are passed back
   */
  public async streamValidateEnrolledEvent(
    enrollment: EnrollmentIdentifier,
    sensitivity: AudioRecognitionSensitivity = ThresholdSensitivity.MEDIUM,
    languageCode?: string): Promise<BidirectionalStream<ValidateEnrolledEventRequest, ValidateEnrolledEventResponse>> {
    const meta = await this.tokenManager.getAuthorizationMetadata();
    const authenticationStream = this.eventClient.validateEnrolledEvent(meta);

    const request = new ValidateEnrolledEventRequest();
    const config = new ValidateEnrolledEventConfig();
    const audio = new AudioConfig();

    if (enrollment.enrollmentId) {
      config.setEnrollmentid(enrollment.enrollmentId);
    }

    if (enrollment.enrollmentGroupId) {
      config.setEnrollmentgroupid(enrollment.enrollmentGroupId);
    }

    config.setSensitivity(sensitivity);

    audio.setEncoding(this.audioStreamInteractor.getAudioConfig().encoding);
    audio.setSampleratehertz(this.audioStreamInteractor.getAudioConfig().sampleratehertz);
    audio.setAudiochannelcount(this.audioStreamInteractor.getAudioConfig().audiochannelcount);
    audio.setLanguagecode(languageCode || this.config.device.defaultLanguageCode);

    config.setAudio(audio)
    request.setConfig(config);

    // Send config
    authenticationStream.write(request);

    return authenticationStream;
  }

  /**
   * Stream audio to Sensory Cloud in order to transcribe spoken words
   *
   * @param  {string} modelName - the exact name of the model you intend to use for transcription. This model name can be retrieved from the getModels() call.
   * @param  {string} userId - the unique userId for the user requesting this event
   * @param  {string} languageCode? - the language code of the enrollment. Defaults to language code specified in the config.
   * @returns Promise<BidirectionalStream<TranscribeResponse, TranscribeResponse>> - a bidirectional stream where TranscribeRequests can be passed to the cloud and TranscribeResponses are passed back
   */
  public async streamTranscription(modelName: string, userId: string, languageCode?: string): Promise<BidirectionalStream<TranscribeRequest, TranscribeResponse>> {
    const meta = await this.tokenManager.getAuthorizationMetadata();
    const transcriptionStream = this.transcribeClient.transcribe(meta);

    const request = new TranscribeRequest();
    const config = new TranscribeConfig();
    const audio = new AudioConfig();

    config.setModelname(modelName);
    config.setUserid(userId);
    audio.setEncoding(this.audioStreamInteractor.getAudioConfig().encoding);
    audio.setSampleratehertz(this.audioStreamInteractor.getAudioConfig().sampleratehertz);
    audio.setAudiochannelcount(this.audioStreamInteractor.getAudioConfig().audiochannelcount);
    audio.setLanguagecode(languageCode || this.config.device.defaultLanguageCode);

    config.setAudio(audio);
    request.setConfig(config);

    // Stop Microphone on stream end
    transcriptionStream.write(request);

    return transcriptionStream;
  }

  /**
   * Sends a request to Sensory Cloud to synthesize speech
   *
   * @param {string} phrase - The text phrase to synthesize a voice saying
   * @param {string} voiceName - The name of the voice to use during speech synthesis
   * @param {AudioConfig} audioConfig? - Optional configuration for how the synthesized audio should be formatted
   * @returns Promise<ResponseStream<SynthesizeSpeechResponse>> - a stream of audio data with the synthesized voice.
   *          The first response will contain audio config information, all subsequent responses will contain audio data
   */
  public async synthesizeSpeech(phrase: string, voiceName: string, audioConfig?: AudioConfig): Promise<ResponseStream<SynthesizeSpeechResponse>> {
    const meta = await this.tokenManager.getAuthorizationMetadata();

    const voiceConfig = new VoiceSynthesisConfig();
    voiceConfig.setVoice(voiceName);
    if (audioConfig) {
      voiceConfig.setAudio(audioConfig);
    } else {
      const audio = new AudioConfig();
      audio.setEncoding(this.audioStreamInteractor.getAudioConfig().encoding);
      audio.setSampleratehertz(this.audioStreamInteractor.getAudioConfig().sampleratehertz);
      audio.setAudiochannelcount(this.audioStreamInteractor.getAudioConfig().audiochannelcount);
      audio.setLanguagecode(this.config.device.defaultLanguageCode);
      voiceConfig.setAudio(audio);
    }

    const request = new SynthesizeSpeechRequest();
    request.setPhrase(phrase);
    request.setConfig(voiceConfig);

    const synthesisStream = this.synthesisClient.synthesizeSpeech(request, meta);

    return synthesisStream;
  }
}
