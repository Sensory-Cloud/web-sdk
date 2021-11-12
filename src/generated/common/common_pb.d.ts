// package: sensory.api.common
// file: common/common.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../validate/validate_pb";

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

export interface KeyTypeMap {
  PUBLIC_KEY: 0;
  PUBLIC_KEY_ED25519: 1;
  SHARED_SECRET: 3;
}

export const KeyType: KeyTypeMap;

export interface ModelTypeMap {
  VOICE_BIOMETRIC_TEXT_DEPENDENT: 0;
  VOICE_BIOMETRIC_TEXT_INDEPENDENT: 1;
  VOICE_BIOMETRIC_WAKEWORD: 2;
  VOICE_EVENT_WAKEWORD: 3;
  VOICE_TRANSCRIBE_GRAMMAR: 4;
  VOICE_TRANSCRIBE_COMMAND_AND_SEARCH: 5;
  VOICE_RECOGNITION_ACTIVITY_DETECTION: 6;
  VOICE_FEATURE_EXTRACTOR: 7;
  SOUND_EVENT_ENROLLABLE: 100;
  SOUND_EVENT_REVALIDATION: 101;
  SOUND_EVENT_FIXED: 102;
  SOUND_SCENE_FIXED: 103;
  FACE_BIOMETRIC: 201;
  FACE_RECOGNITION: 202;
  OBJECT_RECOGNITION: 203;
  IMAGE_TRANSFORM: 204;
  UNKNOWN: 1000;
}

export const ModelType: ModelTypeMap;

export interface TechnologyTypeMap {
  NOT_SET: 0;
  TSSV: 1;
  TS: 2;
  TNL: 3;
}

export const TechnologyType: TechnologyTypeMap;

export interface CompressionTypeMap {
  IMAGE_GRAYSCALE: 0;
}

export const CompressionType: CompressionTypeMap;

export interface ClientTypeMap {
  ROOT: 0;
  DEVICE: 1;
  CLUSTER: 2;
  USER: 3;
}

export const ClientType: ClientTypeMap;

export interface UsageEventTypeMap {
  AUTHENTICATION: 0;
  RECOGNITION: 1;
  ENROLLMENT: 2;
}

export const UsageEventType: UsageEventTypeMap;

