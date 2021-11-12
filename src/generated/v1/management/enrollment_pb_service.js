// package: sensory.api.v1.management
// file: v1/management/enrollment.proto

var v1_management_enrollment_pb = require("../../v1/management/enrollment_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var EnrollmentService = (function () {
  function EnrollmentService() {}
  EnrollmentService.serviceName = "sensory.api.v1.management.EnrollmentService";
  return EnrollmentService;
}());

EnrollmentService.GetEnrollments = {
  methodName: "GetEnrollments",
  service: EnrollmentService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_enrollment_pb.GetEnrollmentsRequest,
  responseType: v1_management_enrollment_pb.GetEnrollmentsResponse
};

EnrollmentService.GetEnrollmentGroups = {
  methodName: "GetEnrollmentGroups",
  service: EnrollmentService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_enrollment_pb.GetEnrollmentsRequest,
  responseType: v1_management_enrollment_pb.GetEnrollmentGroupsResponse
};

EnrollmentService.CreateEnrollmentGroup = {
  methodName: "CreateEnrollmentGroup",
  service: EnrollmentService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_enrollment_pb.CreateEnrollmentGroupRequest,
  responseType: v1_management_enrollment_pb.EnrollmentGroupResponse
};

EnrollmentService.AppendEnrollmentGroup = {
  methodName: "AppendEnrollmentGroup",
  service: EnrollmentService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_enrollment_pb.AppendEnrollmentGroupRequest,
  responseType: v1_management_enrollment_pb.EnrollmentGroupResponse
};

EnrollmentService.DeleteEnrollment = {
  methodName: "DeleteEnrollment",
  service: EnrollmentService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_enrollment_pb.DeleteEnrollmentRequest,
  responseType: v1_management_enrollment_pb.EnrollmentResponse
};

EnrollmentService.DeleteEnrollmentGroup = {
  methodName: "DeleteEnrollmentGroup",
  service: EnrollmentService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_enrollment_pb.DeleteEnrollmentGroupRequest,
  responseType: v1_management_enrollment_pb.EnrollmentGroupResponse
};

exports.EnrollmentService = EnrollmentService;

function EnrollmentServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

EnrollmentServiceClient.prototype.getEnrollments = function getEnrollments(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EnrollmentService.GetEnrollments, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EnrollmentServiceClient.prototype.getEnrollmentGroups = function getEnrollmentGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EnrollmentService.GetEnrollmentGroups, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EnrollmentServiceClient.prototype.createEnrollmentGroup = function createEnrollmentGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EnrollmentService.CreateEnrollmentGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EnrollmentServiceClient.prototype.appendEnrollmentGroup = function appendEnrollmentGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EnrollmentService.AppendEnrollmentGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EnrollmentServiceClient.prototype.deleteEnrollment = function deleteEnrollment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EnrollmentService.DeleteEnrollment, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EnrollmentServiceClient.prototype.deleteEnrollmentGroup = function deleteEnrollmentGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EnrollmentService.DeleteEnrollmentGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.EnrollmentServiceClient = EnrollmentServiceClient;

