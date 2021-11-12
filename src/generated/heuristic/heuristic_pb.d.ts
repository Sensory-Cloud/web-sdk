// package: sensory.api.heuristic
// file: heuristic/heuristic.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as validate_validate_pb from "../validate/validate_pb";
import * as common_common_pb from "../common/common_pb";

export class UsageSummaryRequest extends jspb.Message {
  getTenantid(): string;
  setTenantid(value: string): void;

  hasBefore(): boolean;
  clearBefore(): void;
  getBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBefore(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasAfter(): boolean;
  clearAfter(): void;
  getAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAfter(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsageSummaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UsageSummaryRequest): UsageSummaryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsageSummaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsageSummaryRequest;
  static deserializeBinaryFromReader(message: UsageSummaryRequest, reader: jspb.BinaryReader): UsageSummaryRequest;
}

export namespace UsageSummaryRequest {
  export type AsObject = {
    tenantid: string,
    before?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    after?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UsageHistoryRequest extends jspb.Message {
  getTenantid(): string;
  setTenantid(value: string): void;

  hasBefore(): boolean;
  clearBefore(): void;
  getBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBefore(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasAfter(): boolean;
  clearAfter(): void;
  getAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAfter(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPrecision(): HeuristicAggregatePrecisionMap[keyof HeuristicAggregatePrecisionMap];
  setPrecision(value: HeuristicAggregatePrecisionMap[keyof HeuristicAggregatePrecisionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsageHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UsageHistoryRequest): UsageHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsageHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsageHistoryRequest;
  static deserializeBinaryFromReader(message: UsageHistoryRequest, reader: jspb.BinaryReader): UsageHistoryRequest;
}

export namespace UsageHistoryRequest {
  export type AsObject = {
    tenantid: string,
    before?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    after?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    precision: HeuristicAggregatePrecisionMap[keyof HeuristicAggregatePrecisionMap],
  }
}

export class UsageHistoryResponse extends jspb.Message {
  clearBucketsList(): void;
  getBucketsList(): Array<UsageHistoryBucket>;
  setBucketsList(value: Array<UsageHistoryBucket>): void;
  addBuckets(value?: UsageHistoryBucket, index?: number): UsageHistoryBucket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsageHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UsageHistoryResponse): UsageHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsageHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsageHistoryResponse;
  static deserializeBinaryFromReader(message: UsageHistoryResponse, reader: jspb.BinaryReader): UsageHistoryResponse;
}

export namespace UsageHistoryResponse {
  export type AsObject = {
    bucketsList: Array<UsageHistoryBucket.AsObject>,
  }
}

export class UsageHistoryBucket extends jspb.Message {
  getType(): common_common_pb.UsageEventTypeMap[keyof common_common_pb.UsageEventTypeMap];
  setType(value: common_common_pb.UsageEventTypeMap[keyof common_common_pb.UsageEventTypeMap]): void;

  getCount(): number;
  setCount(value: number): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsageHistoryBucket.AsObject;
  static toObject(includeInstance: boolean, msg: UsageHistoryBucket): UsageHistoryBucket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsageHistoryBucket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsageHistoryBucket;
  static deserializeBinaryFromReader(message: UsageHistoryBucket, reader: jspb.BinaryReader): UsageHistoryBucket;
}

export namespace UsageHistoryBucket {
  export type AsObject = {
    type: common_common_pb.UsageEventTypeMap[keyof common_common_pb.UsageEventTypeMap],
    count: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UsageSummaryResponse extends jspb.Message {
  getTenantcount(): number;
  setTenantcount(value: number): void;

  getDevicecount(): number;
  setDevicecount(value: number): void;

  getUsercount(): number;
  setUsercount(value: number): void;

  getServercount(): number;
  setServercount(value: number): void;

  getAuthenticationcount(): number;
  setAuthenticationcount(value: number): void;

  getRecognitioncount(): number;
  setRecognitioncount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsageSummaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UsageSummaryResponse): UsageSummaryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsageSummaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsageSummaryResponse;
  static deserializeBinaryFromReader(message: UsageSummaryResponse, reader: jspb.BinaryReader): UsageSummaryResponse;
}

export namespace UsageSummaryResponse {
  export type AsObject = {
    tenantcount: number,
    devicecount: number,
    usercount: number,
    servercount: number,
    authenticationcount: number,
    recognitioncount: number,
  }
}

export interface HeuristicAggregatePrecisionMap {
  MINUTE: 0;
  HOUR: 1;
  DAY: 2;
  WEEK: 3;
  MONTH: 4;
  QUARTER: 5;
  YEAR: 6;
}

export const HeuristicAggregatePrecision: HeuristicAggregatePrecisionMap;

