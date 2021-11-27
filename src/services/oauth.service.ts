import { Config } from "../config";
import { TokenRequest } from "../generated/oauth/oauth_pb";
import { OauthServiceClient } from "../generated/oauth/oauth_pb_service";
import { CryptoService } from "./crypto.service";
import { DeviceResponse, EnrollDeviceRequest } from "../generated/v1/management/device_pb";

import { v4 } from 'uuid';
import { DeviceServiceClient } from "../generated/v1/management/device_pb_service";
import { GenericClient } from "../generated/common/common_pb";

/** Manages OAuth interactions with Sensory Cloud */
export interface IOauthService {
  /**
   * Creates a new cryptographically random OAuth client
   * @returns OauthClient
   */
  generateCredentials(): OauthClient;

  /**
   * Obtains an OAuth token used for API authentication
   * @returns Promise
   */
  getToken(): Promise<OauthToken>;

  /**
   * Register credentials provided by the attached SecureCredentialStore to Sensory Cloud. This function should only be called
   * once per unique credential pair. An error will be thrown if registration fails.
   *
   * @param  {string} deviceName - The friendly name of the registering device
   * @param  {string} credential - The credential configured on the Sensory Cloud server
   * @returns Promise
   */
  register(deviceName: string, credential: string): Promise<DeviceResponse.AsObject>;
}

/** Holds OAuth token and expiration */
export type OauthToken = {
  token: string
  expires: Date
}

/** Holds OAuth clientId and secret */
export type OauthClient = {
  clientId: string;
  clientSecret: string;
}

/** Securely serves credentials */
export interface ISecureCredentialStore {
  getClientId(): Promise<string>
  getClientSecret(): Promise<string>
}

/** Service to manage all OAuth-related functions */
export class OauthService implements IOauthService {
  constructor(
    private readonly config: Config,
    private readonly credentialStore: ISecureCredentialStore,
    private readonly oauthClient = new OauthServiceClient(config.cloud.host),
    private readonly deviceClient = new DeviceServiceClient(config.cloud.host)) {

    if (!config.device.deviceId) {
      throw Error('DeviceID missing in configuration');
    }

    if (!config.tenant.tenantId) {
      throw Error('TenantID missing in configuration');
    }
  }

  /**
   * Can be called to generate secure and guaranteed unique credentials.
   * Should be used the first time the SDK registers and OAuth token with the cloud.
   *
   * @returns OauthClient
   */
     public generateCredentials(): OauthClient {
      return {
        clientId: v4(),
        clientSecret: CryptoService.getSecureRandomString(16)
      }
    }

  /**
   * Obtains an Oauth JWT from Sensory Cloud.
   * @returns Promise - OAuth JWT and expiration
   */
  public async getToken(): Promise<OauthToken> {
    const clientId = await this.credentialStore.getClientId();
    if (!clientId) {
      throw Error('clientId not set in credential store');
    }

    const clientSecret = await this.credentialStore.getClientSecret();
    if (!clientSecret) {
      throw Error('client secret not set in credential store');
    }

    const now = new Date();

    return new Promise<OauthToken>((resolve, reject) => {
      const request = new TokenRequest();
      request.setClientid(clientId.trim());
      request.setSecret(clientSecret);

      this.oauthClient.getToken(request, (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        const token = res.getAccesstoken();
        const expires = new Date(now.getTime() + res.getExpiresin() * 1000)
        return resolve({token, expires})
      });
    });
  }

  /**
   * Register credentials provided by the attached SecureCredentialStore to Sensory Cloud. This function should only be called
   * once per unique credential pair. An error will be thrown if registration fails.
   *
   * @param  {string} deviceName - The friendly name of the registering device
   * @param  {string} credential - The credential configured on the Sensory Cloud server
   * @returns Promise
   */
  public async register(deviceName: string, credential: string): Promise<DeviceResponse.AsObject> {
    const clientId = await this.credentialStore.getClientId();
    if (!clientId) {
      throw Error('clientId not set in credential store');
    }

    const clientSecret = await this.credentialStore.getClientSecret();
    if (!clientSecret) {
      throw Error('client secret not set in credential store');
    }

    const deviceId = this.config.device.deviceId;

    const request = new EnrollDeviceRequest()
    request.setDeviceid(deviceId);
    request.setName(deviceName);

    request.setCredential(credential);
    request.setTenantid(this.config.tenant.tenantId);

    const client = new GenericClient()
    client.setClientid(clientId);
    client.setSecret(clientSecret);

    request.setClient(client);

    return new Promise<DeviceResponse.AsObject>(async (resolve, reject) => {
      this.deviceClient.enrollDevice(request, (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }

        return resolve(res.toObject());
      });
    });
  }
}
