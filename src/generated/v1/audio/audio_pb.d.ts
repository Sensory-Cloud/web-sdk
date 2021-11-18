// package: sensory.api.v1.audio
// file: v1/audio/audio.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../validate/validate_pb";
import * as common_common_pb from "../../common/common_pb";

export class GetModelsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelsRequest): GetModelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelsRequest;
  static deserializeBinaryFromReader(message: GetModelsRequest, reader: jspb.BinaryReader): GetModelsRequest;
}

export namespace GetModelsRequest {
  export type AsObject = {
  }
}

export class AudioModel extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getIsenrollable(): boolean;
  setIsenrollable(value: boolean): void;

  getModeltype(): common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap];
  setModeltype(value: common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap]): void;

  getFixedphrase(): string;
  setFixedphrase(value: string): void;

  getSamplerate(): number;
  setSamplerate(value: number): void;

  clearVersionsList(): void;
  getVersionsList(): Array<string>;
  setVersionsList(value: Array<string>): void;
  addVersions(value: string, index?: number): string;

  getTechnology(): common_common_pb.TechnologyTypeMap[keyof common_common_pb.TechnologyTypeMap];
  setTechnology(value: common_common_pb.TechnologyTypeMap[keyof common_common_pb.TechnologyTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioModel.AsObject;
  static toObject(includeInstance: boolean, msg: AudioModel): AudioModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AudioModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioModel;
  static deserializeBinaryFromReader(message: AudioModel, reader: jspb.BinaryReader): AudioModel;
}

export namespace AudioModel {
  export type AsObject = {
    name: string,
    isenrollable: boolean,
    modeltype: common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap],
    fixedphrase: string,
    samplerate: number,
    versionsList: Array<string>,
    technology: common_common_pb.TechnologyTypeMap[keyof common_common_pb.TechnologyTypeMap],
  }
}

export class GetModelsResponse extends jspb.Message {
  clearModelsList(): void;
  getModelsList(): Array<AudioModel>;
  setModelsList(value: Array<AudioModel>): void;
  addModels(value?: AudioModel, index?: number): AudioModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelsResponse): GetModelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelsResponse;
  static deserializeBinaryFromReader(message: GetModelsResponse, reader: jspb.BinaryReader): GetModelsResponse;
}

export namespace GetModelsResponse {
  export type AsObject = {
    modelsList: Array<AudioModel.AsObject>,
  }
}

export class CreateEnrollmentRequest extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): CreateEnrollmentConfig | undefined;
  setConfig(value?: CreateEnrollmentConfig): void;

  hasAudiocontent(): boolean;
  clearAudiocontent(): void;
  getAudiocontent(): Uint8Array | string;
  getAudiocontent_asU8(): Uint8Array;
  getAudiocontent_asB64(): string;
  setAudiocontent(value: Uint8Array | string): void;

  getStreamingrequestCase(): CreateEnrollmentRequest.StreamingrequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEnrollmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEnrollmentRequest): CreateEnrollmentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEnrollmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEnrollmentRequest;
  static deserializeBinaryFromReader(message: CreateEnrollmentRequest, reader: jspb.BinaryReader): CreateEnrollmentRequest;
}

export namespace CreateEnrollmentRequest {
  export type AsObject = {
    config?: CreateEnrollmentConfig.AsObject,
    audiocontent: Uint8Array | string,
  }

  export enum StreamingrequestCase {
    STREAMINGREQUEST_NOT_SET = 0,
    CONFIG = 1,
    AUDIOCONTENT = 2,
  }
}

export class AuthenticateRequest extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): AuthenticateConfig | undefined;
  setConfig(value?: AuthenticateConfig): void;

  hasAudiocontent(): boolean;
  clearAudiocontent(): void;
  getAudiocontent(): Uint8Array | string;
  getAudiocontent_asU8(): Uint8Array;
  getAudiocontent_asB64(): string;
  setAudiocontent(value: Uint8Array | string): void;

  getStreamingrequestCase(): AuthenticateRequest.StreamingrequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticateRequest): AuthenticateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthenticateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticateRequest;
  static deserializeBinaryFromReader(message: AuthenticateRequest, reader: jspb.BinaryReader): AuthenticateRequest;
}

export namespace AuthenticateRequest {
  export type AsObject = {
    config?: AuthenticateConfig.AsObject,
    audiocontent: Uint8Array | string,
  }

  export enum StreamingrequestCase {
    STREAMINGREQUEST_NOT_SET = 0,
    CONFIG = 1,
    AUDIOCONTENT = 2,
  }
}

export class ValidateEventRequest extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): ValidateEventConfig | undefined;
  setConfig(value?: ValidateEventConfig): void;

  hasAudiocontent(): boolean;
  clearAudiocontent(): void;
  getAudiocontent(): Uint8Array | string;
  getAudiocontent_asU8(): Uint8Array;
  getAudiocontent_asB64(): string;
  setAudiocontent(value: Uint8Array | string): void;

  getStreamingrequestCase(): ValidateEventRequest.StreamingrequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateEventRequest): ValidateEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidateEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateEventRequest;
  static deserializeBinaryFromReader(message: ValidateEventRequest, reader: jspb.BinaryReader): ValidateEventRequest;
}

export namespace ValidateEventRequest {
  export type AsObject = {
    config?: ValidateEventConfig.AsObject,
    audiocontent: Uint8Array | string,
  }

  export enum StreamingrequestCase {
    STREAMINGREQUEST_NOT_SET = 0,
    CONFIG = 1,
    AUDIOCONTENT = 2,
  }
}

export class TranscribeRequest extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): TranscribeConfig | undefined;
  setConfig(value?: TranscribeConfig): void;

  hasAudiocontent(): boolean;
  clearAudiocontent(): void;
  getAudiocontent(): Uint8Array | string;
  getAudiocontent_asU8(): Uint8Array;
  getAudiocontent_asB64(): string;
  setAudiocontent(value: Uint8Array | string): void;

  getStreamingrequestCase(): TranscribeRequest.StreamingrequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TranscribeRequest): TranscribeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TranscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranscribeRequest;
  static deserializeBinaryFromReader(message: TranscribeRequest, reader: jspb.BinaryReader): TranscribeRequest;
}

export namespace TranscribeRequest {
  export type AsObject = {
    config?: TranscribeConfig.AsObject,
    audiocontent: Uint8Array | string,
  }

  export enum StreamingrequestCase {
    STREAMINGREQUEST_NOT_SET = 0,
    CONFIG = 1,
    AUDIOCONTENT = 2,
  }
}

export class CreateEnrollmentResponse extends jspb.Message {
  getPercentcomplete(): number;
  setPercentcomplete(value: number): void;

  getAudioenergy(): number;
  setAudioenergy(value: number): void;

  getEnrollmentid(): string;
  setEnrollmentid(value: string): void;

  getModelname(): string;
  setModelname(value: string): void;

  getModelversion(): string;
  setModelversion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEnrollmentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEnrollmentResponse): CreateEnrollmentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEnrollmentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEnrollmentResponse;
  static deserializeBinaryFromReader(message: CreateEnrollmentResponse, reader: jspb.BinaryReader): CreateEnrollmentResponse;
}

export namespace CreateEnrollmentResponse {
  export type AsObject = {
    percentcomplete: number,
    audioenergy: number,
    enrollmentid: string,
    modelname: string,
    modelversion: string,
  }
}

export class AuthenticateResponse extends jspb.Message {
  getAudioenergy(): number;
  setAudioenergy(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasToken(): boolean;
  clearToken(): void;
  getToken(): common_common_pb.TokenResponse | undefined;
  setToken(value?: common_common_pb.TokenResponse): void;

  getUserid(): string;
  setUserid(value: string): void;

  getEnrollmentid(): string;
  setEnrollmentid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticateResponse): AuthenticateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthenticateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticateResponse;
  static deserializeBinaryFromReader(message: AuthenticateResponse, reader: jspb.BinaryReader): AuthenticateResponse;
}

export namespace AuthenticateResponse {
  export type AsObject = {
    audioenergy: number,
    success: boolean,
    token?: common_common_pb.TokenResponse.AsObject,
    userid: string,
    enrollmentid: string,
  }
}

export class ValidateEventResponse extends jspb.Message {
  getAudioenergy(): number;
  setAudioenergy(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getResultid(): string;
  setResultid(value: string): void;

  getScore(): number;
  setScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateEventResponse): ValidateEventResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidateEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateEventResponse;
  static deserializeBinaryFromReader(message: ValidateEventResponse, reader: jspb.BinaryReader): ValidateEventResponse;
}

export namespace ValidateEventResponse {
  export type AsObject = {
    audioenergy: number,
    success: boolean,
    resultid: string,
    score: number,
  }
}

export class TranscribeResponse extends jspb.Message {
  getAudioenergy(): number;
  setAudioenergy(value: number): void;

  getTranscript(): string;
  setTranscript(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranscribeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TranscribeResponse): TranscribeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TranscribeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranscribeResponse;
  static deserializeBinaryFromReader(message: TranscribeResponse, reader: jspb.BinaryReader): TranscribeResponse;
}

export namespace TranscribeResponse {
  export type AsObject = {
    audioenergy: number,
    transcript: string,
  }
}

export class CreateEnrollmentConfig extends jspb.Message {
  hasAudio(): boolean;
  clearAudio(): void;
  getAudio(): AudioConfig | undefined;
  setAudio(value?: AudioConfig): void;

  getUserid(): string;
  setUserid(value: string): void;

  getDeviceid(): string;
  setDeviceid(value: string): void;

  getModelname(): string;
  setModelname(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEnrollmentConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEnrollmentConfig): CreateEnrollmentConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEnrollmentConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEnrollmentConfig;
  static deserializeBinaryFromReader(message: CreateEnrollmentConfig, reader: jspb.BinaryReader): CreateEnrollmentConfig;
}

export namespace CreateEnrollmentConfig {
  export type AsObject = {
    audio?: AudioConfig.AsObject,
    userid: string,
    deviceid: string,
    modelname: string,
    description: string,
  }
}

export class AuthenticateConfig extends jspb.Message {
  hasAudio(): boolean;
  clearAudio(): void;
  getAudio(): AudioConfig | undefined;
  setAudio(value?: AudioConfig): void;

  hasEnrollmentid(): boolean;
  clearEnrollmentid(): void;
  getEnrollmentid(): string;
  setEnrollmentid(value: string): void;

  hasEnrollmentgroupid(): boolean;
  clearEnrollmentgroupid(): void;
  getEnrollmentgroupid(): string;
  setEnrollmentgroupid(value: string): void;

  getDoincludetoken(): boolean;
  setDoincludetoken(value: boolean): void;

  getSensitivity(): ThresholdSensitivityMap[keyof ThresholdSensitivityMap];
  setSensitivity(value: ThresholdSensitivityMap[keyof ThresholdSensitivityMap]): void;

  getSecurity(): AuthenticateConfig.ThresholdSecurityMap[keyof AuthenticateConfig.ThresholdSecurityMap];
  setSecurity(value: AuthenticateConfig.ThresholdSecurityMap[keyof AuthenticateConfig.ThresholdSecurityMap]): void;

  getAuthidCase(): AuthenticateConfig.AuthidCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticateConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticateConfig): AuthenticateConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthenticateConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticateConfig;
  static deserializeBinaryFromReader(message: AuthenticateConfig, reader: jspb.BinaryReader): AuthenticateConfig;
}

export namespace AuthenticateConfig {
  export type AsObject = {
    audio?: AudioConfig.AsObject,
    enrollmentid: string,
    enrollmentgroupid: string,
    doincludetoken: boolean,
    sensitivity: ThresholdSensitivityMap[keyof ThresholdSensitivityMap],
    security: AuthenticateConfig.ThresholdSecurityMap[keyof AuthenticateConfig.ThresholdSecurityMap],
  }

  export interface ThresholdSecurityMap {
    HIGH: 0;
    LOW: 1;
  }

  export const ThresholdSecurity: ThresholdSecurityMap;

  export enum AuthidCase {
    AUTHID_NOT_SET = 0,
    ENROLLMENTID = 2,
    ENROLLMENTGROUPID = 3,
  }
}

export class ValidateEventConfig extends jspb.Message {
  hasAudio(): boolean;
  clearAudio(): void;
  getAudio(): AudioConfig | undefined;
  setAudio(value?: AudioConfig): void;

  getModelname(): string;
  setModelname(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  getSensitivity(): ThresholdSensitivityMap[keyof ThresholdSensitivityMap];
  setSensitivity(value: ThresholdSensitivityMap[keyof ThresholdSensitivityMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateEventConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateEventConfig): ValidateEventConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidateEventConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateEventConfig;
  static deserializeBinaryFromReader(message: ValidateEventConfig, reader: jspb.BinaryReader): ValidateEventConfig;
}

export namespace ValidateEventConfig {
  export type AsObject = {
    audio?: AudioConfig.AsObject,
    modelname: string,
    userid: string,
    sensitivity: ThresholdSensitivityMap[keyof ThresholdSensitivityMap],
  }
}

export class TranscribeConfig extends jspb.Message {
  hasAudio(): boolean;
  clearAudio(): void;
  getAudio(): AudioConfig | undefined;
  setAudio(value?: AudioConfig): void;

  getModelname(): string;
  setModelname(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranscribeConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TranscribeConfig): TranscribeConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TranscribeConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranscribeConfig;
  static deserializeBinaryFromReader(message: TranscribeConfig, reader: jspb.BinaryReader): TranscribeConfig;
}

export namespace TranscribeConfig {
  export type AsObject = {
    audio?: AudioConfig.AsObject,
    modelname: string,
    userid: string,
  }
}

export class AudioConfig extends jspb.Message {
  getEncoding(): AudioConfig.AudioEncodingMap[keyof AudioConfig.AudioEncodingMap];
  setEncoding(value: AudioConfig.AudioEncodingMap[keyof AudioConfig.AudioEncodingMap]): void;

  getSampleratehertz(): number;
  setSampleratehertz(value: number): void;

  getAudiochannelcount(): number;
  setAudiochannelcount(value: number): void;

  getLanguagecode(): string;
  setLanguagecode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AudioConfig): AudioConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AudioConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioConfig;
  static deserializeBinaryFromReader(message: AudioConfig, reader: jspb.BinaryReader): AudioConfig;
}

export namespace AudioConfig {
  export type AsObject = {
    encoding: AudioConfig.AudioEncodingMap[keyof AudioConfig.AudioEncodingMap],
    sampleratehertz: number,
    audiochannelcount: number,
    languagecode: string,
  }

  export interface AudioEncodingMap {
    LINEAR16: 0;
    FLAC: 1;
    MULAW: 2;
  }

  export const AudioEncoding: AudioEncodingMap;
}

export interface ThresholdSensitivityMap {
  LOWEST: 0;
  LOW: 1;
  MEDIUM: 2;
  HIGH: 3;
  HIGHEST: 4;
}

export const ThresholdSensitivity: ThresholdSensitivityMap;
