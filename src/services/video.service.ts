import { grpc } from "@improbable-eng/grpc-web";
import { Config } from "../config";
import { GetModelsRequest } from "../generated/v1/video/video_pb";
import { VideoBiometricsClient, VideoModelsClient, VideoRecognitionClient } from "../generated/v1/video/video_pb_service";
import { ICameraInteractor } from "../interactors/camera.interactor";
import { ITokenManager } from "../managers/token.manager";

export interface IVideoService {

}

export class VideoService implements IVideoService {

  constructor(
    private readonly config: Config,
    private readonly tokenManager: ITokenManager,
    private readonly cameraInteractor :ICameraInteractor,
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
}