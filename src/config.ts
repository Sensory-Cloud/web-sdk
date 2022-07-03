/** Configuration class to hold SDK configurations */
export class Config {

  /** Shared configuration object. This should not be directly set. Instead `Initializer.initialize` should be called */
  static sharedConfig: SDKInitConfig;

  /** Default language code used for audio calls */
  public static defaultLanguageCode: string = "en_US";

  /**
   * @returns the shared configuration object
   */
  public static getSharedConfig(): SDKInitConfig {
    return this.sharedConfig;
  }

  /**
   * @returns The host for the configured Sensory Cloud server in the form "https://sensorycloud.ai"
   */
  public static getHost(): string {
    let protocol = "https://"
    if (!this.sharedConfig.isSecure) {
      protocol = "http://"
    }
    return protocol + this.sharedConfig.fullyQualifiedDomainName;
  }
}

/** The authentication required for device enrollment */
export enum EnrollmentType {
  /** No authentication required to enroll new devices */
  none = "none",
  /** Devices are enrolled via a shared secret (i.e. passwords) */
  sharedSecret = "sharedSecret",
  /** Devices are enrolled via signed JWTs */
  jwt = "jwt",
}

/** All configurations that are required to initialize the Sensory Cloud SDK */
export type SDKInitConfig = {
  /** The fully qualified domain name of the Sensory Cloud Server to communicate with in the form "sensorycloud.ai" */
  fullyQualifiedDomainName: string
  /** Tells if the SDK should use a secure connection to the Sensory Cloud server or not */
  isSecure: boolean
  /** The tenant ID to use during device enrollment */
  tenantId: string
  /**
   * The level of authentication required to enroll new devices into the Sensory Cloud Server
   * If the device has already been enrolled during a previous session, this field is ignored
   */
  enrollmentType: EnrollmentType
  /**
   * Credential for device enrollment
   * Depending on the `enrollmentType` this may be blank, the shared secret, or the private key to create a JWT with
   * If the device has already been enrolled during a previous session, this field is ignored
   */
  credential: string
  /** Unique identifier for the current device */
  deviceId: string
  /** Name of the enrolling device */
  deviceName: string
}

/** key values that the init file should have values for */
export enum SDKConfigKeys {
  fqdn = "fullyQualifiedDomainName",
  isSecure = "isSecure",
  tenantId = "tenantID",
  enrollmentType = "enrollmentType",
  credential = "credential",
  deviceId = "deviceID",
  deviceName = "deviceName"
}