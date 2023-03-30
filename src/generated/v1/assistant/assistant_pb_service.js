// package: sensory.api.v1.assistant
// file: v1/assistant/assistant.proto

var v1_assistant_assistant_pb = require("../../v1/assistant/assistant_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AssistantService = (function () {
  function AssistantService() {}
  AssistantService.serviceName = "sensory.api.v1.assistant.AssistantService";
  return AssistantService;
}());

AssistantService.TextChat = {
  methodName: "TextChat",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: v1_assistant_assistant_pb.TextChatRequest,
  responseType: v1_assistant_assistant_pb.TextChatResponse
};

exports.AssistantService = AssistantService;

function AssistantServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AssistantServiceClient.prototype.textChat = function textChat(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.TextChat, {
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

exports.AssistantServiceClient = AssistantServiceClient;

