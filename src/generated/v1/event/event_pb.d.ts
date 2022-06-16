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

  getTenantid(): string;
  setTenantid(value: string): void;

  getBillablefunction(): common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap];
  setBillablefunction(value: common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap]): void;

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
    tenantid: string,
    billablefunction: common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap],
  }
}

export class UsageEventResponse extends jspb.Message {
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

  getBillablevalue(): number;
  setBillablevalue(value: number): void;

  getBillableunits(): string;
  setBillableunits(value: string): void;

  getTenantid(): string;
  setTenantid(value: string): void;

  getBillablefunction(): common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap];
  setBillablefunction(value: common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsageEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UsageEventResponse): UsageEventResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsageEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsageEventResponse;
  static deserializeBinaryFromReader(message: UsageEventResponse, reader: jspb.BinaryReader): UsageEventResponse;
}

export namespace UsageEventResponse {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    duration: number,
    id: string,
    clientid: string,
    type: common_common_pb.UsageEventTypeMap[keyof common_common_pb.UsageEventTypeMap],
    route: string,
    technologiesList: Array<common_common_pb.TechnologyTypeMap[keyof common_common_pb.TechnologyTypeMap]>,
    modelsList: Array<string>,
    billablevalue: number,
    billableunits: string,
    tenantid: string,
    billablefunction: common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap],
  }
}

export class UsageEventListRequest extends jspb.Message {
  getTenantid(): string;
  setTenantid(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): common_common_pb.PaginationOptions | undefined;
  setPagination(value?: common_common_pb.PaginationOptions): void;

  hasAfter(): boolean;
  clearAfter(): void;
  getAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAfter(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasBefore(): boolean;
  clearBefore(): void;
  getBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBefore(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearBillablefunctionsList(): void;
  getBillablefunctionsList(): Array<common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap]>;
  setBillablefunctionsList(value: Array<common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap]>): void;
  addBillablefunctions(value: common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap], index?: number): common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsageEventListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UsageEventListRequest): UsageEventListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsageEventListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsageEventListRequest;
  static deserializeBinaryFromReader(message: UsageEventListRequest, reader: jspb.BinaryReader): UsageEventListRequest;
}

export namespace UsageEventListRequest {
  export type AsObject = {
    tenantid: string,
    pagination?: common_common_pb.PaginationOptions.AsObject,
    after?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    before?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    billablefunctionsList: Array<common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap]>,
  }
}

export class UsageEventListResponse extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<UsageEventResponse>;
  setEventsList(value: Array<UsageEventResponse>): void;
  addEvents(value?: UsageEventResponse, index?: number): UsageEventResponse;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): common_common_pb.PaginationResponse | undefined;
  setPagination(value?: common_common_pb.PaginationResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsageEventListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UsageEventListResponse): UsageEventListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsageEventListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsageEventListResponse;
  static deserializeBinaryFromReader(message: UsageEventListResponse, reader: jspb.BinaryReader): UsageEventListResponse;
}

export namespace UsageEventListResponse {
  export type AsObject = {
    eventsList: Array<UsageEventResponse.AsObject>,
    pagination?: common_common_pb.PaginationResponse.AsObject,
  }
}

export class UsageEventSummary extends jspb.Message {
  clearSummariesList(): void;
  getSummariesList(): Array<UsageEventModelSummary>;
  setSummariesList(value: Array<UsageEventModelSummary>): void;
  addSummaries(value?: UsageEventModelSummary, index?: number): UsageEventModelSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsageEventSummary.AsObject;
  static toObject(includeInstance: boolean, msg: UsageEventSummary): UsageEventSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsageEventSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsageEventSummary;
  static deserializeBinaryFromReader(message: UsageEventSummary, reader: jspb.BinaryReader): UsageEventSummary;
}

export namespace UsageEventSummary {
  export type AsObject = {
    summariesList: Array<UsageEventModelSummary.AsObject>,
  }
}

export class UsageEventModelSummary extends jspb.Message {
  getBillablefunction(): common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap];
  setBillablefunction(value: common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap]): void;

  getUnits(): string;
  setUnits(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsageEventModelSummary.AsObject;
  static toObject(includeInstance: boolean, msg: UsageEventModelSummary): UsageEventModelSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsageEventModelSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsageEventModelSummary;
  static deserializeBinaryFromReader(message: UsageEventModelSummary, reader: jspb.BinaryReader): UsageEventModelSummary;
}

export namespace UsageEventModelSummary {
  export type AsObject = {
    billablefunction: common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap],
    units: string,
    value: number,
    count: number,
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

