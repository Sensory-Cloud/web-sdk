/** Configuration to support Sensory Cloud connection */
export type CloudConfig = {
  /** Fully qualified domain name (E.G. https://your.domain.com) */
  host: string
}

/** Configuration for tenant-specific keys granted by Sensory */
export type TenantConfig = {
  /** Tenant ID given to you by Sensory */
  tenantId: string;
}

/** Device-specific information */
export type DeviceConfig = {
  /** Hardware identifier of the associated device */
  deviceId: string;
  /** Preferred language code (E.G. "en_US") */
  defaultLanguageCode: string;
}

/** Configuration */
export type Config = {
  cloud: CloudConfig;
  device: DeviceConfig;
  tenant: TenantConfig;
}
