// package: sensory.api.v1.event
// file: v1/event/event.proto

import * as v1_event_event_pb from "../../v1/event/event_pb";
import {grpc} from "@improbable-eng/grpc-web";

type EventServicePublishUsageEvents = {
  readonly methodName: string;
  readonly service: typeof EventService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_event_event_pb.PublishUsageEventsRequest;
  readonly responseType: typeof v1_event_event_pb.PublishUsageEventsResponse;
};

type EventServiceGetUsageEventList = {
  readonly methodName: string;
  readonly service: typeof EventService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_event_event_pb.UsageEventListRequest;
  readonly responseType: typeof v1_event_event_pb.UsageEventListResponse;
};

type EventServiceGetUsageEventSummary = {
  readonly methodName: string;
  readonly service: typeof EventService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_event_event_pb.UsageEventListRequest;
  readonly responseType: typeof v1_event_event_pb.UsageEventSummary;
};

export class EventService {
  static readonly serviceName: string;
  static readonly PublishUsageEvents: EventServicePublishUsageEvents;
  static readonly GetUsageEventList: EventServiceGetUsageEventList;
  static readonly GetUsageEventSummary: EventServiceGetUsageEventSummary;
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

export class EventServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  publishUsageEvents(
    requestMessage: v1_event_event_pb.PublishUsageEventsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_event_event_pb.PublishUsageEventsResponse|null) => void
  ): UnaryResponse;
  publishUsageEvents(
    requestMessage: v1_event_event_pb.PublishUsageEventsRequest,
    callback: (error: ServiceError|null, responseMessage: v1_event_event_pb.PublishUsageEventsResponse|null) => void
  ): UnaryResponse;
  getUsageEventList(
    requestMessage: v1_event_event_pb.UsageEventListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_event_event_pb.UsageEventListResponse|null) => void
  ): UnaryResponse;
  getUsageEventList(
    requestMessage: v1_event_event_pb.UsageEventListRequest,
    callback: (error: ServiceError|null, responseMessage: v1_event_event_pb.UsageEventListResponse|null) => void
  ): UnaryResponse;
  getUsageEventSummary(
    requestMessage: v1_event_event_pb.UsageEventListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_event_event_pb.UsageEventSummary|null) => void
  ): UnaryResponse;
  getUsageEventSummary(
    requestMessage: v1_event_event_pb.UsageEventListRequest,
    callback: (error: ServiceError|null, responseMessage: v1_event_event_pb.UsageEventSummary|null) => void
  ): UnaryResponse;
}

