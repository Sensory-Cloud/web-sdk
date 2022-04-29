// package: sensory.api.v1.management
// file: v1/management/device.proto

import * as jspb from "google-protobuf";
import * as common_common_pb from "../../common/common_pb";
import * as validate_validate_pb from "../../validate/validate_pb";

export class EnrollDeviceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDeviceid(): string;
  setDeviceid(value: string): void;

  getTenantid(): string;
  setTenantid(value: string): void;

  hasClient(): boolean;
  clearClient(): void;
  getClient(): common_common_pb.GenericClient | undefined;
  setClient(value?: common_common_pb.GenericClient): void;

  getCredential(): string;
  setCredential(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnrollDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnrollDeviceRequest): EnrollDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnrollDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnrollDeviceRequest;
  static deserializeBinaryFromReader(message: EnrollDeviceRequest, reader: jspb.BinaryReader): EnrollDeviceRequest;
}

export namespace EnrollDeviceRequest {
  export type AsObject = {
    name: string,
    deviceid: string,
    tenantid: string,
    client?: common_common_pb.GenericClient.AsObject,
    credential: string,
  }
}

export class RenewDeviceCredentialRequest extends jspb.Message {
  getDeviceid(): string;
  setDeviceid(value: string): void;

  getClientid(): string;
  setClientid(value: string): void;

  getTenantid(): string;
  setTenantid(value: string): void;

  getCredential(): string;
  setCredential(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenewDeviceCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RenewDeviceCredentialRequest): RenewDeviceCredentialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenewDeviceCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenewDeviceCredentialRequest;
  static deserializeBinaryFromReader(message: RenewDeviceCredentialRequest, reader: jspb.BinaryReader): RenewDeviceCredentialRequest;
}

export namespace RenewDeviceCredentialRequest {
  export type AsObject = {
    deviceid: string,
    clientid: string,
    tenantid: string,
    credential: string,
  }
}

export class DeviceGetWhoAmIRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceGetWhoAmIRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceGetWhoAmIRequest): DeviceGetWhoAmIRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceGetWhoAmIRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceGetWhoAmIRequest;
  static deserializeBinaryFromReader(message: DeviceGetWhoAmIRequest, reader: jspb.BinaryReader): DeviceGetWhoAmIRequest;
}

export namespace DeviceGetWhoAmIRequest {
  export type AsObject = {
  }
}

export class DeviceRequest extends jspb.Message {
  getDeviceid(): string;
  setDeviceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceRequest): DeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceRequest;
  static deserializeBinaryFromReader(message: DeviceRequest, reader: jspb.BinaryReader): DeviceRequest;
}

export namespace DeviceRequest {
  export type AsObject = {
    deviceid: string,
  }
}

export class GetDevicesRequest extends jspb.Message {
  getTenantid(): string;
  setTenantid(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): common_common_pb.PaginationOptions | undefined;
  setPagination(value?: common_common_pb.PaginationOptions): void;

  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDevicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDevicesRequest): GetDevicesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDevicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDevicesRequest;
  static deserializeBinaryFromReader(message: GetDevicesRequest, reader: jspb.BinaryReader): GetDevicesRequest;
}

export namespace GetDevicesRequest {
  export type AsObject = {
    tenantid: string,
    pagination?: common_common_pb.PaginationOptions.AsObject,
    userid: string,
  }
}

export class UpdateDeviceRequest extends jspb.Message {
  getDeviceid(): string;
  setDeviceid(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDeviceRequest): UpdateDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDeviceRequest;
  static deserializeBinaryFromReader(message: UpdateDeviceRequest, reader: jspb.BinaryReader): UpdateDeviceRequest;
}

export namespace UpdateDeviceRequest {
  export type AsObject = {
    deviceid: string,
    name: string,
  }
}

export class DeviceResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDeviceid(): string;
  setDeviceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceResponse): DeviceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceResponse;
  static deserializeBinaryFromReader(message: DeviceResponse, reader: jspb.BinaryReader): DeviceResponse;
}

export namespace DeviceResponse {
  export type AsObject = {
    name: string,
    deviceid: string,
  }
}

export class GetDeviceResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDeviceid(): string;
  setDeviceid(value: string): void;

  getUsercount(): number;
  setUsercount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceResponse): GetDeviceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceResponse;
  static deserializeBinaryFromReader(message: GetDeviceResponse, reader: jspb.BinaryReader): GetDeviceResponse;
}

export namespace GetDeviceResponse {
  export type AsObject = {
    name: string,
    deviceid: string,
    usercount: number,
  }
}

export class DeviceListResponse extends jspb.Message {
  clearDevicesList(): void;
  getDevicesList(): Array<DeviceResponse>;
  setDevicesList(value: Array<DeviceResponse>): void;
  addDevices(value?: DeviceResponse, index?: number): DeviceResponse;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): common_common_pb.PaginationResponse | undefined;
  setPagination(value?: common_common_pb.PaginationResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceListResponse): DeviceListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceListResponse;
  static deserializeBinaryFromReader(message: DeviceListResponse, reader: jspb.BinaryReader): DeviceListResponse;
}

export namespace DeviceListResponse {
  export type AsObject = {
    devicesList: Array<DeviceResponse.AsObject>,
    pagination?: common_common_pb.PaginationResponse.AsObject,
  }
}

