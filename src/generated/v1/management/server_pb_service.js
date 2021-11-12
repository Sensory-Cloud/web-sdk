// package: sensory.api.v1.management
// file: v1/management/server.proto

var v1_management_server_pb = require("../../v1/management/server_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ServerService = (function () {
  function ServerService() {}
  ServerService.serviceName = "sensory.api.v1.management.ServerService";
  return ServerService;
}());

ServerService.GetConfig = {
  methodName: "GetConfig",
  service: ServerService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_server_pb.ServerConfigRequest,
  responseType: v1_management_server_pb.ServerConfig
};

ServerService.PutHeartbeat = {
  methodName: "PutHeartbeat",
  service: ServerService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_server_pb.ServerHeartbeatRequest,
  responseType: v1_management_server_pb.HeartbeatResponse
};

ServerService.GetServerList = {
  methodName: "GetServerList",
  service: ServerService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_server_pb.ServerListRequest,
  responseType: v1_management_server_pb.ServerListResponse
};

exports.ServerService = ServerService;

function ServerServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ServerServiceClient.prototype.getConfig = function getConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ServerService.GetConfig, {
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

ServerServiceClient.prototype.putHeartbeat = function putHeartbeat(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ServerService.PutHeartbeat, {
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

ServerServiceClient.prototype.getServerList = function getServerList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ServerService.GetServerList, {
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

exports.ServerServiceClient = ServerServiceClient;

