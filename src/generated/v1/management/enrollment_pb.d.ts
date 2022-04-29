// package: sensory.api.v1.management
// file: v1/management/enrollment.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as validate_validate_pb from "../../validate/validate_pb";
import * as common_common_pb from "../../common/common_pb";

export class GetEnrollmentsRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEnrollmentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEnrollmentsRequest): GetEnrollmentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEnrollmentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEnrollmentsRequest;
  static deserializeBinaryFromReader(message: GetEnrollmentsRequest, reader: jspb.BinaryReader): GetEnrollmentsRequest;
}

export namespace GetEnrollmentsRequest {
  export type AsObject = {
    userid: string,
  }
}

export class GetEnrollmentsResponse extends jspb.Message {
  clearEnrollmentsList(): void;
  getEnrollmentsList(): Array<EnrollmentResponse>;
  setEnrollmentsList(value: Array<EnrollmentResponse>): void;
  addEnrollments(value?: EnrollmentResponse, index?: number): EnrollmentResponse;

  getIsrequestortrusted(): boolean;
  setIsrequestortrusted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEnrollmentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEnrollmentsResponse): GetEnrollmentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEnrollmentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEnrollmentsResponse;
  static deserializeBinaryFromReader(message: GetEnrollmentsResponse, reader: jspb.BinaryReader): GetEnrollmentsResponse;
}

export namespace GetEnrollmentsResponse {
  export type AsObject = {
    enrollmentsList: Array<EnrollmentResponse.AsObject>,
    isrequestortrusted: boolean,
  }
}

export class EnrollmentResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasCreatedat(): boolean;
  clearCreatedat(): void;
  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedat(): boolean;
  clearUpdatedat(): void;
  getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDescription(): string;
  setDescription(value: string): void;

  getModelname(): string;
  setModelname(value: string): void;

  getModeltype(): common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap];
  setModeltype(value: common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap]): void;

  getModelversion(): string;
  setModelversion(value: string): void;

  getDeviceid(): string;
  setDeviceid(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  hasCompression(): boolean;
  clearCompression(): void;
  getCompression(): common_common_pb.CompressionConfiguration | undefined;
  setCompression(value?: common_common_pb.CompressionConfiguration): void;

  getDevicename(): string;
  setDevicename(value: string): void;

  getDidenrollwithliveness(): boolean;
  setDidenrollwithliveness(value: boolean): void;

  getReferenceid(): string;
  setReferenceid(value: string): void;

  getDidenrollasbiometric(): boolean;
  setDidenrollasbiometric(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnrollmentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EnrollmentResponse): EnrollmentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnrollmentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnrollmentResponse;
  static deserializeBinaryFromReader(message: EnrollmentResponse, reader: jspb.BinaryReader): EnrollmentResponse;
}

export namespace EnrollmentResponse {
  export type AsObject = {
    id: string,
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    description: string,
    modelname: string,
    modeltype: common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap],
    modelversion: string,
    deviceid: string,
    userid: string,
    compression?: common_common_pb.CompressionConfiguration.AsObject,
    devicename: string,
    didenrollwithliveness: boolean,
    referenceid: string,
    didenrollasbiometric: boolean,
  }
}

export class GetEnrollmentGroupsResponse extends jspb.Message {
  clearEnrollmentgroupsList(): void;
  getEnrollmentgroupsList(): Array<EnrollmentGroupResponse>;
  setEnrollmentgroupsList(value: Array<EnrollmentGroupResponse>): void;
  addEnrollmentgroups(value?: EnrollmentGroupResponse, index?: number): EnrollmentGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEnrollmentGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEnrollmentGroupsResponse): GetEnrollmentGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEnrollmentGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEnrollmentGroupsResponse;
  static deserializeBinaryFromReader(message: GetEnrollmentGroupsResponse, reader: jspb.BinaryReader): GetEnrollmentGroupsResponse;
}

export namespace GetEnrollmentGroupsResponse {
  export type AsObject = {
    enrollmentgroupsList: Array<EnrollmentGroupResponse.AsObject>,
  }
}

export class EnrollmentGroupResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasCreatedat(): boolean;
  clearCreatedat(): void;
  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedat(): boolean;
  clearUpdatedat(): void;
  getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getModelname(): string;
  setModelname(value: string): void;

  getModeltype(): common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap];
  setModeltype(value: common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap]): void;

  getModelversion(): string;
  setModelversion(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  clearEnrollmentsList(): void;
  getEnrollmentsList(): Array<EnrollmentResponse>;
  setEnrollmentsList(value: Array<EnrollmentResponse>): void;
  addEnrollments(value?: EnrollmentResponse, index?: number): EnrollmentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnrollmentGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EnrollmentGroupResponse): EnrollmentGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnrollmentGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnrollmentGroupResponse;
  static deserializeBinaryFromReader(message: EnrollmentGroupResponse, reader: jspb.BinaryReader): EnrollmentGroupResponse;
}

export namespace EnrollmentGroupResponse {
  export type AsObject = {
    id: string,
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name: string,
    description: string,
    modelname: string,
    modeltype: common_common_pb.ModelTypeMap[keyof common_common_pb.ModelTypeMap],
    modelversion: string,
    userid: string,
    enrollmentsList: Array<EnrollmentResponse.AsObject>,
  }
}

export class CreateEnrollmentGroupRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getModelname(): string;
  setModelname(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  clearEnrollmentidsList(): void;
  getEnrollmentidsList(): Array<string>;
  setEnrollmentidsList(value: Array<string>): void;
  addEnrollmentids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEnrollmentGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEnrollmentGroupRequest): CreateEnrollmentGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEnrollmentGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEnrollmentGroupRequest;
  static deserializeBinaryFromReader(message: CreateEnrollmentGroupRequest, reader: jspb.BinaryReader): CreateEnrollmentGroupRequest;
}

export namespace CreateEnrollmentGroupRequest {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    modelname: string,
    userid: string,
    enrollmentidsList: Array<string>,
  }
}

export class AppendEnrollmentGroupRequest extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  clearEnrollmentidsList(): void;
  getEnrollmentidsList(): Array<string>;
  setEnrollmentidsList(value: Array<string>): void;
  addEnrollmentids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppendEnrollmentGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AppendEnrollmentGroupRequest): AppendEnrollmentGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppendEnrollmentGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppendEnrollmentGroupRequest;
  static deserializeBinaryFromReader(message: AppendEnrollmentGroupRequest, reader: jspb.BinaryReader): AppendEnrollmentGroupRequest;
}

export namespace AppendEnrollmentGroupRequest {
  export type AsObject = {
    groupid: string,
    enrollmentidsList: Array<string>,
  }
}

export class DeleteEnrollmentRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEnrollmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEnrollmentRequest): DeleteEnrollmentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEnrollmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEnrollmentRequest;
  static deserializeBinaryFromReader(message: DeleteEnrollmentRequest, reader: jspb.BinaryReader): DeleteEnrollmentRequest;
}

export namespace DeleteEnrollmentRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteEnrollmentGroupRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEnrollmentGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEnrollmentGroupRequest): DeleteEnrollmentGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEnrollmentGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEnrollmentGroupRequest;
  static deserializeBinaryFromReader(message: DeleteEnrollmentGroupRequest, reader: jspb.BinaryReader): DeleteEnrollmentGroupRequest;
}

export namespace DeleteEnrollmentGroupRequest {
  export type AsObject = {
    id: string,
  }
}

export class UpdateEnrollmentRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEnrollmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEnrollmentRequest): UpdateEnrollmentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEnrollmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEnrollmentRequest;
  static deserializeBinaryFromReader(message: UpdateEnrollmentRequest, reader: jspb.BinaryReader): UpdateEnrollmentRequest;
}

export namespace UpdateEnrollmentRequest {
  export type AsObject = {
    id: string,
    description: string,
  }
}

export class UpdateEnrollmentGroupRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEnrollmentGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEnrollmentGroupRequest): UpdateEnrollmentGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEnrollmentGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEnrollmentGroupRequest;
  static deserializeBinaryFromReader(message: UpdateEnrollmentGroupRequest, reader: jspb.BinaryReader): UpdateEnrollmentGroupRequest;
}

export namespace UpdateEnrollmentGroupRequest {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class RemoveEnrollmentsRequest extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  clearEnrollmentidsList(): void;
  getEnrollmentidsList(): Array<string>;
  setEnrollmentidsList(value: Array<string>): void;
  addEnrollmentids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveEnrollmentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveEnrollmentsRequest): RemoveEnrollmentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveEnrollmentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveEnrollmentsRequest;
  static deserializeBinaryFromReader(message: RemoveEnrollmentsRequest, reader: jspb.BinaryReader): RemoveEnrollmentsRequest;
}

export namespace RemoveEnrollmentsRequest {
  export type AsObject = {
    groupid: string,
    enrollmentidsList: Array<string>,
  }
}

