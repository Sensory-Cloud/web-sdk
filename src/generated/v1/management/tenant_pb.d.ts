// package: sensory.api.v1.management
// file: v1/management/tenant.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as validate_validate_pb from "../../validate/validate_pb";
import * as v1_management_client_pb from "../../v1/management/client_pb";
import * as v1_management_cluster_pb from "../../v1/management/cluster_pb";

export class InitializeTenantRequest extends jspb.Message {
  hasTenant(): boolean;
  clearTenant(): void;
  getTenant(): TenantRequest | undefined;
  setTenant(value?: TenantRequest): void;

  hasClient(): boolean;
  clearClient(): void;
  getClient(): v1_management_client_pb.CreateGenericClientRequest | undefined;
  setClient(value?: v1_management_client_pb.CreateGenericClientRequest): void;

  hasCluster(): boolean;
  clearCluster(): void;
  getCluster(): v1_management_cluster_pb.ClusterRequest | undefined;
  setCluster(value?: v1_management_cluster_pb.ClusterRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitializeTenantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitializeTenantRequest): InitializeTenantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitializeTenantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitializeTenantRequest;
  static deserializeBinaryFromReader(message: InitializeTenantRequest, reader: jspb.BinaryReader): InitializeTenantRequest;
}

export namespace InitializeTenantRequest {
  export type AsObject = {
    tenant?: TenantRequest.AsObject,
    client?: v1_management_client_pb.CreateGenericClientRequest.AsObject,
    cluster?: v1_management_cluster_pb.ClusterRequest.AsObject,
  }
}

export class TenantRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TenantRequest): TenantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TenantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantRequest;
  static deserializeBinaryFromReader(message: TenantRequest, reader: jspb.BinaryReader): TenantRequest;
}

export namespace TenantRequest {
  export type AsObject = {
    name: string,
  }
}

export class TenantListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TenantListRequest): TenantListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TenantListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantListRequest;
  static deserializeBinaryFromReader(message: TenantListRequest, reader: jspb.BinaryReader): TenantListRequest;
}

export namespace TenantListRequest {
  export type AsObject = {
  }
}

export class TenantGetRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TenantGetRequest): TenantGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TenantGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantGetRequest;
  static deserializeBinaryFromReader(message: TenantGetRequest, reader: jspb.BinaryReader): TenantGetRequest;
}

export namespace TenantGetRequest {
  export type AsObject = {
    id: string,
  }
}

export class TenantListResponse extends jspb.Message {
  clearTenantsList(): void;
  getTenantsList(): Array<TenantResponse>;
  setTenantsList(value: Array<TenantResponse>): void;
  addTenants(value?: TenantResponse, index?: number): TenantResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TenantListResponse): TenantListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TenantListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantListResponse;
  static deserializeBinaryFromReader(message: TenantListResponse, reader: jspb.BinaryReader): TenantListResponse;
}

export namespace TenantListResponse {
  export type AsObject = {
    tenantsList: Array<TenantResponse.AsObject>,
  }
}

export class InitializeTenantResponse extends jspb.Message {
  hasTenant(): boolean;
  clearTenant(): void;
  getTenant(): TenantResponse | undefined;
  setTenant(value?: TenantResponse): void;

  hasClient(): boolean;
  clearClient(): void;
  getClient(): v1_management_client_pb.ClientResponse | undefined;
  setClient(value?: v1_management_client_pb.ClientResponse): void;

  hasCluster(): boolean;
  clearCluster(): void;
  getCluster(): v1_management_cluster_pb.ClusterResponse | undefined;
  setCluster(value?: v1_management_cluster_pb.ClusterResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitializeTenantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitializeTenantResponse): InitializeTenantResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitializeTenantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitializeTenantResponse;
  static deserializeBinaryFromReader(message: InitializeTenantResponse, reader: jspb.BinaryReader): InitializeTenantResponse;
}

export namespace InitializeTenantResponse {
  export type AsObject = {
    tenant?: TenantResponse.AsObject,
    client?: v1_management_client_pb.ClientResponse.AsObject,
    cluster?: v1_management_cluster_pb.ClusterResponse.AsObject,
  }
}

export class TenantResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasCreatedat(): boolean;
  clearCreatedat(): void;
  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedat(): boolean;
  clearUpdatedat(): void;
  getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TenantResponse): TenantResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TenantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantResponse;
  static deserializeBinaryFromReader(message: TenantResponse, reader: jspb.BinaryReader): TenantResponse;
}

export namespace TenantResponse {
  export type AsObject = {
    id: string,
    name: string,
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

