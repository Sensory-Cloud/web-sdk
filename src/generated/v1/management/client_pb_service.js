// package: sensory.api.v1.management
// file: v1/management/client.proto

var v1_management_client_pb = require("../../v1/management/client_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ClientService = (function () {
  function ClientService() {}
  ClientService.serviceName = "sensory.api.v1.management.ClientService";
  return ClientService;
}());

ClientService.CreateClient = {
  methodName: "CreateClient",
  service: ClientService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_client_pb.CreateClientRequest,
  responseType: v1_management_client_pb.ClientResponse
};

ClientService.UpdateClient = {
  methodName: "UpdateClient",
  service: ClientService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_client_pb.UpdateClientRequest,
  responseType: v1_management_client_pb.ClientResponse
};

ClientService.DeleteClient = {
  methodName: "DeleteClient",
  service: ClientService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_client_pb.DeleteClientRequest,
  responseType: v1_management_client_pb.ClientResponse
};

exports.ClientService = ClientService;

function ClientServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ClientServiceClient.prototype.createClient = function createClient(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClientService.CreateClient, {
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

ClientServiceClient.prototype.updateClient = function updateClient(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClientService.UpdateClient, {
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

ClientServiceClient.prototype.deleteClient = function deleteClient(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClientService.DeleteClient, {
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

exports.ClientServiceClient = ClientServiceClient;

