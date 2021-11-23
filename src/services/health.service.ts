import { Config } from "..";
import { ServerHealthResponse } from "../generated/common";
import { HealthRequest } from "../generated/health";
import { HealthServiceClient } from "../generated/health/health_pb_service";

/** Service to handle all typical CRUD functions */
export class HealthService {
  constructor(
    private readonly config: Config,
    private readonly healthClient = new HealthServiceClient(config.cloud.host)) {
  }
  /**
   * Get the health status of the cloud endpoint defined in Config
   * @returns Promise - including the health status
   */
  public async getHealth(): Promise<ServerHealthResponse.AsObject> {
    return new Promise<ServerHealthResponse.AsObject>((resolve, reject) => {
      this.healthClient.getHealth(new HealthRequest(), (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res.toObject());
      });
    });
  }
}