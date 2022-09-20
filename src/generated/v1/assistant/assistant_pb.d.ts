// package: sensory.api.v1.assistant
// file: v1/assistant/assistant.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../validate/validate_pb";

export class AssistantMessageRequest extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): AssistantMessageConfig | undefined;
  setConfig(value?: AssistantMessageConfig): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): AssistantMessage | undefined;
  setMessage(value?: AssistantMessage): void;

  hasPostprocessingaction(): boolean;
  clearPostprocessingaction(): void;
  getPostprocessingaction(): AssistantPostProcessingActionRequest | undefined;
  setPostprocessingaction(value?: AssistantPostProcessingActionRequest): void;

  getStreamingrequestCase(): AssistantMessageRequest.StreamingrequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantMessageRequest): AssistantMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantMessageRequest;
  static deserializeBinaryFromReader(message: AssistantMessageRequest, reader: jspb.BinaryReader): AssistantMessageRequest;
}

export namespace AssistantMessageRequest {
  export type AsObject = {
    config?: AssistantMessageConfig.AsObject,
    message?: AssistantMessage.AsObject,
    postprocessingaction?: AssistantPostProcessingActionRequest.AsObject,
  }

  export enum StreamingrequestCase {
    STREAMINGREQUEST_NOT_SET = 0,
    CONFIG = 1,
    MESSAGE = 2,
  }
}

export class AssistantMessage extends jspb.Message {
  hasText(): boolean;
  clearText(): void;
  getText(): string;
  setText(value: string): void;

  hasAudiocontent(): boolean;
  clearAudiocontent(): void;
  getAudiocontent(): Uint8Array | string;
  getAudiocontent_asU8(): Uint8Array;
  getAudiocontent_asB64(): string;
  setAudiocontent(value: Uint8Array | string): void;

  getMessageCase(): AssistantMessage.MessageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantMessage): AssistantMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantMessage;
  static deserializeBinaryFromReader(message: AssistantMessage, reader: jspb.BinaryReader): AssistantMessage;
}

export namespace AssistantMessage {
  export type AsObject = {
    text: string,
    audiocontent: Uint8Array | string,
  }

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    TEXT = 1,
    AUDIOCONTENT = 2,
  }
}

export class Intent extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Intent.AsObject;
  static toObject(includeInstance: boolean, msg: Intent): Intent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Intent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Intent;
  static deserializeBinaryFromReader(message: Intent, reader: jspb.BinaryReader): Intent;
}

export namespace Intent {
  export type AsObject = {
    name: string,
    confidence: number,
  }
}

export class AssistantMessageResponse extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  getAudiocontent(): Uint8Array | string;
  getAudiocontent_asU8(): Uint8Array;
  getAudiocontent_asB64(): string;
  setAudiocontent(value: Uint8Array | string): void;

  hasIntent(): boolean;
  clearIntent(): void;
  getIntent(): Intent | undefined;
  setIntent(value?: Intent): void;

  clearIntentsList(): void;
  getIntentsList(): Array<Intent>;
  setIntentsList(value: Array<Intent>): void;
  addIntents(value?: Intent, index?: number): Intent;

  getIsaudiocomplete(): boolean;
  setIsaudiocomplete(value: boolean): void;

  hasPostprocessingaction(): boolean;
  clearPostprocessingaction(): void;
  getPostprocessingaction(): AssistantPostProcessingActionResponse | undefined;
  setPostprocessingaction(value?: AssistantPostProcessingActionResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantMessageResponse): AssistantMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantMessageResponse;
  static deserializeBinaryFromReader(message: AssistantMessageResponse, reader: jspb.BinaryReader): AssistantMessageResponse;
}

export namespace AssistantMessageResponse {
  export type AsObject = {
    text: string,
    audiocontent: Uint8Array | string,
    intent?: Intent.AsObject,
    intentsList: Array<Intent.AsObject>,
    isaudiocomplete: boolean,
    postprocessingaction?: AssistantPostProcessingActionResponse.AsObject,
  }
}

export class AssistantMessageConfig extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getDeviceid(): string;
  setDeviceid(value: string): void;

  getModelname(): string;
  setModelname(value: string): void;

  getIncludeaudioresponse(): boolean;
  setIncludeaudioresponse(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantMessageConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantMessageConfig): AssistantMessageConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantMessageConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantMessageConfig;
  static deserializeBinaryFromReader(message: AssistantMessageConfig, reader: jspb.BinaryReader): AssistantMessageConfig;
}

export namespace AssistantMessageConfig {
  export type AsObject = {
    userid: string,
    deviceid: string,
    modelname: string,
    includeaudioresponse: boolean,
  }
}

export class AssistantPostProcessingActionRequest extends jspb.Message {
  getActionid(): string;
  setActionid(value: string): void;

  getAction(): AssistantPostProcessingActionMap[keyof AssistantPostProcessingActionMap];
  setAction(value: AssistantPostProcessingActionMap[keyof AssistantPostProcessingActionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantPostProcessingActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantPostProcessingActionRequest): AssistantPostProcessingActionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantPostProcessingActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantPostProcessingActionRequest;
  static deserializeBinaryFromReader(message: AssistantPostProcessingActionRequest, reader: jspb.BinaryReader): AssistantPostProcessingActionRequest;
}

export namespace AssistantPostProcessingActionRequest {
  export type AsObject = {
    actionid: string,
    action: AssistantPostProcessingActionMap[keyof AssistantPostProcessingActionMap],
  }
}

export class AssistantPostProcessingActionResponse extends jspb.Message {
  getActionid(): string;
  setActionid(value: string): void;

  getAction(): AssistantPostProcessingActionMap[keyof AssistantPostProcessingActionMap];
  setAction(value: AssistantPostProcessingActionMap[keyof AssistantPostProcessingActionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantPostProcessingActionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantPostProcessingActionResponse): AssistantPostProcessingActionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantPostProcessingActionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantPostProcessingActionResponse;
  static deserializeBinaryFromReader(message: AssistantPostProcessingActionResponse, reader: jspb.BinaryReader): AssistantPostProcessingActionResponse;
}

export namespace AssistantPostProcessingActionResponse {
  export type AsObject = {
    actionid: string,
    action: AssistantPostProcessingActionMap[keyof AssistantPostProcessingActionMap],
  }
}

export interface AssistantPostProcessingActionMap {
  NOT_SET: 0;
  FINAL: 1;
}

export const AssistantPostProcessingAction: AssistantPostProcessingActionMap;

