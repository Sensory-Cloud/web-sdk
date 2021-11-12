// package: sensory.api.v1.management
// file: v1/management/device.proto

var v1_management_device_pb = require("../../v1/management/device_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DeviceService = (function () {
  function DeviceService() {}
  DeviceService.serviceName = "sensory.api.v1.management.DeviceService";
  return DeviceService;
}());

DeviceService.EnrollDevice = {
  methodName: "EnrollDevice",
  service: DeviceService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_device_pb.EnrollDeviceRequest,
  responseType: v1_management_device_pb.DeviceResponse
};

DeviceService.GetWhoAmI = {
  methodName: "GetWhoAmI",
  service: DeviceService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_device_pb.DeviceGetWhoAmIRequest,
  responseType: v1_management_device_pb.DeviceResponse
};

exports.DeviceService = DeviceService;

function DeviceServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DeviceServiceClient.prototype.enrollDevice = function enrollDevice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeviceService.EnrollDevice, {
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

DeviceServiceClient.prototype.getWhoAmI = function getWhoAmI(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeviceService.GetWhoAmI, {
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

exports.DeviceServiceClient = DeviceServiceClient;

