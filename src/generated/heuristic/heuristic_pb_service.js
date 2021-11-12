// package: sensory.api.heuristic
// file: heuristic/heuristic.proto

var heuristic_heuristic_pb = require("../heuristic/heuristic_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var HeuristicsService = (function () {
  function HeuristicsService() {}
  HeuristicsService.serviceName = "sensory.api.heuristic.HeuristicsService";
  return HeuristicsService;
}());

HeuristicsService.GetUsageSummary = {
  methodName: "GetUsageSummary",
  service: HeuristicsService,
  requestStream: false,
  responseStream: false,
  requestType: heuristic_heuristic_pb.UsageSummaryRequest,
  responseType: heuristic_heuristic_pb.UsageSummaryResponse
};

HeuristicsService.GetUsageHistory = {
  methodName: "GetUsageHistory",
  service: HeuristicsService,
  requestStream: false,
  responseStream: false,
  requestType: heuristic_heuristic_pb.UsageHistoryRequest,
  responseType: heuristic_heuristic_pb.UsageHistoryResponse
};

exports.HeuristicsService = HeuristicsService;

function HeuristicsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

HeuristicsServiceClient.prototype.getUsageSummary = function getUsageSummary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HeuristicsService.GetUsageSummary, {
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

HeuristicsServiceClient.prototype.getUsageHistory = function getUsageHistory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HeuristicsService.GetUsageHistory, {
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

exports.HeuristicsServiceClient = HeuristicsServiceClient;

