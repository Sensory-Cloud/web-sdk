import { Config, EnrollmentType, SDKInitConfig } from "./config";
import { DeviceResponse } from "./generated/v1/management";
import { IOauthService } from "./services/oauth.service";


/** Creates a signed JWT for device enrollment */
export interface IJWTSigner {
  /**
   * Creates a signed JWT used for device enrollment
   * This is only used if the enrollment type is `jwt`
   * @param enrollmentKey private signing key. This will be a hex string of the raw private key
   * @param deviceName device name to use in JWT
   * @param tenantId tenant ID to use in JWT
   * @param clientId client ID to use in JWT
   */
  genJWT(enrollmentKey: string, deviceName: string, tenantId: string, clientId: string): Promise<string>;
}

/** Static initialization class. The Sensory Cloud SDK must be initialized every time the app is launched */
export class Initializer {

  /**
   * Initializes the Sensory Cloud SDK from a static config
   * This will load the configurations and enroll the device if it has not been already
   * @param config Configuration object to configure the SDK with
   * @param oauthService OAuth service used for device enrollment
   * @param jwtSigner Class to use to create a signed enrollment jwt, not used unless enrollment type is jwt
   * @returns the response from the device enrollment call. If the device has been previously enrolled, the return will be an empty object
   */
  public static async initializeFromConfig(config: SDKInitConfig, oauthService: IOauthService, jwtSigner?: IJWTSigner): Promise<DeviceResponse.AsObject> {
    // Save config in memory
    Config.sharedConfig = config;

    let credentialStore = oauthService.getCredentialStore();

    if (await credentialStore.getClientId() != '' && await credentialStore.getClientSecret() != '') {
      // SDK has been previously enrolled
      return { name: '', deviceid: ''};
    }

    let oauthCredentials = oauthService.generateCredentials();

    // Construct the enrollment credential
    let credential = '';
    switch (config.enrollmentType) {
      case EnrollmentType.none:
        break;
      case EnrollmentType.sharedSecret:
        credential = config.credential;
        break;
      case EnrollmentType.jwt:
        if (jwtSigner == undefined) {
          throw "JWT signer must be provided for JWT enrollment type"
        }
        credential = await jwtSigner.genJWT(config.credential, config.deviceName, config.tenantId, oauthCredentials.clientId);
        break;
    }

    // Enroll device
    credentialStore.saveCredentials(oauthCredentials.clientId, oauthCredentials.clientSecret);
    try {
      let response = await oauthService.register(config.deviceName, credential);
      return response;
    } catch(error) {
      // unset credentials if enrollment fails
      credentialStore.saveCredentials('', '');
      throw error;
    }
  }
}