// package: sensory.api.v1.video
// file: v1/video/video.proto

var v1_video_video_pb = require("../../v1/video/video_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var VideoModels = (function () {
  function VideoModels() {}
  VideoModels.serviceName = "sensory.api.v1.video.VideoModels";
  return VideoModels;
}());

VideoModels.GetModels = {
  methodName: "GetModels",
  service: VideoModels,
  requestStream: false,
  responseStream: false,
  requestType: v1_video_video_pb.GetModelsRequest,
  responseType: v1_video_video_pb.GetModelsResponse
};

exports.VideoModels = VideoModels;

function VideoModelsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

VideoModelsClient.prototype.getModels = function getModels(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VideoModels.GetModels, {
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

exports.VideoModelsClient = VideoModelsClient;

var VideoBiometrics = (function () {
  function VideoBiometrics() {}
  VideoBiometrics.serviceName = "sensory.api.v1.video.VideoBiometrics";
  return VideoBiometrics;
}());

VideoBiometrics.CreateEnrollment = {
  methodName: "CreateEnrollment",
  service: VideoBiometrics,
  requestStream: true,
  responseStream: true,
  requestType: v1_video_video_pb.CreateEnrollmentRequest,
  responseType: v1_video_video_pb.CreateEnrollmentResponse
};

VideoBiometrics.Authenticate = {
  methodName: "Authenticate",
  service: VideoBiometrics,
  requestStream: true,
  responseStream: true,
  requestType: v1_video_video_pb.AuthenticateRequest,
  responseType: v1_video_video_pb.AuthenticateResponse
};

exports.VideoBiometrics = VideoBiometrics;

function VideoBiometricsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

VideoBiometricsClient.prototype.createEnrollment = function createEnrollment(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(VideoBiometrics.CreateEnrollment, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

VideoBiometricsClient.prototype.authenticate = function authenticate(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(VideoBiometrics.Authenticate, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.VideoBiometricsClient = VideoBiometricsClient;

var VideoRecognition = (function () {
  function VideoRecognition() {}
  VideoRecognition.serviceName = "sensory.api.v1.video.VideoRecognition";
  return VideoRecognition;
}());

VideoRecognition.ValidateLiveness = {
  methodName: "ValidateLiveness",
  service: VideoRecognition,
  requestStream: true,
  responseStream: true,
  requestType: v1_video_video_pb.ValidateRecognitionRequest,
  responseType: v1_video_video_pb.LivenessRecognitionResponse
};

exports.VideoRecognition = VideoRecognition;

function VideoRecognitionClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

VideoRecognitionClient.prototype.validateLiveness = function validateLiveness(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(VideoRecognition.ValidateLiveness, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.VideoRecognitionClient = VideoRecognitionClient;

