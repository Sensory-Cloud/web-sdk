// package: sensory.api.v1.management
// file: v1/management/configuration.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../validate/validate_pb";

export class FileConfigurationRequest extends jspb.Message {
  getTenantid(): string;
  setTenantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FileConfigurationRequest): FileConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileConfigurationRequest;
  static deserializeBinaryFromReader(message: FileConfigurationRequest, reader: jspb.BinaryReader): FileConfigurationRequest;
}

export namespace FileConfigurationRequest {
  export type AsObject = {
    tenantid: string,
  }
}

export class UpsertFileConfigurationRequest extends jspb.Message {
  getTenantid(): string;
  setTenantid(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): FileConfig | undefined;
  setConfig(value?: FileConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertFileConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertFileConfigurationRequest): UpsertFileConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertFileConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertFileConfigurationRequest;
  static deserializeBinaryFromReader(message: UpsertFileConfigurationRequest, reader: jspb.BinaryReader): UpsertFileConfigurationRequest;
}

export namespace UpsertFileConfigurationRequest {
  export type AsObject = {
    tenantid: string,
    config?: FileConfig.AsObject,
  }
}

export class FileConfigurationResponse extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): FileConfig | undefined;
  setConfig(value?: FileConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FileConfigurationResponse): FileConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileConfigurationResponse;
  static deserializeBinaryFromReader(message: FileConfigurationResponse, reader: jspb.BinaryReader): FileConfigurationResponse;
}

export namespace FileConfigurationResponse {
  export type AsObject = {
    config?: FileConfig.AsObject,
  }
}

export class FileConfig extends jspb.Message {
  clearFilesList(): void;
  getFilesList(): Array<FileConfig.File>;
  setFilesList(value: Array<FileConfig.File>): void;
  addFiles(value?: FileConfig.File, index?: number): FileConfig.File;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileConfig.AsObject;
  static toObject(includeInstance: boolean, msg: FileConfig): FileConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileConfig;
  static deserializeBinaryFromReader(message: FileConfig, reader: jspb.BinaryReader): FileConfig;
}

export namespace FileConfig {
  export type AsObject = {
    filesList: Array<FileConfig.File.AsObject>,
  }

  export class File extends jspb.Message {
    getAbsolutepath(): string;
    setAbsolutepath(value: string): void;

    getPattern(): string;
    setPattern(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): File.AsObject;
    static toObject(includeInstance: boolean, msg: File): File.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): File;
    static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
  }

  export namespace File {
    export type AsObject = {
      absolutepath: string,
      pattern: string,
    }
  }
}

