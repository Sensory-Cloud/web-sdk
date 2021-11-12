// package: sensory.api.oauth
// file: oauth/oauth.proto

var oauth_oauth_pb = require("../oauth/oauth_pb");
var common_common_pb = require("../common/common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var OauthService = (function () {
  function OauthService() {}
  OauthService.serviceName = "sensory.api.oauth.OauthService";
  return OauthService;
}());

OauthService.GetToken = {
  methodName: "GetToken",
  service: OauthService,
  requestStream: false,
  responseStream: false,
  requestType: oauth_oauth_pb.TokenRequest,
  responseType: common_common_pb.TokenResponse
};

OauthService.SignToken = {
  methodName: "SignToken",
  service: OauthService,
  requestStream: false,
  responseStream: false,
  requestType: oauth_oauth_pb.SignTokenRequest,
  responseType: common_common_pb.TokenResponse
};

OauthService.GetWhoAmI = {
  methodName: "GetWhoAmI",
  service: OauthService,
  requestStream: false,
  responseStream: false,
  requestType: oauth_oauth_pb.WhoAmIRequest,
  responseType: oauth_oauth_pb.WhoAmIResponse
};

OauthService.GetPublicKey = {
  methodName: "GetPublicKey",
  service: OauthService,
  requestStream: false,
  responseStream: false,
  requestType: oauth_oauth_pb.PublicKeyRequest,
  responseType: oauth_oauth_pb.PublicKeyResponse
};

exports.OauthService = OauthService;

function OauthServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

OauthServiceClient.prototype.getToken = function getToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OauthService.GetToken, {
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

OauthServiceClient.prototype.signToken = function signToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OauthService.SignToken, {
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

OauthServiceClient.prototype.getWhoAmI = function getWhoAmI(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OauthService.GetWhoAmI, {
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

OauthServiceClient.prototype.getPublicKey = function getPublicKey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OauthService.GetPublicKey, {
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

exports.OauthServiceClient = OauthServiceClient;

