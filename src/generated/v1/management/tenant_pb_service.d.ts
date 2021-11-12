// package: sensory.api.v1.management
// file: v1/management/tenant.proto

import * as v1_management_tenant_pb from "../../v1/management/tenant_pb";
import {grpc} from "@improbable-eng/grpc-web";

type TenantServiceInitializeTenant = {
  readonly methodName: string;
  readonly service: typeof TenantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_tenant_pb.InitializeTenantRequest;
  readonly responseType: typeof v1_management_tenant_pb.InitializeTenantResponse;
};

type TenantServiceGetTenantList = {
  readonly methodName: string;
  readonly service: typeof TenantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_tenant_pb.TenantListRequest;
  readonly responseType: typeof v1_management_tenant_pb.TenantListResponse;
};

type TenantServiceGetTenant = {
  readonly methodName: string;
  readonly service: typeof TenantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_tenant_pb.TenantGetRequest;
  readonly responseType: typeof v1_management_tenant_pb.TenantResponse;
};

export class TenantService {
  static readonly serviceName: string;
  static readonly InitializeTenant: TenantServiceInitializeTenant;
  static readonly GetTenantList: TenantServiceGetTenantList;
  static readonly GetTenant: TenantServiceGetTenant;
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

export class TenantServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  initializeTenant(
    requestMessage: v1_management_tenant_pb.InitializeTenantRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_tenant_pb.InitializeTenantResponse|null) => void
  ): UnaryResponse;
  initializeTenant(
    requestMessage: v1_management_tenant_pb.InitializeTenantRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_tenant_pb.InitializeTenantResponse|null) => void
  ): UnaryResponse;
  getTenantList(
    requestMessage: v1_management_tenant_pb.TenantListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_tenant_pb.TenantListResponse|null) => void
  ): UnaryResponse;
  getTenantList(
    requestMessage: v1_management_tenant_pb.TenantListRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_tenant_pb.TenantListResponse|null) => void
  ): UnaryResponse;
  getTenant(
    requestMessage: v1_management_tenant_pb.TenantGetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_tenant_pb.TenantResponse|null) => void
  ): UnaryResponse;
  getTenant(
    requestMessage: v1_management_tenant_pb.TenantGetRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_tenant_pb.TenantResponse|null) => void
  ): UnaryResponse;
}

