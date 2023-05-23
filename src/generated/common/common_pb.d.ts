// package: sensory.api.common
// file: common/common.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../validate/validate_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CompressionConfiguration extends jspb.Message {
  clearCompressionsList(): void;
  getCompressionsList(): Array<CompressionTypeMap[keyof CompressionTypeMap]>;
  setCompressionsList(value: Array<CompressionTypeMap[keyof CompressionTypeMap]>): void;
  addCompressions(value: CompressionTypeMap[keyof CompressionTypeMap], index?: number): CompressionTypeMap[keyof CompressionTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompressionConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: CompressionConfiguration): CompressionConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompressionConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompressionConfiguration;
  static deserializeBinaryFromReader(message: CompressionConfiguration, reader: jspb.BinaryReader): CompressionConfiguration;
}

export namespace CompressionConfiguration {
  export type AsObject = {
    compressionsList: Array<CompressionTypeMap[keyof CompressionTypeMap]>,
  }
}

export class TokenResponse extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  getExpiresin(): number;
  setExpiresin(value: number): void;

  getKeyid(): string;
  setKeyid(value: string): void;

  getTokentype(): string;
  setTokentype(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenResponse): TokenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenResponse;
  static deserializeBinaryFromReader(message: TokenResponse, reader: jspb.BinaryReader): TokenResponse;
}

export namespace TokenResponse {
  export type AsObject = {
    accesstoken: string,
    expiresin: number,
    keyid: string,
    tokentype: string,
  }
}

export class ServiceHealth extends jspb.Message {
  getIshealthy(): boolean;
  setIshealthy(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceHealth.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceHealth): ServiceHealth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceHealth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceHealth;
  static deserializeBinaryFromReader(message: ServiceHealth, reader: jspb.BinaryReader): ServiceHealth;
}

export namespace ServiceHealth {
  export type AsObject = {
    ishealthy: boolean,
    name: string,
    message: string,
  }
}

export class ServerHealthResponse extends jspb.Message {
  getIshealthy(): boolean;
  setIshealthy(value: boolean): void;

  getServerversion(): string;
  setServerversion(value: string): void;

  getId(): string;
  setId(value: string): void;

  clearServicesList(): void;
  getServicesList(): Array<ServiceHealth>;
  setServicesList(value: Array<ServiceHealth>): void;
  addServices(value?: ServiceHealth, index?: number): ServiceHealth;

  getServertype(): ServerTypeMap[keyof ServerTypeMap];
  setServertype(value: ServerTypeMap[keyof ServerTypeMap]): void;

  getIsleader(): boolean;
  setIsleader(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerHealthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServerHealthResponse): ServerHealthResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerHealthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerHealthResponse;
  static deserializeBinaryFromReader(message: ServerHealthResponse, reader: jspb.BinaryReader): ServerHealthResponse;
}

export namespace ServerHealthResponse {
  export type AsObject = {
    ishealthy: boolean,
    serverversion: string,
    id: string,
    servicesList: Array<ServiceHealth.AsObject>,
    servertype: ServerTypeMap[keyof ServerTypeMap],
    isleader: boolean,
  }
}

export class SystemSummary extends jspb.Message {
  hasCpu(): boolean;
  clearCpu(): void;
  getCpu(): CpuSummary | undefined;
  setCpu(value?: CpuSummary): void;

  hasMemory(): boolean;
  clearMemory(): void;
  getMemory(): MemorySummary | undefined;
  setMemory(value?: MemorySummary): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemSummary.AsObject;
  static toObject(includeInstance: boolean, msg: SystemSummary): SystemSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemSummary;
  static deserializeBinaryFromReader(message: SystemSummary, reader: jspb.BinaryReader): SystemSummary;
}

export namespace SystemSummary {
  export type AsObject = {
    cpu?: CpuSummary.AsObject,
    memory?: MemorySummary.AsObject,
  }
}

export class CpuSummary extends jspb.Message {
  getUser(): number;
  setUser(value: number): void;

  getNice(): number;
  setNice(value: number): void;

  getSystem(): number;
  setSystem(value: number): void;

  getIdle(): number;
  setIdle(value: number): void;

  getIowait(): number;
  setIowait(value: number): void;

  getIrq(): number;
  setIrq(value: number): void;

  getSoftirq(): number;
  setSoftirq(value: number): void;

  getSteal(): number;
  setSteal(value: number): void;

  getGuest(): number;
  setGuest(value: number): void;

  getGuestnice(): number;
  setGuestnice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CpuSummary.AsObject;
  static toObject(includeInstance: boolean, msg: CpuSummary): CpuSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CpuSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CpuSummary;
  static deserializeBinaryFromReader(message: CpuSummary, reader: jspb.BinaryReader): CpuSummary;
}

export namespace CpuSummary {
  export type AsObject = {
    user: number,
    nice: number,
    system: number,
    idle: number,
    iowait: number,
    irq: number,
    softirq: number,
    steal: number,
    guest: number,
    guestnice: number,
  }
}

export class MemorySummary extends jspb.Message {
  getMemtotal(): number;
  setMemtotal(value: number): void;

  getMemfree(): number;
  setMemfree(value: number): void;

  getMemavailable(): number;
  setMemavailable(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemorySummary.AsObject;
  static toObject(includeInstance: boolean, msg: MemorySummary): MemorySummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemorySummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemorySummary;
  static deserializeBinaryFromReader(message: MemorySummary, reader: jspb.BinaryReader): MemorySummary;
}

export namespace MemorySummary {
  export type AsObject = {
    memtotal: number,
    memfree: number,
    memavailable: number,
  }
}

export class GenericClient extends jspb.Message {
  getClientid(): string;
  setClientid(value: string): void;

  getSecret(): string;
  setSecret(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenericClient.AsObject;
  static toObject(includeInstance: boolean, msg: GenericClient): GenericClient.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenericClient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenericClient;
  static deserializeBinaryFromReader(message: GenericClient, reader: jspb.BinaryReader): GenericClient;
}

export namespace GenericClient {
  export type AsObject = {
    clientid: string,
    secret: string,
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

export class PaginationOptions extends jspb.Message {
  getOrdering(): string;
  setOrdering(value: string): void;

  getDecending(): boolean;
  setDecending(value: boolean): void;

  getPageindex(): number;
  setPageindex(value: number): void;

  getPagesize(): number;
  setPagesize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginationOptions.AsObject;
  static toObject(includeInstance: boolean, msg: PaginationOptions): PaginationOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaginationOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginationOptions;
  static deserializeBinaryFromReader(message: PaginationOptions, reader: jspb.BinaryReader): PaginationOptions;
}

export namespace PaginationOptions {
  export type AsObject = {
    ordering: string,
    decending: boolean,
    pageindex: number,
    pagesize: number,
  }
}

export class PaginationResponse extends jspb.Message {
  getOrdering(): string;
  setOrdering(value: string): void;

  getDecending(): boolean;
  setDecending(value: boolean): void;

  clearPossibleorderingsList(): void;
  getPossibleorderingsList(): Array<string>;
  setPossibleorderingsList(value: Array<string>): void;
  addPossibleorderings(value: string, index?: number): string;

  getTotalcount(): number;
  setTotalcount(value: number): void;

  getPagesize(): number;
  setPagesize(value: number): void;

  getPrevpageindex(): number;
  setPrevpageindex(value: number): void;

  getCurrentpageindex(): number;
  setCurrentpageindex(value: number): void;

  getNextpageindex(): number;
  setNextpageindex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PaginationResponse): PaginationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaginationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginationResponse;
  static deserializeBinaryFromReader(message: PaginationResponse, reader: jspb.BinaryReader): PaginationResponse;
}

export namespace PaginationResponse {
  export type AsObject = {
    ordering: string,
    decending: boolean,
    possibleorderingsList: Array<string>,
    totalcount: number,
    pagesize: number,
    prevpageindex: number,
    currentpageindex: number,
    nextpageindex: number,
  }
}

export class EnrollmentToken extends jspb.Message {
  getToken(): Uint8Array | string;
  getToken_asU8(): Uint8Array;
  getToken_asB64(): string;
  setToken(value: Uint8Array | string): void;

  getExpiration(): number;
  setExpiration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnrollmentToken.AsObject;
  static toObject(includeInstance: boolean, msg: EnrollmentToken): EnrollmentToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnrollmentToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnrollmentToken;
  static deserializeBinaryFromReader(message: EnrollmentToken, reader: jspb.BinaryReader): EnrollmentToken;
}

export namespace EnrollmentToken {
  export type AsObject = {
    token: Uint8Array | string,
    expiration: number,
  }
}

export class CreateKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getKeytype(): KeyTypeMap[keyof KeyTypeMap];
  setKeytype(value: KeyTypeMap[keyof KeyTypeMap]): void;

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
    keytype: KeyTypeMap[keyof KeyTypeMap],
    value: string,
    expiration: number,
  }
}

export class KeyResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getKeytype(): KeyTypeMap[keyof KeyTypeMap];
  setKeytype(value: KeyTypeMap[keyof KeyTypeMap]): void;

  getExpiration(): number;
  setExpiration(value: number): void;

  getTenantid(): string;
  setTenantid(value: string): void;

  getDisabled(): boolean;
  setDisabled(value: boolean): void;

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
    keytype: KeyTypeMap[keyof KeyTypeMap],
    expiration: number,
    tenantid: string,
    disabled: boolean,
  }
}

export interface VoidMap {
  VOID_VALUE: 0;
}

export const Void: VoidMap;

export interface KeyTypeMap {
  PUBLIC_KEY: 0;
  PUBLIC_KEY_ED25519: 1;
  SHARED_SECRET: 3;
  AES_256: 4;
}

export const KeyType: KeyTypeMap;

export interface FeatureFlagMap {
  TSSV_ALL: 0;
  TS_ALL: 1;
  TNL_ALL: 2;
}

export const FeatureFlag: FeatureFlagMap;

export interface ModelTypeMap {
  UNKNOWN: 0;
  VOICE_BIOMETRIC_TEXT_INDEPENDENT: 1;
  VOICE_BIOMETRIC_WAKEWORD: 2;
  VOICE_EVENT_WAKEWORD: 3;
  VOICE_TRANSCRIBE_GRAMMAR: 4;
  VOICE_TRANSCRIBE_COMMAND_AND_SEARCH: 5;
  VOICE_RECOGNITION_ACTIVITY_DETECTION: 6;
  VOICE_FEATURE_EXTRACTOR: 7;
  VOICE_BIOMETRIC_LIVENESS_DIGIT: 8;
  VOICE_BIOMETRIC_TEXT_DEPENDENT: 9;
  VOICE_SYNTHESIS: 10;
  SOUND_EVENT_ENROLLABLE: 100;
  SOUND_EVENT_REVALIDATION: 101;
  SOUND_EVENT_FIXED: 102;
  SOUND_SCENE_FIXED: 103;
  FACE_BIOMETRIC: 201;
  FACE_RECOGNITION: 202;
  OBJECT_RECOGNITION: 203;
  IMAGE_TRANSFORM: 204;
  FACE_EMBEDDING: 205;
  LLM_GPT_3_5: 301;
}

export const ModelType: ModelTypeMap;

export interface TechnologyTypeMap {
  NOT_SET: 0;
  TSSV: 1;
  TS: 2;
  TNL: 3;
  STT: 4;
  TTS: 5;
  SOUND_ID: 6;
}

export const TechnologyType: TechnologyTypeMap;

export interface CompressionTypeMap {
  IMAGE_GRAYSCALE: 0;
}

export const CompressionType: CompressionTypeMap;

export interface ClientTypeMap {
  INVALID: 0;
  DEVICE: 1;
  CLUSTER: 2;
  USER: 3;
  SUPER_USER: 4;
  BILLING_USER: 5;
  READ_ONLY_USER: 6;
  ROOT: 100;
}

export const ClientType: ClientTypeMap;

export interface UsageEventTypeMap {
  AUTHENTICATION: 0;
  RECOGNITION: 1;
  ENROLLMENT: 2;
  SYNTHESIS: 3;
  TRANSCRIPTION: 4;
  LLM: 5;
}

export const UsageEventType: UsageEventTypeMap;

export interface ServerTypeMap {
  TITAN: 0;
  IO: 1;
}

export const ServerType: ServerTypeMap;

