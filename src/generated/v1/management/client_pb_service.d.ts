// package: sensory.api.v1.management
// file: v1/management/client.proto

import * as v1_management_client_pb from "../../v1/management/client_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ClientServiceCreateClient = {
  readonly methodName: string;
  readonly service: typeof ClientService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_client_pb.CreateClientRequest;
  readonly responseType: typeof v1_management_client_pb.ClientResponse;
};

type ClientServiceUpdateClient = {
  readonly methodName: string;
  readonly service: typeof ClientService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_client_pb.UpdateClientRequest;
  readonly responseType: typeof v1_management_client_pb.ClientResponse;
};

type ClientServiceDeleteClient = {
  readonly methodName: string;
  readonly service: typeof ClientService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_client_pb.DeleteClientRequest;
  readonly responseType: typeof v1_management_client_pb.ClientResponse;
};

export class ClientService {
  static readonly serviceName: string;
  static readonly CreateClient: ClientServiceCreateClient;
  static readonly UpdateClient: ClientServiceUpdateClient;
  static readonly DeleteClient: ClientServiceDeleteClient;
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

export class ClientServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createClient(
    requestMessage: v1_management_client_pb.CreateClientRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_client_pb.ClientResponse|null) => void
  ): UnaryResponse;
  createClient(
    requestMessage: v1_management_client_pb.CreateClientRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_client_pb.ClientResponse|null) => void
  ): UnaryResponse;
  updateClient(
    requestMessage: v1_management_client_pb.UpdateClientRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_client_pb.ClientResponse|null) => void
  ): UnaryResponse;
  updateClient(
    requestMessage: v1_management_client_pb.UpdateClientRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_client_pb.ClientResponse|null) => void
  ): UnaryResponse;
  deleteClient(
    requestMessage: v1_management_client_pb.DeleteClientRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_client_pb.ClientResponse|null) => void
  ): UnaryResponse;
  deleteClient(
    requestMessage: v1_management_client_pb.DeleteClientRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_client_pb.ClientResponse|null) => void
  ): UnaryResponse;
}

