// source: v1/event/event.proto
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
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var validate_validate_pb = require('../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var common_common_pb = require('../../common/common_pb.js');
goog.object.extend(proto, common_common_pb);
goog.exportSymbol('proto.sensory.api.v1.event.PublishUsageEventsRequest', null, global);
goog.exportSymbol('proto.sensory.api.v1.event.PublishUsageEventsResponse', null, global);
goog.exportSymbol('proto.sensory.api.v1.event.UsageEvent', null, global);
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
proto.sensory.api.v1.event.PublishUsageEventsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensory.api.v1.event.PublishUsageEventsRequest.repeatedFields_, null);
};
goog.inherits(proto.sensory.api.v1.event.PublishUsageEventsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.event.PublishUsageEventsRequest.displayName = 'proto.sensory.api.v1.event.PublishUsageEventsRequest';
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
proto.sensory.api.v1.event.UsageEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.v1.event.UsageEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.event.UsageEvent.displayName = 'proto.sensory.api.v1.event.UsageEvent';
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
proto.sensory.api.v1.event.PublishUsageEventsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensory.api.v1.event.PublishUsageEventsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensory.api.v1.event.PublishUsageEventsResponse.displayName = 'proto.sensory.api.v1.event.PublishUsageEventsResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensory.api.v1.event.PublishUsageEventsRequest.repeatedFields_ = [1];



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
proto.sensory.api.v1.event.PublishUsageEventsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.event.PublishUsageEventsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.event.PublishUsageEventsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.event.PublishUsageEventsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.sensory.api.v1.event.UsageEvent.toObject, includeInstance)
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
 * @return {!proto.sensory.api.v1.event.PublishUsageEventsRequest}
 */
proto.sensory.api.v1.event.PublishUsageEventsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.event.PublishUsageEventsRequest;
  return proto.sensory.api.v1.event.PublishUsageEventsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.event.PublishUsageEventsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.event.PublishUsageEventsRequest}
 */
proto.sensory.api.v1.event.PublishUsageEventsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensory.api.v1.event.UsageEvent;
      reader.readMessage(value,proto.sensory.api.v1.event.UsageEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.sensory.api.v1.event.PublishUsageEventsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.event.PublishUsageEventsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.event.PublishUsageEventsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.event.PublishUsageEventsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sensory.api.v1.event.UsageEvent.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UsageEvent events = 1;
 * @return {!Array<!proto.sensory.api.v1.event.UsageEvent>}
 */
proto.sensory.api.v1.event.PublishUsageEventsRequest.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.sensory.api.v1.event.UsageEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensory.api.v1.event.UsageEvent, 1));
};


/**
 * @param {!Array<!proto.sensory.api.v1.event.UsageEvent>} value
 * @return {!proto.sensory.api.v1.event.PublishUsageEventsRequest} returns this
*/
proto.sensory.api.v1.event.PublishUsageEventsRequest.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sensory.api.v1.event.UsageEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensory.api.v1.event.UsageEvent}
 */
proto.sensory.api.v1.event.PublishUsageEventsRequest.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sensory.api.v1.event.UsageEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensory.api.v1.event.PublishUsageEventsRequest} returns this
 */
proto.sensory.api.v1.event.PublishUsageEventsRequest.prototype.clearEventsList = function() {
  return this.setEventsList([]);
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
proto.sensory.api.v1.event.UsageEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.event.UsageEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.event.UsageEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.event.UsageEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    duration: jspb.Message.getFieldWithDefault(msg, 2, 0),
    id: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    type: jspb.Message.getFieldWithDefault(msg, 5, 0),
    route: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.sensory.api.v1.event.UsageEvent}
 */
proto.sensory.api.v1.event.UsageEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.event.UsageEvent;
  return proto.sensory.api.v1.event.UsageEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.event.UsageEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.event.UsageEvent}
 */
proto.sensory.api.v1.event.UsageEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuration(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 5:
      var value = /** @type {!proto.sensory.api.common.UsageEventType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoute(value);
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
proto.sensory.api.v1.event.UsageEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.event.UsageEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.event.UsageEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.event.UsageEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getRoute();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp timestamp = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sensory.api.v1.event.UsageEvent.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sensory.api.v1.event.UsageEvent} returns this
*/
proto.sensory.api.v1.event.UsageEvent.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensory.api.v1.event.UsageEvent} returns this
 */
proto.sensory.api.v1.event.UsageEvent.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensory.api.v1.event.UsageEvent.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 duration = 2;
 * @return {number}
 */
proto.sensory.api.v1.event.UsageEvent.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sensory.api.v1.event.UsageEvent} returns this
 */
proto.sensory.api.v1.event.UsageEvent.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.sensory.api.v1.event.UsageEvent.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.event.UsageEvent} returns this
 */
proto.sensory.api.v1.event.UsageEvent.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string clientId = 4;
 * @return {string}
 */
proto.sensory.api.v1.event.UsageEvent.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.event.UsageEvent} returns this
 */
proto.sensory.api.v1.event.UsageEvent.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional sensory.api.common.UsageEventType type = 5;
 * @return {!proto.sensory.api.common.UsageEventType}
 */
proto.sensory.api.v1.event.UsageEvent.prototype.getType = function() {
  return /** @type {!proto.sensory.api.common.UsageEventType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.sensory.api.common.UsageEventType} value
 * @return {!proto.sensory.api.v1.event.UsageEvent} returns this
 */
proto.sensory.api.v1.event.UsageEvent.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string route = 6;
 * @return {string}
 */
proto.sensory.api.v1.event.UsageEvent.prototype.getRoute = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensory.api.v1.event.UsageEvent} returns this
 */
proto.sensory.api.v1.event.UsageEvent.prototype.setRoute = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.sensory.api.v1.event.PublishUsageEventsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensory.api.v1.event.PublishUsageEventsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensory.api.v1.event.PublishUsageEventsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.event.PublishUsageEventsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sensory.api.v1.event.PublishUsageEventsResponse}
 */
proto.sensory.api.v1.event.PublishUsageEventsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensory.api.v1.event.PublishUsageEventsResponse;
  return proto.sensory.api.v1.event.PublishUsageEventsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensory.api.v1.event.PublishUsageEventsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensory.api.v1.event.PublishUsageEventsResponse}
 */
proto.sensory.api.v1.event.PublishUsageEventsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sensory.api.v1.event.PublishUsageEventsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensory.api.v1.event.PublishUsageEventsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensory.api.v1.event.PublishUsageEventsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensory.api.v1.event.PublishUsageEventsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.sensory.api.v1.event);
