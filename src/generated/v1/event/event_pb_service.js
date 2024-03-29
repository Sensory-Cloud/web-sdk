// package: sensory.api.v1.event
// file: v1/event/event.proto

var v1_event_event_pb = require("../../v1/event/event_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var EventService = (function () {
  function EventService() {}
  EventService.serviceName = "sensory.api.v1.event.EventService";
  return EventService;
}());

EventService.PublishUsageEvents = {
  methodName: "PublishUsageEvents",
  service: EventService,
  requestStream: false,
  responseStream: false,
  requestType: v1_event_event_pb.PublishUsageEventsRequest,
  responseType: v1_event_event_pb.PublishUsageEventsResponse
};

EventService.GetUsageEventList = {
  methodName: "GetUsageEventList",
  service: EventService,
  requestStream: false,
  responseStream: false,
  requestType: v1_event_event_pb.UsageEventListRequest,
  responseType: v1_event_event_pb.UsageEventListResponse
};

EventService.GetUsageEventSummary = {
  methodName: "GetUsageEventSummary",
  service: EventService,
  requestStream: false,
  responseStream: false,
  requestType: v1_event_event_pb.UsageEventListRequest,
  responseType: v1_event_event_pb.UsageEventSummary
};

EventService.GetGlobalUsageSummary = {
  methodName: "GetGlobalUsageSummary",
  service: EventService,
  requestStream: false,
  responseStream: false,
  requestType: v1_event_event_pb.GlobalEventSummaryRequest,
  responseType: v1_event_event_pb.UsageEventSummary
};

exports.EventService = EventService;

function EventServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

EventServiceClient.prototype.publishUsageEvents = function publishUsageEvents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EventService.PublishUsageEvents, {
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

EventServiceClient.prototype.getUsageEventList = function getUsageEventList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EventService.GetUsageEventList, {
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

EventServiceClient.prototype.getUsageEventSummary = function getUsageEventSummary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EventService.GetUsageEventSummary, {
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

EventServiceClient.prototype.getGlobalUsageSummary = function getGlobalUsageSummary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EventService.GetGlobalUsageSummary, {
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

exports.EventServiceClient = EventServiceClient;

