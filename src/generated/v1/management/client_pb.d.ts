// package: sensory.api.v1.management
// file: v1/management/client.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as validate_validate_pb from "../../validate/validate_pb";
import * as common_common_pb from "../../common/common_pb";

export class CreateClientRequest extends jspb.Message {
  getClientid(): string;
  setClientid(value: string): void;

  getSecret(): string;
  setSecret(value: string): void;

  getType(): common_common_pb.ClientTypeMap[keyof common_common_pb.ClientTypeMap];
  setType(value: common_common_pb.ClientTypeMap[keyof common_common_pb.ClientTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateClientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateClientRequest): CreateClientRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateClientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateClientRequest;
  static deserializeBinaryFromReader(message: CreateClientRequest, reader: jspb.BinaryReader): CreateClientRequest;
}

export namespace CreateClientRequest {
  export type AsObject = {
    clientid: string,
    secret: string,
    type: common_common_pb.ClientTypeMap[keyof common_common_pb.ClientTypeMap],
  }
}

export class CreateGenericClientRequest extends jspb.Message {
  getClientid(): string;
  setClientid(value: string): void;

  getSecret(): string;
  setSecret(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGenericClientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGenericClientRequest): CreateGenericClientRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGenericClientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGenericClientRequest;
  static deserializeBinaryFromReader(message: CreateGenericClientRequest, reader: jspb.BinaryReader): CreateGenericClientRequest;
}

export namespace CreateGenericClientRequest {
  export type AsObject = {
    clientid: string,
    secret: string,
  }
}

export class ClientResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): common_common_pb.ClientTypeMap[keyof common_common_pb.ClientTypeMap];
  setType(value: common_common_pb.ClientTypeMap[keyof common_common_pb.ClientTypeMap]): void;

  hasCreatedat(): boolean;
  clearCreatedat(): void;
  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedat(): boolean;
  clearUpdatedat(): void;
  getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClientResponse): ClientResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientResponse;
  static deserializeBinaryFromReader(message: ClientResponse, reader: jspb.BinaryReader): ClientResponse;
}

export namespace ClientResponse {
  export type AsObject = {
    id: string,
    type: common_common_pb.ClientTypeMap[keyof common_common_pb.ClientTypeMap],
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateClientRequest extends jspb.Message {
  getClientid(): string;
  setClientid(value: string): void;

  getSecret(): string;
  setSecret(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateClientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateClientRequest): UpdateClientRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateClientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateClientRequest;
  static deserializeBinaryFromReader(message: UpdateClientRequest, reader: jspb.BinaryReader): UpdateClientRequest;
}

export namespace UpdateClientRequest {
  export type AsObject = {
    clientid: string,
    secret: string,
  }
}

export class DeleteClientRequest extends jspb.Message {
  getClientid(): string;
  setClientid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteClientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteClientRequest): DeleteClientRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteClientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteClientRequest;
  static deserializeBinaryFromReader(message: DeleteClientRequest, reader: jspb.BinaryReader): DeleteClientRequest;
}

export namespace DeleteClientRequest {
  export type AsObject = {
    clientid: string,
  }
}

