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

type DeviceServiceRenewDeviceCredential = {
  readonly methodName: string;
  readonly service: typeof DeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_device_pb.RenewDeviceCredentialRequest;
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

type DeviceServiceGetDevice = {
  readonly methodName: string;
  readonly service: typeof DeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_device_pb.DeviceRequest;
  readonly responseType: typeof v1_management_device_pb.GetDeviceResponse;
};

type DeviceServiceGetDevices = {
  readonly methodName: string;
  readonly service: typeof DeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_device_pb.GetDevicesRequest;
  readonly responseType: typeof v1_management_device_pb.DeviceListResponse;
};

type DeviceServiceUpdateDevice = {
  readonly methodName: string;
  readonly service: typeof DeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_device_pb.UpdateDeviceRequest;
  readonly responseType: typeof v1_management_device_pb.DeviceResponse;
};

type DeviceServiceDeleteDevice = {
  readonly methodName: string;
  readonly service: typeof DeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_device_pb.DeviceRequest;
  readonly responseType: typeof v1_management_device_pb.DeviceResponse;
};

export class DeviceService {
  static readonly serviceName: string;
  static readonly EnrollDevice: DeviceServiceEnrollDevice;
  static readonly RenewDeviceCredential: DeviceServiceRenewDeviceCredential;
  static readonly GetWhoAmI: DeviceServiceGetWhoAmI;
  static readonly GetDevice: DeviceServiceGetDevice;
  static readonly GetDevices: DeviceServiceGetDevices;
  static readonly UpdateDevice: DeviceServiceUpdateDevice;
  static readonly DeleteDevice: DeviceServiceDeleteDevice;
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
  renewDeviceCredential(
    requestMessage: v1_management_device_pb.RenewDeviceCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_device_pb.DeviceResponse|null) => void
  ): UnaryResponse;
  renewDeviceCredential(
    requestMessage: v1_management_device_pb.RenewDeviceCredentialRequest,
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
  getDevice(
    requestMessage: v1_management_device_pb.DeviceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_device_pb.GetDeviceResponse|null) => void
  ): UnaryResponse;
  getDevice(
    requestMessage: v1_management_device_pb.DeviceRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_device_pb.GetDeviceResponse|null) => void
  ): UnaryResponse;
  getDevices(
    requestMessage: v1_management_device_pb.GetDevicesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_device_pb.DeviceListResponse|null) => void
  ): UnaryResponse;
  getDevices(
    requestMessage: v1_management_device_pb.GetDevicesRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_device_pb.DeviceListResponse|null) => void
  ): UnaryResponse;
  updateDevice(
    requestMessage: v1_management_device_pb.UpdateDeviceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_device_pb.DeviceResponse|null) => void
  ): UnaryResponse;
  updateDevice(
    requestMessage: v1_management_device_pb.UpdateDeviceRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_device_pb.DeviceResponse|null) => void
  ): UnaryResponse;
  deleteDevice(
    requestMessage: v1_management_device_pb.DeviceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_device_pb.DeviceResponse|null) => void
  ): UnaryResponse;
  deleteDevice(
    requestMessage: v1_management_device_pb.DeviceRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_device_pb.DeviceResponse|null) => void
  ): UnaryResponse;
}

