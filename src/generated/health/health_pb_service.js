// package: sensory.api.health
// file: health/health.proto

var health_health_pb = require("../health/health_pb");
var common_common_pb = require("../common/common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var HealthService = (function () {
  function HealthService() {}
  HealthService.serviceName = "sensory.api.health.HealthService";
  return HealthService;
}());

HealthService.GetHealth = {
  methodName: "GetHealth",
  service: HealthService,
  requestStream: false,
  responseStream: false,
  requestType: health_health_pb.HealthRequest,
  responseType: common_common_pb.ServerHealthResponse
};

exports.HealthService = HealthService;

function HealthServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

HealthServiceClient.prototype.getHealth = function getHealth(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HealthService.GetHealth, {
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

exports.HealthServiceClient = HealthServiceClient;

