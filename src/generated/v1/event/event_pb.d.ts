// package: sensory.api.v1.event
// file: v1/event/event.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as validate_validate_pb from "../../validate/validate_pb";
import * as common_common_pb from "../../common/common_pb";

export class PublishUsageEventsRequest extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<UsageEvent>;
  setEventsList(value: Array<UsageEvent>): void;
  addEvents(value?: UsageEvent, index?: number): UsageEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishUsageEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublishUsageEventsRequest): PublishUsageEventsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishUsageEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishUsageEventsRequest;
  static deserializeBinaryFromReader(message: PublishUsageEventsRequest, reader: jspb.BinaryReader): PublishUsageEventsRequest;
}

export namespace PublishUsageEventsRequest {
  export type AsObject = {
    eventsList: Array<UsageEvent.AsObject>,
  }
}

export class UsageEvent extends jspb.Message {
  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDuration(): number;
  setDuration(value: number): void;

  getId(): string;
  setId(value: string): void;

  getClientid(): string;
  setClientid(value: string): void;

  getType(): common_common_pb.UsageEventTypeMap[keyof common_common_pb.UsageEventTypeMap];
  setType(value: common_common_pb.UsageEventTypeMap[keyof common_common_pb.UsageEventTypeMap]): void;

  getRoute(): string;
  setRoute(value: string): void;

  clearTechnologiesList(): void;
  getTechnologiesList(): Array<common_common_pb.TechnologyTypeMap[keyof common_common_pb.TechnologyTypeMap]>;
  setTechnologiesList(value: Array<common_common_pb.TechnologyTypeMap[keyof common_common_pb.TechnologyTypeMap]>): void;
  addTechnologies(value: common_common_pb.TechnologyTypeMap[keyof common_common_pb.TechnologyTypeMap], index?: number): common_common_pb.TechnologyTypeMap[keyof common_common_pb.TechnologyTypeMap];

  clearModelsList(): void;
  getModelsList(): Array<string>;
  setModelsList(value: Array<string>): void;
  addModels(value: string, index?: number): string;

  getAudiodurationms(): number;
  setAudiodurationms(value: number): void;

  getVideoframecount(): number;
  setVideoframecount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsageEvent.AsObject;
  static toObject(includeInstance: boolean, msg: UsageEvent): UsageEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsageEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsageEvent;
  static deserializeBinaryFromReader(message: UsageEvent, reader: jspb.BinaryReader): UsageEvent;
}

export namespace UsageEvent {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    duration: number,
    id: string,
    clientid: string,
    type: common_common_pb.UsageEventTypeMap[keyof common_common_pb.UsageEventTypeMap],
    route: string,
    technologiesList: Array<common_common_pb.TechnologyTypeMap[keyof common_common_pb.TechnologyTypeMap]>,
    modelsList: Array<string>,
    audiodurationms: number,
    videoframecount: number,
  }
}

export class PublishUsageEventsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishUsageEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublishUsageEventsResponse): PublishUsageEventsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishUsageEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishUsageEventsResponse;
  static deserializeBinaryFromReader(message: PublishUsageEventsResponse, reader: jspb.BinaryReader): PublishUsageEventsResponse;
}

export namespace PublishUsageEventsResponse {
  export type AsObject = {
  }
}

