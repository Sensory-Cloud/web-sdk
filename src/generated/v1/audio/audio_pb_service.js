// package: sensory.api.v1.audio
// file: v1/audio/audio.proto

var v1_audio_audio_pb = require("../../v1/audio/audio_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AudioModels = (function () {
  function AudioModels() {}
  AudioModels.serviceName = "sensory.api.v1.audio.AudioModels";
  return AudioModels;
}());

AudioModels.GetModels = {
  methodName: "GetModels",
  service: AudioModels,
  requestStream: false,
  responseStream: false,
  requestType: v1_audio_audio_pb.GetModelsRequest,
  responseType: v1_audio_audio_pb.GetModelsResponse
};

exports.AudioModels = AudioModels;

function AudioModelsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AudioModelsClient.prototype.getModels = function getModels(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AudioModels.GetModels, {
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

exports.AudioModelsClient = AudioModelsClient;

var AudioBiometrics = (function () {
  function AudioBiometrics() {}
  AudioBiometrics.serviceName = "sensory.api.v1.audio.AudioBiometrics";
  return AudioBiometrics;
}());

AudioBiometrics.CreateEnrollment = {
  methodName: "CreateEnrollment",
  service: AudioBiometrics,
  requestStream: true,
  responseStream: true,
  requestType: v1_audio_audio_pb.CreateEnrollmentRequest,
  responseType: v1_audio_audio_pb.CreateEnrollmentResponse
};

AudioBiometrics.Authenticate = {
  methodName: "Authenticate",
  service: AudioBiometrics,
  requestStream: true,
  responseStream: true,
  requestType: v1_audio_audio_pb.AuthenticateRequest,
  responseType: v1_audio_audio_pb.AuthenticateResponse
};

exports.AudioBiometrics = AudioBiometrics;

function AudioBiometricsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AudioBiometricsClient.prototype.createEnrollment = function createEnrollment(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(AudioBiometrics.CreateEnrollment, {
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

AudioBiometricsClient.prototype.authenticate = function authenticate(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(AudioBiometrics.Authenticate, {
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

exports.AudioBiometricsClient = AudioBiometricsClient;

var AudioEvents = (function () {
  function AudioEvents() {}
  AudioEvents.serviceName = "sensory.api.v1.audio.AudioEvents";
  return AudioEvents;
}());

AudioEvents.ValidateEvent = {
  methodName: "ValidateEvent",
  service: AudioEvents,
  requestStream: true,
  responseStream: true,
  requestType: v1_audio_audio_pb.ValidateEventRequest,
  responseType: v1_audio_audio_pb.ValidateEventResponse
};

AudioEvents.CreateEnrolledEvent = {
  methodName: "CreateEnrolledEvent",
  service: AudioEvents,
  requestStream: true,
  responseStream: true,
  requestType: v1_audio_audio_pb.CreateEnrolledEventRequest,
  responseType: v1_audio_audio_pb.CreateEnrollmentResponse
};

AudioEvents.ValidateEnrolledEvent = {
  methodName: "ValidateEnrolledEvent",
  service: AudioEvents,
  requestStream: true,
  responseStream: true,
  requestType: v1_audio_audio_pb.ValidateEnrolledEventRequest,
  responseType: v1_audio_audio_pb.ValidateEnrolledEventResponse
};

exports.AudioEvents = AudioEvents;

function AudioEventsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AudioEventsClient.prototype.validateEvent = function validateEvent(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(AudioEvents.ValidateEvent, {
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

AudioEventsClient.prototype.createEnrolledEvent = function createEnrolledEvent(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(AudioEvents.CreateEnrolledEvent, {
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

AudioEventsClient.prototype.validateEnrolledEvent = function validateEnrolledEvent(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(AudioEvents.ValidateEnrolledEvent, {
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

exports.AudioEventsClient = AudioEventsClient;

var AudioTranscriptions = (function () {
  function AudioTranscriptions() {}
  AudioTranscriptions.serviceName = "sensory.api.v1.audio.AudioTranscriptions";
  return AudioTranscriptions;
}());

AudioTranscriptions.Transcribe = {
  methodName: "Transcribe",
  service: AudioTranscriptions,
  requestStream: true,
  responseStream: true,
  requestType: v1_audio_audio_pb.TranscribeRequest,
  responseType: v1_audio_audio_pb.TranscribeResponse
};

exports.AudioTranscriptions = AudioTranscriptions;

function AudioTranscriptionsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AudioTranscriptionsClient.prototype.transcribe = function transcribe(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(AudioTranscriptions.Transcribe, {
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

exports.AudioTranscriptionsClient = AudioTranscriptionsClient;

var AudioSynthesis = (function () {
  function AudioSynthesis() {}
  AudioSynthesis.serviceName = "sensory.api.v1.audio.AudioSynthesis";
  return AudioSynthesis;
}());

AudioSynthesis.SynthesizeSpeech = {
  methodName: "SynthesizeSpeech",
  service: AudioSynthesis,
  requestStream: false,
  responseStream: true,
  requestType: v1_audio_audio_pb.SynthesizeSpeechRequest,
  responseType: v1_audio_audio_pb.SynthesizeSpeechResponse
};

exports.AudioSynthesis = AudioSynthesis;

function AudioSynthesisClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AudioSynthesisClient.prototype.synthesizeSpeech = function synthesizeSpeech(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(AudioSynthesis.SynthesizeSpeech, {
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

exports.AudioSynthesisClient = AudioSynthesisClient;

