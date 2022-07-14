import { grpc } from "@improbable-eng/grpc-web";
import { EnrollmentIdentifier } from "..";
import { Config, SDKInitConfig } from "../config";
import { CompressionConfiguration } from "../generated/common/common_pb";
import { GetModelsResponse } from "../generated/v1/video";
import { AuthenticateConfig, AuthenticateRequest, AuthenticateResponse, CreateEnrollmentConfig, CreateEnrollmentRequest, CreateEnrollmentResponse, GetModelsRequest, LivenessRecognitionResponse, RecognitionThreshold, RecognitionThresholdMap, ValidateRecognitionConfig, ValidateRecognitionRequest } from "../generated/v1/video/video_pb";
import { BidirectionalStream, VideoBiometricsClient, VideoModelsClient, VideoRecognitionClient } from "../generated/v1/video/video_pb_service";
import { IVideoStreamInteractor } from "../interactors/video-stream.interactor";
import { ITokenManager } from "../token-manager/token.manager";

export type RecognitionThreshold = RecognitionThresholdMap[keyof RecognitionThresholdMap]

/** Handles all image and video requests to Sensory Cloud */
export class VideoService {

  constructor(
    private readonly tokenManager: ITokenManager,
    private readonly videoStreamInteractor :IVideoStreamInteractor,
    private modelsClient: VideoModelsClient | undefined = undefined,
    private biometricStreamingClient: VideoBiometricsClient | undefined = undefined,
    private recognitionStreamingClient: VideoRecognitionClient | undefined = undefined) { }

  /**
   * Fetch all video the models supported by your instance of Sensory Cloud.
   * @returns Promise<GetModelsRequest.AsObject>
   */
  public async getModels(): Promise<GetModelsResponse.AsObject> {
    const meta = await this.tokenManager.getAuthorizationMetadata();

    return new Promise<GetModelsResponse.AsObject>((resolve, reject) => {
      const request = new GetModelsRequest();

      this.getModelsClient().getModels(request, meta, (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res.toObject());
      });
    });
  }

  /**
   * Stream images to Sensory Cloud as a means for user enrollment.
   * @param  {string} description - a description of this enrollment. Useful if a user could have multiple enrollments, as it helps differentiate between them.
   * @param  {string} userId  - the unique userId for this enrollment.
   * @param  {string} modelName - the exact name of the model you intend to enroll into. This model name can be retrieved from the getModels() call.
   * @param  {boolean} isLivenessEnabled - indicates if liveness is enabled for this request
   * @param  {RecognitionThreshold=RecognitionThreshold.HIGH} threshold - the liveness threshold (if liveness is enabled). Defaults to HIGH.
   * @param  {number=0} numLiveFramesRequired - the number of frames that need to pass the liveness check for a successful enrollment (if liveness is enabled). A value of 0 means that all frames need to pass the liveness check. Defaults to 0.
   * @param  {boolean} disableServerEnrollmentStorage - If true, this will prevent the server from storing enrollment tokens locally and force the server to always return a token upon successful enrollment
   * @returns Promise<BidirectionalStream<CreateEnrollmentRequest, CreateEnrollmentResponse>> - a bidirectional stream where CreateEnrollmentRequests can be passed to the cloud and CreateEnrollmentResponses are passed back
   */
  public async streamEnrollment(
    description: string,
    userId: string,
    modelName: string,
    isLivenessEnabled: boolean,
    threshold: RecognitionThreshold = RecognitionThreshold.HIGH,
    numLiveFramesRequired: number = 0,
    referenceId?: string,
    disableServerEnrollmentStorage?: boolean): Promise<BidirectionalStream<CreateEnrollmentRequest, CreateEnrollmentResponse>> {

    const sdkConfig = Config.getSharedConfig();
    const meta = await this.tokenManager.getAuthorizationMetadata();
    const enrollmentStream = this.getBioStreamingClient().createEnrollment(meta);

    const request = new CreateEnrollmentRequest();
    const config = new CreateEnrollmentConfig();
    const compressionConfig = new CompressionConfiguration();

    compressionConfig.setCompressionsList(this.videoStreamInteractor.getVideoConfig().compressions);

    config.setDescription(description);
    config.setUserid(userId);
    config.setDeviceid(sdkConfig.deviceId);
    config.setModelname(modelName);
    config.setIslivenessenabled(isLivenessEnabled);
    config.setLivenessthreshold(threshold);
    config.setNumlivenessframesrequired(numLiveFramesRequired);
    config.setCompression(compressionConfig);

    if (referenceId) {
      config.setReferenceid(referenceId);
    }

    if (disableServerEnrollmentStorage != undefined) {
      config.setDisableserverenrollmenttemplatestorage(disableServerEnrollmentStorage);
    }

    request.setConfig(config);

    // Send config
    enrollmentStream.write(request);

    return enrollmentStream;
  }
  /**
   * Stream images to sensory cloud in order to authenticate a user against an existing enrollment.
   * @param  {EnrollmentIdentifier} enrollment - the enrollmentId or groupId
   * @param  {boolean} isLivenessEnabled - indicates if liveness is enabled for this request.
   * @param  {RecognitionThreshold=RecognitionThreshold.HIGH} threshold - the liveness threshold (if liveness is enabled) Defaults to HIGH.
   * @param  {Uint8Array} enrollmentToken? - Encrypted enrollment token that was provided on enrollment, pass undefined if no token was provided
   * @returns Promise<BidirectionalStream<AuthenticateRequest, AuthenticateResponse>> - a bidirectional stream where AuthenticateRequests can be passed to the cloud and AuthenticateResponses are passed back.
   */
  public async streamAuthentication(
    enrollment: EnrollmentIdentifier,
    isLivenessEnabled: boolean,
    threshold: RecognitionThreshold = RecognitionThreshold.HIGH,
    enrollmentToken?: Uint8Array): Promise<BidirectionalStream<AuthenticateRequest, AuthenticateResponse>> {
    const meta = await this.tokenManager.getAuthorizationMetadata();
    const authenticateStream = this.getBioStreamingClient().authenticate(meta);

    const request = new AuthenticateRequest();
    const config = new AuthenticateConfig();
    const compressionConfig = new CompressionConfiguration();

    compressionConfig.setCompressionsList(this.videoStreamInteractor.getVideoConfig().compressions);

    if (enrollment.enrollmentId) {
      config.setEnrollmentid(enrollment.enrollmentId)
    } else if (enrollment.enrollmentGroupId) {
      config.setEnrollmentgroupid(enrollment.enrollmentGroupId)
    }

    config.setIslivenessenabled(isLivenessEnabled);
    config.setLivenessthreshold(threshold);
    config.setCompression(compressionConfig);
    if (enrollmentToken != undefined) {
      config.setEnrollmenttoken(enrollmentToken);
    }
    request.setConfig(config);

    authenticateStream.write(request);

    return authenticateStream;
  }
  /**
   * Stream images to Sensory Cloud in order to recognize "liveness" of a particular image.
   *
   * @param  {string} userId - The unique user identifier making the request.
   * @param  {string} modelName - the exact name of the model you intend to use for recognition. This model name can be retrieved from the getModels() call.
   * @param  {RecognitionThreshold=RecognitionThreshold.HIGH} threshold - the threshold. Defaults to HIGH.
   * @returns Promise<BidirectionalStream<ValidateRecognitionRequest, LivenessRecognitionResponse>> - a bidirectional stream where ValidateRecognitionRequests can be passed to the cloud and LivenessRecognitionResponses are passed back.
   */
  public async streamLivenessRecognition(
    userId: string,
    modelName: string,
    threshold: RecognitionThreshold = RecognitionThreshold.HIGH): Promise<BidirectionalStream<ValidateRecognitionRequest, LivenessRecognitionResponse>> {
    const meta = await this.tokenManager.getAuthorizationMetadata();
    const recognitionStream = this.getRecogStreamingClient().validateLiveness(meta);

    const request = new ValidateRecognitionRequest();
    const config = new ValidateRecognitionConfig();

    config.setUserid(userId)
    config.setModelname(modelName)
    config.setThreshold(threshold)
    request.setConfig(config);

    recognitionStream.write(request);

    return recognitionStream;
  }

  private getModelsClient(): VideoModelsClient {
    if (this.modelsClient == undefined) {
      this.modelsClient = new VideoModelsClient(Config.getHost())
    }
    return this.modelsClient;
  }

  private getBioStreamingClient(): VideoBiometricsClient {
    if (this.biometricStreamingClient == undefined) {
      this.biometricStreamingClient = new VideoBiometricsClient(Config.getHost(), { transport: grpc.WebsocketTransport()});
    }
    return this.biometricStreamingClient;
  }

  private getRecogStreamingClient(): VideoRecognitionClient {
    if (this.recognitionStreamingClient == undefined) {
      this.recognitionStreamingClient = new VideoRecognitionClient(Config.getHost(), { transport: grpc.WebsocketTransport()});
    }
    return this.recognitionStreamingClient;
  }
}
