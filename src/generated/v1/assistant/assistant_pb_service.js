// package: sensory.api.v1.assistant
// file: v1/assistant/assistant.proto

var v1_assistant_assistant_pb = require("../../v1/assistant/assistant_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AssistantService = (function () {
  function AssistantService() {}
  AssistantService.serviceName = "sensory.api.v1.assistant.AssistantService";
  return AssistantService;
}());

AssistantService.ProcessMessage = {
  methodName: "ProcessMessage",
  service: AssistantService,
  requestStream: true,
  responseStream: true,
  requestType: v1_assistant_assistant_pb.AssistantMessageRequest,
  responseType: v1_assistant_assistant_pb.AssistantMessageResponse
};

exports.AssistantService = AssistantService;

function AssistantServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AssistantServiceClient.prototype.processMessage = function processMessage(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(AssistantService.ProcessMessage, {
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

exports.AssistantServiceClient = AssistantServiceClient;

