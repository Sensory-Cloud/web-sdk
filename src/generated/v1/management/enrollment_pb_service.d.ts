// package: sensory.api.v1.management
// file: v1/management/enrollment.proto

import * as v1_management_enrollment_pb from "../../v1/management/enrollment_pb";
import {grpc} from "@improbable-eng/grpc-web";

type EnrollmentServiceGetEnrollments = {
  readonly methodName: string;
  readonly service: typeof EnrollmentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_enrollment_pb.GetEnrollmentsRequest;
  readonly responseType: typeof v1_management_enrollment_pb.GetEnrollmentsResponse;
};

type EnrollmentServiceGetEnrollmentGroups = {
  readonly methodName: string;
  readonly service: typeof EnrollmentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_enrollment_pb.GetEnrollmentsRequest;
  readonly responseType: typeof v1_management_enrollment_pb.GetEnrollmentGroupsResponse;
};

type EnrollmentServiceCreateEnrollmentGroup = {
  readonly methodName: string;
  readonly service: typeof EnrollmentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_enrollment_pb.CreateEnrollmentGroupRequest;
  readonly responseType: typeof v1_management_enrollment_pb.EnrollmentGroupResponse;
};

type EnrollmentServiceAppendEnrollmentGroup = {
  readonly methodName: string;
  readonly service: typeof EnrollmentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_enrollment_pb.AppendEnrollmentGroupRequest;
  readonly responseType: typeof v1_management_enrollment_pb.EnrollmentGroupResponse;
};

type EnrollmentServiceDeleteEnrollment = {
  readonly methodName: string;
  readonly service: typeof EnrollmentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_enrollment_pb.DeleteEnrollmentRequest;
  readonly responseType: typeof v1_management_enrollment_pb.EnrollmentResponse;
};

type EnrollmentServiceDeleteEnrollmentGroup = {
  readonly methodName: string;
  readonly service: typeof EnrollmentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_enrollment_pb.DeleteEnrollmentGroupRequest;
  readonly responseType: typeof v1_management_enrollment_pb.EnrollmentGroupResponse;
};

type EnrollmentServiceUpdateEnrollment = {
  readonly methodName: string;
  readonly service: typeof EnrollmentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_enrollment_pb.UpdateEnrollmentRequest;
  readonly responseType: typeof v1_management_enrollment_pb.EnrollmentResponse;
};

type EnrollmentServiceUpdateEnrollmentGroup = {
  readonly methodName: string;
  readonly service: typeof EnrollmentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_enrollment_pb.UpdateEnrollmentGroupRequest;
  readonly responseType: typeof v1_management_enrollment_pb.EnrollmentGroupResponse;
};

type EnrollmentServiceRemoveEnrollmentsFromGroup = {
  readonly methodName: string;
  readonly service: typeof EnrollmentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_management_enrollment_pb.RemoveEnrollmentsRequest;
  readonly responseType: typeof v1_management_enrollment_pb.EnrollmentGroupResponse;
};

export class EnrollmentService {
  static readonly serviceName: string;
  static readonly GetEnrollments: EnrollmentServiceGetEnrollments;
  static readonly GetEnrollmentGroups: EnrollmentServiceGetEnrollmentGroups;
  static readonly CreateEnrollmentGroup: EnrollmentServiceCreateEnrollmentGroup;
  static readonly AppendEnrollmentGroup: EnrollmentServiceAppendEnrollmentGroup;
  static readonly DeleteEnrollment: EnrollmentServiceDeleteEnrollment;
  static readonly DeleteEnrollmentGroup: EnrollmentServiceDeleteEnrollmentGroup;
  static readonly UpdateEnrollment: EnrollmentServiceUpdateEnrollment;
  static readonly UpdateEnrollmentGroup: EnrollmentServiceUpdateEnrollmentGroup;
  static readonly RemoveEnrollmentsFromGroup: EnrollmentServiceRemoveEnrollmentsFromGroup;
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

export class EnrollmentServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getEnrollments(
    requestMessage: v1_management_enrollment_pb.GetEnrollmentsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_enrollment_pb.GetEnrollmentsResponse|null) => void
  ): UnaryResponse;
  getEnrollments(
    requestMessage: v1_management_enrollment_pb.GetEnrollmentsRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_enrollment_pb.GetEnrollmentsResponse|null) => void
  ): UnaryResponse;
  getEnrollmentGroups(
    requestMessage: v1_management_enrollment_pb.GetEnrollmentsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_enrollment_pb.GetEnrollmentGroupsResponse|null) => void
  ): UnaryResponse;
  getEnrollmentGroups(
    requestMessage: v1_management_enrollment_pb.GetEnrollmentsRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_enrollment_pb.GetEnrollmentGroupsResponse|null) => void
  ): UnaryResponse;
  createEnrollmentGroup(
    requestMessage: v1_management_enrollment_pb.CreateEnrollmentGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_enrollment_pb.EnrollmentGroupResponse|null) => void
  ): UnaryResponse;
  createEnrollmentGroup(
    requestMessage: v1_management_enrollment_pb.CreateEnrollmentGroupRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_enrollment_pb.EnrollmentGroupResponse|null) => void
  ): UnaryResponse;
  appendEnrollmentGroup(
    requestMessage: v1_management_enrollment_pb.AppendEnrollmentGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_enrollment_pb.EnrollmentGroupResponse|null) => void
  ): UnaryResponse;
  appendEnrollmentGroup(
    requestMessage: v1_management_enrollment_pb.AppendEnrollmentGroupRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_enrollment_pb.EnrollmentGroupResponse|null) => void
  ): UnaryResponse;
  deleteEnrollment(
    requestMessage: v1_management_enrollment_pb.DeleteEnrollmentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_enrollment_pb.EnrollmentResponse|null) => void
  ): UnaryResponse;
  deleteEnrollment(
    requestMessage: v1_management_enrollment_pb.DeleteEnrollmentRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_enrollment_pb.EnrollmentResponse|null) => void
  ): UnaryResponse;
  deleteEnrollmentGroup(
    requestMessage: v1_management_enrollment_pb.DeleteEnrollmentGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_enrollment_pb.EnrollmentGroupResponse|null) => void
  ): UnaryResponse;
  deleteEnrollmentGroup(
    requestMessage: v1_management_enrollment_pb.DeleteEnrollmentGroupRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_enrollment_pb.EnrollmentGroupResponse|null) => void
  ): UnaryResponse;
  updateEnrollment(
    requestMessage: v1_management_enrollment_pb.UpdateEnrollmentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_enrollment_pb.EnrollmentResponse|null) => void
  ): UnaryResponse;
  updateEnrollment(
    requestMessage: v1_management_enrollment_pb.UpdateEnrollmentRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_enrollment_pb.EnrollmentResponse|null) => void
  ): UnaryResponse;
  updateEnrollmentGroup(
    requestMessage: v1_management_enrollment_pb.UpdateEnrollmentGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_enrollment_pb.EnrollmentGroupResponse|null) => void
  ): UnaryResponse;
  updateEnrollmentGroup(
    requestMessage: v1_management_enrollment_pb.UpdateEnrollmentGroupRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_enrollment_pb.EnrollmentGroupResponse|null) => void
  ): UnaryResponse;
  removeEnrollmentsFromGroup(
    requestMessage: v1_management_enrollment_pb.RemoveEnrollmentsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_management_enrollment_pb.EnrollmentGroupResponse|null) => void
  ): UnaryResponse;
  removeEnrollmentsFromGroup(
    requestMessage: v1_management_enrollment_pb.RemoveEnrollmentsRequest,
    callback: (error: ServiceError|null, responseMessage: v1_management_enrollment_pb.EnrollmentGroupResponse|null) => void
  ): UnaryResponse;
}

