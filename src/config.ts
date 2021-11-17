export type CloudConfig = {
  host: string
  port: number
}

export type TenantConfig = {
  tenantId: string;
}

export type DeviceConfig = {
  deviceId: string;
  defaultLanguageCode: string;
}

export type Config = {
  cloud: CloudConfig;
  device: DeviceConfig;
  tenant: TenantConfig;
}
