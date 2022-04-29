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

DeviceService.RenewDeviceCredential = {
  methodName: "RenewDeviceCredential",
  service: DeviceService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_device_pb.RenewDeviceCredentialRequest,
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

DeviceService.GetDevice = {
  methodName: "GetDevice",
  service: DeviceService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_device_pb.DeviceRequest,
  responseType: v1_management_device_pb.GetDeviceResponse
};

DeviceService.GetDevices = {
  methodName: "GetDevices",
  service: DeviceService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_device_pb.GetDevicesRequest,
  responseType: v1_management_device_pb.DeviceListResponse
};

DeviceService.UpdateDevice = {
  methodName: "UpdateDevice",
  service: DeviceService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_device_pb.UpdateDeviceRequest,
  responseType: v1_management_device_pb.DeviceResponse
};

DeviceService.DeleteDevice = {
  methodName: "DeleteDevice",
  service: DeviceService,
  requestStream: false,
  responseStream: false,
  requestType: v1_management_device_pb.DeviceRequest,
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

DeviceServiceClient.prototype.renewDeviceCredential = function renewDeviceCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeviceService.RenewDeviceCredential, {
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

DeviceServiceClient.prototype.getDevice = function getDevice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeviceService.GetDevice, {
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

DeviceServiceClient.prototype.getDevices = function getDevices(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeviceService.GetDevices, {
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

DeviceServiceClient.prototype.updateDevice = function updateDevice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeviceService.UpdateDevice, {
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

DeviceServiceClient.prototype.deleteDevice = function deleteDevice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeviceService.DeleteDevice, {
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

