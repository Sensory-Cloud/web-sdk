// package: sensory.api.health
// file: health/health.proto

import * as health_health_pb from "../health/health_pb";
import * as common_common_pb from "../common/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type HealthServiceGetHealth = {
  readonly methodName: string;
  readonly service: typeof HealthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof health_health_pb.HealthRequest;
  readonly responseType: typeof common_common_pb.ServerHealthResponse;
};

export class HealthService {
  static readonly serviceName: string;
  static readonly GetHealth: HealthServiceGetHealth;
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

export class HealthServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getHealth(
    requestMessage: health_health_pb.HealthRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: common_common_pb.ServerHealthResponse|null) => void
  ): UnaryResponse;
  getHealth(
    requestMessage: health_health_pb.HealthRequest,
    callback: (error: ServiceError|null, responseMessage: common_common_pb.ServerHealthResponse|null) => void
  ): UnaryResponse;
}

