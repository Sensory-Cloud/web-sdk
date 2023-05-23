// source: oauth/oauth.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var validate_validate_pb = require('../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var common_common_pb = require('../common/common_pb.js');
goog.object.extend(proto, common_common_pb);
goog.exportSymbol('proto.sensory.api.oauth.PublicKeyRequest', null, global);
goog.exportSymbol('proto.sensory.api.oauth.PublicKeyResponse', null, global);
goog.exportSymbol('proto.sensory.api.oauth.SignTokenRequest', null, global);
goog.exportSymbol('proto.sensory.api.oauth.SignTokenRequest.TokenScope', null, global);
goog.exportSymbol('proto.sensory.api.oauth.TokenRequest', null, global);
goog.exportSymbol('proto.sensory.api.oauth.WhoAmIRequest', null, global);
goog.exportSymbol('proto.sensory.api.oauth.WhoAmIResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.oauth.TokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.oauth.TokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.oauth.TokenRequest.displayName = 'proto.sensory.api.oauth.TokenRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.oauth.SignTokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.oauth.SignTokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.oauth.SignTokenRequest.displayName = 'proto.sensory.api.oauth.SignTokenRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.oauth.WhoAmIRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.oauth.WhoAmIRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.oauth.WhoAmIRequest.displayName = 'proto.sensory.api.oauth.WhoAmIRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.oauth.WhoAmIResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.oauth.WhoAmIResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.oauth.WhoAmIResponse.displayName = 'proto.sensory.api.oauth.WhoAmIResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.oauth.PublicKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.oauth.PublicKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.oauth.PublicKeyRequest.displayName = 'proto.sensory.api.oauth.PublicKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensory.api.oauth.PublicKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.oauth.PublicKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.oauth.PublicKeyResponse.displayName = 'proto.sensory.api.oauth.PublicKeyResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.oauth.TokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.oauth.TokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.oauth.TokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.oauth.TokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    secret: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.oauth.TokenRequest}
 */
proto.sensory.api.oauth.TokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.oauth.TokenRequest;
  return proto.sensory.api.oauth.TokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.oauth.TokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.oauth.TokenRequest}
 */
proto.sensory.api.oauth.TokenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.oauth.TokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.oauth.TokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.oauth.TokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.oauth.TokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSecret();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string clientId = 1;
 * @return {string}
 */
proto.sensory.api.oauth.TokenRequest.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.oauth.TokenRequest} returns this
 */
proto.sensory.api.oauth.TokenRequest.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string secret = 2;
 * @return {string}
 */
proto.sensory.api.oauth.TokenRequest.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.oauth.TokenRequest} returns this
 */
proto.sensory.api.oauth.TokenRequest.prototype.setSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.oauth.SignTokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.oauth.SignTokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.oauth.SignTokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.oauth.SignTokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    subject: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scope: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.oauth.SignTokenRequest}
 */
proto.sensory.api.oauth.SignTokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.oauth.SignTokenRequest;
  return proto.sensory.api.oauth.SignTokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.oauth.SignTokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.oauth.SignTokenRequest}
 */
proto.sensory.api.oauth.SignTokenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 2:
      var value = /** @type {!proto.sensory.api.oauth.SignTokenRequest.TokenScope} */ (reader.readEnum());
      msg.setScope(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.oauth.SignTokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.oauth.SignTokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.oauth.SignTokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.oauth.SignTokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScope();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.sensory.api.oauth.SignTokenRequest.TokenScope = {
  USER: 0,
  SUPER_ADMIN: 1,
  BILLING_ADMIN: 2,
  READ_ONLY_ADMIN: 3,
  EMAIL_SELF_VERIFY: 4
};

/**
 * optional string subject = 1;
 * @return {string}
 */
proto.sensory.api.oauth.SignTokenRequest.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.oauth.SignTokenRequest} returns this
 */
proto.sensory.api.oauth.SignTokenRequest.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TokenScope scope = 2;
 * @return {!proto.sensory.api.oauth.SignTokenRequest.TokenScope}
 */
proto.sensory.api.oauth.SignTokenRequest.prototype.getScope = function() {
  return /** @type {!proto.sensory.api.oauth.SignTokenRequest.TokenScope} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.sensory.api.oauth.SignTokenRequest.TokenScope} value
 * @return {!proto.sensory.api.oauth.SignTokenRequest} returns this
 */
proto.sensory.api.oauth.SignTokenRequest.prototype.setScope = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.oauth.WhoAmIRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.oauth.WhoAmIRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.oauth.WhoAmIRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.oauth.WhoAmIRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.oauth.WhoAmIRequest}
 */
proto.sensory.api.oauth.WhoAmIRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.oauth.WhoAmIRequest;
  return proto.sensory.api.oauth.WhoAmIRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.oauth.WhoAmIRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.oauth.WhoAmIRequest}
 */
proto.sensory.api.oauth.WhoAmIRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.oauth.WhoAmIRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.oauth.WhoAmIRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.oauth.WhoAmIRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.oauth.WhoAmIRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.oauth.WhoAmIResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.oauth.WhoAmIResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.oauth.WhoAmIResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.oauth.WhoAmIResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tenantid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.oauth.WhoAmIResponse}
 */
proto.sensory.api.oauth.WhoAmIResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.oauth.WhoAmIResponse;
  return proto.sensory.api.oauth.WhoAmIResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.oauth.WhoAmIResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.oauth.WhoAmIResponse}
 */
proto.sensory.api.oauth.WhoAmIResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTenantid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.oauth.WhoAmIResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.oauth.WhoAmIResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.oauth.WhoAmIResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.oauth.WhoAmIResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTenantid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string clientId = 1;
 * @return {string}
 */
proto.sensory.api.oauth.WhoAmIResponse.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.oauth.WhoAmIResponse} returns this
 */
proto.sensory.api.oauth.WhoAmIResponse.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tenantId = 2;
 * @return {string}
 */
proto.sensory.api.oauth.WhoAmIResponse.prototype.getTenantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.oauth.WhoAmIResponse} returns this
 */
proto.sensory.api.oauth.WhoAmIResponse.prototype.setTenantid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.oauth.PublicKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.oauth.PublicKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.oauth.PublicKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.oauth.PublicKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.oauth.PublicKeyRequest}
 */
proto.sensory.api.oauth.PublicKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.oauth.PublicKeyRequest;
  return proto.sensory.api.oauth.PublicKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.oauth.PublicKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.oauth.PublicKeyRequest}
 */
proto.sensory.api.oauth.PublicKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.oauth.PublicKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.oauth.PublicKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.oauth.PublicKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.oauth.PublicKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string keyId = 1;
 * @return {string}
 */
proto.sensory.api.oauth.PublicKeyRequest.prototype.getKeyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.oauth.PublicKeyRequest} returns this
 */
proto.sensory.api.oauth.PublicKeyRequest.prototype.setKeyid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensory.api.oauth.PublicKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.oauth.PublicKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.oauth.PublicKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.oauth.PublicKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    publickey: msg.getPublickey_asB64(),
    keytype: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensory.api.oauth.PublicKeyResponse}
 */
proto.sensory.api.oauth.PublicKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.oauth.PublicKeyResponse;
  return proto.sensory.api.oauth.PublicKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.oauth.PublicKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.oauth.PublicKeyResponse}
 */
proto.sensory.api.oauth.PublicKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublickey(value);
      break;
    case 2:
      var value = /** @type {!proto.sensory.api.common.KeyType} */ (reader.readEnum());
      msg.setKeytype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensory.api.oauth.PublicKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.oauth.PublicKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.oauth.PublicKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.oauth.PublicKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublickey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getKeytype();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional bytes publicKey = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sensory.api.oauth.PublicKeyResponse.prototype.getPublickey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes publicKey = 1;
 * This is a type-conversion wrapper around `getPublickey()`
 * @return {string}
 */
proto.sensory.api.oauth.PublicKeyResponse.prototype.getPublickey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublickey()));
};


/**
 * optional bytes publicKey = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublickey()`
 * @return {!Uint8Array}
 */
proto.sensory.api.oauth.PublicKeyResponse.prototype.getPublickey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublickey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sensory.api.oauth.PublicKeyResponse} returns this
 */
proto.sensory.api.oauth.PublicKeyResponse.prototype.setPublickey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional sensory.api.common.KeyType keyType = 2;
 * @return {!proto.sensory.api.common.KeyType}
 */
proto.sensory.api.oauth.PublicKeyResponse.prototype.getKeytype = function() {
  return /** @type {!proto.sensory.api.common.KeyType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.sensory.api.common.KeyType} value
 * @return {!proto.sensory.api.oauth.PublicKeyResponse} returns this
 */
proto.sensory.api.oauth.PublicKeyResponse.prototype.setKeytype = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


goog.object.extend(exports, proto.sensory.api.oauth);
