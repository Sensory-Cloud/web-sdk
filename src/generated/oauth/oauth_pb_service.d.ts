// package: sensory.api.oauth
// file: oauth/oauth.proto

import * as oauth_oauth_pb from "../oauth/oauth_pb";
import * as common_common_pb from "../common/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type OauthServiceGetToken = {
  readonly methodName: string;
  readonly service: typeof OauthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oauth_oauth_pb.TokenRequest;
  readonly responseType: typeof common_common_pb.TokenResponse;
};

type OauthServiceSignToken = {
  readonly methodName: string;
  readonly service: typeof OauthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oauth_oauth_pb.SignTokenRequest;
  readonly responseType: typeof common_common_pb.TokenResponse;
};

type OauthServiceGetWhoAmI = {
  readonly methodName: string;
  readonly service: typeof OauthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oauth_oauth_pb.WhoAmIRequest;
  readonly responseType: typeof oauth_oauth_pb.WhoAmIResponse;
};

type OauthServiceGetPublicKey = {
  readonly methodName: string;
  readonly service: typeof OauthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oauth_oauth_pb.PublicKeyRequest;
  readonly responseType: typeof oauth_oauth_pb.PublicKeyResponse;
};

export class OauthService {
  static readonly serviceName: string;
  static readonly GetToken: OauthServiceGetToken;
  static readonly SignToken: OauthServiceSignToken;
  static readonly GetWhoAmI: OauthServiceGetWhoAmI;
  static readonly GetPublicKey: OauthServiceGetPublicKey;
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

export class OauthServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getToken(
    requestMessage: oauth_oauth_pb.TokenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: common_common_pb.TokenResponse|null) => void
  ): UnaryResponse;
  getToken(
    requestMessage: oauth_oauth_pb.TokenRequest,
    callback: (error: ServiceError|null, responseMessage: common_common_pb.TokenResponse|null) => void
  ): UnaryResponse;
  signToken(
    requestMessage: oauth_oauth_pb.SignTokenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: common_common_pb.TokenResponse|null) => void
  ): UnaryResponse;
  signToken(
    requestMessage: oauth_oauth_pb.SignTokenRequest,
    callback: (error: ServiceError|null, responseMessage: common_common_pb.TokenResponse|null) => void
  ): UnaryResponse;
  getWhoAmI(
    requestMessage: oauth_oauth_pb.WhoAmIRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oauth_oauth_pb.WhoAmIResponse|null) => void
  ): UnaryResponse;
  getWhoAmI(
    requestMessage: oauth_oauth_pb.WhoAmIRequest,
    callback: (error: ServiceError|null, responseMessage: oauth_oauth_pb.WhoAmIResponse|null) => void
  ): UnaryResponse;
  getPublicKey(
    requestMessage: oauth_oauth_pb.PublicKeyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oauth_oauth_pb.PublicKeyResponse|null) => void
  ): UnaryResponse;
  getPublicKey(
    requestMessage: oauth_oauth_pb.PublicKeyRequest,
    callback: (error: ServiceError|null, responseMessage: oauth_oauth_pb.PublicKeyResponse|null) => void
  ): UnaryResponse;
}

