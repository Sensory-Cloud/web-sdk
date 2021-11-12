// package: sensory.api.v1.file
// file: v1/file/file.proto

import * as v1_file_file_pb from "../../v1/file/file_pb";
import {grpc} from "@improbable-eng/grpc-web";

type FileGetInfo = {
  readonly methodName: string;
  readonly service: typeof File;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_file_file_pb.FileRequest;
  readonly responseType: typeof v1_file_file_pb.FileInfo;
};

type FileGetCatalog = {
  readonly methodName: string;
  readonly service: typeof File;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_file_file_pb.FileCatalogRequest;
  readonly responseType: typeof v1_file_file_pb.FileCatalogResponse;
};

type FileGetCompleteCatalog = {
  readonly methodName: string;
  readonly service: typeof File;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_file_file_pb.FileCompleteCatalogRequest;
  readonly responseType: typeof v1_file_file_pb.FileCatalogResponse;
};

type FileDownload = {
  readonly methodName: string;
  readonly service: typeof File;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof v1_file_file_pb.FileRequest;
  readonly responseType: typeof v1_file_file_pb.FileResponse;
};

export class File {
  static readonly serviceName: string;
  static readonly GetInfo: FileGetInfo;
  static readonly GetCatalog: FileGetCatalog;
  static readonly GetCompleteCatalog: FileGetCompleteCatalog;
  static readonly Download: FileDownload;
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

export class FileClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getInfo(
    requestMessage: v1_file_file_pb.FileRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_file_file_pb.FileInfo|null) => void
  ): UnaryResponse;
  getInfo(
    requestMessage: v1_file_file_pb.FileRequest,
    callback: (error: ServiceError|null, responseMessage: v1_file_file_pb.FileInfo|null) => void
  ): UnaryResponse;
  getCatalog(
    requestMessage: v1_file_file_pb.FileCatalogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_file_file_pb.FileCatalogResponse|null) => void
  ): UnaryResponse;
  getCatalog(
    requestMessage: v1_file_file_pb.FileCatalogRequest,
    callback: (error: ServiceError|null, responseMessage: v1_file_file_pb.FileCatalogResponse|null) => void
  ): UnaryResponse;
  getCompleteCatalog(
    requestMessage: v1_file_file_pb.FileCompleteCatalogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_file_file_pb.FileCatalogResponse|null) => void
  ): UnaryResponse;
  getCompleteCatalog(
    requestMessage: v1_file_file_pb.FileCompleteCatalogRequest,
    callback: (error: ServiceError|null, responseMessage: v1_file_file_pb.FileCatalogResponse|null) => void
  ): UnaryResponse;
  download(requestMessage: v1_file_file_pb.FileRequest, metadata?: grpc.Metadata): ResponseStream<v1_file_file_pb.FileResponse>;
}

