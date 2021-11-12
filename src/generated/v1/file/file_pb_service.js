// package: sensory.api.v1.file
// file: v1/file/file.proto

var v1_file_file_pb = require("../../v1/file/file_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var File = (function () {
  function File() {}
  File.serviceName = "sensory.api.v1.file.File";
  return File;
}());

File.GetInfo = {
  methodName: "GetInfo",
  service: File,
  requestStream: false,
  responseStream: false,
  requestType: v1_file_file_pb.FileRequest,
  responseType: v1_file_file_pb.FileInfo
};

File.GetCatalog = {
  methodName: "GetCatalog",
  service: File,
  requestStream: false,
  responseStream: false,
  requestType: v1_file_file_pb.FileCatalogRequest,
  responseType: v1_file_file_pb.FileCatalogResponse
};

File.GetCompleteCatalog = {
  methodName: "GetCompleteCatalog",
  service: File,
  requestStream: false,
  responseStream: false,
  requestType: v1_file_file_pb.FileCompleteCatalogRequest,
  responseType: v1_file_file_pb.FileCatalogResponse
};

File.Download = {
  methodName: "Download",
  service: File,
  requestStream: false,
  responseStream: true,
  requestType: v1_file_file_pb.FileRequest,
  responseType: v1_file_file_pb.FileResponse
};

exports.File = File;

function FileClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

FileClient.prototype.getInfo = function getInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(File.GetInfo, {
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

FileClient.prototype.getCatalog = function getCatalog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(File.GetCatalog, {
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

FileClient.prototype.getCompleteCatalog = function getCompleteCatalog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(File.GetCompleteCatalog, {
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

FileClient.prototype.download = function download(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(File.Download, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.FileClient = FileClient;

