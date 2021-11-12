// package: sensory.api.v1.management
// file: v1/management/server.proto

import * as v1_management_server_pb from "../../v1/management/server_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ServerServiceGetConfig = {
  readonly methodName: string;
  readonly service: typeof ServerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_server_pb.ServerConfigRequest;
  readonly responseType: typeof v1_management_server_pb.ServerConfig;
};

type ServerServicePutHeartbeat = {
  readonly methodName: string;
  readonly service: typeof ServerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_server_pb.ServerHeartbeatRequest;
  readonly responseType: typeof v1_management_server_pb.HeartbeatResponse;
};

type ServerServiceGetServerList = {
  readonly methodName: string;
  readonly service: typeof ServerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_server_pb.ServerListRequest;
  readonly responseType: typeof v1_management_server_pb.ServerListResponse;
};

export class ServerService {
  static readonly serviceName: string;
  static readonly GetConfig: ServerServiceGetConfig;
  static readonly PutHeartbeat: ServerServicePutHeartbeat;
  static readonly GetServerList: ServerServiceGetServerList;
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

export class ServerServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getConfig(
    requestMessage: v1_management_server_pb.ServerConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_server_pb.ServerConfig|null) => void
  ): UnaryResponse;
  getConfig(
    requestMessage: v1_management_server_pb.ServerConfigRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_server_pb.ServerConfig|null) => void
  ): UnaryResponse;
  putHeartbeat(
    requestMessage: v1_management_server_pb.ServerHeartbeatRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_server_pb.HeartbeatResponse|null) => void
  ): UnaryResponse;
  putHeartbeat(
    requestMessage: v1_management_server_pb.ServerHeartbeatRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_server_pb.HeartbeatResponse|null) => void
  ): UnaryResponse;
  getServerList(
    requestMessage: v1_management_server_pb.ServerListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_server_pb.ServerListResponse|null) => void
  ): UnaryResponse;
  getServerList(
    requestMessage: v1_management_server_pb.ServerListRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_server_pb.ServerListResponse|null) => void
  ): UnaryResponse;
}

