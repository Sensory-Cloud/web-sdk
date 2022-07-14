import { Config } from "../config";
import { ServerHealthResponse } from "../generated/common";
import { HealthRequest } from "../generated/health/health_pb";
import { HealthServiceClient } from "../generated/health/health_pb_service";

/** Service to handle all server health functions */
export class HealthService {
  constructor(
    private healthClient: HealthServiceClient | undefined = undefined) {
  }

  /**
   * Get the health status of the cloud endpoint defined in Config
   * @returns Promise - including the health status
   */
  public async getHealth(): Promise<ServerHealthResponse.AsObject> {
    return new Promise<ServerHealthResponse.AsObject>((resolve, reject) => {
      this.getHealthClient().getHealth(new HealthRequest(), (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res.toObject());
      });
    });
  }

  private getHealthClient(): HealthServiceClient {
    if (this.healthClient == undefined) {
      this.healthClient = new HealthServiceClient(Config.getHost());
    }
    return this.healthClient;
  }
}