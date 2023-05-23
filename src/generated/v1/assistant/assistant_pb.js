// source: v1/assistant/assistant.proto
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

var common_common_pb = require('../../common/common_pb.js');
goog.object.extend(proto, common_common_pb);
goog.exportSymbol('proto.sensory.api.v1.assistant.ChatMessage', null, global);
goog.exportSymbol('proto.sensory.api.v1.assistant.ChatRole', null, global);
goog.exportSymbol('proto.sensory.api.v1.assistant.TextChatRequest', null, global);
goog.exportSymbol('proto.sensory.api.v1.assistant.TextChatResponse', null, global);
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
proto.sensory.api.v1.assistant.ChatMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.v1.assistant.ChatMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.assistant.ChatMessage.displayName = 'proto.sensory.api.v1.assistant.ChatMessage';
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
proto.sensory.api.v1.assistant.TextChatRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensory.api.v1.assistant.TextChatRequest.repeatedFields_, null);
};
goog.inherits(proto.sensory.api.v1.assistant.TextChatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.assistant.TextChatRequest.displayName = 'proto.sensory.api.v1.assistant.TextChatRequest';
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
proto.sensory.api.v1.assistant.TextChatResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.v1.assistant.TextChatResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.assistant.TextChatResponse.displayName = 'proto.sensory.api.v1.assistant.TextChatResponse';
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
proto.sensory.api.v1.assistant.ChatMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.assistant.ChatMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.assistant.ChatMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.assistant.ChatMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    role: jspb.Message.getFieldWithDefault(msg, 1, 0),
    content: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.sensory.api.v1.assistant.ChatMessage}
 */
proto.sensory.api.v1.assistant.ChatMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.assistant.ChatMessage;
  return proto.sensory.api.v1.assistant.ChatMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.assistant.ChatMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.assistant.ChatMessage}
 */
proto.sensory.api.v1.assistant.ChatMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sensory.api.v1.assistant.ChatRole} */ (reader.readEnum());
      msg.setRole(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
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
proto.sensory.api.v1.assistant.ChatMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.assistant.ChatMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.assistant.ChatMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.assistant.ChatMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRole();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ChatRole role = 1;
 * @return {!proto.sensory.api.v1.assistant.ChatRole}
 */
proto.sensory.api.v1.assistant.ChatMessage.prototype.getRole = function() {
  return /** @type {!proto.sensory.api.v1.assistant.ChatRole} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sensory.api.v1.assistant.ChatRole} value
 * @return {!proto.sensory.api.v1.assistant.ChatMessage} returns this
 */
proto.sensory.api.v1.assistant.ChatMessage.prototype.setRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.sensory.api.v1.assistant.ChatMessage.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.assistant.ChatMessage} returns this
 */
proto.sensory.api.v1.assistant.ChatMessage.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensory.api.v1.assistant.TextChatRequest.repeatedFields_ = [2];



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
proto.sensory.api.v1.assistant.TextChatRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.assistant.TextChatRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.assistant.TextChatRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.assistant.TextChatRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messagesList: jspb.Message.toObjectList(msg.getMessagesList(),
    proto.sensory.api.v1.assistant.ChatMessage.toObject, includeInstance)
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
 * @return {!proto.sensory.api.v1.assistant.TextChatRequest}
 */
proto.sensory.api.v1.assistant.TextChatRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.assistant.TextChatRequest;
  return proto.sensory.api.v1.assistant.TextChatRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.assistant.TextChatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.assistant.TextChatRequest}
 */
proto.sensory.api.v1.assistant.TextChatRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelname(value);
      break;
    case 2:
      var value = new proto.sensory.api.v1.assistant.ChatMessage;
      reader.readMessage(value,proto.sensory.api.v1.assistant.ChatMessage.deserializeBinaryFromReader);
      msg.addMessages(value);
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
proto.sensory.api.v1.assistant.TextChatRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.assistant.TextChatRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.assistant.TextChatRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.assistant.TextChatRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sensory.api.v1.assistant.ChatMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string modelName = 1;
 * @return {string}
 */
proto.sensory.api.v1.assistant.TextChatRequest.prototype.getModelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.assistant.TextChatRequest} returns this
 */
proto.sensory.api.v1.assistant.TextChatRequest.prototype.setModelname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated ChatMessage messages = 2;
 * @return {!Array<!proto.sensory.api.v1.assistant.ChatMessage>}
 */
proto.sensory.api.v1.assistant.TextChatRequest.prototype.getMessagesList = function() {
  return /** @type{!Array<!proto.sensory.api.v1.assistant.ChatMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensory.api.v1.assistant.ChatMessage, 2));
};


/**
 * @param {!Array<!proto.sensory.api.v1.assistant.ChatMessage>} value
 * @return {!proto.sensory.api.v1.assistant.TextChatRequest} returns this
*/
proto.sensory.api.v1.assistant.TextChatRequest.prototype.setMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sensory.api.v1.assistant.ChatMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensory.api.v1.assistant.ChatMessage}
 */
proto.sensory.api.v1.assistant.TextChatRequest.prototype.addMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sensory.api.v1.assistant.ChatMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensory.api.v1.assistant.TextChatRequest} returns this
 */
proto.sensory.api.v1.assistant.TextChatRequest.prototype.clearMessagesList = function() {
  return this.setMessagesList([]);
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
proto.sensory.api.v1.assistant.TextChatResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.assistant.TextChatResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.assistant.TextChatResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.assistant.TextChatResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: (f = msg.getMessage()) && proto.sensory.api.v1.assistant.ChatMessage.toObject(includeInstance, f)
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
 * @return {!proto.sensory.api.v1.assistant.TextChatResponse}
 */
proto.sensory.api.v1.assistant.TextChatResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.assistant.TextChatResponse;
  return proto.sensory.api.v1.assistant.TextChatResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.assistant.TextChatResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.assistant.TextChatResponse}
 */
proto.sensory.api.v1.assistant.TextChatResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensory.api.v1.assistant.ChatMessage;
      reader.readMessage(value,proto.sensory.api.v1.assistant.ChatMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
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
proto.sensory.api.v1.assistant.TextChatResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.assistant.TextChatResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.assistant.TextChatResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.assistant.TextChatResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensory.api.v1.assistant.ChatMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional ChatMessage message = 1;
 * @return {?proto.sensory.api.v1.assistant.ChatMessage}
 */
proto.sensory.api.v1.assistant.TextChatResponse.prototype.getMessage = function() {
  return /** @type{?proto.sensory.api.v1.assistant.ChatMessage} */ (
    jspb.Message.getWrapperField(this, proto.sensory.api.v1.assistant.ChatMessage, 1));
};


/**
 * @param {?proto.sensory.api.v1.assistant.ChatMessage|undefined} value
 * @return {!proto.sensory.api.v1.assistant.TextChatResponse} returns this
*/
proto.sensory.api.v1.assistant.TextChatResponse.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.assistant.TextChatResponse} returns this
 */
proto.sensory.api.v1.assistant.TextChatResponse.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.assistant.TextChatResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * @enum {number}
 */
proto.sensory.api.v1.assistant.ChatRole = {
  SYSTEM: 0,
  USER: 1,
  ASSISTANT: 2
};

goog.object.extend(exports, proto.sensory.api.v1.assistant);
