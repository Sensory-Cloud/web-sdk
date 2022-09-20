// package: sensory.api.v1.assistant
// file: v1/assistant/assistant.proto

import * as v1_assistant_assistant_pb from "../../v1/assistant/assistant_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AssistantServiceProcessMessage = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof v1_assistant_assistant_pb.AssistantMessageRequest;
  readonly responseType: typeof v1_assistant_assistant_pb.AssistantMessageResponse;
};

export class AssistantService {
  static readonly serviceName: string;
  static readonly ProcessMessage: AssistantServiceProcessMessage;
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

export class AssistantServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  processMessage(metadata?: grpc.Metadata): BidirectionalStream<v1_assistant_assistant_pb.AssistantMessageRequest, v1_assistant_assistant_pb.AssistantMessageResponse>;
}

