// package: sensory.api.v1.management
// file: v1/management/key.proto

var v1_management_key_pb = require("../../v1/management/key_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var KeyService = (function () {
  function KeyService() {}
  KeyService.serviceName = "sensory.api.v1.management.KeyService";
  return KeyService;
}());

KeyService.CreateKey = {
  methodName: "CreateKey",
  service: KeyService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_key_pb.CreateKeyRequest,
  responseType: v1_management_key_pb.KeyResponse
};

KeyService.GetKeys = {
  methodName: "GetKeys",
  service: KeyService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_key_pb.GetKeysRequest,
  responseType: v1_management_key_pb.GetKeysResponse
};

exports.KeyService = KeyService;

function KeyServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

KeyServiceClient.prototype.createKey = function createKey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(KeyService.CreateKey, {
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

KeyServiceClient.prototype.getKeys = function getKeys(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(KeyService.GetKeys, {
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

exports.KeyServiceClient = KeyServiceClient;

