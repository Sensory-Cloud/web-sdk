// package: sensory.api.v1.audio
// file: v1/audio/audio.proto

import * as v1_audio_audio_pb from "../../v1/audio/audio_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AudioModelsGetModels = {
  readonly methodName: string;
  readonly service: typeof AudioModels;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_audio_audio_pb.GetModelsRequest;
  readonly responseType: typeof v1_audio_audio_pb.GetModelsResponse;
};

export class AudioModels {
  static readonly serviceName: string;
  static readonly GetModels: AudioModelsGetModels;
}

type AudioBiometricsCreateEnrollment = {
  readonly methodName: string;
  readonly service: typeof AudioBiometrics;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof v1_audio_audio_pb.CreateEnrollmentRequest;
  readonly responseType: typeof v1_audio_audio_pb.CreateEnrollmentResponse;
};

type AudioBiometricsAuthenticate = {
  readonly methodName: string;
  readonly service: typeof AudioBiometrics;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof v1_audio_audio_pb.AuthenticateRequest;
  readonly responseType: typeof v1_audio_audio_pb.AuthenticateResponse;
};

export class AudioBiometrics {
  static readonly serviceName: string;
  static readonly CreateEnrollment: AudioBiometricsCreateEnrollment;
  static readonly Authenticate: AudioBiometricsAuthenticate;
}

type AudioEventsValidateEvent = {
  readonly methodName: string;
  readonly service: typeof AudioEvents;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof v1_audio_audio_pb.ValidateEventRequest;
  readonly responseType: typeof v1_audio_audio_pb.ValidateEventResponse;
};

type AudioEventsCreateEnrolledEvent = {
  readonly methodName: string;
  readonly service: typeof AudioEvents;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof v1_audio_audio_pb.CreateEnrolledEventRequest;
  readonly responseType: typeof v1_audio_audio_pb.CreateEnrollmentResponse;
};

type AudioEventsValidateEnrolledEvent = {
  readonly methodName: string;
  readonly service: typeof AudioEvents;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof v1_audio_audio_pb.ValidateEnrolledEventRequest;
  readonly responseType: typeof v1_audio_audio_pb.ValidateEnrolledEventResponse;
};

export class AudioEvents {
  static readonly serviceName: string;
  static readonly ValidateEvent: AudioEventsValidateEvent;
  static readonly CreateEnrolledEvent: AudioEventsCreateEnrolledEvent;
  static readonly ValidateEnrolledEvent: AudioEventsValidateEnrolledEvent;
}

type AudioTranscriptionsTranscribe = {
  readonly methodName: string;
  readonly service: typeof AudioTranscriptions;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof v1_audio_audio_pb.TranscribeRequest;
  readonly responseType: typeof v1_audio_audio_pb.TranscribeResponse;
};

export class AudioTranscriptions {
  static readonly serviceName: string;
  static readonly Transcribe: AudioTranscriptionsTranscribe;
}

type AudioSynthesisSynthesizeSpeech = {
  readonly methodName: string;
  readonly service: typeof AudioSynthesis;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof v1_audio_audio_pb.SynthesizeSpeechRequest;
  readonly responseType: typeof v1_audio_audio_pb.SynthesizeSpeechResponse;
};

export class AudioSynthesis {
  static readonly serviceName: string;
  static readonly SynthesizeSpeech: AudioSynthesisSynthesizeSpeech;
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

export class AudioModelsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getModels(
    requestMessage: v1_audio_audio_pb.GetModelsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_audio_audio_pb.GetModelsResponse|null) => void
  ): UnaryResponse;
  getModels(
    requestMessage: v1_audio_audio_pb.GetModelsRequest,
    callback: (error: ServiceError|null, responseMessage: v1_audio_audio_pb.GetModelsResponse|null) => void
  ): UnaryResponse;
}

export class AudioBiometricsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createEnrollment(metadata?: grpc.Metadata): BidirectionalStream<v1_audio_audio_pb.CreateEnrollmentRequest, v1_audio_audio_pb.CreateEnrollmentResponse>;
  authenticate(metadata?: grpc.Metadata): BidirectionalStream<v1_audio_audio_pb.AuthenticateRequest, v1_audio_audio_pb.AuthenticateResponse>;
}

export class AudioEventsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  validateEvent(metadata?: grpc.Metadata): BidirectionalStream<v1_audio_audio_pb.ValidateEventRequest, v1_audio_audio_pb.ValidateEventResponse>;
  createEnrolledEvent(metadata?: grpc.Metadata): BidirectionalStream<v1_audio_audio_pb.CreateEnrolledEventRequest, v1_audio_audio_pb.CreateEnrollmentResponse>;
  validateEnrolledEvent(metadata?: grpc.Metadata): BidirectionalStream<v1_audio_audio_pb.ValidateEnrolledEventRequest, v1_audio_audio_pb.ValidateEnrolledEventResponse>;
}

export class AudioTranscriptionsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  transcribe(metadata?: grpc.Metadata): BidirectionalStream<v1_audio_audio_pb.TranscribeRequest, v1_audio_audio_pb.TranscribeResponse>;
}

export class AudioSynthesisClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  synthesizeSpeech(requestMessage: v1_audio_audio_pb.SynthesizeSpeechRequest, metadata?: grpc.Metadata): ResponseStream<v1_audio_audio_pb.SynthesizeSpeechResponse>;
}

