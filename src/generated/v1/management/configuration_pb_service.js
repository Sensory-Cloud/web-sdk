// package: sensory.api.v1.management
// file: v1/management/configuration.proto

var v1_management_configuration_pb = require("../../v1/management/configuration_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ConfigurationService = (function () {
  function ConfigurationService() {}
  ConfigurationService.serviceName = "sensory.api.v1.management.ConfigurationService";
  return ConfigurationService;
}());

ConfigurationService.GetFileConfiguration = {
  methodName: "GetFileConfiguration",
  service: ConfigurationService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_configuration_pb.FileConfigurationRequest,
  responseType: v1_management_configuration_pb.FileConfigurationResponse
};

ConfigurationService.UpsertFileConfiguration = {
  methodName: "UpsertFileConfiguration",
  service: ConfigurationService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_configuration_pb.UpsertFileConfigurationRequest,
  responseType: v1_management_configuration_pb.FileConfigurationResponse
};

exports.ConfigurationService = ConfigurationService;

function ConfigurationServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ConfigurationServiceClient.prototype.getFileConfiguration = function getFileConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigurationService.GetFileConfiguration, {
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

ConfigurationServiceClient.prototype.upsertFileConfiguration = function upsertFileConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigurationService.UpsertFileConfiguration, {
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

exports.ConfigurationServiceClient = ConfigurationServiceClient;

