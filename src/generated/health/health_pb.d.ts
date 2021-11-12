// package: sensory.api.health
// file: health/health.proto

import * as jspb from "google-protobuf";
import * as common_common_pb from "../common/common_pb";

export class HealthRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HealthRequest): HealthRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HealthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthRequest;
  static deserializeBinaryFromReader(message: HealthRequest, reader: jspb.BinaryReader): HealthRequest;
}

export namespace HealthRequest {
  export type AsObject = {
  }
}

