// package: sensory.api.v1.management
// file: v1/management/device.proto

import * as v1_management_device_pb from "../../v1/management/device_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DeviceServiceEnrollDevice = {
  readonly methodName: string;
  readonly service: typeof DeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_device_pb.EnrollDeviceRequest;
  readonly responseType: typeof v1_management_device_pb.DeviceResponse;
};

type DeviceServiceGetWhoAmI = {
  readonly methodName: string;
  readonly service: typeof DeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_device_pb.DeviceGetWhoAmIRequest;
  readonly responseType: typeof v1_management_device_pb.DeviceResponse;
};

export class DeviceService {
  static readonly serviceName: string;
  static readonly EnrollDevice: DeviceServiceEnrollDevice;
  static readonly GetWhoAmI: DeviceServiceGetWhoAmI;
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

export class DeviceServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  enrollDevice(
    requestMessage: v1_management_device_pb.EnrollDeviceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_device_pb.DeviceResponse|null) => void
  ): UnaryResponse;
  enrollDevice(
    requestMessage: v1_management_device_pb.EnrollDeviceRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_device_pb.DeviceResponse|null) => void
  ): UnaryResponse;
  getWhoAmI(
    requestMessage: v1_management_device_pb.DeviceGetWhoAmIRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_device_pb.DeviceResponse|null) => void
  ): UnaryResponse;
  getWhoAmI(
    requestMessage: v1_management_device_pb.DeviceGetWhoAmIRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_device_pb.DeviceResponse|null) => void
  ): UnaryResponse;
}

