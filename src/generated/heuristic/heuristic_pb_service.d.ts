// package: sensory.api.heuristic
// file: heuristic/heuristic.proto

import * as heuristic_heuristic_pb from "../heuristic/heuristic_pb";
import {grpc} from "@improbable-eng/grpc-web";

type HeuristicsServiceGetUsageSummary = {
  readonly methodName: string;
  readonly service: typeof HeuristicsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof heuristic_heuristic_pb.UsageSummaryRequest;
  readonly responseType: typeof heuristic_heuristic_pb.UsageSummaryResponse;
};

type HeuristicsServiceGetUsageHistory = {
  readonly methodName: string;
  readonly service: typeof HeuristicsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof heuristic_heuristic_pb.UsageHistoryRequest;
  readonly responseType: typeof heuristic_heuristic_pb.UsageHistoryResponse;
};

export class HeuristicsService {
  static readonly serviceName: string;
  static readonly GetUsageSummary: HeuristicsServiceGetUsageSummary;
  static readonly GetUsageHistory: HeuristicsServiceGetUsageHistory;
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

export class HeuristicsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getUsageSummary(
    requestMessage: heuristic_heuristic_pb.UsageSummaryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: heuristic_heuristic_pb.UsageSummaryResponse|null) => void
  ): UnaryResponse;
  getUsageSummary(
    requestMessage: heuristic_heuristic_pb.UsageSummaryRequest,
    callback: (error: ServiceError|null, responseMessage: heuristic_heuristic_pb.UsageSummaryResponse|null) => void
  ): UnaryResponse;
  getUsageHistory(
    requestMessage: heuristic_heuristic_pb.UsageHistoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: heuristic_heuristic_pb.UsageHistoryResponse|null) => void
  ): UnaryResponse;
  getUsageHistory(
    requestMessage: heuristic_heuristic_pb.UsageHistoryRequest,
    callback: (error: ServiceError|null, responseMessage: heuristic_heuristic_pb.UsageHistoryResponse|null) => void
  ): UnaryResponse;
}

