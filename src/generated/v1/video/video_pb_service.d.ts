// package: sensory.api.v1.video
// file: v1/video/video.proto

import * as v1_video_video_pb from "../../v1/video/video_pb";
import {grpc} from "@improbable-eng/grpc-web";

type VideoModelsGetModels = {
  readonly methodName: string;
  readonly service: typeof VideoModels;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_video_video_pb.GetModelsRequest;
  readonly responseType: typeof v1_video_video_pb.GetModelsResponse;
};

export class VideoModels {
  static readonly serviceName: string;
  static readonly GetModels: VideoModelsGetModels;
}

type VideoBiometricsCreateEnrollment = {
  readonly methodName: string;
  readonly service: typeof VideoBiometrics;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof v1_video_video_pb.CreateEnrollmentRequest;
  readonly responseType: typeof v1_video_video_pb.CreateEnrollmentResponse;
};

type VideoBiometricsAuthenticate = {
  readonly methodName: string;
  readonly service: typeof VideoBiometrics;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof v1_video_video_pb.AuthenticateRequest;
  readonly responseType: typeof v1_video_video_pb.AuthenticateResponse;
};

export class VideoBiometrics {
  static readonly serviceName: string;
  static readonly CreateEnrollment: VideoBiometricsCreateEnrollment;
  static readonly Authenticate: VideoBiometricsAuthenticate;
}

type VideoRecognitionValidateLiveness = {
  readonly methodName: string;
  readonly service: typeof VideoRecognition;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof v1_video_video_pb.ValidateRecognitionRequest;
  readonly responseType: typeof v1_video_video_pb.LivenessRecognitionResponse;
};

export class VideoRecognition {
  static readonly serviceName: string;
  static readonly ValidateLiveness: VideoRecognitionValidateLiveness;
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

export class VideoModelsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getModels(
    requestMessage: v1_video_video_pb.GetModelsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_video_video_pb.GetModelsResponse|null) => void
  ): UnaryResponse;
  getModels(
    requestMessage: v1_video_video_pb.GetModelsRequest,
    callback: (error: ServiceError|null, responseMessage: v1_video_video_pb.GetModelsResponse|null) => void
  ): UnaryResponse;
}

export class VideoBiometricsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createEnrollment(metadata?: grpc.Metadata): BidirectionalStream<v1_video_video_pb.CreateEnrollmentRequest, v1_video_video_pb.CreateEnrollmentResponse>;
  authenticate(metadata?: grpc.Metadata): BidirectionalStream<v1_video_video_pb.AuthenticateRequest, v1_video_video_pb.AuthenticateResponse>;
}

export class VideoRecognitionClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  validateLiveness(metadata?: grpc.Metadata): BidirectionalStream<v1_video_video_pb.ValidateRecognitionRequest, v1_video_video_pb.LivenessRecognitionResponse>;
}

