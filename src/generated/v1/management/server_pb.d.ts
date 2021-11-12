// package: sensory.api.v1.management
// file: v1/management/server.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as validate_validate_pb from "../../validate/validate_pb";
import * as common_common_pb from "../../common/common_pb";
import * as v1_management_cluster_pb from "../../v1/management/cluster_pb";
import * as v1_management_tenant_pb from "../../v1/management/tenant_pb";

export class ServerConfigRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServerConfigRequest): ServerConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerConfigRequest;
  static deserializeBinaryFromReader(message: ServerConfigRequest, reader: jspb.BinaryReader): ServerConfigRequest;
}

export namespace ServerConfigRequest {
  export type AsObject = {
  }
}

export class ServerConfig extends jspb.Message {
  hasTenant(): boolean;
  clearTenant(): void;
  getTenant(): v1_management_tenant_pb.TenantResponse | undefined;
  setTenant(value?: v1_management_tenant_pb.TenantResponse): void;

  hasCluster(): boolean;
  clearCluster(): void;
  getCluster(): v1_management_cluster_pb.ClusterResponse | undefined;
  setCluster(value?: v1_management_cluster_pb.ClusterResponse): void;

  clearFeatureflagsList(): void;
  getFeatureflagsList(): Array<number>;
  setFeatureflagsList(value: Array<number>): void;
  addFeatureflags(value: number, index?: number): number;

  hasDatapersistence(): boolean;
  clearDatapersistence(): void;
  getDatapersistence(): DataPersistenceConfig | undefined;
  setDatapersistence(value?: DataPersistenceConfig): void;

  getOauthtokenissuer(): string;
  setOauthtokenissuer(value: string): void;

  getGrpcport(): string;
  setGrpcport(value: string): void;

  getWebgrpcport(): string;
  setWebgrpcport(value: string): void;

  getTritonhost(): string;
  setTritonhost(value: string): void;

  getDatabaseurl(): string;
  setDatabaseurl(value: string): void;

  hasDeviceenrollmentconfig(): boolean;
  clearDeviceenrollmentconfig(): void;
  getDeviceenrollmentconfig(): DeviceEnrollmentConfig | undefined;
  setDeviceenrollmentconfig(value?: DeviceEnrollmentConfig): void;

  getSentryurl(): string;
  setSentryurl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ServerConfig): ServerConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerConfig;
  static deserializeBinaryFromReader(message: ServerConfig, reader: jspb.BinaryReader): ServerConfig;
}

export namespace ServerConfig {
  export type AsObject = {
    tenant?: v1_management_tenant_pb.TenantResponse.AsObject,
    cluster?: v1_management_cluster_pb.ClusterResponse.AsObject,
    featureflagsList: Array<number>,
    datapersistence?: DataPersistenceConfig.AsObject,
    oauthtokenissuer: string,
    grpcport: string,
    webgrpcport: string,
    tritonhost: string,
    databaseurl: string,
    deviceenrollmentconfig?: DeviceEnrollmentConfig.AsObject,
    sentryurl: string,
  }
}

export class DataPersistenceConfig extends jspb.Message {
  hasNone(): boolean;
  clearNone(): void;
  getNone(): VoidMap[keyof VoidMap];
  setNone(value: VoidMap[keyof VoidMap]): void;

  hasLocalconfig(): boolean;
  clearLocalconfig(): void;
  getLocalconfig(): DataPersistenceLocalConfig | undefined;
  setLocalconfig(value?: DataPersistenceLocalConfig): void;

  hasS3config(): boolean;
  clearS3config(): void;
  getS3config(): DataPersistenceS3Config | undefined;
  setS3config(value?: DataPersistenceS3Config): void;

  getPersistencetypeCase(): DataPersistenceConfig.PersistencetypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPersistenceConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DataPersistenceConfig): DataPersistenceConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataPersistenceConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPersistenceConfig;
  static deserializeBinaryFromReader(message: DataPersistenceConfig, reader: jspb.BinaryReader): DataPersistenceConfig;
}

export namespace DataPersistenceConfig {
  export type AsObject = {
    none: VoidMap[keyof VoidMap],
    localconfig?: DataPersistenceLocalConfig.AsObject,
    s3config?: DataPersistenceS3Config.AsObject,
  }

  export enum PersistencetypeCase {
    PERSISTENCETYPE_NOT_SET = 0,
    NONE = 1,
    LOCALCONFIG = 2,
    S3CONFIG = 3,
  }
}

export class ServerHeartbeatRequest extends jspb.Message {
  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasHealth(): boolean;
  clearHealth(): void;
  getHealth(): common_common_pb.ServerHealthResponse | undefined;
  setHealth(value?: common_common_pb.ServerHealthResponse): void;

  hasSystem(): boolean;
  clearSystem(): void;
  getSystem(): common_common_pb.SystemSummary | undefined;
  setSystem(value?: common_common_pb.SystemSummary): void;

  hasUsers(): boolean;
  clearUsers(): void;
  getUsers(): UserSummary | undefined;
  setUsers(value?: UserSummary): void;

  hasDevices(): boolean;
  clearDevices(): void;
  getDevices(): DeviceSummary | undefined;
  setDevices(value?: DeviceSummary): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerHeartbeatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServerHeartbeatRequest): ServerHeartbeatRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerHeartbeatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerHeartbeatRequest;
  static deserializeBinaryFromReader(message: ServerHeartbeatRequest, reader: jspb.BinaryReader): ServerHeartbeatRequest;
}

export namespace ServerHeartbeatRequest {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    health?: common_common_pb.ServerHealthResponse.AsObject,
    system?: common_common_pb.SystemSummary.AsObject,
    users?: UserSummary.AsObject,
    devices?: DeviceSummary.AsObject,
  }
}

export class HeartbeatResponse extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): ServerConfig | undefined;
  setConfig(value?: ServerConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeartbeatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HeartbeatResponse): HeartbeatResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeartbeatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeartbeatResponse;
  static deserializeBinaryFromReader(message: HeartbeatResponse, reader: jspb.BinaryReader): HeartbeatResponse;
}

export namespace HeartbeatResponse {
  export type AsObject = {
    config?: ServerConfig.AsObject,
  }
}

export class UserSummary extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSummary.AsObject;
  static toObject(includeInstance: boolean, msg: UserSummary): UserSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSummary;
  static deserializeBinaryFromReader(message: UserSummary, reader: jspb.BinaryReader): UserSummary;
}

export namespace UserSummary {
  export type AsObject = {
    count: number,
  }
}

export class DeviceSummary extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceSummary.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceSummary): DeviceSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceSummary;
  static deserializeBinaryFromReader(message: DeviceSummary, reader: jspb.BinaryReader): DeviceSummary;
}

export namespace DeviceSummary {
  export type AsObject = {
    count: number,
  }
}

export class DeviceEnrollmentConfig extends jspb.Message {
  getSecuritylevel(): DeviceEnrollmentSecurityLevelsMap[keyof DeviceEnrollmentSecurityLevelsMap];
  setSecuritylevel(value: DeviceEnrollmentSecurityLevelsMap[keyof DeviceEnrollmentSecurityLevelsMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceEnrollmentConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceEnrollmentConfig): DeviceEnrollmentConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceEnrollmentConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceEnrollmentConfig;
  static deserializeBinaryFromReader(message: DeviceEnrollmentConfig, reader: jspb.BinaryReader): DeviceEnrollmentConfig;
}

export namespace DeviceEnrollmentConfig {
  export type AsObject = {
    securitylevel: DeviceEnrollmentSecurityLevelsMap[keyof DeviceEnrollmentSecurityLevelsMap],
  }
}

export class DataPersistenceLocalConfig extends jspb.Message {
  getLocalpath(): string;
  setLocalpath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPersistenceLocalConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DataPersistenceLocalConfig): DataPersistenceLocalConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataPersistenceLocalConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPersistenceLocalConfig;
  static deserializeBinaryFromReader(message: DataPersistenceLocalConfig, reader: jspb.BinaryReader): DataPersistenceLocalConfig;
}

export namespace DataPersistenceLocalConfig {
  export type AsObject = {
    localpath: string,
  }
}

export class DataPersistenceS3Config extends jspb.Message {
  getS3accesskey(): string;
  setS3accesskey(value: string): void;

  getS3secretkey(): string;
  setS3secretkey(value: string): void;

  getS3region(): string;
  setS3region(value: string): void;

  getS3bucket(): string;
  setS3bucket(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPersistenceS3Config.AsObject;
  static toObject(includeInstance: boolean, msg: DataPersistenceS3Config): DataPersistenceS3Config.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataPersistenceS3Config, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPersistenceS3Config;
  static deserializeBinaryFromReader(message: DataPersistenceS3Config, reader: jspb.BinaryReader): DataPersistenceS3Config;
}

export namespace DataPersistenceS3Config {
  export type AsObject = {
    s3accesskey: string,
    s3secretkey: string,
    s3region: string,
    s3bucket: string,
  }
}

export class ServerListRequest extends jspb.Message {
  getTenantid(): string;
  setTenantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServerListRequest): ServerListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerListRequest;
  static deserializeBinaryFromReader(message: ServerListRequest, reader: jspb.BinaryReader): ServerListRequest;
}

export namespace ServerListRequest {
  export type AsObject = {
    tenantid: string,
  }
}

export class ServerListResponse extends jspb.Message {
  clearServersList(): void;
  getServersList(): Array<ServerResponse>;
  setServersList(value: Array<ServerResponse>): void;
  addServers(value?: ServerResponse, index?: number): ServerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServerListResponse): ServerListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerListResponse;
  static deserializeBinaryFromReader(message: ServerListResponse, reader: jspb.BinaryReader): ServerListResponse;
}

export namespace ServerListResponse {
  export type AsObject = {
    serversList: Array<ServerResponse.AsObject>,
  }
}

export class ServerResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getIsremote(): boolean;
  setIsremote(value: boolean): void;

  getClusterid(): string;
  setClusterid(value: string): void;

  getClustername(): string;
  setClustername(value: string): void;

  getTenantid(): string;
  setTenantid(value: string): void;

  getTenantname(): string;
  setTenantname(value: string): void;

  hasHealth(): boolean;
  clearHealth(): void;
  getHealth(): common_common_pb.ServerHealthResponse | undefined;
  setHealth(value?: common_common_pb.ServerHealthResponse): void;

  hasSystem(): boolean;
  clearSystem(): void;
  getSystem(): common_common_pb.SystemSummary | undefined;
  setSystem(value?: common_common_pb.SystemSummary): void;

  hasCreatedat(): boolean;
  clearCreatedat(): void;
  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedat(): boolean;
  clearUpdatedat(): void;
  getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastheardfrom(): boolean;
  clearLastheardfrom(): void;
  getLastheardfrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastheardfrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServerResponse): ServerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerResponse;
  static deserializeBinaryFromReader(message: ServerResponse, reader: jspb.BinaryReader): ServerResponse;
}

export namespace ServerResponse {
  export type AsObject = {
    id: string,
    name: string,
    isremote: boolean,
    clusterid: string,
    clustername: string,
    tenantid: string,
    tenantname: string,
    health?: common_common_pb.ServerHealthResponse.AsObject,
    system?: common_common_pb.SystemSummary.AsObject,
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastheardfrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export interface VoidMap {
  VOID_VALUE: 0;
}

export const Void: VoidMap;

export interface DeviceEnrollmentSecurityLevelsMap {
  NONE: 0;
  SECRET_KEY: 1;
  SIGNED_TOKEN: 2;
}

export const DeviceEnrollmentSecurityLevels: DeviceEnrollmentSecurityLevelsMap;

