// package: sensory.api.v1.management
// file: v1/management/key.proto

import * as v1_management_key_pb from "../../v1/management/key_pb";
import {grpc} from "@improbable-eng/grpc-web";

type KeyServiceCreateKey = {
  readonly methodName: string;
  readonly service: typeof KeyService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_key_pb.CreateKeyRequest;
  readonly responseType: typeof v1_management_key_pb.KeyResponse;
};

type KeyServiceGetKeys = {
  readonly methodName: string;
  readonly service: typeof KeyService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_key_pb.GetKeysRequest;
  readonly responseType: typeof v1_management_key_pb.GetKeysResponse;
};

export class KeyService {
  static readonly serviceName: string;
  static readonly CreateKey: KeyServiceCreateKey;
  static readonly GetKeys: KeyServiceGetKeys;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class KeyServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createKey(
    requestMessage: v1_management_key_pb.CreateKeyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_key_pb.KeyResponse|null) => void
  ): UnaryResponse;
  createKey(
    requestMessage: v1_management_key_pb.CreateKeyRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_key_pb.KeyResponse|null) => void
  ): UnaryResponse;
  getKeys(
    requestMessage: v1_management_key_pb.GetKeysRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_key_pb.GetKeysResponse|null) => void
  ): UnaryResponse;
  getKeys(
    requestMessage: v1_management_key_pb.GetKeysRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_key_pb.GetKeysResponse|null) => void
  ): UnaryResponse;
}

