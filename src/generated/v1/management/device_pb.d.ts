// package: sensory.api.v1.management
// file: v1/management/device.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../validate/validate_pb";
import * as v1_management_client_pb from "../../v1/management/client_pb";

export class EnrollDeviceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDeviceid(): string;
  setDeviceid(value: string): void;

  getTenantid(): string;
  setTenantid(value: string): void;

  hasClient(): boolean;
  clearClient(): void;
  getClient(): v1_management_client_pb.CreateGenericClientRequest | undefined;
  setClient(value?: v1_management_client_pb.CreateGenericClientRequest): void;

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
    client?: v1_management_client_pb.CreateGenericClientRequest.AsObject,
    credential: string,
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

