// package: sensory.api.v1.management
// file: v1/management/configuration.proto

import * as v1_management_configuration_pb from "../../v1/management/configuration_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ConfigurationServiceGetFileConfiguration = {
  readonly methodName: string;
  readonly service: typeof ConfigurationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_configuration_pb.FileConfigurationRequest;
  readonly responseType: typeof v1_management_configuration_pb.FileConfigurationResponse;
};

type ConfigurationServiceUpsertFileConfiguration = {
  readonly methodName: string;
  readonly service: typeof ConfigurationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_configuration_pb.UpsertFileConfigurationRequest;
  readonly responseType: typeof v1_management_configuration_pb.FileConfigurationResponse;
};

export class ConfigurationService {
  static readonly serviceName: string;
  static readonly GetFileConfiguration: ConfigurationServiceGetFileConfiguration;
  static readonly UpsertFileConfiguration: ConfigurationServiceUpsertFileConfiguration;
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

export class ConfigurationServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getFileConfiguration(
    requestMessage: v1_management_configuration_pb.FileConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_configuration_pb.FileConfigurationResponse|null) => void
  ): UnaryResponse;
  getFileConfiguration(
    requestMessage: v1_management_configuration_pb.FileConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_configuration_pb.FileConfigurationResponse|null) => void
  ): UnaryResponse;
  upsertFileConfiguration(
    requestMessage: v1_management_configuration_pb.UpsertFileConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_configuration_pb.FileConfigurationResponse|null) => void
  ): UnaryResponse;
  upsertFileConfiguration(
    requestMessage: v1_management_configuration_pb.UpsertFileConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_configuration_pb.FileConfigurationResponse|null) => void
  ): UnaryResponse;
}

