// package: sensory.api.v1.file
// file: v1/file/file.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../validate/validate_pb";

export class FileRequest extends jspb.Message {
  getFile(): string;
  setFile(value: string): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): VersionedFileCategory | undefined;
  setCategory(value?: VersionedFileCategory): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FileRequest): FileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileRequest;
  static deserializeBinaryFromReader(message: FileRequest, reader: jspb.BinaryReader): FileRequest;
}

export namespace FileRequest {
  export type AsObject = {
    file: string,
    category?: VersionedFileCategory.AsObject,
    offset: number,
  }
}

export class FileResponse extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): FileInfo | undefined;
  setInfo(value?: FileInfo): void;

  hasChunk(): boolean;
  clearChunk(): void;
  getChunk(): FileChunk | undefined;
  setChunk(value?: FileChunk): void;

  getComplete(): boolean;
  setComplete(value: boolean): void;

  getStreamingresponseCase(): FileResponse.StreamingresponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FileResponse): FileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileResponse;
  static deserializeBinaryFromReader(message: FileResponse, reader: jspb.BinaryReader): FileResponse;
}

export namespace FileResponse {
  export type AsObject = {
    info?: FileInfo.AsObject,
    chunk?: FileChunk.AsObject,
    complete: boolean,
  }

  export enum StreamingresponseCase {
    STREAMINGRESPONSE_NOT_SET = 0,
    INFO = 1,
    CHUNK = 2,
  }
}

export class FileCatalogRequest extends jspb.Message {
  clearCategoriesList(): void;
  getCategoriesList(): Array<VersionedFileCategory>;
  setCategoriesList(value: Array<VersionedFileCategory>): void;
  addCategories(value?: VersionedFileCategory, index?: number): VersionedFileCategory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileCatalogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FileCatalogRequest): FileCatalogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileCatalogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileCatalogRequest;
  static deserializeBinaryFromReader(message: FileCatalogRequest, reader: jspb.BinaryReader): FileCatalogRequest;
}

export namespace FileCatalogRequest {
  export type AsObject = {
    categoriesList: Array<VersionedFileCategory.AsObject>,
  }
}

export class FileCompleteCatalogRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileCompleteCatalogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FileCompleteCatalogRequest): FileCompleteCatalogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileCompleteCatalogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileCompleteCatalogRequest;
  static deserializeBinaryFromReader(message: FileCompleteCatalogRequest, reader: jspb.BinaryReader): FileCompleteCatalogRequest;
}

export namespace FileCompleteCatalogRequest {
  export type AsObject = {
  }
}

export class FileCatalogResponse extends jspb.Message {
  clearCatalogList(): void;
  getCatalogList(): Array<FileCatalog>;
  setCatalogList(value: Array<FileCatalog>): void;
  addCatalog(value?: FileCatalog, index?: number): FileCatalog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileCatalogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FileCatalogResponse): FileCatalogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileCatalogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileCatalogResponse;
  static deserializeBinaryFromReader(message: FileCatalogResponse, reader: jspb.BinaryReader): FileCatalogResponse;
}

export namespace FileCatalogResponse {
  export type AsObject = {
    catalogList: Array<FileCatalog.AsObject>,
  }
}

export class FileChunk extends jspb.Message {
  getBytes(): Uint8Array | string;
  getBytes_asU8(): Uint8Array;
  getBytes_asB64(): string;
  setBytes(value: Uint8Array | string): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileChunk.AsObject;
  static toObject(includeInstance: boolean, msg: FileChunk): FileChunk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileChunk;
  static deserializeBinaryFromReader(message: FileChunk, reader: jspb.BinaryReader): FileChunk;
}

export namespace FileChunk {
  export type AsObject = {
    bytes: Uint8Array | string,
    offset: number,
  }
}

export class FileInfo extends jspb.Message {
  getFile(): string;
  setFile(value: string): void;

  getAbsolutepath(): string;
  setAbsolutepath(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getContenttype(): string;
  setContenttype(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FileInfo): FileInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileInfo;
  static deserializeBinaryFromReader(message: FileInfo, reader: jspb.BinaryReader): FileInfo;
}

export namespace FileInfo {
  export type AsObject = {
    file: string,
    absolutepath: string,
    size: number,
    contenttype: string,
    hash: string,
  }
}

export class FileCatalog extends jspb.Message {
  clearFilesList(): void;
  getFilesList(): Array<FileInfo>;
  setFilesList(value: Array<FileInfo>): void;
  addFiles(value?: FileInfo, index?: number): FileInfo;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): VersionedFileCategory | undefined;
  setCategory(value?: VersionedFileCategory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileCatalog.AsObject;
  static toObject(includeInstance: boolean, msg: FileCatalog): FileCatalog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileCatalog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileCatalog;
  static deserializeBinaryFromReader(message: FileCatalog, reader: jspb.BinaryReader): FileCatalog;
}

export namespace FileCatalog {
  export type AsObject = {
    filesList: Array<FileInfo.AsObject>,
    category?: VersionedFileCategory.AsObject,
  }
}

export class VersionedFileCategory extends jspb.Message {
  getCategory(): FileCategoryMap[keyof FileCategoryMap];
  setCategory(value: FileCategoryMap[keyof FileCategoryMap]): void;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionedFileCategory.AsObject;
  static toObject(includeInstance: boolean, msg: VersionedFileCategory): VersionedFileCategory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VersionedFileCategory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionedFileCategory;
  static deserializeBinaryFromReader(message: VersionedFileCategory, reader: jspb.BinaryReader): VersionedFileCategory;
}

export namespace VersionedFileCategory {
  export type AsObject = {
    category: FileCategoryMap[keyof FileCategoryMap],
    version: string,
  }
}

export interface FileCategoryMap {
  TSSV_MODEL: 0;
  FENRIR_MODEL: 1;
  TNL_MODEL: 2;
  UNKNOWN: 100;
}

export const FileCategory: FileCategoryMap;

