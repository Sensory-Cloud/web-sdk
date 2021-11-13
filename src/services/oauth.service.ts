import { Config } from "../config";
import { TokenRequest } from "../generated/oauth/oauth_pb";
import { OauthServiceClient } from "../generated/oauth/oauth_pb_service";
import { CryptoService } from "./crypto.service";
import { DeviceResponse, EnrollDeviceRequest } from "../generated/v1/management/device_pb";
import { CreateGenericClientRequest } from "../generated/v1/management/client_pb";

import { v4 } from 'uuid';
import { DeviceServiceClient } from "../generated/v1/management/device_pb_service";

export interface IOauthService {
  getToken(clientId: string, secret: string): Promise<IOauthToken>;
}

export type IOauthToken = {
  token: string
  expires: Date
}

export class OauthService implements IOauthService {
  private client: OauthServiceClient;
  private deviceClient: DeviceServiceClient;

  constructor(private readonly config: Config) {
    this.client = new OauthServiceClient(config.cloud.host);
    this.deviceClient = new DeviceServiceClient(config.cloud.host);
  }

  public async getToken(clientId: string, secret: string): Promise<IOauthToken> {
    const now = new Date();

    return new Promise<IOauthToken>((resolve, reject) => {
      const body = new TokenRequest();
      body.setClientid(clientId.trim());
      body.setSecret(secret);

      this.client.getToken(body, (err, res) => {
        if (err) {
          return reject(err);
        }
        const token = res.getAccesstoken();
        const expires = new Date(now.getTime() + res.getExpiresin() * 1000)
        return resolve({token, expires})
      });
    });
  }

  public async register(name: string, credential: string, clientId?: string, clientSecret?: string): Promise<DeviceResponse> {
    if (!clientId) {
      clientId = v4();
    }

    if (!clientSecret) {
      clientSecret = CryptoService.getSecureRandomString(16);
    }

    const deviceId = this.config.device.deviceId;

    const request = new EnrollDeviceRequest()
    request.setDeviceid(deviceId);
    request.setName(name);

    request.setCredential(credential);
    request.setTenantid(this.config.tenant.tenantId);

    const client = new CreateGenericClientRequest()
    client.setClientid(clientId);
    client.setSecret(clientSecret);

    request.setClient(client);

    return new Promise((resolve, reject) => {
      this.deviceClient.enrollDevice(request, (err, res) => {
        if (err || !res) {
          return reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

}
