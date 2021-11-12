// package: sensory.api.v1.management
// file: v1/management/key.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../validate/validate_pb";
import * as common_common_pb from "../../common/common_pb";

export class CreateKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getKeytype(): common_common_pb.KeyTypeMap[keyof common_common_pb.KeyTypeMap];
  setKeytype(value: common_common_pb.KeyTypeMap[keyof common_common_pb.KeyTypeMap]): void;

  getValue(): string;
  setValue(value: string): void;

  getExpiration(): number;
  setExpiration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKeyRequest): CreateKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKeyRequest;
  static deserializeBinaryFromReader(message: CreateKeyRequest, reader: jspb.BinaryReader): CreateKeyRequest;
}

export namespace CreateKeyRequest {
  export type AsObject = {
    name: string,
    keytype: common_common_pb.KeyTypeMap[keyof common_common_pb.KeyTypeMap],
    value: string,
    expiration: number,
  }
}

export class KeyResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getKeytype(): common_common_pb.KeyTypeMap[keyof common_common_pb.KeyTypeMap];
  setKeytype(value: common_common_pb.KeyTypeMap[keyof common_common_pb.KeyTypeMap]): void;

  getExpiration(): number;
  setExpiration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: KeyResponse): KeyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyResponse;
  static deserializeBinaryFromReader(message: KeyResponse, reader: jspb.BinaryReader): KeyResponse;
}

export namespace KeyResponse {
  export type AsObject = {
    id: string,
    name: string,
    keytype: common_common_pb.KeyTypeMap[keyof common_common_pb.KeyTypeMap],
    expiration: number,
  }
}

export class GetKeysRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKeysRequest): GetKeysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKeysRequest;
  static deserializeBinaryFromReader(message: GetKeysRequest, reader: jspb.BinaryReader): GetKeysRequest;
}

export namespace GetKeysRequest {
  export type AsObject = {
  }
}

export class GetKeysResponse extends jspb.Message {
  clearKeysList(): void;
  getKeysList(): Array<KeyResponse>;
  setKeysList(value: Array<KeyResponse>): void;
  addKeys(value?: KeyResponse, index?: number): KeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetKeysResponse): GetKeysResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKeysResponse;
  static deserializeBinaryFromReader(message: GetKeysResponse, reader: jspb.BinaryReader): GetKeysResponse;
}

export namespace GetKeysResponse {
  export type AsObject = {
    keysList: Array<KeyResponse.AsObject>,
  }
}

