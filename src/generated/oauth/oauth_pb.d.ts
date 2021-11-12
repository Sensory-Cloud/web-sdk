// package: sensory.api.oauth
// file: oauth/oauth.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../validate/validate_pb";
import * as common_common_pb from "../common/common_pb";

export class TokenRequest extends jspb.Message {
  getClientid(): string;
  setClientid(value: string): void;

  getSecret(): string;
  setSecret(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokenRequest): TokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenRequest;
  static deserializeBinaryFromReader(message: TokenRequest, reader: jspb.BinaryReader): TokenRequest;
}

export namespace TokenRequest {
  export type AsObject = {
    clientid: string,
    secret: string,
  }
}

export class SignTokenRequest extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): void;

  getScope(): SignTokenRequest.TokenScopeMap[keyof SignTokenRequest.TokenScopeMap];
  setScope(value: SignTokenRequest.TokenScopeMap[keyof SignTokenRequest.TokenScopeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignTokenRequest): SignTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignTokenRequest;
  static deserializeBinaryFromReader(message: SignTokenRequest, reader: jspb.BinaryReader): SignTokenRequest;
}

export namespace SignTokenRequest {
  export type AsObject = {
    subject: string,
    scope: SignTokenRequest.TokenScopeMap[keyof SignTokenRequest.TokenScopeMap],
  }

  export interface TokenScopeMap {
    USER: 0;
    SUPER_ADMIN: 1;
    BILLING_ADMIN: 2;
    READ_ONLY_ADMIN: 3;
  }

  export const TokenScope: TokenScopeMap;
}

export class WhoAmIRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhoAmIRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WhoAmIRequest): WhoAmIRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WhoAmIRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhoAmIRequest;
  static deserializeBinaryFromReader(message: WhoAmIRequest, reader: jspb.BinaryReader): WhoAmIRequest;
}

export namespace WhoAmIRequest {
  export type AsObject = {
  }
}

export class WhoAmIResponse extends jspb.Message {
  getClientid(): string;
  setClientid(value: string): void;

  getTenantid(): string;
  setTenantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhoAmIResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WhoAmIResponse): WhoAmIResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WhoAmIResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhoAmIResponse;
  static deserializeBinaryFromReader(message: WhoAmIResponse, reader: jspb.BinaryReader): WhoAmIResponse;
}

export namespace WhoAmIResponse {
  export type AsObject = {
    clientid: string,
    tenantid: string,
  }
}

export class PublicKeyRequest extends jspb.Message {
  getKeyid(): string;
  setKeyid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublicKeyRequest): PublicKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublicKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicKeyRequest;
  static deserializeBinaryFromReader(message: PublicKeyRequest, reader: jspb.BinaryReader): PublicKeyRequest;
}

export namespace PublicKeyRequest {
  export type AsObject = {
    keyid: string,
  }
}

export class PublicKeyResponse extends jspb.Message {
  getPublickey(): Uint8Array | string;
  getPublickey_asU8(): Uint8Array;
  getPublickey_asB64(): string;
  setPublickey(value: Uint8Array | string): void;

  getKeytype(): common_common_pb.KeyTypeMap[keyof common_common_pb.KeyTypeMap];
  setKeytype(value: common_common_pb.KeyTypeMap[keyof common_common_pb.KeyTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublicKeyResponse): PublicKeyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublicKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicKeyResponse;
  static deserializeBinaryFromReader(message: PublicKeyResponse, reader: jspb.BinaryReader): PublicKeyResponse;
}

export namespace PublicKeyResponse {
  export type AsObject = {
    publickey: Uint8Array | string,
    keytype: common_common_pb.KeyTypeMap[keyof common_common_pb.KeyTypeMap],
  }
}

