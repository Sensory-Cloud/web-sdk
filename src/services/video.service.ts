import { grpc } from "@improbable-eng/grpc-web";
import { Config } from "../config";
import { CompressionConfiguration, CompressionTypeMap } from "../generated/common/common_pb";
import { AuthenticateConfig, AuthenticateRequest, AuthenticateResponse, CreateEnrollmentConfig, CreateEnrollmentRequest, CreateEnrollmentResponse, GetModelsRequest, LivenessRecognitionResponse, RecognitionThresholdMap, ValidateRecognitionConfig, ValidateRecognitionRequest } from "../generated/v1/video/video_pb";
import { BidirectionalStream, VideoBiometricsClient, VideoModelsClient, VideoRecognitionClient } from "../generated/v1/video/video_pb_service";
import { IVideoStreamInteractor } from "../interactors/video-stream.interactor";
import { ITokenManager } from "../token-manager/token.manager";

export interface IVideoService {

}

export type LivenessThreshold = RecognitionThresholdMap[keyof RecognitionThresholdMap]

export class VideoService implements IVideoService {

  constructor(
    private readonly config: Config,
    private readonly tokenManager: ITokenManager,
    private readonly videoStreamInteractor :IVideoStreamInteractor,
    private modelsClient = new VideoModelsClient(config.cloud.host),
    private biometricStreamingClient = new VideoBiometricsClient(config.cloud.host, { transport: grpc.WebsocketTransport()}),
    private recognitionStreamingClient = new VideoRecognitionClient(config.cloud.host, { transport: grpc.WebsocketTransport()}),
  ) {}

  public async getModels(): Promise<GetModelsRequest.AsObject> {
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

  public async streamEnrollment(description: string, userId: string, deviceId: string, modelName: string, isLivenessEnabled: boolean, threshold: LivenessThreshold): Promise<BidirectionalStream<CreateEnrollmentRequest, CreateEnrollmentResponse>> {
    const meta = await this.tokenManager.getAuthorizationMetadata();
    const enrollmentStream = this.biometricStreamingClient.createEnrollment(meta);

    const request = new CreateEnrollmentRequest();
    const config = new CreateEnrollmentConfig();
    const compressionConfig = new CompressionConfiguration();

    compressionConfig.setCompressionsList(this.videoStreamInteractor.getVideoConfig().compressions);

    config.setDescription(description);
    config.setUserid(userId);
    config.setDeviceid(deviceId);
    config.setModelname(modelName);
    config.setIslivenessenabled(isLivenessEnabled);
    config.setLivenessthreshold(threshold);
    config.setCompression(compressionConfig);

    request.setConfig(config);

    // Send config
    enrollmentStream.write(request);

    return enrollmentStream;
  }

  public async streamAuthentication(enrollmentId: string, isLivenessEnabled: boolean, threshold: LivenessThreshold): Promise<BidirectionalStream<AuthenticateRequest, AuthenticateResponse>> {
    const meta = await this.tokenManager.getAuthorizationMetadata();
    const authenticateStream = this.biometricStreamingClient.authenticate(meta);

    const request = new AuthenticateRequest();
    const config = new AuthenticateConfig();
    const compressionConfig = new CompressionConfiguration();

    compressionConfig.setCompressionsList(this.videoStreamInteractor.getVideoConfig().compressions);

    config.setEnrollmentid(enrollmentId);
    config.setIslivenessenabled(isLivenessEnabled);
    config.setLivenessthreshold(threshold);
    config.setCompression(compressionConfig);
    request.setConfig(config);

    authenticateStream.write(request);

    return authenticateStream;
  }

  public async streamRecognition(userId: string, modelName: string, threshold: LivenessThreshold): Promise<BidirectionalStream<ValidateRecognitionRequest, LivenessRecognitionResponse>> {
    const meta = await this.tokenManager.getAuthorizationMetadata();
    const recognitionStream = this.recognitionStreamingClient.validateLiveness(meta);

    const request = new ValidateRecognitionRequest();
    const config = new ValidateRecognitionConfig();

    config.setUserid(userId)
    config.setModelname(modelName)
    config.setThreshold(threshold)
    request.setConfig(config);

    recognitionStream.write(request);

    return recognitionStream;
  }
}
