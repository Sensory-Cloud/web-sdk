// package: sensory.api.v1.management
// file: v1/management/cluster.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as validate_validate_pb from "../../validate/validate_pb";

export class ClusterRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getIsremote(): boolean;
  setIsremote(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterRequest): ClusterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterRequest;
  static deserializeBinaryFromReader(message: ClusterRequest, reader: jspb.BinaryReader): ClusterRequest;
}

export namespace ClusterRequest {
  export type AsObject = {
    name: string,
    isremote: boolean,
  }
}

export class ClusterResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getIsremote(): boolean;
  setIsremote(value: boolean): void;

  getTenantid(): string;
  setTenantid(value: string): void;

  hasCreatedat(): boolean;
  clearCreatedat(): void;
  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedat(): boolean;
  clearUpdatedat(): void;
  getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterResponse): ClusterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClusterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterResponse;
  static deserializeBinaryFromReader(message: ClusterResponse, reader: jspb.BinaryReader): ClusterResponse;
}

export namespace ClusterResponse {
  export type AsObject = {
    id: string,
    name: string,
    isremote: boolean,
    tenantid: string,
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

