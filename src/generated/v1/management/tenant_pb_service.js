// package: sensory.api.v1.management
// file: v1/management/tenant.proto

var v1_management_tenant_pb = require("../../v1/management/tenant_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TenantService = (function () {
  function TenantService() {}
  TenantService.serviceName = "sensory.api.v1.management.TenantService";
  return TenantService;
}());

TenantService.InitializeTenant = {
  methodName: "InitializeTenant",
  service: TenantService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_tenant_pb.InitializeTenantRequest,
  responseType: v1_management_tenant_pb.InitializeTenantResponse
};

TenantService.GetTenantList = {
  methodName: "GetTenantList",
  service: TenantService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_tenant_pb.TenantListRequest,
  responseType: v1_management_tenant_pb.TenantListResponse
};

TenantService.GetTenant = {
  methodName: "GetTenant",
  service: TenantService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_tenant_pb.TenantGetRequest,
  responseType: v1_management_tenant_pb.TenantResponse
};

exports.TenantService = TenantService;

function TenantServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TenantServiceClient.prototype.initializeTenant = function initializeTenant(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TenantService.InitializeTenant, {
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

TenantServiceClient.prototype.getTenantList = function getTenantList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TenantService.GetTenantList, {
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

TenantServiceClient.prototype.getTenant = function getTenant(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TenantService.GetTenant, {
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

exports.TenantServiceClient = TenantServiceClient;

