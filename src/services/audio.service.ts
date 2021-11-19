import { grpc } from "@improbable-eng/grpc-web";
import { Config } from "../config";
import { AudioConfig, AuthenticateConfig, AuthenticateRequest, AuthenticateResponse, CreateEnrollmentConfig, CreateEnrollmentRequest, CreateEnrollmentResponse, GetModelsRequest, GetModelsResponse, ThresholdSensitivityMap, TranscribeConfig, TranscribeRequest, TranscribeResponse, ValidateEventConfig, ValidateEventRequest, ValidateEventResponse } from "../generated/v1/audio/audio_pb";
import { AudioBiometricsClient, AudioEventsClient, AudioModelsClient, AudioTranscriptionsClient } from "../generated/v1/audio/audio_pb_service";
import { BidirectionalStream } from "../generated/v1/management/enrollment_pb_service";
import { ITokenManager } from "../token-manager/token.manager";
import { AudioEvent, IAudioStreamInteractor } from "../interactors/audio-stream.interactor";

export interface IAudioService {

}

export type AudioRecognitionSensitivity = ThresholdSensitivityMap[keyof ThresholdSensitivityMap];
export type AudioSecurityThreshold = AuthenticateConfig.ThresholdSecurityMap[keyof AuthenticateConfig.ThresholdSecurityMap];
export type EnrollmentIdentifier = {enrollmentId: string, enrollmentGroupId?: never} | {enrollmentId?: never, enrollmentGroupId: string};

export class AudioService implements IAudioService {
  private readonly dataUploadInterval = 100 // 100 ms;

  constructor(
    private readonly config: Config,
    private readonly tokenManager: ITokenManager,
    private readonly audioStreamInteractor :IAudioStreamInteractor,
    private readonly modelsClient = new AudioModelsClient(config.cloud.host),
    private readonly biometricsClient = new AudioBiometricsClient(config.cloud.host, {transport: grpc.WebsocketTransport()}),
    private readonly eventClient = new AudioEventsClient(config.cloud.host, {transport: grpc.WebsocketTransport()}),
    private readonly transcribeClient = new AudioTranscriptionsClient(config.cloud.host, {transport: grpc.WebsocketTransport()})
  ) {}

  /**
   * @returns Promise
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

  public async streamEnrollment(description: string, userId: string, deviceId: string, modelName: string, languageCode?: string): Promise<BidirectionalStream<CreateEnrollmentRequest, CreateEnrollmentResponse>> {
    const meta = await this.tokenManager.getAuthorizationMetadata();
    const enrollmentStream = this.biometricsClient.createEnrollment(meta);

    const request = new CreateEnrollmentRequest();
    const config = new CreateEnrollmentConfig();
    const audio = new AudioConfig();

    config.setDescription(description);
    config.setUserid(userId);
    config.setDeviceid(deviceId);
    config.setModelname(modelName);
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

  public async streamAuthentication(enrollment: EnrollmentIdentifier, sensitivity: AudioRecognitionSensitivity, security: AudioSecurityThreshold, languageCode?: string): Promise<BidirectionalStream<AuthenticateRequest, AuthenticateResponse>> {
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

  public async streamEvent(modelName: string, userId: string, sensitivity: AudioRecognitionSensitivity, languageCode?: string): Promise<BidirectionalStream<ValidateEventRequest, ValidateEventResponse>> {
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
}
