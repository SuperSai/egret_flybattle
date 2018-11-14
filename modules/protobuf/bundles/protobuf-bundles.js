var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.protocol = (function() {

    /**
     * Namespace protocol.
     * @exports protocol
     * @namespace
     */
    var protocol = {};

    protocol.ActivityOpenListMsg = (function() {

        /**
         * Properties of an ActivityOpenListMsg.
         * @memberof protocol
         * @interface IActivityOpenListMsg
         * @property {Array.<protocol.IActivityOpenMsg>|null} [list] ActivityOpenListMsg list
         * @property {number} loginDayNum ActivityOpenListMsg loginDayNum
         */

        /**
         * Constructs a new ActivityOpenListMsg.
         * @memberof protocol
         * @classdesc Represents an ActivityOpenListMsg.
         * @implements IActivityOpenListMsg
         * @constructor
         * @param {protocol.IActivityOpenListMsg=} [properties] Properties to set
         */
        function ActivityOpenListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActivityOpenListMsg list.
         * @member {Array.<protocol.IActivityOpenMsg>} list
         * @memberof protocol.ActivityOpenListMsg
         * @instance
         */
        ActivityOpenListMsg.prototype.list = $util.emptyArray;

        /**
         * ActivityOpenListMsg loginDayNum.
         * @member {number} loginDayNum
         * @memberof protocol.ActivityOpenListMsg
         * @instance
         */
        ActivityOpenListMsg.prototype.loginDayNum = 0;

        /**
         * Creates a new ActivityOpenListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.ActivityOpenListMsg
         * @static
         * @param {protocol.IActivityOpenListMsg=} [properties] Properties to set
         * @returns {protocol.ActivityOpenListMsg} ActivityOpenListMsg instance
         */
        ActivityOpenListMsg.create = function create(properties) {
            return new ActivityOpenListMsg(properties);
        };

        /**
         * Encodes the specified ActivityOpenListMsg message. Does not implicitly {@link protocol.ActivityOpenListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.ActivityOpenListMsg
         * @static
         * @param {protocol.IActivityOpenListMsg} message ActivityOpenListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityOpenListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.ActivityOpenMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.loginDayNum);
            return writer;
        };

        /**
         * Encodes the specified ActivityOpenListMsg message, length delimited. Does not implicitly {@link protocol.ActivityOpenListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ActivityOpenListMsg
         * @static
         * @param {protocol.IActivityOpenListMsg} message ActivityOpenListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityOpenListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActivityOpenListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ActivityOpenListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ActivityOpenListMsg} ActivityOpenListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityOpenListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ActivityOpenListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.ActivityOpenMsg.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.loginDayNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("loginDayNum"))
                throw $util.ProtocolError("missing required 'loginDayNum'", { instance: message });
            return message;
        };

        /**
         * Decodes an ActivityOpenListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ActivityOpenListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ActivityOpenListMsg} ActivityOpenListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityOpenListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActivityOpenListMsg message.
         * @function verify
         * @memberof protocol.ActivityOpenListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActivityOpenListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.ActivityOpenMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (!$util.isInteger(message.loginDayNum))
                return "loginDayNum: integer expected";
            return null;
        };

        /**
         * Creates an ActivityOpenListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ActivityOpenListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ActivityOpenListMsg} ActivityOpenListMsg
         */
        ActivityOpenListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ActivityOpenListMsg)
                return object;
            var message = new $root.protocol.ActivityOpenListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.ActivityOpenListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.ActivityOpenListMsg.list: object expected");
                    message.list[i] = $root.protocol.ActivityOpenMsg.fromObject(object.list[i]);
                }
            }
            if (object.loginDayNum != null)
                message.loginDayNum = object.loginDayNum | 0;
            return message;
        };

        /**
         * Creates a plain object from an ActivityOpenListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ActivityOpenListMsg
         * @static
         * @param {protocol.ActivityOpenListMsg} message ActivityOpenListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActivityOpenListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults)
                object.loginDayNum = 0;
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.ActivityOpenMsg.toObject(message.list[j], options);
            }
            if (message.loginDayNum != null && message.hasOwnProperty("loginDayNum"))
                object.loginDayNum = message.loginDayNum;
            return object;
        };

        /**
         * Converts this ActivityOpenListMsg to JSON.
         * @function toJSON
         * @memberof protocol.ActivityOpenListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActivityOpenListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActivityOpenListMsg;
    })();

    protocol.ActivityOpenMsg = (function() {

        /**
         * Properties of an ActivityOpenMsg.
         * @memberof protocol
         * @interface IActivityOpenMsg
         * @property {number} activityId ActivityOpenMsg activityId
         * @property {string} endTime ActivityOpenMsg endTime
         */

        /**
         * Constructs a new ActivityOpenMsg.
         * @memberof protocol
         * @classdesc Represents an ActivityOpenMsg.
         * @implements IActivityOpenMsg
         * @constructor
         * @param {protocol.IActivityOpenMsg=} [properties] Properties to set
         */
        function ActivityOpenMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActivityOpenMsg activityId.
         * @member {number} activityId
         * @memberof protocol.ActivityOpenMsg
         * @instance
         */
        ActivityOpenMsg.prototype.activityId = 0;

        /**
         * ActivityOpenMsg endTime.
         * @member {string} endTime
         * @memberof protocol.ActivityOpenMsg
         * @instance
         */
        ActivityOpenMsg.prototype.endTime = "";

        /**
         * Creates a new ActivityOpenMsg instance using the specified properties.
         * @function create
         * @memberof protocol.ActivityOpenMsg
         * @static
         * @param {protocol.IActivityOpenMsg=} [properties] Properties to set
         * @returns {protocol.ActivityOpenMsg} ActivityOpenMsg instance
         */
        ActivityOpenMsg.create = function create(properties) {
            return new ActivityOpenMsg(properties);
        };

        /**
         * Encodes the specified ActivityOpenMsg message. Does not implicitly {@link protocol.ActivityOpenMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.ActivityOpenMsg
         * @static
         * @param {protocol.IActivityOpenMsg} message ActivityOpenMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityOpenMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.activityId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.endTime);
            return writer;
        };

        /**
         * Encodes the specified ActivityOpenMsg message, length delimited. Does not implicitly {@link protocol.ActivityOpenMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ActivityOpenMsg
         * @static
         * @param {protocol.IActivityOpenMsg} message ActivityOpenMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityOpenMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActivityOpenMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ActivityOpenMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ActivityOpenMsg} ActivityOpenMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityOpenMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ActivityOpenMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.activityId = reader.int32();
                    break;
                case 2:
                    message.endTime = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("activityId"))
                throw $util.ProtocolError("missing required 'activityId'", { instance: message });
            if (!message.hasOwnProperty("endTime"))
                throw $util.ProtocolError("missing required 'endTime'", { instance: message });
            return message;
        };

        /**
         * Decodes an ActivityOpenMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ActivityOpenMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ActivityOpenMsg} ActivityOpenMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityOpenMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActivityOpenMsg message.
         * @function verify
         * @memberof protocol.ActivityOpenMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActivityOpenMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.activityId))
                return "activityId: integer expected";
            if (!$util.isString(message.endTime))
                return "endTime: string expected";
            return null;
        };

        /**
         * Creates an ActivityOpenMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ActivityOpenMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ActivityOpenMsg} ActivityOpenMsg
         */
        ActivityOpenMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ActivityOpenMsg)
                return object;
            var message = new $root.protocol.ActivityOpenMsg();
            if (object.activityId != null)
                message.activityId = object.activityId | 0;
            if (object.endTime != null)
                message.endTime = String(object.endTime);
            return message;
        };

        /**
         * Creates a plain object from an ActivityOpenMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ActivityOpenMsg
         * @static
         * @param {protocol.ActivityOpenMsg} message ActivityOpenMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActivityOpenMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.activityId = 0;
                object.endTime = "";
            }
            if (message.activityId != null && message.hasOwnProperty("activityId"))
                object.activityId = message.activityId;
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                object.endTime = message.endTime;
            return object;
        };

        /**
         * Converts this ActivityOpenMsg to JSON.
         * @function toJSON
         * @memberof protocol.ActivityOpenMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActivityOpenMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActivityOpenMsg;
    })();

    protocol.ActivityStateListMsg = (function() {

        /**
         * Properties of an ActivityStateListMsg.
         * @memberof protocol
         * @interface IActivityStateListMsg
         * @property {Array.<protocol.IActivityStateMsg>|null} [list] ActivityStateListMsg list
         */

        /**
         * Constructs a new ActivityStateListMsg.
         * @memberof protocol
         * @classdesc Represents an ActivityStateListMsg.
         * @implements IActivityStateListMsg
         * @constructor
         * @param {protocol.IActivityStateListMsg=} [properties] Properties to set
         */
        function ActivityStateListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActivityStateListMsg list.
         * @member {Array.<protocol.IActivityStateMsg>} list
         * @memberof protocol.ActivityStateListMsg
         * @instance
         */
        ActivityStateListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new ActivityStateListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.ActivityStateListMsg
         * @static
         * @param {protocol.IActivityStateListMsg=} [properties] Properties to set
         * @returns {protocol.ActivityStateListMsg} ActivityStateListMsg instance
         */
        ActivityStateListMsg.create = function create(properties) {
            return new ActivityStateListMsg(properties);
        };

        /**
         * Encodes the specified ActivityStateListMsg message. Does not implicitly {@link protocol.ActivityStateListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.ActivityStateListMsg
         * @static
         * @param {protocol.IActivityStateListMsg} message ActivityStateListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityStateListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.ActivityStateMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ActivityStateListMsg message, length delimited. Does not implicitly {@link protocol.ActivityStateListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ActivityStateListMsg
         * @static
         * @param {protocol.IActivityStateListMsg} message ActivityStateListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityStateListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActivityStateListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ActivityStateListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ActivityStateListMsg} ActivityStateListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityStateListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ActivityStateListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.ActivityStateMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ActivityStateListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ActivityStateListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ActivityStateListMsg} ActivityStateListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityStateListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActivityStateListMsg message.
         * @function verify
         * @memberof protocol.ActivityStateListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActivityStateListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.ActivityStateMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ActivityStateListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ActivityStateListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ActivityStateListMsg} ActivityStateListMsg
         */
        ActivityStateListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ActivityStateListMsg)
                return object;
            var message = new $root.protocol.ActivityStateListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.ActivityStateListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.ActivityStateListMsg.list: object expected");
                    message.list[i] = $root.protocol.ActivityStateMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an ActivityStateListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ActivityStateListMsg
         * @static
         * @param {protocol.ActivityStateListMsg} message ActivityStateListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActivityStateListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.ActivityStateMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this ActivityStateListMsg to JSON.
         * @function toJSON
         * @memberof protocol.ActivityStateListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActivityStateListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActivityStateListMsg;
    })();

    protocol.ActivityStateMsg = (function() {

        /**
         * Properties of an ActivityStateMsg.
         * @memberof protocol
         * @interface IActivityStateMsg
         * @property {number} activityId ActivityStateMsg activityId
         * @property {number} state ActivityStateMsg state
         */

        /**
         * Constructs a new ActivityStateMsg.
         * @memberof protocol
         * @classdesc Represents an ActivityStateMsg.
         * @implements IActivityStateMsg
         * @constructor
         * @param {protocol.IActivityStateMsg=} [properties] Properties to set
         */
        function ActivityStateMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActivityStateMsg activityId.
         * @member {number} activityId
         * @memberof protocol.ActivityStateMsg
         * @instance
         */
        ActivityStateMsg.prototype.activityId = 0;

        /**
         * ActivityStateMsg state.
         * @member {number} state
         * @memberof protocol.ActivityStateMsg
         * @instance
         */
        ActivityStateMsg.prototype.state = 0;

        /**
         * Creates a new ActivityStateMsg instance using the specified properties.
         * @function create
         * @memberof protocol.ActivityStateMsg
         * @static
         * @param {protocol.IActivityStateMsg=} [properties] Properties to set
         * @returns {protocol.ActivityStateMsg} ActivityStateMsg instance
         */
        ActivityStateMsg.create = function create(properties) {
            return new ActivityStateMsg(properties);
        };

        /**
         * Encodes the specified ActivityStateMsg message. Does not implicitly {@link protocol.ActivityStateMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.ActivityStateMsg
         * @static
         * @param {protocol.IActivityStateMsg} message ActivityStateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityStateMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.activityId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            return writer;
        };

        /**
         * Encodes the specified ActivityStateMsg message, length delimited. Does not implicitly {@link protocol.ActivityStateMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ActivityStateMsg
         * @static
         * @param {protocol.IActivityStateMsg} message ActivityStateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityStateMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActivityStateMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ActivityStateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ActivityStateMsg} ActivityStateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityStateMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ActivityStateMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.activityId = reader.int32();
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("activityId"))
                throw $util.ProtocolError("missing required 'activityId'", { instance: message });
            if (!message.hasOwnProperty("state"))
                throw $util.ProtocolError("missing required 'state'", { instance: message });
            return message;
        };

        /**
         * Decodes an ActivityStateMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ActivityStateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ActivityStateMsg} ActivityStateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityStateMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActivityStateMsg message.
         * @function verify
         * @memberof protocol.ActivityStateMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActivityStateMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.activityId))
                return "activityId: integer expected";
            if (!$util.isInteger(message.state))
                return "state: integer expected";
            return null;
        };

        /**
         * Creates an ActivityStateMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ActivityStateMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ActivityStateMsg} ActivityStateMsg
         */
        ActivityStateMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ActivityStateMsg)
                return object;
            var message = new $root.protocol.ActivityStateMsg();
            if (object.activityId != null)
                message.activityId = object.activityId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            return message;
        };

        /**
         * Creates a plain object from an ActivityStateMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ActivityStateMsg
         * @static
         * @param {protocol.ActivityStateMsg} message ActivityStateMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActivityStateMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.activityId = 0;
                object.state = 0;
            }
            if (message.activityId != null && message.hasOwnProperty("activityId"))
                object.activityId = message.activityId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            return object;
        };

        /**
         * Converts this ActivityStateMsg to JSON.
         * @function toJSON
         * @memberof protocol.ActivityStateMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActivityStateMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActivityStateMsg;
    })();

    protocol.OpenServerRankMsg = (function() {

        /**
         * Properties of an OpenServerRankMsg.
         * @memberof protocol
         * @interface IOpenServerRankMsg
         * @property {Array.<protocol.ITopUserMsg>|null} [list] OpenServerRankMsg list
         * @property {string} awardTime OpenServerRankMsg awardTime
         * @property {number} currentRank OpenServerRankMsg currentRank
         * @property {number} differMisiionNum OpenServerRankMsg differMisiionNum
         */

        /**
         * Constructs a new OpenServerRankMsg.
         * @memberof protocol
         * @classdesc Represents an OpenServerRankMsg.
         * @implements IOpenServerRankMsg
         * @constructor
         * @param {protocol.IOpenServerRankMsg=} [properties] Properties to set
         */
        function OpenServerRankMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OpenServerRankMsg list.
         * @member {Array.<protocol.ITopUserMsg>} list
         * @memberof protocol.OpenServerRankMsg
         * @instance
         */
        OpenServerRankMsg.prototype.list = $util.emptyArray;

        /**
         * OpenServerRankMsg awardTime.
         * @member {string} awardTime
         * @memberof protocol.OpenServerRankMsg
         * @instance
         */
        OpenServerRankMsg.prototype.awardTime = "";

        /**
         * OpenServerRankMsg currentRank.
         * @member {number} currentRank
         * @memberof protocol.OpenServerRankMsg
         * @instance
         */
        OpenServerRankMsg.prototype.currentRank = 0;

        /**
         * OpenServerRankMsg differMisiionNum.
         * @member {number} differMisiionNum
         * @memberof protocol.OpenServerRankMsg
         * @instance
         */
        OpenServerRankMsg.prototype.differMisiionNum = 0;

        /**
         * Creates a new OpenServerRankMsg instance using the specified properties.
         * @function create
         * @memberof protocol.OpenServerRankMsg
         * @static
         * @param {protocol.IOpenServerRankMsg=} [properties] Properties to set
         * @returns {protocol.OpenServerRankMsg} OpenServerRankMsg instance
         */
        OpenServerRankMsg.create = function create(properties) {
            return new OpenServerRankMsg(properties);
        };

        /**
         * Encodes the specified OpenServerRankMsg message. Does not implicitly {@link protocol.OpenServerRankMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.OpenServerRankMsg
         * @static
         * @param {protocol.IOpenServerRankMsg} message OpenServerRankMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OpenServerRankMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.TopUserMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.awardTime);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.currentRank);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.differMisiionNum);
            return writer;
        };

        /**
         * Encodes the specified OpenServerRankMsg message, length delimited. Does not implicitly {@link protocol.OpenServerRankMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.OpenServerRankMsg
         * @static
         * @param {protocol.IOpenServerRankMsg} message OpenServerRankMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OpenServerRankMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OpenServerRankMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.OpenServerRankMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.OpenServerRankMsg} OpenServerRankMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OpenServerRankMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.OpenServerRankMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.TopUserMsg.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.awardTime = reader.string();
                    break;
                case 3:
                    message.currentRank = reader.int32();
                    break;
                case 4:
                    message.differMisiionNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("awardTime"))
                throw $util.ProtocolError("missing required 'awardTime'", { instance: message });
            if (!message.hasOwnProperty("currentRank"))
                throw $util.ProtocolError("missing required 'currentRank'", { instance: message });
            if (!message.hasOwnProperty("differMisiionNum"))
                throw $util.ProtocolError("missing required 'differMisiionNum'", { instance: message });
            return message;
        };

        /**
         * Decodes an OpenServerRankMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.OpenServerRankMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.OpenServerRankMsg} OpenServerRankMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OpenServerRankMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OpenServerRankMsg message.
         * @function verify
         * @memberof protocol.OpenServerRankMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OpenServerRankMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.TopUserMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (!$util.isString(message.awardTime))
                return "awardTime: string expected";
            if (!$util.isInteger(message.currentRank))
                return "currentRank: integer expected";
            if (!$util.isInteger(message.differMisiionNum))
                return "differMisiionNum: integer expected";
            return null;
        };

        /**
         * Creates an OpenServerRankMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.OpenServerRankMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.OpenServerRankMsg} OpenServerRankMsg
         */
        OpenServerRankMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.OpenServerRankMsg)
                return object;
            var message = new $root.protocol.OpenServerRankMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.OpenServerRankMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.OpenServerRankMsg.list: object expected");
                    message.list[i] = $root.protocol.TopUserMsg.fromObject(object.list[i]);
                }
            }
            if (object.awardTime != null)
                message.awardTime = String(object.awardTime);
            if (object.currentRank != null)
                message.currentRank = object.currentRank | 0;
            if (object.differMisiionNum != null)
                message.differMisiionNum = object.differMisiionNum | 0;
            return message;
        };

        /**
         * Creates a plain object from an OpenServerRankMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.OpenServerRankMsg
         * @static
         * @param {protocol.OpenServerRankMsg} message OpenServerRankMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OpenServerRankMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults) {
                object.awardTime = "";
                object.currentRank = 0;
                object.differMisiionNum = 0;
            }
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.TopUserMsg.toObject(message.list[j], options);
            }
            if (message.awardTime != null && message.hasOwnProperty("awardTime"))
                object.awardTime = message.awardTime;
            if (message.currentRank != null && message.hasOwnProperty("currentRank"))
                object.currentRank = message.currentRank;
            if (message.differMisiionNum != null && message.hasOwnProperty("differMisiionNum"))
                object.differMisiionNum = message.differMisiionNum;
            return object;
        };

        /**
         * Converts this OpenServerRankMsg to JSON.
         * @function toJSON
         * @memberof protocol.OpenServerRankMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OpenServerRankMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OpenServerRankMsg;
    })();

    protocol.TopUserMsg = (function() {

        /**
         * Properties of a TopUserMsg.
         * @memberof protocol
         * @interface ITopUserMsg
         * @property {number|null} [playerId] TopUserMsg playerId
         * @property {string} nickName TopUserMsg nickName
         * @property {string} headPic TopUserMsg headPic
         * @property {number|null} [missionMaxNum] TopUserMsg missionMaxNum
         * @property {number|null} [cardLevel] TopUserMsg cardLevel
         * @property {number|null} [rank] TopUserMsg rank
         */

        /**
         * Constructs a new TopUserMsg.
         * @memberof protocol
         * @classdesc Represents a TopUserMsg.
         * @implements ITopUserMsg
         * @constructor
         * @param {protocol.ITopUserMsg=} [properties] Properties to set
         */
        function TopUserMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TopUserMsg playerId.
         * @member {number} playerId
         * @memberof protocol.TopUserMsg
         * @instance
         */
        TopUserMsg.prototype.playerId = 0;

        /**
         * TopUserMsg nickName.
         * @member {string} nickName
         * @memberof protocol.TopUserMsg
         * @instance
         */
        TopUserMsg.prototype.nickName = "";

        /**
         * TopUserMsg headPic.
         * @member {string} headPic
         * @memberof protocol.TopUserMsg
         * @instance
         */
        TopUserMsg.prototype.headPic = "";

        /**
         * TopUserMsg missionMaxNum.
         * @member {number} missionMaxNum
         * @memberof protocol.TopUserMsg
         * @instance
         */
        TopUserMsg.prototype.missionMaxNum = 0;

        /**
         * TopUserMsg cardLevel.
         * @member {number} cardLevel
         * @memberof protocol.TopUserMsg
         * @instance
         */
        TopUserMsg.prototype.cardLevel = 0;

        /**
         * TopUserMsg rank.
         * @member {number} rank
         * @memberof protocol.TopUserMsg
         * @instance
         */
        TopUserMsg.prototype.rank = 0;

        /**
         * Creates a new TopUserMsg instance using the specified properties.
         * @function create
         * @memberof protocol.TopUserMsg
         * @static
         * @param {protocol.ITopUserMsg=} [properties] Properties to set
         * @returns {protocol.TopUserMsg} TopUserMsg instance
         */
        TopUserMsg.create = function create(properties) {
            return new TopUserMsg(properties);
        };

        /**
         * Encodes the specified TopUserMsg message. Does not implicitly {@link protocol.TopUserMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.TopUserMsg
         * @static
         * @param {protocol.ITopUserMsg} message TopUserMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TopUserMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickName);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.headPic);
            if (message.missionMaxNum != null && message.hasOwnProperty("missionMaxNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.missionMaxNum);
            if (message.cardLevel != null && message.hasOwnProperty("cardLevel"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cardLevel);
            if (message.rank != null && message.hasOwnProperty("rank"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.rank);
            return writer;
        };

        /**
         * Encodes the specified TopUserMsg message, length delimited. Does not implicitly {@link protocol.TopUserMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TopUserMsg
         * @static
         * @param {protocol.ITopUserMsg} message TopUserMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TopUserMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TopUserMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TopUserMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TopUserMsg} TopUserMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TopUserMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TopUserMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.int32();
                    break;
                case 2:
                    message.nickName = reader.string();
                    break;
                case 3:
                    message.headPic = reader.string();
                    break;
                case 4:
                    message.missionMaxNum = reader.int32();
                    break;
                case 5:
                    message.cardLevel = reader.int32();
                    break;
                case 6:
                    message.rank = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("nickName"))
                throw $util.ProtocolError("missing required 'nickName'", { instance: message });
            if (!message.hasOwnProperty("headPic"))
                throw $util.ProtocolError("missing required 'headPic'", { instance: message });
            return message;
        };

        /**
         * Decodes a TopUserMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TopUserMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TopUserMsg} TopUserMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TopUserMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TopUserMsg message.
         * @function verify
         * @memberof protocol.TopUserMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TopUserMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId))
                    return "playerId: integer expected";
            if (!$util.isString(message.nickName))
                return "nickName: string expected";
            if (!$util.isString(message.headPic))
                return "headPic: string expected";
            if (message.missionMaxNum != null && message.hasOwnProperty("missionMaxNum"))
                if (!$util.isInteger(message.missionMaxNum))
                    return "missionMaxNum: integer expected";
            if (message.cardLevel != null && message.hasOwnProperty("cardLevel"))
                if (!$util.isInteger(message.cardLevel))
                    return "cardLevel: integer expected";
            if (message.rank != null && message.hasOwnProperty("rank"))
                if (!$util.isInteger(message.rank))
                    return "rank: integer expected";
            return null;
        };

        /**
         * Creates a TopUserMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TopUserMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TopUserMsg} TopUserMsg
         */
        TopUserMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TopUserMsg)
                return object;
            var message = new $root.protocol.TopUserMsg();
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.headPic != null)
                message.headPic = String(object.headPic);
            if (object.missionMaxNum != null)
                message.missionMaxNum = object.missionMaxNum | 0;
            if (object.cardLevel != null)
                message.cardLevel = object.cardLevel | 0;
            if (object.rank != null)
                message.rank = object.rank | 0;
            return message;
        };

        /**
         * Creates a plain object from a TopUserMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TopUserMsg
         * @static
         * @param {protocol.TopUserMsg} message TopUserMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TopUserMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playerId = 0;
                object.nickName = "";
                object.headPic = "";
                object.missionMaxNum = 0;
                object.cardLevel = 0;
                object.rank = 0;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.headPic != null && message.hasOwnProperty("headPic"))
                object.headPic = message.headPic;
            if (message.missionMaxNum != null && message.hasOwnProperty("missionMaxNum"))
                object.missionMaxNum = message.missionMaxNum;
            if (message.cardLevel != null && message.hasOwnProperty("cardLevel"))
                object.cardLevel = message.cardLevel;
            if (message.rank != null && message.hasOwnProperty("rank"))
                object.rank = message.rank;
            return object;
        };

        /**
         * Converts this TopUserMsg to JSON.
         * @function toJSON
         * @memberof protocol.TopUserMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TopUserMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TopUserMsg;
    })();

    protocol.ItemListMsg = (function() {

        /**
         * Properties of an ItemListMsg.
         * @memberof protocol
         * @interface IItemListMsg
         * @property {Array.<protocol.IItemInfoMsg>|null} [itemList] ItemListMsg itemList
         */

        /**
         * Constructs a new ItemListMsg.
         * @memberof protocol
         * @classdesc Represents an ItemListMsg.
         * @implements IItemListMsg
         * @constructor
         * @param {protocol.IItemListMsg=} [properties] Properties to set
         */
        function ItemListMsg(properties) {
            this.itemList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemListMsg itemList.
         * @member {Array.<protocol.IItemInfoMsg>} itemList
         * @memberof protocol.ItemListMsg
         * @instance
         */
        ItemListMsg.prototype.itemList = $util.emptyArray;

        /**
         * Creates a new ItemListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.ItemListMsg
         * @static
         * @param {protocol.IItemListMsg=} [properties] Properties to set
         * @returns {protocol.ItemListMsg} ItemListMsg instance
         */
        ItemListMsg.create = function create(properties) {
            return new ItemListMsg(properties);
        };

        /**
         * Encodes the specified ItemListMsg message. Does not implicitly {@link protocol.ItemListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.ItemListMsg
         * @static
         * @param {protocol.IItemListMsg} message ItemListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemList != null && message.itemList.length)
                for (var i = 0; i < message.itemList.length; ++i)
                    $root.protocol.ItemInfoMsg.encode(message.itemList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ItemListMsg message, length delimited. Does not implicitly {@link protocol.ItemListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ItemListMsg
         * @static
         * @param {protocol.IItemListMsg} message ItemListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ItemListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ItemListMsg} ItemListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ItemListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.itemList && message.itemList.length))
                        message.itemList = [];
                    message.itemList.push($root.protocol.ItemInfoMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ItemListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ItemListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ItemListMsg} ItemListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemListMsg message.
         * @function verify
         * @memberof protocol.ItemListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemList != null && message.hasOwnProperty("itemList")) {
                if (!Array.isArray(message.itemList))
                    return "itemList: array expected";
                for (var i = 0; i < message.itemList.length; ++i) {
                    var error = $root.protocol.ItemInfoMsg.verify(message.itemList[i]);
                    if (error)
                        return "itemList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ItemListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ItemListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ItemListMsg} ItemListMsg
         */
        ItemListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ItemListMsg)
                return object;
            var message = new $root.protocol.ItemListMsg();
            if (object.itemList) {
                if (!Array.isArray(object.itemList))
                    throw TypeError(".protocol.ItemListMsg.itemList: array expected");
                message.itemList = [];
                for (var i = 0; i < object.itemList.length; ++i) {
                    if (typeof object.itemList[i] !== "object")
                        throw TypeError(".protocol.ItemListMsg.itemList: object expected");
                    message.itemList[i] = $root.protocol.ItemInfoMsg.fromObject(object.itemList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an ItemListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ItemListMsg
         * @static
         * @param {protocol.ItemListMsg} message ItemListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.itemList = [];
            if (message.itemList && message.itemList.length) {
                object.itemList = [];
                for (var j = 0; j < message.itemList.length; ++j)
                    object.itemList[j] = $root.protocol.ItemInfoMsg.toObject(message.itemList[j], options);
            }
            return object;
        };

        /**
         * Converts this ItemListMsg to JSON.
         * @function toJSON
         * @memberof protocol.ItemListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ItemListMsg;
    })();

    protocol.ItemInfoMsg = (function() {

        /**
         * Properties of an ItemInfoMsg.
         * @memberof protocol
         * @interface IItemInfoMsg
         * @property {number} itemId ItemInfoMsg itemId
         * @property {number} num ItemInfoMsg num
         */

        /**
         * Constructs a new ItemInfoMsg.
         * @memberof protocol
         * @classdesc Represents an ItemInfoMsg.
         * @implements IItemInfoMsg
         * @constructor
         * @param {protocol.IItemInfoMsg=} [properties] Properties to set
         */
        function ItemInfoMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemInfoMsg itemId.
         * @member {number} itemId
         * @memberof protocol.ItemInfoMsg
         * @instance
         */
        ItemInfoMsg.prototype.itemId = 0;

        /**
         * ItemInfoMsg num.
         * @member {number} num
         * @memberof protocol.ItemInfoMsg
         * @instance
         */
        ItemInfoMsg.prototype.num = 0;

        /**
         * Creates a new ItemInfoMsg instance using the specified properties.
         * @function create
         * @memberof protocol.ItemInfoMsg
         * @static
         * @param {protocol.IItemInfoMsg=} [properties] Properties to set
         * @returns {protocol.ItemInfoMsg} ItemInfoMsg instance
         */
        ItemInfoMsg.create = function create(properties) {
            return new ItemInfoMsg(properties);
        };

        /**
         * Encodes the specified ItemInfoMsg message. Does not implicitly {@link protocol.ItemInfoMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.ItemInfoMsg
         * @static
         * @param {protocol.IItemInfoMsg} message ItemInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemInfoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.num);
            return writer;
        };

        /**
         * Encodes the specified ItemInfoMsg message, length delimited. Does not implicitly {@link protocol.ItemInfoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ItemInfoMsg
         * @static
         * @param {protocol.IItemInfoMsg} message ItemInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemInfoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemInfoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ItemInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ItemInfoMsg} ItemInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemInfoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ItemInfoMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.itemId = reader.int32();
                    break;
                case 2:
                    message.num = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("itemId"))
                throw $util.ProtocolError("missing required 'itemId'", { instance: message });
            if (!message.hasOwnProperty("num"))
                throw $util.ProtocolError("missing required 'num'", { instance: message });
            return message;
        };

        /**
         * Decodes an ItemInfoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ItemInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ItemInfoMsg} ItemInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemInfoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemInfoMsg message.
         * @function verify
         * @memberof protocol.ItemInfoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemInfoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.itemId))
                return "itemId: integer expected";
            if (!$util.isInteger(message.num))
                return "num: integer expected";
            return null;
        };

        /**
         * Creates an ItemInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ItemInfoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ItemInfoMsg} ItemInfoMsg
         */
        ItemInfoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ItemInfoMsg)
                return object;
            var message = new $root.protocol.ItemInfoMsg();
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.num != null)
                message.num = object.num | 0;
            return message;
        };

        /**
         * Creates a plain object from an ItemInfoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ItemInfoMsg
         * @static
         * @param {protocol.ItemInfoMsg} message ItemInfoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemInfoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.itemId = 0;
                object.num = 0;
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            return object;
        };

        /**
         * Converts this ItemInfoMsg to JSON.
         * @function toJSON
         * @memberof protocol.ItemInfoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemInfoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ItemInfoMsg;
    })();

    protocol.ItemMsgCS = (function() {

        /**
         * Properties of an ItemMsgCS.
         * @memberof protocol
         * @interface IItemMsgCS
         * @property {number} itemId ItemMsgCS itemId
         * @property {number} num ItemMsgCS num
         */

        /**
         * Constructs a new ItemMsgCS.
         * @memberof protocol
         * @classdesc Represents an ItemMsgCS.
         * @implements IItemMsgCS
         * @constructor
         * @param {protocol.IItemMsgCS=} [properties] Properties to set
         */
        function ItemMsgCS(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemMsgCS itemId.
         * @member {number} itemId
         * @memberof protocol.ItemMsgCS
         * @instance
         */
        ItemMsgCS.prototype.itemId = 0;

        /**
         * ItemMsgCS num.
         * @member {number} num
         * @memberof protocol.ItemMsgCS
         * @instance
         */
        ItemMsgCS.prototype.num = 0;

        /**
         * Creates a new ItemMsgCS instance using the specified properties.
         * @function create
         * @memberof protocol.ItemMsgCS
         * @static
         * @param {protocol.IItemMsgCS=} [properties] Properties to set
         * @returns {protocol.ItemMsgCS} ItemMsgCS instance
         */
        ItemMsgCS.create = function create(properties) {
            return new ItemMsgCS(properties);
        };

        /**
         * Encodes the specified ItemMsgCS message. Does not implicitly {@link protocol.ItemMsgCS.verify|verify} messages.
         * @function encode
         * @memberof protocol.ItemMsgCS
         * @static
         * @param {protocol.IItemMsgCS} message ItemMsgCS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemMsgCS.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.num);
            return writer;
        };

        /**
         * Encodes the specified ItemMsgCS message, length delimited. Does not implicitly {@link protocol.ItemMsgCS.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ItemMsgCS
         * @static
         * @param {protocol.IItemMsgCS} message ItemMsgCS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemMsgCS.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemMsgCS message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ItemMsgCS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ItemMsgCS} ItemMsgCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemMsgCS.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ItemMsgCS();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.itemId = reader.int32();
                    break;
                case 2:
                    message.num = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("itemId"))
                throw $util.ProtocolError("missing required 'itemId'", { instance: message });
            if (!message.hasOwnProperty("num"))
                throw $util.ProtocolError("missing required 'num'", { instance: message });
            return message;
        };

        /**
         * Decodes an ItemMsgCS message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ItemMsgCS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ItemMsgCS} ItemMsgCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemMsgCS.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemMsgCS message.
         * @function verify
         * @memberof protocol.ItemMsgCS
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemMsgCS.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.itemId))
                return "itemId: integer expected";
            if (!$util.isInteger(message.num))
                return "num: integer expected";
            return null;
        };

        /**
         * Creates an ItemMsgCS message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ItemMsgCS
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ItemMsgCS} ItemMsgCS
         */
        ItemMsgCS.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ItemMsgCS)
                return object;
            var message = new $root.protocol.ItemMsgCS();
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.num != null)
                message.num = object.num | 0;
            return message;
        };

        /**
         * Creates a plain object from an ItemMsgCS message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ItemMsgCS
         * @static
         * @param {protocol.ItemMsgCS} message ItemMsgCS
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemMsgCS.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.itemId = 0;
                object.num = 0;
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            return object;
        };

        /**
         * Converts this ItemMsgCS to JSON.
         * @function toJSON
         * @memberof protocol.ItemMsgCS
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemMsgCS.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ItemMsgCS;
    })();

    protocol.ItemMsgListCS = (function() {

        /**
         * Properties of an ItemMsgListCS.
         * @memberof protocol
         * @interface IItemMsgListCS
         * @property {Array.<protocol.IItemMsgCS>|null} [list] ItemMsgListCS list
         */

        /**
         * Constructs a new ItemMsgListCS.
         * @memberof protocol
         * @classdesc Represents an ItemMsgListCS.
         * @implements IItemMsgListCS
         * @constructor
         * @param {protocol.IItemMsgListCS=} [properties] Properties to set
         */
        function ItemMsgListCS(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemMsgListCS list.
         * @member {Array.<protocol.IItemMsgCS>} list
         * @memberof protocol.ItemMsgListCS
         * @instance
         */
        ItemMsgListCS.prototype.list = $util.emptyArray;

        /**
         * Creates a new ItemMsgListCS instance using the specified properties.
         * @function create
         * @memberof protocol.ItemMsgListCS
         * @static
         * @param {protocol.IItemMsgListCS=} [properties] Properties to set
         * @returns {protocol.ItemMsgListCS} ItemMsgListCS instance
         */
        ItemMsgListCS.create = function create(properties) {
            return new ItemMsgListCS(properties);
        };

        /**
         * Encodes the specified ItemMsgListCS message. Does not implicitly {@link protocol.ItemMsgListCS.verify|verify} messages.
         * @function encode
         * @memberof protocol.ItemMsgListCS
         * @static
         * @param {protocol.IItemMsgListCS} message ItemMsgListCS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemMsgListCS.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.ItemMsgCS.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ItemMsgListCS message, length delimited. Does not implicitly {@link protocol.ItemMsgListCS.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ItemMsgListCS
         * @static
         * @param {protocol.IItemMsgListCS} message ItemMsgListCS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemMsgListCS.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemMsgListCS message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ItemMsgListCS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ItemMsgListCS} ItemMsgListCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemMsgListCS.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ItemMsgListCS();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.ItemMsgCS.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ItemMsgListCS message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ItemMsgListCS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ItemMsgListCS} ItemMsgListCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemMsgListCS.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemMsgListCS message.
         * @function verify
         * @memberof protocol.ItemMsgListCS
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemMsgListCS.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.ItemMsgCS.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ItemMsgListCS message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ItemMsgListCS
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ItemMsgListCS} ItemMsgListCS
         */
        ItemMsgListCS.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ItemMsgListCS)
                return object;
            var message = new $root.protocol.ItemMsgListCS();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.ItemMsgListCS.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.ItemMsgListCS.list: object expected");
                    message.list[i] = $root.protocol.ItemMsgCS.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an ItemMsgListCS message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ItemMsgListCS
         * @static
         * @param {protocol.ItemMsgListCS} message ItemMsgListCS
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemMsgListCS.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.ItemMsgCS.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this ItemMsgListCS to JSON.
         * @function toJSON
         * @memberof protocol.ItemMsgListCS
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemMsgListCS.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ItemMsgListCS;
    })();

    protocol.ShopMsgCS = (function() {

        /**
         * Properties of a ShopMsgCS.
         * @memberof protocol
         * @interface IShopMsgCS
         * @property {number} itemId ShopMsgCS itemId
         * @property {number|null} [time] ShopMsgCS time
         */

        /**
         * Constructs a new ShopMsgCS.
         * @memberof protocol
         * @classdesc Represents a ShopMsgCS.
         * @implements IShopMsgCS
         * @constructor
         * @param {protocol.IShopMsgCS=} [properties] Properties to set
         */
        function ShopMsgCS(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ShopMsgCS itemId.
         * @member {number} itemId
         * @memberof protocol.ShopMsgCS
         * @instance
         */
        ShopMsgCS.prototype.itemId = 0;

        /**
         * ShopMsgCS time.
         * @member {number} time
         * @memberof protocol.ShopMsgCS
         * @instance
         */
        ShopMsgCS.prototype.time = 0;

        /**
         * Creates a new ShopMsgCS instance using the specified properties.
         * @function create
         * @memberof protocol.ShopMsgCS
         * @static
         * @param {protocol.IShopMsgCS=} [properties] Properties to set
         * @returns {protocol.ShopMsgCS} ShopMsgCS instance
         */
        ShopMsgCS.create = function create(properties) {
            return new ShopMsgCS(properties);
        };

        /**
         * Encodes the specified ShopMsgCS message. Does not implicitly {@link protocol.ShopMsgCS.verify|verify} messages.
         * @function encode
         * @memberof protocol.ShopMsgCS
         * @static
         * @param {protocol.IShopMsgCS} message ShopMsgCS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShopMsgCS.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.time);
            return writer;
        };

        /**
         * Encodes the specified ShopMsgCS message, length delimited. Does not implicitly {@link protocol.ShopMsgCS.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ShopMsgCS
         * @static
         * @param {protocol.IShopMsgCS} message ShopMsgCS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShopMsgCS.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ShopMsgCS message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ShopMsgCS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ShopMsgCS} ShopMsgCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShopMsgCS.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ShopMsgCS();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.itemId = reader.int32();
                    break;
                case 2:
                    message.time = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("itemId"))
                throw $util.ProtocolError("missing required 'itemId'", { instance: message });
            return message;
        };

        /**
         * Decodes a ShopMsgCS message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ShopMsgCS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ShopMsgCS} ShopMsgCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShopMsgCS.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ShopMsgCS message.
         * @function verify
         * @memberof protocol.ShopMsgCS
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ShopMsgCS.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.itemId))
                return "itemId: integer expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time))
                    return "time: integer expected";
            return null;
        };

        /**
         * Creates a ShopMsgCS message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ShopMsgCS
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ShopMsgCS} ShopMsgCS
         */
        ShopMsgCS.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ShopMsgCS)
                return object;
            var message = new $root.protocol.ShopMsgCS();
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.time != null)
                message.time = object.time | 0;
            return message;
        };

        /**
         * Creates a plain object from a ShopMsgCS message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ShopMsgCS
         * @static
         * @param {protocol.ShopMsgCS} message ShopMsgCS
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ShopMsgCS.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.itemId = 0;
                object.time = 0;
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            return object;
        };

        /**
         * Converts this ShopMsgCS to JSON.
         * @function toJSON
         * @memberof protocol.ShopMsgCS
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ShopMsgCS.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ShopMsgCS;
    })();

    protocol.CSChatProtoMsg = (function() {

        /**
         * Properties of a CSChatProtoMsg.
         * @memberof protocol
         * @interface ICSChatProtoMsg
         * @property {number} type CSChatProtoMsg type
         * @property {string} content CSChatProtoMsg content
         * @property {protocol.ContentType} contentType CSChatProtoMsg contentType
         * @property {number|null} [sendToPlayerId] CSChatProtoMsg sendToPlayerId
         * @property {number|null} [roomId] CSChatProtoMsg roomId
         */

        /**
         * Constructs a new CSChatProtoMsg.
         * @memberof protocol
         * @classdesc Represents a CSChatProtoMsg.
         * @implements ICSChatProtoMsg
         * @constructor
         * @param {protocol.ICSChatProtoMsg=} [properties] Properties to set
         */
        function CSChatProtoMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CSChatProtoMsg type.
         * @member {number} type
         * @memberof protocol.CSChatProtoMsg
         * @instance
         */
        CSChatProtoMsg.prototype.type = 0;

        /**
         * CSChatProtoMsg content.
         * @member {string} content
         * @memberof protocol.CSChatProtoMsg
         * @instance
         */
        CSChatProtoMsg.prototype.content = "";

        /**
         * CSChatProtoMsg contentType.
         * @member {protocol.ContentType} contentType
         * @memberof protocol.CSChatProtoMsg
         * @instance
         */
        CSChatProtoMsg.prototype.contentType = 1;

        /**
         * CSChatProtoMsg sendToPlayerId.
         * @member {number} sendToPlayerId
         * @memberof protocol.CSChatProtoMsg
         * @instance
         */
        CSChatProtoMsg.prototype.sendToPlayerId = 0;

        /**
         * CSChatProtoMsg roomId.
         * @member {number} roomId
         * @memberof protocol.CSChatProtoMsg
         * @instance
         */
        CSChatProtoMsg.prototype.roomId = 0;

        /**
         * Creates a new CSChatProtoMsg instance using the specified properties.
         * @function create
         * @memberof protocol.CSChatProtoMsg
         * @static
         * @param {protocol.ICSChatProtoMsg=} [properties] Properties to set
         * @returns {protocol.CSChatProtoMsg} CSChatProtoMsg instance
         */
        CSChatProtoMsg.create = function create(properties) {
            return new CSChatProtoMsg(properties);
        };

        /**
         * Encodes the specified CSChatProtoMsg message. Does not implicitly {@link protocol.CSChatProtoMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.CSChatProtoMsg
         * @static
         * @param {protocol.ICSChatProtoMsg} message CSChatProtoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSChatProtoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.contentType);
            if (message.sendToPlayerId != null && message.hasOwnProperty("sendToPlayerId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sendToPlayerId);
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified CSChatProtoMsg message, length delimited. Does not implicitly {@link protocol.CSChatProtoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.CSChatProtoMsg
         * @static
         * @param {protocol.ICSChatProtoMsg} message CSChatProtoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSChatProtoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CSChatProtoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.CSChatProtoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.CSChatProtoMsg} CSChatProtoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSChatProtoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CSChatProtoMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.content = reader.string();
                    break;
                case 3:
                    message.contentType = reader.int32();
                    break;
                case 4:
                    message.sendToPlayerId = reader.int32();
                    break;
                case 5:
                    message.roomId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("content"))
                throw $util.ProtocolError("missing required 'content'", { instance: message });
            if (!message.hasOwnProperty("contentType"))
                throw $util.ProtocolError("missing required 'contentType'", { instance: message });
            return message;
        };

        /**
         * Decodes a CSChatProtoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.CSChatProtoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.CSChatProtoMsg} CSChatProtoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSChatProtoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CSChatProtoMsg message.
         * @function verify
         * @memberof protocol.CSChatProtoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSChatProtoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isString(message.content))
                return "content: string expected";
            switch (message.contentType) {
            default:
                return "contentType: enum value expected";
            case 1:
            case 2:
                break;
            }
            if (message.sendToPlayerId != null && message.hasOwnProperty("sendToPlayerId"))
                if (!$util.isInteger(message.sendToPlayerId))
                    return "sendToPlayerId: integer expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            return null;
        };

        /**
         * Creates a CSChatProtoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.CSChatProtoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.CSChatProtoMsg} CSChatProtoMsg
         */
        CSChatProtoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.CSChatProtoMsg)
                return object;
            var message = new $root.protocol.CSChatProtoMsg();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.content != null)
                message.content = String(object.content);
            switch (object.contentType) {
            case "TEXT":
            case 1:
                message.contentType = 1;
                break;
            case "WORLD_BOSS":
            case 2:
                message.contentType = 2;
                break;
            }
            if (object.sendToPlayerId != null)
                message.sendToPlayerId = object.sendToPlayerId | 0;
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            return message;
        };

        /**
         * Creates a plain object from a CSChatProtoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.CSChatProtoMsg
         * @static
         * @param {protocol.CSChatProtoMsg} message CSChatProtoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSChatProtoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                object.content = "";
                object.contentType = options.enums === String ? "TEXT" : 1;
                object.sendToPlayerId = 0;
                object.roomId = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.contentType != null && message.hasOwnProperty("contentType"))
                object.contentType = options.enums === String ? $root.protocol.ContentType[message.contentType] : message.contentType;
            if (message.sendToPlayerId != null && message.hasOwnProperty("sendToPlayerId"))
                object.sendToPlayerId = message.sendToPlayerId;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            return object;
        };

        /**
         * Converts this CSChatProtoMsg to JSON.
         * @function toJSON
         * @memberof protocol.CSChatProtoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSChatProtoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CSChatProtoMsg;
    })();

    /**
     * ContentType enum.
     * @name protocol.ContentType
     * @enum {string}
     * @property {number} TEXT=1 TEXT value
     * @property {number} WORLD_BOSS=2 WORLD_BOSS value
     */
    protocol.ContentType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "TEXT"] = 1;
        values[valuesById[2] = "WORLD_BOSS"] = 2;
        return values;
    })();

    protocol.SCChatProtoMsg = (function() {

        /**
         * Properties of a SCChatProtoMsg.
         * @memberof protocol
         * @interface ISCChatProtoMsg
         * @property {number} type SCChatProtoMsg type
         * @property {string} content SCChatProtoMsg content
         * @property {number} playerId SCChatProtoMsg playerId
         * @property {string} nickName SCChatProtoMsg nickName
         * @property {string} headPic SCChatProtoMsg headPic
         * @property {protocol.ContentType} contentType SCChatProtoMsg contentType
         * @property {number|null} [sendToPlayerId] SCChatProtoMsg sendToPlayerId
         * @property {number|null} [roomId] SCChatProtoMsg roomId
         */

        /**
         * Constructs a new SCChatProtoMsg.
         * @memberof protocol
         * @classdesc Represents a SCChatProtoMsg.
         * @implements ISCChatProtoMsg
         * @constructor
         * @param {protocol.ISCChatProtoMsg=} [properties] Properties to set
         */
        function SCChatProtoMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SCChatProtoMsg type.
         * @member {number} type
         * @memberof protocol.SCChatProtoMsg
         * @instance
         */
        SCChatProtoMsg.prototype.type = 0;

        /**
         * SCChatProtoMsg content.
         * @member {string} content
         * @memberof protocol.SCChatProtoMsg
         * @instance
         */
        SCChatProtoMsg.prototype.content = "";

        /**
         * SCChatProtoMsg playerId.
         * @member {number} playerId
         * @memberof protocol.SCChatProtoMsg
         * @instance
         */
        SCChatProtoMsg.prototype.playerId = 0;

        /**
         * SCChatProtoMsg nickName.
         * @member {string} nickName
         * @memberof protocol.SCChatProtoMsg
         * @instance
         */
        SCChatProtoMsg.prototype.nickName = "";

        /**
         * SCChatProtoMsg headPic.
         * @member {string} headPic
         * @memberof protocol.SCChatProtoMsg
         * @instance
         */
        SCChatProtoMsg.prototype.headPic = "";

        /**
         * SCChatProtoMsg contentType.
         * @member {protocol.ContentType} contentType
         * @memberof protocol.SCChatProtoMsg
         * @instance
         */
        SCChatProtoMsg.prototype.contentType = 1;

        /**
         * SCChatProtoMsg sendToPlayerId.
         * @member {number} sendToPlayerId
         * @memberof protocol.SCChatProtoMsg
         * @instance
         */
        SCChatProtoMsg.prototype.sendToPlayerId = 0;

        /**
         * SCChatProtoMsg roomId.
         * @member {number} roomId
         * @memberof protocol.SCChatProtoMsg
         * @instance
         */
        SCChatProtoMsg.prototype.roomId = 0;

        /**
         * Creates a new SCChatProtoMsg instance using the specified properties.
         * @function create
         * @memberof protocol.SCChatProtoMsg
         * @static
         * @param {protocol.ISCChatProtoMsg=} [properties] Properties to set
         * @returns {protocol.SCChatProtoMsg} SCChatProtoMsg instance
         */
        SCChatProtoMsg.create = function create(properties) {
            return new SCChatProtoMsg(properties);
        };

        /**
         * Encodes the specified SCChatProtoMsg message. Does not implicitly {@link protocol.SCChatProtoMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.SCChatProtoMsg
         * @static
         * @param {protocol.ISCChatProtoMsg} message SCChatProtoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SCChatProtoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.playerId);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.nickName);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.headPic);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.contentType);
            if (message.sendToPlayerId != null && message.hasOwnProperty("sendToPlayerId"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.sendToPlayerId);
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified SCChatProtoMsg message, length delimited. Does not implicitly {@link protocol.SCChatProtoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SCChatProtoMsg
         * @static
         * @param {protocol.ISCChatProtoMsg} message SCChatProtoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SCChatProtoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SCChatProtoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SCChatProtoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SCChatProtoMsg} SCChatProtoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SCChatProtoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SCChatProtoMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.content = reader.string();
                    break;
                case 3:
                    message.playerId = reader.int32();
                    break;
                case 4:
                    message.nickName = reader.string();
                    break;
                case 5:
                    message.headPic = reader.string();
                    break;
                case 6:
                    message.contentType = reader.int32();
                    break;
                case 7:
                    message.sendToPlayerId = reader.int32();
                    break;
                case 8:
                    message.roomId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("content"))
                throw $util.ProtocolError("missing required 'content'", { instance: message });
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            if (!message.hasOwnProperty("nickName"))
                throw $util.ProtocolError("missing required 'nickName'", { instance: message });
            if (!message.hasOwnProperty("headPic"))
                throw $util.ProtocolError("missing required 'headPic'", { instance: message });
            if (!message.hasOwnProperty("contentType"))
                throw $util.ProtocolError("missing required 'contentType'", { instance: message });
            return message;
        };

        /**
         * Decodes a SCChatProtoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SCChatProtoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SCChatProtoMsg} SCChatProtoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SCChatProtoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SCChatProtoMsg message.
         * @function verify
         * @memberof protocol.SCChatProtoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SCChatProtoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isString(message.content))
                return "content: string expected";
            if (!$util.isInteger(message.playerId))
                return "playerId: integer expected";
            if (!$util.isString(message.nickName))
                return "nickName: string expected";
            if (!$util.isString(message.headPic))
                return "headPic: string expected";
            switch (message.contentType) {
            default:
                return "contentType: enum value expected";
            case 1:
            case 2:
                break;
            }
            if (message.sendToPlayerId != null && message.hasOwnProperty("sendToPlayerId"))
                if (!$util.isInteger(message.sendToPlayerId))
                    return "sendToPlayerId: integer expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            return null;
        };

        /**
         * Creates a SCChatProtoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SCChatProtoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SCChatProtoMsg} SCChatProtoMsg
         */
        SCChatProtoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SCChatProtoMsg)
                return object;
            var message = new $root.protocol.SCChatProtoMsg();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.content != null)
                message.content = String(object.content);
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.headPic != null)
                message.headPic = String(object.headPic);
            switch (object.contentType) {
            case "TEXT":
            case 1:
                message.contentType = 1;
                break;
            case "WORLD_BOSS":
            case 2:
                message.contentType = 2;
                break;
            }
            if (object.sendToPlayerId != null)
                message.sendToPlayerId = object.sendToPlayerId | 0;
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SCChatProtoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SCChatProtoMsg
         * @static
         * @param {protocol.SCChatProtoMsg} message SCChatProtoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SCChatProtoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                object.content = "";
                object.playerId = 0;
                object.nickName = "";
                object.headPic = "";
                object.contentType = options.enums === String ? "TEXT" : 1;
                object.sendToPlayerId = 0;
                object.roomId = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.headPic != null && message.hasOwnProperty("headPic"))
                object.headPic = message.headPic;
            if (message.contentType != null && message.hasOwnProperty("contentType"))
                object.contentType = options.enums === String ? $root.protocol.ContentType[message.contentType] : message.contentType;
            if (message.sendToPlayerId != null && message.hasOwnProperty("sendToPlayerId"))
                object.sendToPlayerId = message.sendToPlayerId;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            return object;
        };

        /**
         * Converts this SCChatProtoMsg to JSON.
         * @function toJSON
         * @memberof protocol.SCChatProtoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SCChatProtoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SCChatProtoMsg;
    })();

    protocol.WorldChatDefMsgList = (function() {

        /**
         * Properties of a WorldChatDefMsgList.
         * @memberof protocol
         * @interface IWorldChatDefMsgList
         * @property {Array.<protocol.ISCChatProtoMsg>|null} [list] WorldChatDefMsgList list
         */

        /**
         * Constructs a new WorldChatDefMsgList.
         * @memberof protocol
         * @classdesc Represents a WorldChatDefMsgList.
         * @implements IWorldChatDefMsgList
         * @constructor
         * @param {protocol.IWorldChatDefMsgList=} [properties] Properties to set
         */
        function WorldChatDefMsgList(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WorldChatDefMsgList list.
         * @member {Array.<protocol.ISCChatProtoMsg>} list
         * @memberof protocol.WorldChatDefMsgList
         * @instance
         */
        WorldChatDefMsgList.prototype.list = $util.emptyArray;

        /**
         * Creates a new WorldChatDefMsgList instance using the specified properties.
         * @function create
         * @memberof protocol.WorldChatDefMsgList
         * @static
         * @param {protocol.IWorldChatDefMsgList=} [properties] Properties to set
         * @returns {protocol.WorldChatDefMsgList} WorldChatDefMsgList instance
         */
        WorldChatDefMsgList.create = function create(properties) {
            return new WorldChatDefMsgList(properties);
        };

        /**
         * Encodes the specified WorldChatDefMsgList message. Does not implicitly {@link protocol.WorldChatDefMsgList.verify|verify} messages.
         * @function encode
         * @memberof protocol.WorldChatDefMsgList
         * @static
         * @param {protocol.IWorldChatDefMsgList} message WorldChatDefMsgList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldChatDefMsgList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.SCChatProtoMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WorldChatDefMsgList message, length delimited. Does not implicitly {@link protocol.WorldChatDefMsgList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.WorldChatDefMsgList
         * @static
         * @param {protocol.IWorldChatDefMsgList} message WorldChatDefMsgList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldChatDefMsgList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WorldChatDefMsgList message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.WorldChatDefMsgList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.WorldChatDefMsgList} WorldChatDefMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldChatDefMsgList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.WorldChatDefMsgList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.SCChatProtoMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WorldChatDefMsgList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.WorldChatDefMsgList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.WorldChatDefMsgList} WorldChatDefMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldChatDefMsgList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WorldChatDefMsgList message.
         * @function verify
         * @memberof protocol.WorldChatDefMsgList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorldChatDefMsgList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.SCChatProtoMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WorldChatDefMsgList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.WorldChatDefMsgList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.WorldChatDefMsgList} WorldChatDefMsgList
         */
        WorldChatDefMsgList.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.WorldChatDefMsgList)
                return object;
            var message = new $root.protocol.WorldChatDefMsgList();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.WorldChatDefMsgList.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.WorldChatDefMsgList.list: object expected");
                    message.list[i] = $root.protocol.SCChatProtoMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a WorldChatDefMsgList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.WorldChatDefMsgList
         * @static
         * @param {protocol.WorldChatDefMsgList} message WorldChatDefMsgList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorldChatDefMsgList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.SCChatProtoMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this WorldChatDefMsgList to JSON.
         * @function toJSON
         * @memberof protocol.WorldChatDefMsgList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorldChatDefMsgList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WorldChatDefMsgList;
    })();

    protocol.SystemNoticeMsg = (function() {

        /**
         * Properties of a SystemNoticeMsg.
         * @memberof protocol
         * @interface ISystemNoticeMsg
         * @property {number} type SystemNoticeMsg type
         * @property {Array.<string>|null} [params] SystemNoticeMsg params
         */

        /**
         * Constructs a new SystemNoticeMsg.
         * @memberof protocol
         * @classdesc Represents a SystemNoticeMsg.
         * @implements ISystemNoticeMsg
         * @constructor
         * @param {protocol.ISystemNoticeMsg=} [properties] Properties to set
         */
        function SystemNoticeMsg(properties) {
            this.params = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SystemNoticeMsg type.
         * @member {number} type
         * @memberof protocol.SystemNoticeMsg
         * @instance
         */
        SystemNoticeMsg.prototype.type = 0;

        /**
         * SystemNoticeMsg params.
         * @member {Array.<string>} params
         * @memberof protocol.SystemNoticeMsg
         * @instance
         */
        SystemNoticeMsg.prototype.params = $util.emptyArray;

        /**
         * Creates a new SystemNoticeMsg instance using the specified properties.
         * @function create
         * @memberof protocol.SystemNoticeMsg
         * @static
         * @param {protocol.ISystemNoticeMsg=} [properties] Properties to set
         * @returns {protocol.SystemNoticeMsg} SystemNoticeMsg instance
         */
        SystemNoticeMsg.create = function create(properties) {
            return new SystemNoticeMsg(properties);
        };

        /**
         * Encodes the specified SystemNoticeMsg message. Does not implicitly {@link protocol.SystemNoticeMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.SystemNoticeMsg
         * @static
         * @param {protocol.ISystemNoticeMsg} message SystemNoticeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SystemNoticeMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.params != null && message.params.length)
                for (var i = 0; i < message.params.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.params[i]);
            return writer;
        };

        /**
         * Encodes the specified SystemNoticeMsg message, length delimited. Does not implicitly {@link protocol.SystemNoticeMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SystemNoticeMsg
         * @static
         * @param {protocol.ISystemNoticeMsg} message SystemNoticeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SystemNoticeMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SystemNoticeMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SystemNoticeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SystemNoticeMsg} SystemNoticeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SystemNoticeMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SystemNoticeMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    if (!(message.params && message.params.length))
                        message.params = [];
                    message.params.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes a SystemNoticeMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SystemNoticeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SystemNoticeMsg} SystemNoticeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SystemNoticeMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SystemNoticeMsg message.
         * @function verify
         * @memberof protocol.SystemNoticeMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SystemNoticeMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (message.params != null && message.hasOwnProperty("params")) {
                if (!Array.isArray(message.params))
                    return "params: array expected";
                for (var i = 0; i < message.params.length; ++i)
                    if (!$util.isString(message.params[i]))
                        return "params: string[] expected";
            }
            return null;
        };

        /**
         * Creates a SystemNoticeMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SystemNoticeMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SystemNoticeMsg} SystemNoticeMsg
         */
        SystemNoticeMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SystemNoticeMsg)
                return object;
            var message = new $root.protocol.SystemNoticeMsg();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.params) {
                if (!Array.isArray(object.params))
                    throw TypeError(".protocol.SystemNoticeMsg.params: array expected");
                message.params = [];
                for (var i = 0; i < object.params.length; ++i)
                    message.params[i] = String(object.params[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a SystemNoticeMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SystemNoticeMsg
         * @static
         * @param {protocol.SystemNoticeMsg} message SystemNoticeMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SystemNoticeMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.params = [];
            if (options.defaults)
                object.type = 0;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.params && message.params.length) {
                object.params = [];
                for (var j = 0; j < message.params.length; ++j)
                    object.params[j] = message.params[j];
            }
            return object;
        };

        /**
         * Converts this SystemNoticeMsg to JSON.
         * @function toJSON
         * @memberof protocol.SystemNoticeMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SystemNoticeMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SystemNoticeMsg;
    })();

    protocol.BarrageMsg = (function() {

        /**
         * Properties of a BarrageMsg.
         * @memberof protocol
         * @interface IBarrageMsg
         * @property {number} playerId BarrageMsg playerId
         * @property {string} nickName BarrageMsg nickName
         * @property {string} headPic BarrageMsg headPic
         * @property {string} content BarrageMsg content
         */

        /**
         * Constructs a new BarrageMsg.
         * @memberof protocol
         * @classdesc Represents a BarrageMsg.
         * @implements IBarrageMsg
         * @constructor
         * @param {protocol.IBarrageMsg=} [properties] Properties to set
         */
        function BarrageMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BarrageMsg playerId.
         * @member {number} playerId
         * @memberof protocol.BarrageMsg
         * @instance
         */
        BarrageMsg.prototype.playerId = 0;

        /**
         * BarrageMsg nickName.
         * @member {string} nickName
         * @memberof protocol.BarrageMsg
         * @instance
         */
        BarrageMsg.prototype.nickName = "";

        /**
         * BarrageMsg headPic.
         * @member {string} headPic
         * @memberof protocol.BarrageMsg
         * @instance
         */
        BarrageMsg.prototype.headPic = "";

        /**
         * BarrageMsg content.
         * @member {string} content
         * @memberof protocol.BarrageMsg
         * @instance
         */
        BarrageMsg.prototype.content = "";

        /**
         * Creates a new BarrageMsg instance using the specified properties.
         * @function create
         * @memberof protocol.BarrageMsg
         * @static
         * @param {protocol.IBarrageMsg=} [properties] Properties to set
         * @returns {protocol.BarrageMsg} BarrageMsg instance
         */
        BarrageMsg.create = function create(properties) {
            return new BarrageMsg(properties);
        };

        /**
         * Encodes the specified BarrageMsg message. Does not implicitly {@link protocol.BarrageMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.BarrageMsg
         * @static
         * @param {protocol.IBarrageMsg} message BarrageMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BarrageMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickName);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.headPic);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified BarrageMsg message, length delimited. Does not implicitly {@link protocol.BarrageMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BarrageMsg
         * @static
         * @param {protocol.IBarrageMsg} message BarrageMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BarrageMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BarrageMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BarrageMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BarrageMsg} BarrageMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BarrageMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BarrageMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.int32();
                    break;
                case 2:
                    message.nickName = reader.string();
                    break;
                case 3:
                    message.headPic = reader.string();
                    break;
                case 4:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            if (!message.hasOwnProperty("nickName"))
                throw $util.ProtocolError("missing required 'nickName'", { instance: message });
            if (!message.hasOwnProperty("headPic"))
                throw $util.ProtocolError("missing required 'headPic'", { instance: message });
            if (!message.hasOwnProperty("content"))
                throw $util.ProtocolError("missing required 'content'", { instance: message });
            return message;
        };

        /**
         * Decodes a BarrageMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BarrageMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BarrageMsg} BarrageMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BarrageMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BarrageMsg message.
         * @function verify
         * @memberof protocol.BarrageMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BarrageMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.playerId))
                return "playerId: integer expected";
            if (!$util.isString(message.nickName))
                return "nickName: string expected";
            if (!$util.isString(message.headPic))
                return "headPic: string expected";
            if (!$util.isString(message.content))
                return "content: string expected";
            return null;
        };

        /**
         * Creates a BarrageMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BarrageMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BarrageMsg} BarrageMsg
         */
        BarrageMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BarrageMsg)
                return object;
            var message = new $root.protocol.BarrageMsg();
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.headPic != null)
                message.headPic = String(object.headPic);
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a BarrageMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BarrageMsg
         * @static
         * @param {protocol.BarrageMsg} message BarrageMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BarrageMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playerId = 0;
                object.nickName = "";
                object.headPic = "";
                object.content = "";
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.headPic != null && message.hasOwnProperty("headPic"))
                object.headPic = message.headPic;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this BarrageMsg to JSON.
         * @function toJSON
         * @memberof protocol.BarrageMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BarrageMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BarrageMsg;
    })();

    protocol.BarrageMsgList = (function() {

        /**
         * Properties of a BarrageMsgList.
         * @memberof protocol
         * @interface IBarrageMsgList
         * @property {Array.<protocol.IBarrageMsg>|null} [list] BarrageMsgList list
         */

        /**
         * Constructs a new BarrageMsgList.
         * @memberof protocol
         * @classdesc Represents a BarrageMsgList.
         * @implements IBarrageMsgList
         * @constructor
         * @param {protocol.IBarrageMsgList=} [properties] Properties to set
         */
        function BarrageMsgList(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BarrageMsgList list.
         * @member {Array.<protocol.IBarrageMsg>} list
         * @memberof protocol.BarrageMsgList
         * @instance
         */
        BarrageMsgList.prototype.list = $util.emptyArray;

        /**
         * Creates a new BarrageMsgList instance using the specified properties.
         * @function create
         * @memberof protocol.BarrageMsgList
         * @static
         * @param {protocol.IBarrageMsgList=} [properties] Properties to set
         * @returns {protocol.BarrageMsgList} BarrageMsgList instance
         */
        BarrageMsgList.create = function create(properties) {
            return new BarrageMsgList(properties);
        };

        /**
         * Encodes the specified BarrageMsgList message. Does not implicitly {@link protocol.BarrageMsgList.verify|verify} messages.
         * @function encode
         * @memberof protocol.BarrageMsgList
         * @static
         * @param {protocol.IBarrageMsgList} message BarrageMsgList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BarrageMsgList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.BarrageMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BarrageMsgList message, length delimited. Does not implicitly {@link protocol.BarrageMsgList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BarrageMsgList
         * @static
         * @param {protocol.IBarrageMsgList} message BarrageMsgList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BarrageMsgList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BarrageMsgList message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BarrageMsgList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BarrageMsgList} BarrageMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BarrageMsgList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BarrageMsgList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.BarrageMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BarrageMsgList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BarrageMsgList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BarrageMsgList} BarrageMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BarrageMsgList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BarrageMsgList message.
         * @function verify
         * @memberof protocol.BarrageMsgList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BarrageMsgList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.BarrageMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BarrageMsgList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BarrageMsgList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BarrageMsgList} BarrageMsgList
         */
        BarrageMsgList.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BarrageMsgList)
                return object;
            var message = new $root.protocol.BarrageMsgList();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.BarrageMsgList.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.BarrageMsgList.list: object expected");
                    message.list[i] = $root.protocol.BarrageMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BarrageMsgList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BarrageMsgList
         * @static
         * @param {protocol.BarrageMsgList} message BarrageMsgList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BarrageMsgList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.BarrageMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this BarrageMsgList to JSON.
         * @function toJSON
         * @memberof protocol.BarrageMsgList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BarrageMsgList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BarrageMsgList;
    })();

    protocol.CardGameListMsg = (function() {

        /**
         * Properties of a CardGameListMsg.
         * @memberof protocol
         * @interface ICardGameListMsg
         * @property {Array.<protocol.ICardGameMsg>|null} [cardGameMsg] CardGameListMsg cardGameMsg
         */

        /**
         * Constructs a new CardGameListMsg.
         * @memberof protocol
         * @classdesc Represents a CardGameListMsg.
         * @implements ICardGameListMsg
         * @constructor
         * @param {protocol.ICardGameListMsg=} [properties] Properties to set
         */
        function CardGameListMsg(properties) {
            this.cardGameMsg = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CardGameListMsg cardGameMsg.
         * @member {Array.<protocol.ICardGameMsg>} cardGameMsg
         * @memberof protocol.CardGameListMsg
         * @instance
         */
        CardGameListMsg.prototype.cardGameMsg = $util.emptyArray;

        /**
         * Creates a new CardGameListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.CardGameListMsg
         * @static
         * @param {protocol.ICardGameListMsg=} [properties] Properties to set
         * @returns {protocol.CardGameListMsg} CardGameListMsg instance
         */
        CardGameListMsg.create = function create(properties) {
            return new CardGameListMsg(properties);
        };

        /**
         * Encodes the specified CardGameListMsg message. Does not implicitly {@link protocol.CardGameListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.CardGameListMsg
         * @static
         * @param {protocol.ICardGameListMsg} message CardGameListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardGameListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cardGameMsg != null && message.cardGameMsg.length)
                for (var i = 0; i < message.cardGameMsg.length; ++i)
                    $root.protocol.CardGameMsg.encode(message.cardGameMsg[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CardGameListMsg message, length delimited. Does not implicitly {@link protocol.CardGameListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.CardGameListMsg
         * @static
         * @param {protocol.ICardGameListMsg} message CardGameListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardGameListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CardGameListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.CardGameListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.CardGameListMsg} CardGameListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardGameListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CardGameListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.cardGameMsg && message.cardGameMsg.length))
                        message.cardGameMsg = [];
                    message.cardGameMsg.push($root.protocol.CardGameMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CardGameListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.CardGameListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.CardGameListMsg} CardGameListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardGameListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CardGameListMsg message.
         * @function verify
         * @memberof protocol.CardGameListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CardGameListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cardGameMsg != null && message.hasOwnProperty("cardGameMsg")) {
                if (!Array.isArray(message.cardGameMsg))
                    return "cardGameMsg: array expected";
                for (var i = 0; i < message.cardGameMsg.length; ++i) {
                    var error = $root.protocol.CardGameMsg.verify(message.cardGameMsg[i]);
                    if (error)
                        return "cardGameMsg." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CardGameListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.CardGameListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.CardGameListMsg} CardGameListMsg
         */
        CardGameListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.CardGameListMsg)
                return object;
            var message = new $root.protocol.CardGameListMsg();
            if (object.cardGameMsg) {
                if (!Array.isArray(object.cardGameMsg))
                    throw TypeError(".protocol.CardGameListMsg.cardGameMsg: array expected");
                message.cardGameMsg = [];
                for (var i = 0; i < object.cardGameMsg.length; ++i) {
                    if (typeof object.cardGameMsg[i] !== "object")
                        throw TypeError(".protocol.CardGameListMsg.cardGameMsg: object expected");
                    message.cardGameMsg[i] = $root.protocol.CardGameMsg.fromObject(object.cardGameMsg[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CardGameListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.CardGameListMsg
         * @static
         * @param {protocol.CardGameListMsg} message CardGameListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CardGameListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cardGameMsg = [];
            if (message.cardGameMsg && message.cardGameMsg.length) {
                object.cardGameMsg = [];
                for (var j = 0; j < message.cardGameMsg.length; ++j)
                    object.cardGameMsg[j] = $root.protocol.CardGameMsg.toObject(message.cardGameMsg[j], options);
            }
            return object;
        };

        /**
         * Converts this CardGameListMsg to JSON.
         * @function toJSON
         * @memberof protocol.CardGameListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CardGameListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CardGameListMsg;
    })();

    protocol.CardGameMsg = (function() {

        /**
         * Properties of a CardGameMsg.
         * @memberof protocol
         * @interface ICardGameMsg
         * @property {number} gameId CardGameMsg gameId
         * @property {string} name CardGameMsg name
         * @property {string} iconPath CardGameMsg iconPath
         * @property {number|null} [totalNum] CardGameMsg totalNum
         */

        /**
         * Constructs a new CardGameMsg.
         * @memberof protocol
         * @classdesc Represents a CardGameMsg.
         * @implements ICardGameMsg
         * @constructor
         * @param {protocol.ICardGameMsg=} [properties] Properties to set
         */
        function CardGameMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CardGameMsg gameId.
         * @member {number} gameId
         * @memberof protocol.CardGameMsg
         * @instance
         */
        CardGameMsg.prototype.gameId = 0;

        /**
         * CardGameMsg name.
         * @member {string} name
         * @memberof protocol.CardGameMsg
         * @instance
         */
        CardGameMsg.prototype.name = "";

        /**
         * CardGameMsg iconPath.
         * @member {string} iconPath
         * @memberof protocol.CardGameMsg
         * @instance
         */
        CardGameMsg.prototype.iconPath = "";

        /**
         * CardGameMsg totalNum.
         * @member {number} totalNum
         * @memberof protocol.CardGameMsg
         * @instance
         */
        CardGameMsg.prototype.totalNum = 0;

        /**
         * Creates a new CardGameMsg instance using the specified properties.
         * @function create
         * @memberof protocol.CardGameMsg
         * @static
         * @param {protocol.ICardGameMsg=} [properties] Properties to set
         * @returns {protocol.CardGameMsg} CardGameMsg instance
         */
        CardGameMsg.create = function create(properties) {
            return new CardGameMsg(properties);
        };

        /**
         * Encodes the specified CardGameMsg message. Does not implicitly {@link protocol.CardGameMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.CardGameMsg
         * @static
         * @param {protocol.ICardGameMsg} message CardGameMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardGameMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.iconPath);
            if (message.totalNum != null && message.hasOwnProperty("totalNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.totalNum);
            return writer;
        };

        /**
         * Encodes the specified CardGameMsg message, length delimited. Does not implicitly {@link protocol.CardGameMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.CardGameMsg
         * @static
         * @param {protocol.ICardGameMsg} message CardGameMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardGameMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CardGameMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.CardGameMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.CardGameMsg} CardGameMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardGameMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CardGameMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameId = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.iconPath = reader.string();
                    break;
                case 4:
                    message.totalNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("gameId"))
                throw $util.ProtocolError("missing required 'gameId'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("iconPath"))
                throw $util.ProtocolError("missing required 'iconPath'", { instance: message });
            return message;
        };

        /**
         * Decodes a CardGameMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.CardGameMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.CardGameMsg} CardGameMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardGameMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CardGameMsg message.
         * @function verify
         * @memberof protocol.CardGameMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CardGameMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.gameId))
                return "gameId: integer expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isString(message.iconPath))
                return "iconPath: string expected";
            if (message.totalNum != null && message.hasOwnProperty("totalNum"))
                if (!$util.isInteger(message.totalNum))
                    return "totalNum: integer expected";
            return null;
        };

        /**
         * Creates a CardGameMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.CardGameMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.CardGameMsg} CardGameMsg
         */
        CardGameMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.CardGameMsg)
                return object;
            var message = new $root.protocol.CardGameMsg();
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.iconPath != null)
                message.iconPath = String(object.iconPath);
            if (object.totalNum != null)
                message.totalNum = object.totalNum | 0;
            return message;
        };

        /**
         * Creates a plain object from a CardGameMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.CardGameMsg
         * @static
         * @param {protocol.CardGameMsg} message CardGameMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CardGameMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.gameId = 0;
                object.name = "";
                object.iconPath = "";
                object.totalNum = 0;
            }
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.iconPath != null && message.hasOwnProperty("iconPath"))
                object.iconPath = message.iconPath;
            if (message.totalNum != null && message.hasOwnProperty("totalNum"))
                object.totalNum = message.totalNum;
            return object;
        };

        /**
         * Converts this CardGameMsg to JSON.
         * @function toJSON
         * @memberof protocol.CardGameMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CardGameMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CardGameMsg;
    })();

    protocol.CommonMsg = (function() {

        /**
         * Properties of a CommonMsg.
         * @memberof protocol
         * @interface ICommonMsg
         * @property {number|null} [intPar1] CommonMsg intPar1
         * @property {number|null} [intPar2] CommonMsg intPar2
         * @property {number|null} [intPar3] CommonMsg intPar3
         * @property {string|null} [strPar1] CommonMsg strPar1
         * @property {string|null} [strPar2] CommonMsg strPar2
         * @property {string|null} [strPar3] CommonMsg strPar3
         * @property {boolean|null} [boolPar1] CommonMsg boolPar1
         * @property {boolean|null} [boolPar2] CommonMsg boolPar2
         * @property {boolean|null} [boolPar3] CommonMsg boolPar3
         * @property {number|Long|null} [longPar1] CommonMsg longPar1
         * @property {number|Long|null} [longPar2] CommonMsg longPar2
         * @property {number|Long|null} [longPar3] CommonMsg longPar3
         * @property {number|Long|null} [longPar4] CommonMsg longPar4
         * @property {number|null} [floatPar1] CommonMsg floatPar1
         * @property {number|null} [floatPar2] CommonMsg floatPar2
         * @property {number|null} [floatPar3] CommonMsg floatPar3
         */

        /**
         * Constructs a new CommonMsg.
         * @memberof protocol
         * @classdesc Represents a CommonMsg.
         * @implements ICommonMsg
         * @constructor
         * @param {protocol.ICommonMsg=} [properties] Properties to set
         */
        function CommonMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonMsg intPar1.
         * @member {number} intPar1
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.intPar1 = 0;

        /**
         * CommonMsg intPar2.
         * @member {number} intPar2
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.intPar2 = 0;

        /**
         * CommonMsg intPar3.
         * @member {number} intPar3
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.intPar3 = 0;

        /**
         * CommonMsg strPar1.
         * @member {string} strPar1
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.strPar1 = "";

        /**
         * CommonMsg strPar2.
         * @member {string} strPar2
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.strPar2 = "";

        /**
         * CommonMsg strPar3.
         * @member {string} strPar3
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.strPar3 = "";

        /**
         * CommonMsg boolPar1.
         * @member {boolean} boolPar1
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.boolPar1 = false;

        /**
         * CommonMsg boolPar2.
         * @member {boolean} boolPar2
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.boolPar2 = false;

        /**
         * CommonMsg boolPar3.
         * @member {boolean} boolPar3
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.boolPar3 = false;

        /**
         * CommonMsg longPar1.
         * @member {number|Long} longPar1
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.longPar1 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommonMsg longPar2.
         * @member {number|Long} longPar2
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.longPar2 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommonMsg longPar3.
         * @member {number|Long} longPar3
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.longPar3 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommonMsg longPar4.
         * @member {number|Long} longPar4
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.longPar4 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommonMsg floatPar1.
         * @member {number} floatPar1
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.floatPar1 = 0;

        /**
         * CommonMsg floatPar2.
         * @member {number} floatPar2
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.floatPar2 = 0;

        /**
         * CommonMsg floatPar3.
         * @member {number} floatPar3
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.floatPar3 = 0;

        /**
         * Creates a new CommonMsg instance using the specified properties.
         * @function create
         * @memberof protocol.CommonMsg
         * @static
         * @param {protocol.ICommonMsg=} [properties] Properties to set
         * @returns {protocol.CommonMsg} CommonMsg instance
         */
        CommonMsg.create = function create(properties) {
            return new CommonMsg(properties);
        };

        /**
         * Encodes the specified CommonMsg message. Does not implicitly {@link protocol.CommonMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.CommonMsg
         * @static
         * @param {protocol.ICommonMsg} message CommonMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.intPar1 != null && message.hasOwnProperty("intPar1"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.intPar1);
            if (message.intPar2 != null && message.hasOwnProperty("intPar2"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.intPar2);
            if (message.intPar3 != null && message.hasOwnProperty("intPar3"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.intPar3);
            if (message.strPar1 != null && message.hasOwnProperty("strPar1"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.strPar1);
            if (message.strPar2 != null && message.hasOwnProperty("strPar2"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.strPar2);
            if (message.strPar3 != null && message.hasOwnProperty("strPar3"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.strPar3);
            if (message.boolPar1 != null && message.hasOwnProperty("boolPar1"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.boolPar1);
            if (message.boolPar2 != null && message.hasOwnProperty("boolPar2"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.boolPar2);
            if (message.boolPar3 != null && message.hasOwnProperty("boolPar3"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.boolPar3);
            if (message.longPar1 != null && message.hasOwnProperty("longPar1"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.longPar1);
            if (message.longPar2 != null && message.hasOwnProperty("longPar2"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.longPar2);
            if (message.longPar3 != null && message.hasOwnProperty("longPar3"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.longPar3);
            if (message.longPar4 != null && message.hasOwnProperty("longPar4"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.longPar4);
            if (message.floatPar1 != null && message.hasOwnProperty("floatPar1"))
                writer.uint32(/* id 14, wireType 5 =*/117).float(message.floatPar1);
            if (message.floatPar2 != null && message.hasOwnProperty("floatPar2"))
                writer.uint32(/* id 15, wireType 5 =*/125).float(message.floatPar2);
            if (message.floatPar3 != null && message.hasOwnProperty("floatPar3"))
                writer.uint32(/* id 16, wireType 5 =*/133).float(message.floatPar3);
            return writer;
        };

        /**
         * Encodes the specified CommonMsg message, length delimited. Does not implicitly {@link protocol.CommonMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.CommonMsg
         * @static
         * @param {protocol.ICommonMsg} message CommonMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.CommonMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.CommonMsg} CommonMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CommonMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.intPar1 = reader.int32();
                    break;
                case 2:
                    message.intPar2 = reader.int32();
                    break;
                case 3:
                    message.intPar3 = reader.int32();
                    break;
                case 4:
                    message.strPar1 = reader.string();
                    break;
                case 5:
                    message.strPar2 = reader.string();
                    break;
                case 6:
                    message.strPar3 = reader.string();
                    break;
                case 7:
                    message.boolPar1 = reader.bool();
                    break;
                case 8:
                    message.boolPar2 = reader.bool();
                    break;
                case 9:
                    message.boolPar3 = reader.bool();
                    break;
                case 10:
                    message.longPar1 = reader.int64();
                    break;
                case 11:
                    message.longPar2 = reader.int64();
                    break;
                case 12:
                    message.longPar3 = reader.int64();
                    break;
                case 13:
                    message.longPar4 = reader.int64();
                    break;
                case 14:
                    message.floatPar1 = reader.float();
                    break;
                case 15:
                    message.floatPar2 = reader.float();
                    break;
                case 16:
                    message.floatPar3 = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.CommonMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.CommonMsg} CommonMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonMsg message.
         * @function verify
         * @memberof protocol.CommonMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.intPar1 != null && message.hasOwnProperty("intPar1"))
                if (!$util.isInteger(message.intPar1))
                    return "intPar1: integer expected";
            if (message.intPar2 != null && message.hasOwnProperty("intPar2"))
                if (!$util.isInteger(message.intPar2))
                    return "intPar2: integer expected";
            if (message.intPar3 != null && message.hasOwnProperty("intPar3"))
                if (!$util.isInteger(message.intPar3))
                    return "intPar3: integer expected";
            if (message.strPar1 != null && message.hasOwnProperty("strPar1"))
                if (!$util.isString(message.strPar1))
                    return "strPar1: string expected";
            if (message.strPar2 != null && message.hasOwnProperty("strPar2"))
                if (!$util.isString(message.strPar2))
                    return "strPar2: string expected";
            if (message.strPar3 != null && message.hasOwnProperty("strPar3"))
                if (!$util.isString(message.strPar3))
                    return "strPar3: string expected";
            if (message.boolPar1 != null && message.hasOwnProperty("boolPar1"))
                if (typeof message.boolPar1 !== "boolean")
                    return "boolPar1: boolean expected";
            if (message.boolPar2 != null && message.hasOwnProperty("boolPar2"))
                if (typeof message.boolPar2 !== "boolean")
                    return "boolPar2: boolean expected";
            if (message.boolPar3 != null && message.hasOwnProperty("boolPar3"))
                if (typeof message.boolPar3 !== "boolean")
                    return "boolPar3: boolean expected";
            if (message.longPar1 != null && message.hasOwnProperty("longPar1"))
                if (!$util.isInteger(message.longPar1) && !(message.longPar1 && $util.isInteger(message.longPar1.low) && $util.isInteger(message.longPar1.high)))
                    return "longPar1: integer|Long expected";
            if (message.longPar2 != null && message.hasOwnProperty("longPar2"))
                if (!$util.isInteger(message.longPar2) && !(message.longPar2 && $util.isInteger(message.longPar2.low) && $util.isInteger(message.longPar2.high)))
                    return "longPar2: integer|Long expected";
            if (message.longPar3 != null && message.hasOwnProperty("longPar3"))
                if (!$util.isInteger(message.longPar3) && !(message.longPar3 && $util.isInteger(message.longPar3.low) && $util.isInteger(message.longPar3.high)))
                    return "longPar3: integer|Long expected";
            if (message.longPar4 != null && message.hasOwnProperty("longPar4"))
                if (!$util.isInteger(message.longPar4) && !(message.longPar4 && $util.isInteger(message.longPar4.low) && $util.isInteger(message.longPar4.high)))
                    return "longPar4: integer|Long expected";
            if (message.floatPar1 != null && message.hasOwnProperty("floatPar1"))
                if (typeof message.floatPar1 !== "number")
                    return "floatPar1: number expected";
            if (message.floatPar2 != null && message.hasOwnProperty("floatPar2"))
                if (typeof message.floatPar2 !== "number")
                    return "floatPar2: number expected";
            if (message.floatPar3 != null && message.hasOwnProperty("floatPar3"))
                if (typeof message.floatPar3 !== "number")
                    return "floatPar3: number expected";
            return null;
        };

        /**
         * Creates a CommonMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.CommonMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.CommonMsg} CommonMsg
         */
        CommonMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.CommonMsg)
                return object;
            var message = new $root.protocol.CommonMsg();
            if (object.intPar1 != null)
                message.intPar1 = object.intPar1 | 0;
            if (object.intPar2 != null)
                message.intPar2 = object.intPar2 | 0;
            if (object.intPar3 != null)
                message.intPar3 = object.intPar3 | 0;
            if (object.strPar1 != null)
                message.strPar1 = String(object.strPar1);
            if (object.strPar2 != null)
                message.strPar2 = String(object.strPar2);
            if (object.strPar3 != null)
                message.strPar3 = String(object.strPar3);
            if (object.boolPar1 != null)
                message.boolPar1 = Boolean(object.boolPar1);
            if (object.boolPar2 != null)
                message.boolPar2 = Boolean(object.boolPar2);
            if (object.boolPar3 != null)
                message.boolPar3 = Boolean(object.boolPar3);
            if (object.longPar1 != null)
                if ($util.Long)
                    (message.longPar1 = $util.Long.fromValue(object.longPar1)).unsigned = false;
                else if (typeof object.longPar1 === "string")
                    message.longPar1 = parseInt(object.longPar1, 10);
                else if (typeof object.longPar1 === "number")
                    message.longPar1 = object.longPar1;
                else if (typeof object.longPar1 === "object")
                    message.longPar1 = new $util.LongBits(object.longPar1.low >>> 0, object.longPar1.high >>> 0).toNumber();
            if (object.longPar2 != null)
                if ($util.Long)
                    (message.longPar2 = $util.Long.fromValue(object.longPar2)).unsigned = false;
                else if (typeof object.longPar2 === "string")
                    message.longPar2 = parseInt(object.longPar2, 10);
                else if (typeof object.longPar2 === "number")
                    message.longPar2 = object.longPar2;
                else if (typeof object.longPar2 === "object")
                    message.longPar2 = new $util.LongBits(object.longPar2.low >>> 0, object.longPar2.high >>> 0).toNumber();
            if (object.longPar3 != null)
                if ($util.Long)
                    (message.longPar3 = $util.Long.fromValue(object.longPar3)).unsigned = false;
                else if (typeof object.longPar3 === "string")
                    message.longPar3 = parseInt(object.longPar3, 10);
                else if (typeof object.longPar3 === "number")
                    message.longPar3 = object.longPar3;
                else if (typeof object.longPar3 === "object")
                    message.longPar3 = new $util.LongBits(object.longPar3.low >>> 0, object.longPar3.high >>> 0).toNumber();
            if (object.longPar4 != null)
                if ($util.Long)
                    (message.longPar4 = $util.Long.fromValue(object.longPar4)).unsigned = false;
                else if (typeof object.longPar4 === "string")
                    message.longPar4 = parseInt(object.longPar4, 10);
                else if (typeof object.longPar4 === "number")
                    message.longPar4 = object.longPar4;
                else if (typeof object.longPar4 === "object")
                    message.longPar4 = new $util.LongBits(object.longPar4.low >>> 0, object.longPar4.high >>> 0).toNumber();
            if (object.floatPar1 != null)
                message.floatPar1 = Number(object.floatPar1);
            if (object.floatPar2 != null)
                message.floatPar2 = Number(object.floatPar2);
            if (object.floatPar3 != null)
                message.floatPar3 = Number(object.floatPar3);
            return message;
        };

        /**
         * Creates a plain object from a CommonMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.CommonMsg
         * @static
         * @param {protocol.CommonMsg} message CommonMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.intPar1 = 0;
                object.intPar2 = 0;
                object.intPar3 = 0;
                object.strPar1 = "";
                object.strPar2 = "";
                object.strPar3 = "";
                object.boolPar1 = false;
                object.boolPar2 = false;
                object.boolPar3 = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.longPar1 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.longPar1 = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.longPar2 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.longPar2 = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.longPar3 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.longPar3 = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.longPar4 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.longPar4 = options.longs === String ? "0" : 0;
                object.floatPar1 = 0;
                object.floatPar2 = 0;
                object.floatPar3 = 0;
            }
            if (message.intPar1 != null && message.hasOwnProperty("intPar1"))
                object.intPar1 = message.intPar1;
            if (message.intPar2 != null && message.hasOwnProperty("intPar2"))
                object.intPar2 = message.intPar2;
            if (message.intPar3 != null && message.hasOwnProperty("intPar3"))
                object.intPar3 = message.intPar3;
            if (message.strPar1 != null && message.hasOwnProperty("strPar1"))
                object.strPar1 = message.strPar1;
            if (message.strPar2 != null && message.hasOwnProperty("strPar2"))
                object.strPar2 = message.strPar2;
            if (message.strPar3 != null && message.hasOwnProperty("strPar3"))
                object.strPar3 = message.strPar3;
            if (message.boolPar1 != null && message.hasOwnProperty("boolPar1"))
                object.boolPar1 = message.boolPar1;
            if (message.boolPar2 != null && message.hasOwnProperty("boolPar2"))
                object.boolPar2 = message.boolPar2;
            if (message.boolPar3 != null && message.hasOwnProperty("boolPar3"))
                object.boolPar3 = message.boolPar3;
            if (message.longPar1 != null && message.hasOwnProperty("longPar1"))
                if (typeof message.longPar1 === "number")
                    object.longPar1 = options.longs === String ? String(message.longPar1) : message.longPar1;
                else
                    object.longPar1 = options.longs === String ? $util.Long.prototype.toString.call(message.longPar1) : options.longs === Number ? new $util.LongBits(message.longPar1.low >>> 0, message.longPar1.high >>> 0).toNumber() : message.longPar1;
            if (message.longPar2 != null && message.hasOwnProperty("longPar2"))
                if (typeof message.longPar2 === "number")
                    object.longPar2 = options.longs === String ? String(message.longPar2) : message.longPar2;
                else
                    object.longPar2 = options.longs === String ? $util.Long.prototype.toString.call(message.longPar2) : options.longs === Number ? new $util.LongBits(message.longPar2.low >>> 0, message.longPar2.high >>> 0).toNumber() : message.longPar2;
            if (message.longPar3 != null && message.hasOwnProperty("longPar3"))
                if (typeof message.longPar3 === "number")
                    object.longPar3 = options.longs === String ? String(message.longPar3) : message.longPar3;
                else
                    object.longPar3 = options.longs === String ? $util.Long.prototype.toString.call(message.longPar3) : options.longs === Number ? new $util.LongBits(message.longPar3.low >>> 0, message.longPar3.high >>> 0).toNumber() : message.longPar3;
            if (message.longPar4 != null && message.hasOwnProperty("longPar4"))
                if (typeof message.longPar4 === "number")
                    object.longPar4 = options.longs === String ? String(message.longPar4) : message.longPar4;
                else
                    object.longPar4 = options.longs === String ? $util.Long.prototype.toString.call(message.longPar4) : options.longs === Number ? new $util.LongBits(message.longPar4.low >>> 0, message.longPar4.high >>> 0).toNumber() : message.longPar4;
            if (message.floatPar1 != null && message.hasOwnProperty("floatPar1"))
                object.floatPar1 = options.json && !isFinite(message.floatPar1) ? String(message.floatPar1) : message.floatPar1;
            if (message.floatPar2 != null && message.hasOwnProperty("floatPar2"))
                object.floatPar2 = options.json && !isFinite(message.floatPar2) ? String(message.floatPar2) : message.floatPar2;
            if (message.floatPar3 != null && message.hasOwnProperty("floatPar3"))
                object.floatPar3 = options.json && !isFinite(message.floatPar3) ? String(message.floatPar3) : message.floatPar3;
            return object;
        };

        /**
         * Converts this CommonMsg to JSON.
         * @function toJSON
         * @memberof protocol.CommonMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommonMsg;
    })();

    protocol.FriendInfoListMsg = (function() {

        /**
         * Properties of a FriendInfoListMsg.
         * @memberof protocol
         * @interface IFriendInfoListMsg
         * @property {Array.<protocol.IFriendInfoMsg>|null} [list] FriendInfoListMsg list
         */

        /**
         * Constructs a new FriendInfoListMsg.
         * @memberof protocol
         * @classdesc Represents a FriendInfoListMsg.
         * @implements IFriendInfoListMsg
         * @constructor
         * @param {protocol.IFriendInfoListMsg=} [properties] Properties to set
         */
        function FriendInfoListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FriendInfoListMsg list.
         * @member {Array.<protocol.IFriendInfoMsg>} list
         * @memberof protocol.FriendInfoListMsg
         * @instance
         */
        FriendInfoListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new FriendInfoListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.FriendInfoListMsg
         * @static
         * @param {protocol.IFriendInfoListMsg=} [properties] Properties to set
         * @returns {protocol.FriendInfoListMsg} FriendInfoListMsg instance
         */
        FriendInfoListMsg.create = function create(properties) {
            return new FriendInfoListMsg(properties);
        };

        /**
         * Encodes the specified FriendInfoListMsg message. Does not implicitly {@link protocol.FriendInfoListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.FriendInfoListMsg
         * @static
         * @param {protocol.IFriendInfoListMsg} message FriendInfoListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendInfoListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.FriendInfoMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FriendInfoListMsg message, length delimited. Does not implicitly {@link protocol.FriendInfoListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.FriendInfoListMsg
         * @static
         * @param {protocol.IFriendInfoListMsg} message FriendInfoListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendInfoListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FriendInfoListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FriendInfoListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.FriendInfoListMsg} FriendInfoListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendInfoListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.FriendInfoListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.FriendInfoMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FriendInfoListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.FriendInfoListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.FriendInfoListMsg} FriendInfoListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendInfoListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FriendInfoListMsg message.
         * @function verify
         * @memberof protocol.FriendInfoListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FriendInfoListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.FriendInfoMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FriendInfoListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.FriendInfoListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.FriendInfoListMsg} FriendInfoListMsg
         */
        FriendInfoListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.FriendInfoListMsg)
                return object;
            var message = new $root.protocol.FriendInfoListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.FriendInfoListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.FriendInfoListMsg.list: object expected");
                    message.list[i] = $root.protocol.FriendInfoMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FriendInfoListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.FriendInfoListMsg
         * @static
         * @param {protocol.FriendInfoListMsg} message FriendInfoListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FriendInfoListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.FriendInfoMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this FriendInfoListMsg to JSON.
         * @function toJSON
         * @memberof protocol.FriendInfoListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FriendInfoListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FriendInfoListMsg;
    })();

    protocol.FriendInfoMsg = (function() {

        /**
         * Properties of a FriendInfoMsg.
         * @memberof protocol
         * @interface IFriendInfoMsg
         * @property {number} friendId FriendInfoMsg friendId
         * @property {string} nickName FriendInfoMsg nickName
         * @property {string} headPic FriendInfoMsg headPic
         * @property {number} distance FriendInfoMsg distance
         * @property {boolean} online FriendInfoMsg online
         * @property {number} sex FriendInfoMsg sex
         * @property {number} age FriendInfoMsg age
         * @property {string} constellation FriendInfoMsg constellation
         * @property {string} signature FriendInfoMsg signature
         */

        /**
         * Constructs a new FriendInfoMsg.
         * @memberof protocol
         * @classdesc Represents a FriendInfoMsg.
         * @implements IFriendInfoMsg
         * @constructor
         * @param {protocol.IFriendInfoMsg=} [properties] Properties to set
         */
        function FriendInfoMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FriendInfoMsg friendId.
         * @member {number} friendId
         * @memberof protocol.FriendInfoMsg
         * @instance
         */
        FriendInfoMsg.prototype.friendId = 0;

        /**
         * FriendInfoMsg nickName.
         * @member {string} nickName
         * @memberof protocol.FriendInfoMsg
         * @instance
         */
        FriendInfoMsg.prototype.nickName = "";

        /**
         * FriendInfoMsg headPic.
         * @member {string} headPic
         * @memberof protocol.FriendInfoMsg
         * @instance
         */
        FriendInfoMsg.prototype.headPic = "";

        /**
         * FriendInfoMsg distance.
         * @member {number} distance
         * @memberof protocol.FriendInfoMsg
         * @instance
         */
        FriendInfoMsg.prototype.distance = 0;

        /**
         * FriendInfoMsg online.
         * @member {boolean} online
         * @memberof protocol.FriendInfoMsg
         * @instance
         */
        FriendInfoMsg.prototype.online = false;

        /**
         * FriendInfoMsg sex.
         * @member {number} sex
         * @memberof protocol.FriendInfoMsg
         * @instance
         */
        FriendInfoMsg.prototype.sex = 0;

        /**
         * FriendInfoMsg age.
         * @member {number} age
         * @memberof protocol.FriendInfoMsg
         * @instance
         */
        FriendInfoMsg.prototype.age = 0;

        /**
         * FriendInfoMsg constellation.
         * @member {string} constellation
         * @memberof protocol.FriendInfoMsg
         * @instance
         */
        FriendInfoMsg.prototype.constellation = "";

        /**
         * FriendInfoMsg signature.
         * @member {string} signature
         * @memberof protocol.FriendInfoMsg
         * @instance
         */
        FriendInfoMsg.prototype.signature = "";

        /**
         * Creates a new FriendInfoMsg instance using the specified properties.
         * @function create
         * @memberof protocol.FriendInfoMsg
         * @static
         * @param {protocol.IFriendInfoMsg=} [properties] Properties to set
         * @returns {protocol.FriendInfoMsg} FriendInfoMsg instance
         */
        FriendInfoMsg.create = function create(properties) {
            return new FriendInfoMsg(properties);
        };

        /**
         * Encodes the specified FriendInfoMsg message. Does not implicitly {@link protocol.FriendInfoMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.FriendInfoMsg
         * @static
         * @param {protocol.IFriendInfoMsg} message FriendInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendInfoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.friendId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickName);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.headPic);
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.distance);
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.online);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.sex);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.age);
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.constellation);
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.signature);
            return writer;
        };

        /**
         * Encodes the specified FriendInfoMsg message, length delimited. Does not implicitly {@link protocol.FriendInfoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.FriendInfoMsg
         * @static
         * @param {protocol.IFriendInfoMsg} message FriendInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendInfoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FriendInfoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FriendInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.FriendInfoMsg} FriendInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendInfoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.FriendInfoMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.friendId = reader.int32();
                    break;
                case 2:
                    message.nickName = reader.string();
                    break;
                case 3:
                    message.headPic = reader.string();
                    break;
                case 4:
                    message.distance = reader.float();
                    break;
                case 5:
                    message.online = reader.bool();
                    break;
                case 6:
                    message.sex = reader.int32();
                    break;
                case 7:
                    message.age = reader.int32();
                    break;
                case 8:
                    message.constellation = reader.string();
                    break;
                case 9:
                    message.signature = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("friendId"))
                throw $util.ProtocolError("missing required 'friendId'", { instance: message });
            if (!message.hasOwnProperty("nickName"))
                throw $util.ProtocolError("missing required 'nickName'", { instance: message });
            if (!message.hasOwnProperty("headPic"))
                throw $util.ProtocolError("missing required 'headPic'", { instance: message });
            if (!message.hasOwnProperty("distance"))
                throw $util.ProtocolError("missing required 'distance'", { instance: message });
            if (!message.hasOwnProperty("online"))
                throw $util.ProtocolError("missing required 'online'", { instance: message });
            if (!message.hasOwnProperty("sex"))
                throw $util.ProtocolError("missing required 'sex'", { instance: message });
            if (!message.hasOwnProperty("age"))
                throw $util.ProtocolError("missing required 'age'", { instance: message });
            if (!message.hasOwnProperty("constellation"))
                throw $util.ProtocolError("missing required 'constellation'", { instance: message });
            if (!message.hasOwnProperty("signature"))
                throw $util.ProtocolError("missing required 'signature'", { instance: message });
            return message;
        };

        /**
         * Decodes a FriendInfoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.FriendInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.FriendInfoMsg} FriendInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendInfoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FriendInfoMsg message.
         * @function verify
         * @memberof protocol.FriendInfoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FriendInfoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.friendId))
                return "friendId: integer expected";
            if (!$util.isString(message.nickName))
                return "nickName: string expected";
            if (!$util.isString(message.headPic))
                return "headPic: string expected";
            if (typeof message.distance !== "number")
                return "distance: number expected";
            if (typeof message.online !== "boolean")
                return "online: boolean expected";
            if (!$util.isInteger(message.sex))
                return "sex: integer expected";
            if (!$util.isInteger(message.age))
                return "age: integer expected";
            if (!$util.isString(message.constellation))
                return "constellation: string expected";
            if (!$util.isString(message.signature))
                return "signature: string expected";
            return null;
        };

        /**
         * Creates a FriendInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.FriendInfoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.FriendInfoMsg} FriendInfoMsg
         */
        FriendInfoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.FriendInfoMsg)
                return object;
            var message = new $root.protocol.FriendInfoMsg();
            if (object.friendId != null)
                message.friendId = object.friendId | 0;
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.headPic != null)
                message.headPic = String(object.headPic);
            if (object.distance != null)
                message.distance = Number(object.distance);
            if (object.online != null)
                message.online = Boolean(object.online);
            if (object.sex != null)
                message.sex = object.sex | 0;
            if (object.age != null)
                message.age = object.age | 0;
            if (object.constellation != null)
                message.constellation = String(object.constellation);
            if (object.signature != null)
                message.signature = String(object.signature);
            return message;
        };

        /**
         * Creates a plain object from a FriendInfoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.FriendInfoMsg
         * @static
         * @param {protocol.FriendInfoMsg} message FriendInfoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FriendInfoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.friendId = 0;
                object.nickName = "";
                object.headPic = "";
                object.distance = 0;
                object.online = false;
                object.sex = 0;
                object.age = 0;
                object.constellation = "";
                object.signature = "";
            }
            if (message.friendId != null && message.hasOwnProperty("friendId"))
                object.friendId = message.friendId;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.headPic != null && message.hasOwnProperty("headPic"))
                object.headPic = message.headPic;
            if (message.distance != null && message.hasOwnProperty("distance"))
                object.distance = options.json && !isFinite(message.distance) ? String(message.distance) : message.distance;
            if (message.online != null && message.hasOwnProperty("online"))
                object.online = message.online;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.age != null && message.hasOwnProperty("age"))
                object.age = message.age;
            if (message.constellation != null && message.hasOwnProperty("constellation"))
                object.constellation = message.constellation;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = message.signature;
            return object;
        };

        /**
         * Converts this FriendInfoMsg to JSON.
         * @function toJSON
         * @memberof protocol.FriendInfoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FriendInfoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FriendInfoMsg;
    })();

    protocol.FriendRecentListMsg = (function() {

        /**
         * Properties of a FriendRecentListMsg.
         * @memberof protocol
         * @interface IFriendRecentListMsg
         * @property {Array.<protocol.IFriendInfoMsg>|null} [list] FriendRecentListMsg list
         */

        /**
         * Constructs a new FriendRecentListMsg.
         * @memberof protocol
         * @classdesc Represents a FriendRecentListMsg.
         * @implements IFriendRecentListMsg
         * @constructor
         * @param {protocol.IFriendRecentListMsg=} [properties] Properties to set
         */
        function FriendRecentListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FriendRecentListMsg list.
         * @member {Array.<protocol.IFriendInfoMsg>} list
         * @memberof protocol.FriendRecentListMsg
         * @instance
         */
        FriendRecentListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new FriendRecentListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.FriendRecentListMsg
         * @static
         * @param {protocol.IFriendRecentListMsg=} [properties] Properties to set
         * @returns {protocol.FriendRecentListMsg} FriendRecentListMsg instance
         */
        FriendRecentListMsg.create = function create(properties) {
            return new FriendRecentListMsg(properties);
        };

        /**
         * Encodes the specified FriendRecentListMsg message. Does not implicitly {@link protocol.FriendRecentListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.FriendRecentListMsg
         * @static
         * @param {protocol.IFriendRecentListMsg} message FriendRecentListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendRecentListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.FriendInfoMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FriendRecentListMsg message, length delimited. Does not implicitly {@link protocol.FriendRecentListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.FriendRecentListMsg
         * @static
         * @param {protocol.IFriendRecentListMsg} message FriendRecentListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendRecentListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FriendRecentListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FriendRecentListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.FriendRecentListMsg} FriendRecentListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendRecentListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.FriendRecentListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.FriendInfoMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FriendRecentListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.FriendRecentListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.FriendRecentListMsg} FriendRecentListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendRecentListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FriendRecentListMsg message.
         * @function verify
         * @memberof protocol.FriendRecentListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FriendRecentListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.FriendInfoMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FriendRecentListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.FriendRecentListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.FriendRecentListMsg} FriendRecentListMsg
         */
        FriendRecentListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.FriendRecentListMsg)
                return object;
            var message = new $root.protocol.FriendRecentListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.FriendRecentListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.FriendRecentListMsg.list: object expected");
                    message.list[i] = $root.protocol.FriendInfoMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FriendRecentListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.FriendRecentListMsg
         * @static
         * @param {protocol.FriendRecentListMsg} message FriendRecentListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FriendRecentListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.FriendInfoMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this FriendRecentListMsg to JSON.
         * @function toJSON
         * @memberof protocol.FriendRecentListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FriendRecentListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FriendRecentListMsg;
    })();

    protocol.FriendNearbyListMsg = (function() {

        /**
         * Properties of a FriendNearbyListMsg.
         * @memberof protocol
         * @interface IFriendNearbyListMsg
         * @property {Array.<protocol.IFriendInfoMsg>|null} [list] FriendNearbyListMsg list
         */

        /**
         * Constructs a new FriendNearbyListMsg.
         * @memberof protocol
         * @classdesc Represents a FriendNearbyListMsg.
         * @implements IFriendNearbyListMsg
         * @constructor
         * @param {protocol.IFriendNearbyListMsg=} [properties] Properties to set
         */
        function FriendNearbyListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FriendNearbyListMsg list.
         * @member {Array.<protocol.IFriendInfoMsg>} list
         * @memberof protocol.FriendNearbyListMsg
         * @instance
         */
        FriendNearbyListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new FriendNearbyListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.FriendNearbyListMsg
         * @static
         * @param {protocol.IFriendNearbyListMsg=} [properties] Properties to set
         * @returns {protocol.FriendNearbyListMsg} FriendNearbyListMsg instance
         */
        FriendNearbyListMsg.create = function create(properties) {
            return new FriendNearbyListMsg(properties);
        };

        /**
         * Encodes the specified FriendNearbyListMsg message. Does not implicitly {@link protocol.FriendNearbyListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.FriendNearbyListMsg
         * @static
         * @param {protocol.IFriendNearbyListMsg} message FriendNearbyListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendNearbyListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.FriendInfoMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FriendNearbyListMsg message, length delimited. Does not implicitly {@link protocol.FriendNearbyListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.FriendNearbyListMsg
         * @static
         * @param {protocol.IFriendNearbyListMsg} message FriendNearbyListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendNearbyListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FriendNearbyListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FriendNearbyListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.FriendNearbyListMsg} FriendNearbyListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendNearbyListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.FriendNearbyListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.FriendInfoMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FriendNearbyListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.FriendNearbyListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.FriendNearbyListMsg} FriendNearbyListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendNearbyListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FriendNearbyListMsg message.
         * @function verify
         * @memberof protocol.FriendNearbyListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FriendNearbyListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.FriendInfoMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FriendNearbyListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.FriendNearbyListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.FriendNearbyListMsg} FriendNearbyListMsg
         */
        FriendNearbyListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.FriendNearbyListMsg)
                return object;
            var message = new $root.protocol.FriendNearbyListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.FriendNearbyListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.FriendNearbyListMsg.list: object expected");
                    message.list[i] = $root.protocol.FriendInfoMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FriendNearbyListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.FriendNearbyListMsg
         * @static
         * @param {protocol.FriendNearbyListMsg} message FriendNearbyListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FriendNearbyListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.FriendInfoMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this FriendNearbyListMsg to JSON.
         * @function toJSON
         * @memberof protocol.FriendNearbyListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FriendNearbyListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FriendNearbyListMsg;
    })();

    protocol.OpenCardMsg = (function() {

        /**
         * Properties of an OpenCardMsg.
         * @memberof protocol
         * @interface IOpenCardMsg
         * @property {number} openCardNum OpenCardMsg openCardNum
         * @property {number} index OpenCardMsg index
         * @property {number} x OpenCardMsg x
         * @property {number} y OpenCardMsg y
         */

        /**
         * Constructs a new OpenCardMsg.
         * @memberof protocol
         * @classdesc Represents an OpenCardMsg.
         * @implements IOpenCardMsg
         * @constructor
         * @param {protocol.IOpenCardMsg=} [properties] Properties to set
         */
        function OpenCardMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OpenCardMsg openCardNum.
         * @member {number} openCardNum
         * @memberof protocol.OpenCardMsg
         * @instance
         */
        OpenCardMsg.prototype.openCardNum = 0;

        /**
         * OpenCardMsg index.
         * @member {number} index
         * @memberof protocol.OpenCardMsg
         * @instance
         */
        OpenCardMsg.prototype.index = 0;

        /**
         * OpenCardMsg x.
         * @member {number} x
         * @memberof protocol.OpenCardMsg
         * @instance
         */
        OpenCardMsg.prototype.x = 0;

        /**
         * OpenCardMsg y.
         * @member {number} y
         * @memberof protocol.OpenCardMsg
         * @instance
         */
        OpenCardMsg.prototype.y = 0;

        /**
         * Creates a new OpenCardMsg instance using the specified properties.
         * @function create
         * @memberof protocol.OpenCardMsg
         * @static
         * @param {protocol.IOpenCardMsg=} [properties] Properties to set
         * @returns {protocol.OpenCardMsg} OpenCardMsg instance
         */
        OpenCardMsg.create = function create(properties) {
            return new OpenCardMsg(properties);
        };

        /**
         * Encodes the specified OpenCardMsg message. Does not implicitly {@link protocol.OpenCardMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.OpenCardMsg
         * @static
         * @param {protocol.IOpenCardMsg} message OpenCardMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OpenCardMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.openCardNum);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.index);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.x);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.y);
            return writer;
        };

        /**
         * Encodes the specified OpenCardMsg message, length delimited. Does not implicitly {@link protocol.OpenCardMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.OpenCardMsg
         * @static
         * @param {protocol.IOpenCardMsg} message OpenCardMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OpenCardMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OpenCardMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.OpenCardMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.OpenCardMsg} OpenCardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OpenCardMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.OpenCardMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.openCardNum = reader.int32();
                    break;
                case 2:
                    message.index = reader.int32();
                    break;
                case 3:
                    message.x = reader.int32();
                    break;
                case 4:
                    message.y = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("openCardNum"))
                throw $util.ProtocolError("missing required 'openCardNum'", { instance: message });
            if (!message.hasOwnProperty("index"))
                throw $util.ProtocolError("missing required 'index'", { instance: message });
            if (!message.hasOwnProperty("x"))
                throw $util.ProtocolError("missing required 'x'", { instance: message });
            if (!message.hasOwnProperty("y"))
                throw $util.ProtocolError("missing required 'y'", { instance: message });
            return message;
        };

        /**
         * Decodes an OpenCardMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.OpenCardMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.OpenCardMsg} OpenCardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OpenCardMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OpenCardMsg message.
         * @function verify
         * @memberof protocol.OpenCardMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OpenCardMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.openCardNum))
                return "openCardNum: integer expected";
            if (!$util.isInteger(message.index))
                return "index: integer expected";
            if (!$util.isInteger(message.x))
                return "x: integer expected";
            if (!$util.isInteger(message.y))
                return "y: integer expected";
            return null;
        };

        /**
         * Creates an OpenCardMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.OpenCardMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.OpenCardMsg} OpenCardMsg
         */
        OpenCardMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.OpenCardMsg)
                return object;
            var message = new $root.protocol.OpenCardMsg();
            if (object.openCardNum != null)
                message.openCardNum = object.openCardNum | 0;
            if (object.index != null)
                message.index = object.index | 0;
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            return message;
        };

        /**
         * Creates a plain object from an OpenCardMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.OpenCardMsg
         * @static
         * @param {protocol.OpenCardMsg} message OpenCardMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OpenCardMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.openCardNum = 0;
                object.index = 0;
                object.x = 0;
                object.y = 0;
            }
            if (message.openCardNum != null && message.hasOwnProperty("openCardNum"))
                object.openCardNum = message.openCardNum;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            return object;
        };

        /**
         * Converts this OpenCardMsg to JSON.
         * @function toJSON
         * @memberof protocol.OpenCardMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OpenCardMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OpenCardMsg;
    })();

    protocol.OpenCardItemListMsg = (function() {

        /**
         * Properties of an OpenCardItemListMsg.
         * @memberof protocol
         * @interface IOpenCardItemListMsg
         * @property {Array.<protocol.ICardItemMsg>|null} [list] OpenCardItemListMsg list
         * @property {number} quality OpenCardItemListMsg quality
         * @property {boolean} open OpenCardItemListMsg open
         */

        /**
         * Constructs a new OpenCardItemListMsg.
         * @memberof protocol
         * @classdesc Represents an OpenCardItemListMsg.
         * @implements IOpenCardItemListMsg
         * @constructor
         * @param {protocol.IOpenCardItemListMsg=} [properties] Properties to set
         */
        function OpenCardItemListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OpenCardItemListMsg list.
         * @member {Array.<protocol.ICardItemMsg>} list
         * @memberof protocol.OpenCardItemListMsg
         * @instance
         */
        OpenCardItemListMsg.prototype.list = $util.emptyArray;

        /**
         * OpenCardItemListMsg quality.
         * @member {number} quality
         * @memberof protocol.OpenCardItemListMsg
         * @instance
         */
        OpenCardItemListMsg.prototype.quality = 0;

        /**
         * OpenCardItemListMsg open.
         * @member {boolean} open
         * @memberof protocol.OpenCardItemListMsg
         * @instance
         */
        OpenCardItemListMsg.prototype.open = false;

        /**
         * Creates a new OpenCardItemListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.OpenCardItemListMsg
         * @static
         * @param {protocol.IOpenCardItemListMsg=} [properties] Properties to set
         * @returns {protocol.OpenCardItemListMsg} OpenCardItemListMsg instance
         */
        OpenCardItemListMsg.create = function create(properties) {
            return new OpenCardItemListMsg(properties);
        };

        /**
         * Encodes the specified OpenCardItemListMsg message. Does not implicitly {@link protocol.OpenCardItemListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.OpenCardItemListMsg
         * @static
         * @param {protocol.IOpenCardItemListMsg} message OpenCardItemListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OpenCardItemListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.CardItemMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.quality);
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.open);
            return writer;
        };

        /**
         * Encodes the specified OpenCardItemListMsg message, length delimited. Does not implicitly {@link protocol.OpenCardItemListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.OpenCardItemListMsg
         * @static
         * @param {protocol.IOpenCardItemListMsg} message OpenCardItemListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OpenCardItemListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OpenCardItemListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.OpenCardItemListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.OpenCardItemListMsg} OpenCardItemListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OpenCardItemListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.OpenCardItemListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.CardItemMsg.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.quality = reader.int32();
                    break;
                case 3:
                    message.open = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("quality"))
                throw $util.ProtocolError("missing required 'quality'", { instance: message });
            if (!message.hasOwnProperty("open"))
                throw $util.ProtocolError("missing required 'open'", { instance: message });
            return message;
        };

        /**
         * Decodes an OpenCardItemListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.OpenCardItemListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.OpenCardItemListMsg} OpenCardItemListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OpenCardItemListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OpenCardItemListMsg message.
         * @function verify
         * @memberof protocol.OpenCardItemListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OpenCardItemListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.CardItemMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (!$util.isInteger(message.quality))
                return "quality: integer expected";
            if (typeof message.open !== "boolean")
                return "open: boolean expected";
            return null;
        };

        /**
         * Creates an OpenCardItemListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.OpenCardItemListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.OpenCardItemListMsg} OpenCardItemListMsg
         */
        OpenCardItemListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.OpenCardItemListMsg)
                return object;
            var message = new $root.protocol.OpenCardItemListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.OpenCardItemListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.OpenCardItemListMsg.list: object expected");
                    message.list[i] = $root.protocol.CardItemMsg.fromObject(object.list[i]);
                }
            }
            if (object.quality != null)
                message.quality = object.quality | 0;
            if (object.open != null)
                message.open = Boolean(object.open);
            return message;
        };

        /**
         * Creates a plain object from an OpenCardItemListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.OpenCardItemListMsg
         * @static
         * @param {protocol.OpenCardItemListMsg} message OpenCardItemListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OpenCardItemListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults) {
                object.quality = 0;
                object.open = false;
            }
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.CardItemMsg.toObject(message.list[j], options);
            }
            if (message.quality != null && message.hasOwnProperty("quality"))
                object.quality = message.quality;
            if (message.open != null && message.hasOwnProperty("open"))
                object.open = message.open;
            return object;
        };

        /**
         * Converts this OpenCardItemListMsg to JSON.
         * @function toJSON
         * @memberof protocol.OpenCardItemListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OpenCardItemListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OpenCardItemListMsg;
    })();

    protocol.CardItemMsg = (function() {

        /**
         * Properties of a CardItemMsg.
         * @memberof protocol
         * @interface ICardItemMsg
         * @property {number} index CardItemMsg index
         * @property {number} itemId CardItemMsg itemId
         * @property {number} num CardItemMsg num
         */

        /**
         * Constructs a new CardItemMsg.
         * @memberof protocol
         * @classdesc Represents a CardItemMsg.
         * @implements ICardItemMsg
         * @constructor
         * @param {protocol.ICardItemMsg=} [properties] Properties to set
         */
        function CardItemMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CardItemMsg index.
         * @member {number} index
         * @memberof protocol.CardItemMsg
         * @instance
         */
        CardItemMsg.prototype.index = 0;

        /**
         * CardItemMsg itemId.
         * @member {number} itemId
         * @memberof protocol.CardItemMsg
         * @instance
         */
        CardItemMsg.prototype.itemId = 0;

        /**
         * CardItemMsg num.
         * @member {number} num
         * @memberof protocol.CardItemMsg
         * @instance
         */
        CardItemMsg.prototype.num = 0;

        /**
         * Creates a new CardItemMsg instance using the specified properties.
         * @function create
         * @memberof protocol.CardItemMsg
         * @static
         * @param {protocol.ICardItemMsg=} [properties] Properties to set
         * @returns {protocol.CardItemMsg} CardItemMsg instance
         */
        CardItemMsg.create = function create(properties) {
            return new CardItemMsg(properties);
        };

        /**
         * Encodes the specified CardItemMsg message. Does not implicitly {@link protocol.CardItemMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.CardItemMsg
         * @static
         * @param {protocol.ICardItemMsg} message CardItemMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardItemMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.itemId);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.num);
            return writer;
        };

        /**
         * Encodes the specified CardItemMsg message, length delimited. Does not implicitly {@link protocol.CardItemMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.CardItemMsg
         * @static
         * @param {protocol.ICardItemMsg} message CardItemMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardItemMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CardItemMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.CardItemMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.CardItemMsg} CardItemMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardItemMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CardItemMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.index = reader.int32();
                    break;
                case 2:
                    message.itemId = reader.int32();
                    break;
                case 3:
                    message.num = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("index"))
                throw $util.ProtocolError("missing required 'index'", { instance: message });
            if (!message.hasOwnProperty("itemId"))
                throw $util.ProtocolError("missing required 'itemId'", { instance: message });
            if (!message.hasOwnProperty("num"))
                throw $util.ProtocolError("missing required 'num'", { instance: message });
            return message;
        };

        /**
         * Decodes a CardItemMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.CardItemMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.CardItemMsg} CardItemMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardItemMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CardItemMsg message.
         * @function verify
         * @memberof protocol.CardItemMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CardItemMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.index))
                return "index: integer expected";
            if (!$util.isInteger(message.itemId))
                return "itemId: integer expected";
            if (!$util.isInteger(message.num))
                return "num: integer expected";
            return null;
        };

        /**
         * Creates a CardItemMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.CardItemMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.CardItemMsg} CardItemMsg
         */
        CardItemMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.CardItemMsg)
                return object;
            var message = new $root.protocol.CardItemMsg();
            if (object.index != null)
                message.index = object.index | 0;
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.num != null)
                message.num = object.num | 0;
            return message;
        };

        /**
         * Creates a plain object from a CardItemMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.CardItemMsg
         * @static
         * @param {protocol.CardItemMsg} message CardItemMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CardItemMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.index = 0;
                object.itemId = 0;
                object.num = 0;
            }
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            return object;
        };

        /**
         * Converts this CardItemMsg to JSON.
         * @function toJSON
         * @memberof protocol.CardItemMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CardItemMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CardItemMsg;
    })();

    protocol.OpenCardNumMsg = (function() {

        /**
         * Properties of an OpenCardNumMsg.
         * @memberof protocol
         * @interface IOpenCardNumMsg
         * @property {number} openCardDiamond OpenCardNumMsg openCardDiamond
         * @property {number} openCardDiamondNum OpenCardNumMsg openCardDiamondNum
         * @property {number} openCardAdNum OpenCardNumMsg openCardAdNum
         * @property {number} openCardNum OpenCardNumMsg openCardNum
         */

        /**
         * Constructs a new OpenCardNumMsg.
         * @memberof protocol
         * @classdesc Represents an OpenCardNumMsg.
         * @implements IOpenCardNumMsg
         * @constructor
         * @param {protocol.IOpenCardNumMsg=} [properties] Properties to set
         */
        function OpenCardNumMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OpenCardNumMsg openCardDiamond.
         * @member {number} openCardDiamond
         * @memberof protocol.OpenCardNumMsg
         * @instance
         */
        OpenCardNumMsg.prototype.openCardDiamond = 0;

        /**
         * OpenCardNumMsg openCardDiamondNum.
         * @member {number} openCardDiamondNum
         * @memberof protocol.OpenCardNumMsg
         * @instance
         */
        OpenCardNumMsg.prototype.openCardDiamondNum = 0;

        /**
         * OpenCardNumMsg openCardAdNum.
         * @member {number} openCardAdNum
         * @memberof protocol.OpenCardNumMsg
         * @instance
         */
        OpenCardNumMsg.prototype.openCardAdNum = 0;

        /**
         * OpenCardNumMsg openCardNum.
         * @member {number} openCardNum
         * @memberof protocol.OpenCardNumMsg
         * @instance
         */
        OpenCardNumMsg.prototype.openCardNum = 0;

        /**
         * Creates a new OpenCardNumMsg instance using the specified properties.
         * @function create
         * @memberof protocol.OpenCardNumMsg
         * @static
         * @param {protocol.IOpenCardNumMsg=} [properties] Properties to set
         * @returns {protocol.OpenCardNumMsg} OpenCardNumMsg instance
         */
        OpenCardNumMsg.create = function create(properties) {
            return new OpenCardNumMsg(properties);
        };

        /**
         * Encodes the specified OpenCardNumMsg message. Does not implicitly {@link protocol.OpenCardNumMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.OpenCardNumMsg
         * @static
         * @param {protocol.IOpenCardNumMsg} message OpenCardNumMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OpenCardNumMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.openCardDiamond);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.openCardDiamondNum);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.openCardAdNum);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.openCardNum);
            return writer;
        };

        /**
         * Encodes the specified OpenCardNumMsg message, length delimited. Does not implicitly {@link protocol.OpenCardNumMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.OpenCardNumMsg
         * @static
         * @param {protocol.IOpenCardNumMsg} message OpenCardNumMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OpenCardNumMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OpenCardNumMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.OpenCardNumMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.OpenCardNumMsg} OpenCardNumMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OpenCardNumMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.OpenCardNumMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.openCardDiamond = reader.int32();
                    break;
                case 2:
                    message.openCardDiamondNum = reader.int32();
                    break;
                case 3:
                    message.openCardAdNum = reader.int32();
                    break;
                case 4:
                    message.openCardNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("openCardDiamond"))
                throw $util.ProtocolError("missing required 'openCardDiamond'", { instance: message });
            if (!message.hasOwnProperty("openCardDiamondNum"))
                throw $util.ProtocolError("missing required 'openCardDiamondNum'", { instance: message });
            if (!message.hasOwnProperty("openCardAdNum"))
                throw $util.ProtocolError("missing required 'openCardAdNum'", { instance: message });
            if (!message.hasOwnProperty("openCardNum"))
                throw $util.ProtocolError("missing required 'openCardNum'", { instance: message });
            return message;
        };

        /**
         * Decodes an OpenCardNumMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.OpenCardNumMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.OpenCardNumMsg} OpenCardNumMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OpenCardNumMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OpenCardNumMsg message.
         * @function verify
         * @memberof protocol.OpenCardNumMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OpenCardNumMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.openCardDiamond))
                return "openCardDiamond: integer expected";
            if (!$util.isInteger(message.openCardDiamondNum))
                return "openCardDiamondNum: integer expected";
            if (!$util.isInteger(message.openCardAdNum))
                return "openCardAdNum: integer expected";
            if (!$util.isInteger(message.openCardNum))
                return "openCardNum: integer expected";
            return null;
        };

        /**
         * Creates an OpenCardNumMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.OpenCardNumMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.OpenCardNumMsg} OpenCardNumMsg
         */
        OpenCardNumMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.OpenCardNumMsg)
                return object;
            var message = new $root.protocol.OpenCardNumMsg();
            if (object.openCardDiamond != null)
                message.openCardDiamond = object.openCardDiamond | 0;
            if (object.openCardDiamondNum != null)
                message.openCardDiamondNum = object.openCardDiamondNum | 0;
            if (object.openCardAdNum != null)
                message.openCardAdNum = object.openCardAdNum | 0;
            if (object.openCardNum != null)
                message.openCardNum = object.openCardNum | 0;
            return message;
        };

        /**
         * Creates a plain object from an OpenCardNumMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.OpenCardNumMsg
         * @static
         * @param {protocol.OpenCardNumMsg} message OpenCardNumMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OpenCardNumMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.openCardDiamond = 0;
                object.openCardDiamondNum = 0;
                object.openCardAdNum = 0;
                object.openCardNum = 0;
            }
            if (message.openCardDiamond != null && message.hasOwnProperty("openCardDiamond"))
                object.openCardDiamond = message.openCardDiamond;
            if (message.openCardDiamondNum != null && message.hasOwnProperty("openCardDiamondNum"))
                object.openCardDiamondNum = message.openCardDiamondNum;
            if (message.openCardAdNum != null && message.hasOwnProperty("openCardAdNum"))
                object.openCardAdNum = message.openCardAdNum;
            if (message.openCardNum != null && message.hasOwnProperty("openCardNum"))
                object.openCardNum = message.openCardNum;
            return object;
        };

        /**
         * Converts this OpenCardNumMsg to JSON.
         * @function toJSON
         * @memberof protocol.OpenCardNumMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OpenCardNumMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OpenCardNumMsg;
    })();

    protocol.PlayerWorldBossMsg = (function() {

        /**
         * Properties of a PlayerWorldBossMsg.
         * @memberof protocol
         * @interface IPlayerWorldBossMsg
         * @property {number} roomId PlayerWorldBossMsg roomId
         * @property {number} missionId PlayerWorldBossMsg missionId
         * @property {number} power PlayerWorldBossMsg power
         * @property {boolean} isOver PlayerWorldBossMsg isOver
         * @property {string} overTime PlayerWorldBossMsg overTime
         * @property {string} powerTime PlayerWorldBossMsg powerTime
         * @property {number} bossLeftHp PlayerWorldBossMsg bossLeftHp
         */

        /**
         * Constructs a new PlayerWorldBossMsg.
         * @memberof protocol
         * @classdesc Represents a PlayerWorldBossMsg.
         * @implements IPlayerWorldBossMsg
         * @constructor
         * @param {protocol.IPlayerWorldBossMsg=} [properties] Properties to set
         */
        function PlayerWorldBossMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerWorldBossMsg roomId.
         * @member {number} roomId
         * @memberof protocol.PlayerWorldBossMsg
         * @instance
         */
        PlayerWorldBossMsg.prototype.roomId = 0;

        /**
         * PlayerWorldBossMsg missionId.
         * @member {number} missionId
         * @memberof protocol.PlayerWorldBossMsg
         * @instance
         */
        PlayerWorldBossMsg.prototype.missionId = 0;

        /**
         * PlayerWorldBossMsg power.
         * @member {number} power
         * @memberof protocol.PlayerWorldBossMsg
         * @instance
         */
        PlayerWorldBossMsg.prototype.power = 0;

        /**
         * PlayerWorldBossMsg isOver.
         * @member {boolean} isOver
         * @memberof protocol.PlayerWorldBossMsg
         * @instance
         */
        PlayerWorldBossMsg.prototype.isOver = false;

        /**
         * PlayerWorldBossMsg overTime.
         * @member {string} overTime
         * @memberof protocol.PlayerWorldBossMsg
         * @instance
         */
        PlayerWorldBossMsg.prototype.overTime = "";

        /**
         * PlayerWorldBossMsg powerTime.
         * @member {string} powerTime
         * @memberof protocol.PlayerWorldBossMsg
         * @instance
         */
        PlayerWorldBossMsg.prototype.powerTime = "";

        /**
         * PlayerWorldBossMsg bossLeftHp.
         * @member {number} bossLeftHp
         * @memberof protocol.PlayerWorldBossMsg
         * @instance
         */
        PlayerWorldBossMsg.prototype.bossLeftHp = 0;

        /**
         * Creates a new PlayerWorldBossMsg instance using the specified properties.
         * @function create
         * @memberof protocol.PlayerWorldBossMsg
         * @static
         * @param {protocol.IPlayerWorldBossMsg=} [properties] Properties to set
         * @returns {protocol.PlayerWorldBossMsg} PlayerWorldBossMsg instance
         */
        PlayerWorldBossMsg.create = function create(properties) {
            return new PlayerWorldBossMsg(properties);
        };

        /**
         * Encodes the specified PlayerWorldBossMsg message. Does not implicitly {@link protocol.PlayerWorldBossMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.PlayerWorldBossMsg
         * @static
         * @param {protocol.IPlayerWorldBossMsg} message PlayerWorldBossMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerWorldBossMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.missionId);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.power);
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isOver);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.overTime);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.powerTime);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.bossLeftHp);
            return writer;
        };

        /**
         * Encodes the specified PlayerWorldBossMsg message, length delimited. Does not implicitly {@link protocol.PlayerWorldBossMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.PlayerWorldBossMsg
         * @static
         * @param {protocol.IPlayerWorldBossMsg} message PlayerWorldBossMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerWorldBossMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerWorldBossMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.PlayerWorldBossMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.PlayerWorldBossMsg} PlayerWorldBossMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerWorldBossMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.PlayerWorldBossMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.int32();
                    break;
                case 2:
                    message.missionId = reader.int32();
                    break;
                case 3:
                    message.power = reader.int32();
                    break;
                case 4:
                    message.isOver = reader.bool();
                    break;
                case 5:
                    message.overTime = reader.string();
                    break;
                case 6:
                    message.powerTime = reader.string();
                    break;
                case 7:
                    message.bossLeftHp = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("roomId"))
                throw $util.ProtocolError("missing required 'roomId'", { instance: message });
            if (!message.hasOwnProperty("missionId"))
                throw $util.ProtocolError("missing required 'missionId'", { instance: message });
            if (!message.hasOwnProperty("power"))
                throw $util.ProtocolError("missing required 'power'", { instance: message });
            if (!message.hasOwnProperty("isOver"))
                throw $util.ProtocolError("missing required 'isOver'", { instance: message });
            if (!message.hasOwnProperty("overTime"))
                throw $util.ProtocolError("missing required 'overTime'", { instance: message });
            if (!message.hasOwnProperty("powerTime"))
                throw $util.ProtocolError("missing required 'powerTime'", { instance: message });
            if (!message.hasOwnProperty("bossLeftHp"))
                throw $util.ProtocolError("missing required 'bossLeftHp'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerWorldBossMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.PlayerWorldBossMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.PlayerWorldBossMsg} PlayerWorldBossMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerWorldBossMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerWorldBossMsg message.
         * @function verify
         * @memberof protocol.PlayerWorldBossMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerWorldBossMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.roomId))
                return "roomId: integer expected";
            if (!$util.isInteger(message.missionId))
                return "missionId: integer expected";
            if (!$util.isInteger(message.power))
                return "power: integer expected";
            if (typeof message.isOver !== "boolean")
                return "isOver: boolean expected";
            if (!$util.isString(message.overTime))
                return "overTime: string expected";
            if (!$util.isString(message.powerTime))
                return "powerTime: string expected";
            if (!$util.isInteger(message.bossLeftHp))
                return "bossLeftHp: integer expected";
            return null;
        };

        /**
         * Creates a PlayerWorldBossMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.PlayerWorldBossMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.PlayerWorldBossMsg} PlayerWorldBossMsg
         */
        PlayerWorldBossMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.PlayerWorldBossMsg)
                return object;
            var message = new $root.protocol.PlayerWorldBossMsg();
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            if (object.missionId != null)
                message.missionId = object.missionId | 0;
            if (object.power != null)
                message.power = object.power | 0;
            if (object.isOver != null)
                message.isOver = Boolean(object.isOver);
            if (object.overTime != null)
                message.overTime = String(object.overTime);
            if (object.powerTime != null)
                message.powerTime = String(object.powerTime);
            if (object.bossLeftHp != null)
                message.bossLeftHp = object.bossLeftHp | 0;
            return message;
        };

        /**
         * Creates a plain object from a PlayerWorldBossMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.PlayerWorldBossMsg
         * @static
         * @param {protocol.PlayerWorldBossMsg} message PlayerWorldBossMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerWorldBossMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roomId = 0;
                object.missionId = 0;
                object.power = 0;
                object.isOver = false;
                object.overTime = "";
                object.powerTime = "";
                object.bossLeftHp = 0;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.missionId != null && message.hasOwnProperty("missionId"))
                object.missionId = message.missionId;
            if (message.power != null && message.hasOwnProperty("power"))
                object.power = message.power;
            if (message.isOver != null && message.hasOwnProperty("isOver"))
                object.isOver = message.isOver;
            if (message.overTime != null && message.hasOwnProperty("overTime"))
                object.overTime = message.overTime;
            if (message.powerTime != null && message.hasOwnProperty("powerTime"))
                object.powerTime = message.powerTime;
            if (message.bossLeftHp != null && message.hasOwnProperty("bossLeftHp"))
                object.bossLeftHp = message.bossLeftHp;
            return object;
        };

        /**
         * Converts this PlayerWorldBossMsg to JSON.
         * @function toJSON
         * @memberof protocol.PlayerWorldBossMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerWorldBossMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerWorldBossMsg;
    })();

    protocol.FriendWorldBossRankListMsg = (function() {

        /**
         * Properties of a FriendWorldBossRankListMsg.
         * @memberof protocol
         * @interface IFriendWorldBossRankListMsg
         * @property {Array.<protocol.IFriendWorldBossRankMsg>|null} [list] FriendWorldBossRankListMsg list
         */

        /**
         * Constructs a new FriendWorldBossRankListMsg.
         * @memberof protocol
         * @classdesc Represents a FriendWorldBossRankListMsg.
         * @implements IFriendWorldBossRankListMsg
         * @constructor
         * @param {protocol.IFriendWorldBossRankListMsg=} [properties] Properties to set
         */
        function FriendWorldBossRankListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FriendWorldBossRankListMsg list.
         * @member {Array.<protocol.IFriendWorldBossRankMsg>} list
         * @memberof protocol.FriendWorldBossRankListMsg
         * @instance
         */
        FriendWorldBossRankListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new FriendWorldBossRankListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.FriendWorldBossRankListMsg
         * @static
         * @param {protocol.IFriendWorldBossRankListMsg=} [properties] Properties to set
         * @returns {protocol.FriendWorldBossRankListMsg} FriendWorldBossRankListMsg instance
         */
        FriendWorldBossRankListMsg.create = function create(properties) {
            return new FriendWorldBossRankListMsg(properties);
        };

        /**
         * Encodes the specified FriendWorldBossRankListMsg message. Does not implicitly {@link protocol.FriendWorldBossRankListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.FriendWorldBossRankListMsg
         * @static
         * @param {protocol.IFriendWorldBossRankListMsg} message FriendWorldBossRankListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendWorldBossRankListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.FriendWorldBossRankMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FriendWorldBossRankListMsg message, length delimited. Does not implicitly {@link protocol.FriendWorldBossRankListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.FriendWorldBossRankListMsg
         * @static
         * @param {protocol.IFriendWorldBossRankListMsg} message FriendWorldBossRankListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendWorldBossRankListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FriendWorldBossRankListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FriendWorldBossRankListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.FriendWorldBossRankListMsg} FriendWorldBossRankListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendWorldBossRankListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.FriendWorldBossRankListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.FriendWorldBossRankMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FriendWorldBossRankListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.FriendWorldBossRankListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.FriendWorldBossRankListMsg} FriendWorldBossRankListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendWorldBossRankListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FriendWorldBossRankListMsg message.
         * @function verify
         * @memberof protocol.FriendWorldBossRankListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FriendWorldBossRankListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.FriendWorldBossRankMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FriendWorldBossRankListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.FriendWorldBossRankListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.FriendWorldBossRankListMsg} FriendWorldBossRankListMsg
         */
        FriendWorldBossRankListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.FriendWorldBossRankListMsg)
                return object;
            var message = new $root.protocol.FriendWorldBossRankListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.FriendWorldBossRankListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.FriendWorldBossRankListMsg.list: object expected");
                    message.list[i] = $root.protocol.FriendWorldBossRankMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FriendWorldBossRankListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.FriendWorldBossRankListMsg
         * @static
         * @param {protocol.FriendWorldBossRankListMsg} message FriendWorldBossRankListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FriendWorldBossRankListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.FriendWorldBossRankMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this FriendWorldBossRankListMsg to JSON.
         * @function toJSON
         * @memberof protocol.FriendWorldBossRankListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FriendWorldBossRankListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FriendWorldBossRankListMsg;
    })();

    protocol.FriendWorldBossRankMsg = (function() {

        /**
         * Properties of a FriendWorldBossRankMsg.
         * @memberof protocol
         * @interface IFriendWorldBossRankMsg
         * @property {number} playerId FriendWorldBossRankMsg playerId
         * @property {string} nickName FriendWorldBossRankMsg nickName
         * @property {string} headPic FriendWorldBossRankMsg headPic
         * @property {number} totalHurtHp FriendWorldBossRankMsg totalHurtHp
         * @property {number} singleHurtHpMax FriendWorldBossRankMsg singleHurtHpMax
         */

        /**
         * Constructs a new FriendWorldBossRankMsg.
         * @memberof protocol
         * @classdesc Represents a FriendWorldBossRankMsg.
         * @implements IFriendWorldBossRankMsg
         * @constructor
         * @param {protocol.IFriendWorldBossRankMsg=} [properties] Properties to set
         */
        function FriendWorldBossRankMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FriendWorldBossRankMsg playerId.
         * @member {number} playerId
         * @memberof protocol.FriendWorldBossRankMsg
         * @instance
         */
        FriendWorldBossRankMsg.prototype.playerId = 0;

        /**
         * FriendWorldBossRankMsg nickName.
         * @member {string} nickName
         * @memberof protocol.FriendWorldBossRankMsg
         * @instance
         */
        FriendWorldBossRankMsg.prototype.nickName = "";

        /**
         * FriendWorldBossRankMsg headPic.
         * @member {string} headPic
         * @memberof protocol.FriendWorldBossRankMsg
         * @instance
         */
        FriendWorldBossRankMsg.prototype.headPic = "";

        /**
         * FriendWorldBossRankMsg totalHurtHp.
         * @member {number} totalHurtHp
         * @memberof protocol.FriendWorldBossRankMsg
         * @instance
         */
        FriendWorldBossRankMsg.prototype.totalHurtHp = 0;

        /**
         * FriendWorldBossRankMsg singleHurtHpMax.
         * @member {number} singleHurtHpMax
         * @memberof protocol.FriendWorldBossRankMsg
         * @instance
         */
        FriendWorldBossRankMsg.prototype.singleHurtHpMax = 0;

        /**
         * Creates a new FriendWorldBossRankMsg instance using the specified properties.
         * @function create
         * @memberof protocol.FriendWorldBossRankMsg
         * @static
         * @param {protocol.IFriendWorldBossRankMsg=} [properties] Properties to set
         * @returns {protocol.FriendWorldBossRankMsg} FriendWorldBossRankMsg instance
         */
        FriendWorldBossRankMsg.create = function create(properties) {
            return new FriendWorldBossRankMsg(properties);
        };

        /**
         * Encodes the specified FriendWorldBossRankMsg message. Does not implicitly {@link protocol.FriendWorldBossRankMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.FriendWorldBossRankMsg
         * @static
         * @param {protocol.IFriendWorldBossRankMsg} message FriendWorldBossRankMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendWorldBossRankMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickName);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.headPic);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.totalHurtHp);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.singleHurtHpMax);
            return writer;
        };

        /**
         * Encodes the specified FriendWorldBossRankMsg message, length delimited. Does not implicitly {@link protocol.FriendWorldBossRankMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.FriendWorldBossRankMsg
         * @static
         * @param {protocol.IFriendWorldBossRankMsg} message FriendWorldBossRankMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendWorldBossRankMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FriendWorldBossRankMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FriendWorldBossRankMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.FriendWorldBossRankMsg} FriendWorldBossRankMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendWorldBossRankMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.FriendWorldBossRankMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.int32();
                    break;
                case 2:
                    message.nickName = reader.string();
                    break;
                case 3:
                    message.headPic = reader.string();
                    break;
                case 4:
                    message.totalHurtHp = reader.int32();
                    break;
                case 5:
                    message.singleHurtHpMax = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            if (!message.hasOwnProperty("nickName"))
                throw $util.ProtocolError("missing required 'nickName'", { instance: message });
            if (!message.hasOwnProperty("headPic"))
                throw $util.ProtocolError("missing required 'headPic'", { instance: message });
            if (!message.hasOwnProperty("totalHurtHp"))
                throw $util.ProtocolError("missing required 'totalHurtHp'", { instance: message });
            if (!message.hasOwnProperty("singleHurtHpMax"))
                throw $util.ProtocolError("missing required 'singleHurtHpMax'", { instance: message });
            return message;
        };

        /**
         * Decodes a FriendWorldBossRankMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.FriendWorldBossRankMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.FriendWorldBossRankMsg} FriendWorldBossRankMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendWorldBossRankMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FriendWorldBossRankMsg message.
         * @function verify
         * @memberof protocol.FriendWorldBossRankMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FriendWorldBossRankMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.playerId))
                return "playerId: integer expected";
            if (!$util.isString(message.nickName))
                return "nickName: string expected";
            if (!$util.isString(message.headPic))
                return "headPic: string expected";
            if (!$util.isInteger(message.totalHurtHp))
                return "totalHurtHp: integer expected";
            if (!$util.isInteger(message.singleHurtHpMax))
                return "singleHurtHpMax: integer expected";
            return null;
        };

        /**
         * Creates a FriendWorldBossRankMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.FriendWorldBossRankMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.FriendWorldBossRankMsg} FriendWorldBossRankMsg
         */
        FriendWorldBossRankMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.FriendWorldBossRankMsg)
                return object;
            var message = new $root.protocol.FriendWorldBossRankMsg();
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.headPic != null)
                message.headPic = String(object.headPic);
            if (object.totalHurtHp != null)
                message.totalHurtHp = object.totalHurtHp | 0;
            if (object.singleHurtHpMax != null)
                message.singleHurtHpMax = object.singleHurtHpMax | 0;
            return message;
        };

        /**
         * Creates a plain object from a FriendWorldBossRankMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.FriendWorldBossRankMsg
         * @static
         * @param {protocol.FriendWorldBossRankMsg} message FriendWorldBossRankMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FriendWorldBossRankMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playerId = 0;
                object.nickName = "";
                object.headPic = "";
                object.totalHurtHp = 0;
                object.singleHurtHpMax = 0;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.headPic != null && message.hasOwnProperty("headPic"))
                object.headPic = message.headPic;
            if (message.totalHurtHp != null && message.hasOwnProperty("totalHurtHp"))
                object.totalHurtHp = message.totalHurtHp;
            if (message.singleHurtHpMax != null && message.hasOwnProperty("singleHurtHpMax"))
                object.singleHurtHpMax = message.singleHurtHpMax;
            return object;
        };

        /**
         * Converts this FriendWorldBossRankMsg to JSON.
         * @function toJSON
         * @memberof protocol.FriendWorldBossRankMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FriendWorldBossRankMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FriendWorldBossRankMsg;
    })();

    protocol.GameOverReqMsg = (function() {

        /**
         * Properties of a GameOverReqMsg.
         * @memberof protocol
         * @interface IGameOverReqMsg
         * @property {number} score GameOverReqMsg score
         * @property {Array.<number>|null} [cups] GameOverReqMsg cups
         * @property {Array.<number>|null} [keys] GameOverReqMsg keys
         */

        /**
         * Constructs a new GameOverReqMsg.
         * @memberof protocol
         * @classdesc Represents a GameOverReqMsg.
         * @implements IGameOverReqMsg
         * @constructor
         * @param {protocol.IGameOverReqMsg=} [properties] Properties to set
         */
        function GameOverReqMsg(properties) {
            this.cups = [];
            this.keys = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameOverReqMsg score.
         * @member {number} score
         * @memberof protocol.GameOverReqMsg
         * @instance
         */
        GameOverReqMsg.prototype.score = 0;

        /**
         * GameOverReqMsg cups.
         * @member {Array.<number>} cups
         * @memberof protocol.GameOverReqMsg
         * @instance
         */
        GameOverReqMsg.prototype.cups = $util.emptyArray;

        /**
         * GameOverReqMsg keys.
         * @member {Array.<number>} keys
         * @memberof protocol.GameOverReqMsg
         * @instance
         */
        GameOverReqMsg.prototype.keys = $util.emptyArray;

        /**
         * Creates a new GameOverReqMsg instance using the specified properties.
         * @function create
         * @memberof protocol.GameOverReqMsg
         * @static
         * @param {protocol.IGameOverReqMsg=} [properties] Properties to set
         * @returns {protocol.GameOverReqMsg} GameOverReqMsg instance
         */
        GameOverReqMsg.create = function create(properties) {
            return new GameOverReqMsg(properties);
        };

        /**
         * Encodes the specified GameOverReqMsg message. Does not implicitly {@link protocol.GameOverReqMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.GameOverReqMsg
         * @static
         * @param {protocol.IGameOverReqMsg} message GameOverReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameOverReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.score);
            if (message.cups != null && message.cups.length)
                for (var i = 0; i < message.cups.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cups[i]);
            if (message.keys != null && message.keys.length)
                for (var i = 0; i < message.keys.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.keys[i]);
            return writer;
        };

        /**
         * Encodes the specified GameOverReqMsg message, length delimited. Does not implicitly {@link protocol.GameOverReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GameOverReqMsg
         * @static
         * @param {protocol.IGameOverReqMsg} message GameOverReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameOverReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameOverReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GameOverReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GameOverReqMsg} GameOverReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameOverReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GameOverReqMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.score = reader.int32();
                    break;
                case 2:
                    if (!(message.cups && message.cups.length))
                        message.cups = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cups.push(reader.int32());
                    } else
                        message.cups.push(reader.int32());
                    break;
                case 3:
                    if (!(message.keys && message.keys.length))
                        message.keys = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.keys.push(reader.int32());
                    } else
                        message.keys.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("score"))
                throw $util.ProtocolError("missing required 'score'", { instance: message });
            return message;
        };

        /**
         * Decodes a GameOverReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.GameOverReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GameOverReqMsg} GameOverReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameOverReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameOverReqMsg message.
         * @function verify
         * @memberof protocol.GameOverReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameOverReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.score))
                return "score: integer expected";
            if (message.cups != null && message.hasOwnProperty("cups")) {
                if (!Array.isArray(message.cups))
                    return "cups: array expected";
                for (var i = 0; i < message.cups.length; ++i)
                    if (!$util.isInteger(message.cups[i]))
                        return "cups: integer[] expected";
            }
            if (message.keys != null && message.hasOwnProperty("keys")) {
                if (!Array.isArray(message.keys))
                    return "keys: array expected";
                for (var i = 0; i < message.keys.length; ++i)
                    if (!$util.isInteger(message.keys[i]))
                        return "keys: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a GameOverReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.GameOverReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GameOverReqMsg} GameOverReqMsg
         */
        GameOverReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GameOverReqMsg)
                return object;
            var message = new $root.protocol.GameOverReqMsg();
            if (object.score != null)
                message.score = object.score | 0;
            if (object.cups) {
                if (!Array.isArray(object.cups))
                    throw TypeError(".protocol.GameOverReqMsg.cups: array expected");
                message.cups = [];
                for (var i = 0; i < object.cups.length; ++i)
                    message.cups[i] = object.cups[i] | 0;
            }
            if (object.keys) {
                if (!Array.isArray(object.keys))
                    throw TypeError(".protocol.GameOverReqMsg.keys: array expected");
                message.keys = [];
                for (var i = 0; i < object.keys.length; ++i)
                    message.keys[i] = object.keys[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a GameOverReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GameOverReqMsg
         * @static
         * @param {protocol.GameOverReqMsg} message GameOverReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameOverReqMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.cups = [];
                object.keys = [];
            }
            if (options.defaults)
                object.score = 0;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            if (message.cups && message.cups.length) {
                object.cups = [];
                for (var j = 0; j < message.cups.length; ++j)
                    object.cups[j] = message.cups[j];
            }
            if (message.keys && message.keys.length) {
                object.keys = [];
                for (var j = 0; j < message.keys.length; ++j)
                    object.keys[j] = message.keys[j];
            }
            return object;
        };

        /**
         * Converts this GameOverReqMsg to JSON.
         * @function toJSON
         * @memberof protocol.GameOverReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameOverReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameOverReqMsg;
    })();

    protocol.SingleGameOverMsg = (function() {

        /**
         * Properties of a SingleGameOverMsg.
         * @memberof protocol
         * @interface ISingleGameOverMsg
         * @property {number} cup SingleGameOverMsg cup
         * @property {number} gold SingleGameOverMsg gold
         * @property {number} score SingleGameOverMsg score
         */

        /**
         * Constructs a new SingleGameOverMsg.
         * @memberof protocol
         * @classdesc Represents a SingleGameOverMsg.
         * @implements ISingleGameOverMsg
         * @constructor
         * @param {protocol.ISingleGameOverMsg=} [properties] Properties to set
         */
        function SingleGameOverMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SingleGameOverMsg cup.
         * @member {number} cup
         * @memberof protocol.SingleGameOverMsg
         * @instance
         */
        SingleGameOverMsg.prototype.cup = 0;

        /**
         * SingleGameOverMsg gold.
         * @member {number} gold
         * @memberof protocol.SingleGameOverMsg
         * @instance
         */
        SingleGameOverMsg.prototype.gold = 0;

        /**
         * SingleGameOverMsg score.
         * @member {number} score
         * @memberof protocol.SingleGameOverMsg
         * @instance
         */
        SingleGameOverMsg.prototype.score = 0;

        /**
         * Creates a new SingleGameOverMsg instance using the specified properties.
         * @function create
         * @memberof protocol.SingleGameOverMsg
         * @static
         * @param {protocol.ISingleGameOverMsg=} [properties] Properties to set
         * @returns {protocol.SingleGameOverMsg} SingleGameOverMsg instance
         */
        SingleGameOverMsg.create = function create(properties) {
            return new SingleGameOverMsg(properties);
        };

        /**
         * Encodes the specified SingleGameOverMsg message. Does not implicitly {@link protocol.SingleGameOverMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.SingleGameOverMsg
         * @static
         * @param {protocol.ISingleGameOverMsg} message SingleGameOverMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SingleGameOverMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cup);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gold);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.score);
            return writer;
        };

        /**
         * Encodes the specified SingleGameOverMsg message, length delimited. Does not implicitly {@link protocol.SingleGameOverMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SingleGameOverMsg
         * @static
         * @param {protocol.ISingleGameOverMsg} message SingleGameOverMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SingleGameOverMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SingleGameOverMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SingleGameOverMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SingleGameOverMsg} SingleGameOverMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SingleGameOverMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SingleGameOverMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cup = reader.int32();
                    break;
                case 2:
                    message.gold = reader.int32();
                    break;
                case 3:
                    message.score = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("cup"))
                throw $util.ProtocolError("missing required 'cup'", { instance: message });
            if (!message.hasOwnProperty("gold"))
                throw $util.ProtocolError("missing required 'gold'", { instance: message });
            if (!message.hasOwnProperty("score"))
                throw $util.ProtocolError("missing required 'score'", { instance: message });
            return message;
        };

        /**
         * Decodes a SingleGameOverMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SingleGameOverMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SingleGameOverMsg} SingleGameOverMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SingleGameOverMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SingleGameOverMsg message.
         * @function verify
         * @memberof protocol.SingleGameOverMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SingleGameOverMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.cup))
                return "cup: integer expected";
            if (!$util.isInteger(message.gold))
                return "gold: integer expected";
            if (!$util.isInteger(message.score))
                return "score: integer expected";
            return null;
        };

        /**
         * Creates a SingleGameOverMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SingleGameOverMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SingleGameOverMsg} SingleGameOverMsg
         */
        SingleGameOverMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SingleGameOverMsg)
                return object;
            var message = new $root.protocol.SingleGameOverMsg();
            if (object.cup != null)
                message.cup = object.cup | 0;
            if (object.gold != null)
                message.gold = object.gold | 0;
            if (object.score != null)
                message.score = object.score | 0;
            return message;
        };

        /**
         * Creates a plain object from a SingleGameOverMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SingleGameOverMsg
         * @static
         * @param {protocol.SingleGameOverMsg} message SingleGameOverMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SingleGameOverMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cup = 0;
                object.gold = 0;
                object.score = 0;
            }
            if (message.cup != null && message.hasOwnProperty("cup"))
                object.cup = message.cup;
            if (message.gold != null && message.hasOwnProperty("gold"))
                object.gold = message.gold;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            return object;
        };

        /**
         * Converts this SingleGameOverMsg to JSON.
         * @function toJSON
         * @memberof protocol.SingleGameOverMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SingleGameOverMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SingleGameOverMsg;
    })();

    protocol.OpenCardHeadPicMsg = (function() {

        /**
         * Properties of an OpenCardHeadPicMsg.
         * @memberof protocol
         * @interface IOpenCardHeadPicMsg
         * @property {number} playerId OpenCardHeadPicMsg playerId
         * @property {string} headPic OpenCardHeadPicMsg headPic
         * @property {string} indexList OpenCardHeadPicMsg indexList
         * @property {number|null} [dropId] OpenCardHeadPicMsg dropId
         */

        /**
         * Constructs a new OpenCardHeadPicMsg.
         * @memberof protocol
         * @classdesc Represents an OpenCardHeadPicMsg.
         * @implements IOpenCardHeadPicMsg
         * @constructor
         * @param {protocol.IOpenCardHeadPicMsg=} [properties] Properties to set
         */
        function OpenCardHeadPicMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OpenCardHeadPicMsg playerId.
         * @member {number} playerId
         * @memberof protocol.OpenCardHeadPicMsg
         * @instance
         */
        OpenCardHeadPicMsg.prototype.playerId = 0;

        /**
         * OpenCardHeadPicMsg headPic.
         * @member {string} headPic
         * @memberof protocol.OpenCardHeadPicMsg
         * @instance
         */
        OpenCardHeadPicMsg.prototype.headPic = "";

        /**
         * OpenCardHeadPicMsg indexList.
         * @member {string} indexList
         * @memberof protocol.OpenCardHeadPicMsg
         * @instance
         */
        OpenCardHeadPicMsg.prototype.indexList = "";

        /**
         * OpenCardHeadPicMsg dropId.
         * @member {number} dropId
         * @memberof protocol.OpenCardHeadPicMsg
         * @instance
         */
        OpenCardHeadPicMsg.prototype.dropId = 0;

        /**
         * Creates a new OpenCardHeadPicMsg instance using the specified properties.
         * @function create
         * @memberof protocol.OpenCardHeadPicMsg
         * @static
         * @param {protocol.IOpenCardHeadPicMsg=} [properties] Properties to set
         * @returns {protocol.OpenCardHeadPicMsg} OpenCardHeadPicMsg instance
         */
        OpenCardHeadPicMsg.create = function create(properties) {
            return new OpenCardHeadPicMsg(properties);
        };

        /**
         * Encodes the specified OpenCardHeadPicMsg message. Does not implicitly {@link protocol.OpenCardHeadPicMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.OpenCardHeadPicMsg
         * @static
         * @param {protocol.IOpenCardHeadPicMsg} message OpenCardHeadPicMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OpenCardHeadPicMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.headPic);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.indexList);
            if (message.dropId != null && message.hasOwnProperty("dropId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.dropId);
            return writer;
        };

        /**
         * Encodes the specified OpenCardHeadPicMsg message, length delimited. Does not implicitly {@link protocol.OpenCardHeadPicMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.OpenCardHeadPicMsg
         * @static
         * @param {protocol.IOpenCardHeadPicMsg} message OpenCardHeadPicMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OpenCardHeadPicMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OpenCardHeadPicMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.OpenCardHeadPicMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.OpenCardHeadPicMsg} OpenCardHeadPicMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OpenCardHeadPicMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.OpenCardHeadPicMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.int32();
                    break;
                case 2:
                    message.headPic = reader.string();
                    break;
                case 3:
                    message.indexList = reader.string();
                    break;
                case 4:
                    message.dropId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            if (!message.hasOwnProperty("headPic"))
                throw $util.ProtocolError("missing required 'headPic'", { instance: message });
            if (!message.hasOwnProperty("indexList"))
                throw $util.ProtocolError("missing required 'indexList'", { instance: message });
            return message;
        };

        /**
         * Decodes an OpenCardHeadPicMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.OpenCardHeadPicMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.OpenCardHeadPicMsg} OpenCardHeadPicMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OpenCardHeadPicMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OpenCardHeadPicMsg message.
         * @function verify
         * @memberof protocol.OpenCardHeadPicMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OpenCardHeadPicMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.playerId))
                return "playerId: integer expected";
            if (!$util.isString(message.headPic))
                return "headPic: string expected";
            if (!$util.isString(message.indexList))
                return "indexList: string expected";
            if (message.dropId != null && message.hasOwnProperty("dropId"))
                if (!$util.isInteger(message.dropId))
                    return "dropId: integer expected";
            return null;
        };

        /**
         * Creates an OpenCardHeadPicMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.OpenCardHeadPicMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.OpenCardHeadPicMsg} OpenCardHeadPicMsg
         */
        OpenCardHeadPicMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.OpenCardHeadPicMsg)
                return object;
            var message = new $root.protocol.OpenCardHeadPicMsg();
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            if (object.headPic != null)
                message.headPic = String(object.headPic);
            if (object.indexList != null)
                message.indexList = String(object.indexList);
            if (object.dropId != null)
                message.dropId = object.dropId | 0;
            return message;
        };

        /**
         * Creates a plain object from an OpenCardHeadPicMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.OpenCardHeadPicMsg
         * @static
         * @param {protocol.OpenCardHeadPicMsg} message OpenCardHeadPicMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OpenCardHeadPicMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playerId = 0;
                object.headPic = "";
                object.indexList = "";
                object.dropId = 0;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.headPic != null && message.hasOwnProperty("headPic"))
                object.headPic = message.headPic;
            if (message.indexList != null && message.hasOwnProperty("indexList"))
                object.indexList = message.indexList;
            if (message.dropId != null && message.hasOwnProperty("dropId"))
                object.dropId = message.dropId;
            return object;
        };

        /**
         * Converts this OpenCardHeadPicMsg to JSON.
         * @function toJSON
         * @memberof protocol.OpenCardHeadPicMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OpenCardHeadPicMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OpenCardHeadPicMsg;
    })();

    protocol.HeroListMsg = (function() {

        /**
         * Properties of a HeroListMsg.
         * @memberof protocol
         * @interface IHeroListMsg
         * @property {Array.<protocol.IHeroMsg>|null} [list] HeroListMsg list
         */

        /**
         * Constructs a new HeroListMsg.
         * @memberof protocol
         * @classdesc Represents a HeroListMsg.
         * @implements IHeroListMsg
         * @constructor
         * @param {protocol.IHeroListMsg=} [properties] Properties to set
         */
        function HeroListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroListMsg list.
         * @member {Array.<protocol.IHeroMsg>} list
         * @memberof protocol.HeroListMsg
         * @instance
         */
        HeroListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new HeroListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.HeroListMsg
         * @static
         * @param {protocol.IHeroListMsg=} [properties] Properties to set
         * @returns {protocol.HeroListMsg} HeroListMsg instance
         */
        HeroListMsg.create = function create(properties) {
            return new HeroListMsg(properties);
        };

        /**
         * Encodes the specified HeroListMsg message. Does not implicitly {@link protocol.HeroListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.HeroListMsg
         * @static
         * @param {protocol.IHeroListMsg} message HeroListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.HeroMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HeroListMsg message, length delimited. Does not implicitly {@link protocol.HeroListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.HeroListMsg
         * @static
         * @param {protocol.IHeroListMsg} message HeroListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.HeroListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.HeroListMsg} HeroListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.HeroListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.HeroMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.HeroListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.HeroListMsg} HeroListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroListMsg message.
         * @function verify
         * @memberof protocol.HeroListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.HeroMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HeroListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.HeroListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.HeroListMsg} HeroListMsg
         */
        HeroListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.HeroListMsg)
                return object;
            var message = new $root.protocol.HeroListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.HeroListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.HeroListMsg.list: object expected");
                    message.list[i] = $root.protocol.HeroMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HeroListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.HeroListMsg
         * @static
         * @param {protocol.HeroListMsg} message HeroListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.HeroMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this HeroListMsg to JSON.
         * @function toJSON
         * @memberof protocol.HeroListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeroListMsg;
    })();

    protocol.HeroMsg = (function() {

        /**
         * Properties of a HeroMsg.
         * @memberof protocol
         * @interface IHeroMsg
         * @property {number} heroId HeroMsg heroId
         * @property {number} configId HeroMsg configId
         * @property {number} level HeroMsg level
         * @property {number} star HeroMsg star
         * @property {number|null} [wingId] HeroMsg wingId
         */

        /**
         * Constructs a new HeroMsg.
         * @memberof protocol
         * @classdesc Represents a HeroMsg.
         * @implements IHeroMsg
         * @constructor
         * @param {protocol.IHeroMsg=} [properties] Properties to set
         */
        function HeroMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroMsg heroId.
         * @member {number} heroId
         * @memberof protocol.HeroMsg
         * @instance
         */
        HeroMsg.prototype.heroId = 0;

        /**
         * HeroMsg configId.
         * @member {number} configId
         * @memberof protocol.HeroMsg
         * @instance
         */
        HeroMsg.prototype.configId = 0;

        /**
         * HeroMsg level.
         * @member {number} level
         * @memberof protocol.HeroMsg
         * @instance
         */
        HeroMsg.prototype.level = 0;

        /**
         * HeroMsg star.
         * @member {number} star
         * @memberof protocol.HeroMsg
         * @instance
         */
        HeroMsg.prototype.star = 0;

        /**
         * HeroMsg wingId.
         * @member {number} wingId
         * @memberof protocol.HeroMsg
         * @instance
         */
        HeroMsg.prototype.wingId = 0;

        /**
         * Creates a new HeroMsg instance using the specified properties.
         * @function create
         * @memberof protocol.HeroMsg
         * @static
         * @param {protocol.IHeroMsg=} [properties] Properties to set
         * @returns {protocol.HeroMsg} HeroMsg instance
         */
        HeroMsg.create = function create(properties) {
            return new HeroMsg(properties);
        };

        /**
         * Encodes the specified HeroMsg message. Does not implicitly {@link protocol.HeroMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.HeroMsg
         * @static
         * @param {protocol.IHeroMsg} message HeroMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.heroId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.configId);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.level);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.star);
            if (message.wingId != null && message.hasOwnProperty("wingId"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.wingId);
            return writer;
        };

        /**
         * Encodes the specified HeroMsg message, length delimited. Does not implicitly {@link protocol.HeroMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.HeroMsg
         * @static
         * @param {protocol.IHeroMsg} message HeroMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.HeroMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.HeroMsg} HeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.HeroMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.heroId = reader.int32();
                    break;
                case 2:
                    message.configId = reader.int32();
                    break;
                case 3:
                    message.level = reader.int32();
                    break;
                case 4:
                    message.star = reader.int32();
                    break;
                case 5:
                    message.wingId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("heroId"))
                throw $util.ProtocolError("missing required 'heroId'", { instance: message });
            if (!message.hasOwnProperty("configId"))
                throw $util.ProtocolError("missing required 'configId'", { instance: message });
            if (!message.hasOwnProperty("level"))
                throw $util.ProtocolError("missing required 'level'", { instance: message });
            if (!message.hasOwnProperty("star"))
                throw $util.ProtocolError("missing required 'star'", { instance: message });
            return message;
        };

        /**
         * Decodes a HeroMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.HeroMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.HeroMsg} HeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroMsg message.
         * @function verify
         * @memberof protocol.HeroMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.heroId))
                return "heroId: integer expected";
            if (!$util.isInteger(message.configId))
                return "configId: integer expected";
            if (!$util.isInteger(message.level))
                return "level: integer expected";
            if (!$util.isInteger(message.star))
                return "star: integer expected";
            if (message.wingId != null && message.hasOwnProperty("wingId"))
                if (!$util.isInteger(message.wingId))
                    return "wingId: integer expected";
            return null;
        };

        /**
         * Creates a HeroMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.HeroMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.HeroMsg} HeroMsg
         */
        HeroMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.HeroMsg)
                return object;
            var message = new $root.protocol.HeroMsg();
            if (object.heroId != null)
                message.heroId = object.heroId | 0;
            if (object.configId != null)
                message.configId = object.configId | 0;
            if (object.level != null)
                message.level = object.level | 0;
            if (object.star != null)
                message.star = object.star | 0;
            if (object.wingId != null)
                message.wingId = object.wingId | 0;
            return message;
        };

        /**
         * Creates a plain object from a HeroMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.HeroMsg
         * @static
         * @param {protocol.HeroMsg} message HeroMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.heroId = 0;
                object.configId = 0;
                object.level = 0;
                object.star = 0;
                object.wingId = 0;
            }
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                object.heroId = message.heroId;
            if (message.configId != null && message.hasOwnProperty("configId"))
                object.configId = message.configId;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.star != null && message.hasOwnProperty("star"))
                object.star = message.star;
            if (message.wingId != null && message.hasOwnProperty("wingId"))
                object.wingId = message.wingId;
            return object;
        };

        /**
         * Converts this HeroMsg to JSON.
         * @function toJSON
         * @memberof protocol.HeroMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeroMsg;
    })();

    protocol.PlayerOnlineAwardMsg = (function() {

        /**
         * Properties of a PlayerOnlineAwardMsg.
         * @memberof protocol
         * @interface IPlayerOnlineAwardMsg
         * @property {number} timeId PlayerOnlineAwardMsg timeId
         * @property {string} coodTime PlayerOnlineAwardMsg coodTime
         */

        /**
         * Constructs a new PlayerOnlineAwardMsg.
         * @memberof protocol
         * @classdesc Represents a PlayerOnlineAwardMsg.
         * @implements IPlayerOnlineAwardMsg
         * @constructor
         * @param {protocol.IPlayerOnlineAwardMsg=} [properties] Properties to set
         */
        function PlayerOnlineAwardMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerOnlineAwardMsg timeId.
         * @member {number} timeId
         * @memberof protocol.PlayerOnlineAwardMsg
         * @instance
         */
        PlayerOnlineAwardMsg.prototype.timeId = 0;

        /**
         * PlayerOnlineAwardMsg coodTime.
         * @member {string} coodTime
         * @memberof protocol.PlayerOnlineAwardMsg
         * @instance
         */
        PlayerOnlineAwardMsg.prototype.coodTime = "";

        /**
         * Creates a new PlayerOnlineAwardMsg instance using the specified properties.
         * @function create
         * @memberof protocol.PlayerOnlineAwardMsg
         * @static
         * @param {protocol.IPlayerOnlineAwardMsg=} [properties] Properties to set
         * @returns {protocol.PlayerOnlineAwardMsg} PlayerOnlineAwardMsg instance
         */
        PlayerOnlineAwardMsg.create = function create(properties) {
            return new PlayerOnlineAwardMsg(properties);
        };

        /**
         * Encodes the specified PlayerOnlineAwardMsg message. Does not implicitly {@link protocol.PlayerOnlineAwardMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.PlayerOnlineAwardMsg
         * @static
         * @param {protocol.IPlayerOnlineAwardMsg} message PlayerOnlineAwardMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerOnlineAwardMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.timeId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.coodTime);
            return writer;
        };

        /**
         * Encodes the specified PlayerOnlineAwardMsg message, length delimited. Does not implicitly {@link protocol.PlayerOnlineAwardMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.PlayerOnlineAwardMsg
         * @static
         * @param {protocol.IPlayerOnlineAwardMsg} message PlayerOnlineAwardMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerOnlineAwardMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerOnlineAwardMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.PlayerOnlineAwardMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.PlayerOnlineAwardMsg} PlayerOnlineAwardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerOnlineAwardMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.PlayerOnlineAwardMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timeId = reader.int32();
                    break;
                case 2:
                    message.coodTime = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("timeId"))
                throw $util.ProtocolError("missing required 'timeId'", { instance: message });
            if (!message.hasOwnProperty("coodTime"))
                throw $util.ProtocolError("missing required 'coodTime'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerOnlineAwardMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.PlayerOnlineAwardMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.PlayerOnlineAwardMsg} PlayerOnlineAwardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerOnlineAwardMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerOnlineAwardMsg message.
         * @function verify
         * @memberof protocol.PlayerOnlineAwardMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerOnlineAwardMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.timeId))
                return "timeId: integer expected";
            if (!$util.isString(message.coodTime))
                return "coodTime: string expected";
            return null;
        };

        /**
         * Creates a PlayerOnlineAwardMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.PlayerOnlineAwardMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.PlayerOnlineAwardMsg} PlayerOnlineAwardMsg
         */
        PlayerOnlineAwardMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.PlayerOnlineAwardMsg)
                return object;
            var message = new $root.protocol.PlayerOnlineAwardMsg();
            if (object.timeId != null)
                message.timeId = object.timeId | 0;
            if (object.coodTime != null)
                message.coodTime = String(object.coodTime);
            return message;
        };

        /**
         * Creates a plain object from a PlayerOnlineAwardMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.PlayerOnlineAwardMsg
         * @static
         * @param {protocol.PlayerOnlineAwardMsg} message PlayerOnlineAwardMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerOnlineAwardMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.timeId = 0;
                object.coodTime = "";
            }
            if (message.timeId != null && message.hasOwnProperty("timeId"))
                object.timeId = message.timeId;
            if (message.coodTime != null && message.hasOwnProperty("coodTime"))
                object.coodTime = message.coodTime;
            return object;
        };

        /**
         * Converts this PlayerOnlineAwardMsg to JSON.
         * @function toJSON
         * @memberof protocol.PlayerOnlineAwardMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerOnlineAwardMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerOnlineAwardMsg;
    })();

    protocol.PlayerSignMsg = (function() {

        /**
         * Properties of a PlayerSignMsg.
         * @memberof protocol
         * @interface IPlayerSignMsg
         * @property {boolean} signState PlayerSignMsg signState
         * @property {number} signNum PlayerSignMsg signNum
         * @property {number} noEbsenceNum PlayerSignMsg noEbsenceNum
         * @property {number} totalDutyNum PlayerSignMsg totalDutyNum
         * @property {number} totalSignNum PlayerSignMsg totalSignNum
         */

        /**
         * Constructs a new PlayerSignMsg.
         * @memberof protocol
         * @classdesc Represents a PlayerSignMsg.
         * @implements IPlayerSignMsg
         * @constructor
         * @param {protocol.IPlayerSignMsg=} [properties] Properties to set
         */
        function PlayerSignMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerSignMsg signState.
         * @member {boolean} signState
         * @memberof protocol.PlayerSignMsg
         * @instance
         */
        PlayerSignMsg.prototype.signState = false;

        /**
         * PlayerSignMsg signNum.
         * @member {number} signNum
         * @memberof protocol.PlayerSignMsg
         * @instance
         */
        PlayerSignMsg.prototype.signNum = 0;

        /**
         * PlayerSignMsg noEbsenceNum.
         * @member {number} noEbsenceNum
         * @memberof protocol.PlayerSignMsg
         * @instance
         */
        PlayerSignMsg.prototype.noEbsenceNum = 0;

        /**
         * PlayerSignMsg totalDutyNum.
         * @member {number} totalDutyNum
         * @memberof protocol.PlayerSignMsg
         * @instance
         */
        PlayerSignMsg.prototype.totalDutyNum = 0;

        /**
         * PlayerSignMsg totalSignNum.
         * @member {number} totalSignNum
         * @memberof protocol.PlayerSignMsg
         * @instance
         */
        PlayerSignMsg.prototype.totalSignNum = 0;

        /**
         * Creates a new PlayerSignMsg instance using the specified properties.
         * @function create
         * @memberof protocol.PlayerSignMsg
         * @static
         * @param {protocol.IPlayerSignMsg=} [properties] Properties to set
         * @returns {protocol.PlayerSignMsg} PlayerSignMsg instance
         */
        PlayerSignMsg.create = function create(properties) {
            return new PlayerSignMsg(properties);
        };

        /**
         * Encodes the specified PlayerSignMsg message. Does not implicitly {@link protocol.PlayerSignMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.PlayerSignMsg
         * @static
         * @param {protocol.IPlayerSignMsg} message PlayerSignMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerSignMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.signState);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.signNum);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.noEbsenceNum);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.totalDutyNum);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.totalSignNum);
            return writer;
        };

        /**
         * Encodes the specified PlayerSignMsg message, length delimited. Does not implicitly {@link protocol.PlayerSignMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.PlayerSignMsg
         * @static
         * @param {protocol.IPlayerSignMsg} message PlayerSignMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerSignMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerSignMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.PlayerSignMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.PlayerSignMsg} PlayerSignMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerSignMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.PlayerSignMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.signState = reader.bool();
                    break;
                case 2:
                    message.signNum = reader.int32();
                    break;
                case 3:
                    message.noEbsenceNum = reader.int32();
                    break;
                case 4:
                    message.totalDutyNum = reader.int32();
                    break;
                case 5:
                    message.totalSignNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("signState"))
                throw $util.ProtocolError("missing required 'signState'", { instance: message });
            if (!message.hasOwnProperty("signNum"))
                throw $util.ProtocolError("missing required 'signNum'", { instance: message });
            if (!message.hasOwnProperty("noEbsenceNum"))
                throw $util.ProtocolError("missing required 'noEbsenceNum'", { instance: message });
            if (!message.hasOwnProperty("totalDutyNum"))
                throw $util.ProtocolError("missing required 'totalDutyNum'", { instance: message });
            if (!message.hasOwnProperty("totalSignNum"))
                throw $util.ProtocolError("missing required 'totalSignNum'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerSignMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.PlayerSignMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.PlayerSignMsg} PlayerSignMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerSignMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerSignMsg message.
         * @function verify
         * @memberof protocol.PlayerSignMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerSignMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.signState !== "boolean")
                return "signState: boolean expected";
            if (!$util.isInteger(message.signNum))
                return "signNum: integer expected";
            if (!$util.isInteger(message.noEbsenceNum))
                return "noEbsenceNum: integer expected";
            if (!$util.isInteger(message.totalDutyNum))
                return "totalDutyNum: integer expected";
            if (!$util.isInteger(message.totalSignNum))
                return "totalSignNum: integer expected";
            return null;
        };

        /**
         * Creates a PlayerSignMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.PlayerSignMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.PlayerSignMsg} PlayerSignMsg
         */
        PlayerSignMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.PlayerSignMsg)
                return object;
            var message = new $root.protocol.PlayerSignMsg();
            if (object.signState != null)
                message.signState = Boolean(object.signState);
            if (object.signNum != null)
                message.signNum = object.signNum | 0;
            if (object.noEbsenceNum != null)
                message.noEbsenceNum = object.noEbsenceNum | 0;
            if (object.totalDutyNum != null)
                message.totalDutyNum = object.totalDutyNum | 0;
            if (object.totalSignNum != null)
                message.totalSignNum = object.totalSignNum | 0;
            return message;
        };

        /**
         * Creates a plain object from a PlayerSignMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.PlayerSignMsg
         * @static
         * @param {protocol.PlayerSignMsg} message PlayerSignMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerSignMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.signState = false;
                object.signNum = 0;
                object.noEbsenceNum = 0;
                object.totalDutyNum = 0;
                object.totalSignNum = 0;
            }
            if (message.signState != null && message.hasOwnProperty("signState"))
                object.signState = message.signState;
            if (message.signNum != null && message.hasOwnProperty("signNum"))
                object.signNum = message.signNum;
            if (message.noEbsenceNum != null && message.hasOwnProperty("noEbsenceNum"))
                object.noEbsenceNum = message.noEbsenceNum;
            if (message.totalDutyNum != null && message.hasOwnProperty("totalDutyNum"))
                object.totalDutyNum = message.totalDutyNum;
            if (message.totalSignNum != null && message.hasOwnProperty("totalSignNum"))
                object.totalSignNum = message.totalSignNum;
            return object;
        };

        /**
         * Converts this PlayerSignMsg to JSON.
         * @function toJSON
         * @memberof protocol.PlayerSignMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerSignMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerSignMsg;
    })();

    protocol.PlayerMonthLoginMsg = (function() {

        /**
         * Properties of a PlayerMonthLoginMsg.
         * @memberof protocol
         * @interface IPlayerMonthLoginMsg
         * @property {number} loginDayNum PlayerMonthLoginMsg loginDayNum
         * @property {Array.<number>|null} [awardState] PlayerMonthLoginMsg awardState
         * @property {string} flushTime PlayerMonthLoginMsg flushTime
         */

        /**
         * Constructs a new PlayerMonthLoginMsg.
         * @memberof protocol
         * @classdesc Represents a PlayerMonthLoginMsg.
         * @implements IPlayerMonthLoginMsg
         * @constructor
         * @param {protocol.IPlayerMonthLoginMsg=} [properties] Properties to set
         */
        function PlayerMonthLoginMsg(properties) {
            this.awardState = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerMonthLoginMsg loginDayNum.
         * @member {number} loginDayNum
         * @memberof protocol.PlayerMonthLoginMsg
         * @instance
         */
        PlayerMonthLoginMsg.prototype.loginDayNum = 0;

        /**
         * PlayerMonthLoginMsg awardState.
         * @member {Array.<number>} awardState
         * @memberof protocol.PlayerMonthLoginMsg
         * @instance
         */
        PlayerMonthLoginMsg.prototype.awardState = $util.emptyArray;

        /**
         * PlayerMonthLoginMsg flushTime.
         * @member {string} flushTime
         * @memberof protocol.PlayerMonthLoginMsg
         * @instance
         */
        PlayerMonthLoginMsg.prototype.flushTime = "";

        /**
         * Creates a new PlayerMonthLoginMsg instance using the specified properties.
         * @function create
         * @memberof protocol.PlayerMonthLoginMsg
         * @static
         * @param {protocol.IPlayerMonthLoginMsg=} [properties] Properties to set
         * @returns {protocol.PlayerMonthLoginMsg} PlayerMonthLoginMsg instance
         */
        PlayerMonthLoginMsg.create = function create(properties) {
            return new PlayerMonthLoginMsg(properties);
        };

        /**
         * Encodes the specified PlayerMonthLoginMsg message. Does not implicitly {@link protocol.PlayerMonthLoginMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.PlayerMonthLoginMsg
         * @static
         * @param {protocol.IPlayerMonthLoginMsg} message PlayerMonthLoginMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerMonthLoginMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.loginDayNum);
            if (message.awardState != null && message.awardState.length)
                for (var i = 0; i < message.awardState.length; ++i)
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.awardState[i]);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.flushTime);
            return writer;
        };

        /**
         * Encodes the specified PlayerMonthLoginMsg message, length delimited. Does not implicitly {@link protocol.PlayerMonthLoginMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.PlayerMonthLoginMsg
         * @static
         * @param {protocol.IPlayerMonthLoginMsg} message PlayerMonthLoginMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerMonthLoginMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerMonthLoginMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.PlayerMonthLoginMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.PlayerMonthLoginMsg} PlayerMonthLoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerMonthLoginMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.PlayerMonthLoginMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.loginDayNum = reader.int32();
                    break;
                case 4:
                    if (!(message.awardState && message.awardState.length))
                        message.awardState = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.awardState.push(reader.int32());
                    } else
                        message.awardState.push(reader.int32());
                    break;
                case 5:
                    message.flushTime = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("loginDayNum"))
                throw $util.ProtocolError("missing required 'loginDayNum'", { instance: message });
            if (!message.hasOwnProperty("flushTime"))
                throw $util.ProtocolError("missing required 'flushTime'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerMonthLoginMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.PlayerMonthLoginMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.PlayerMonthLoginMsg} PlayerMonthLoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerMonthLoginMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerMonthLoginMsg message.
         * @function verify
         * @memberof protocol.PlayerMonthLoginMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerMonthLoginMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.loginDayNum))
                return "loginDayNum: integer expected";
            if (message.awardState != null && message.hasOwnProperty("awardState")) {
                if (!Array.isArray(message.awardState))
                    return "awardState: array expected";
                for (var i = 0; i < message.awardState.length; ++i)
                    if (!$util.isInteger(message.awardState[i]))
                        return "awardState: integer[] expected";
            }
            if (!$util.isString(message.flushTime))
                return "flushTime: string expected";
            return null;
        };

        /**
         * Creates a PlayerMonthLoginMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.PlayerMonthLoginMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.PlayerMonthLoginMsg} PlayerMonthLoginMsg
         */
        PlayerMonthLoginMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.PlayerMonthLoginMsg)
                return object;
            var message = new $root.protocol.PlayerMonthLoginMsg();
            if (object.loginDayNum != null)
                message.loginDayNum = object.loginDayNum | 0;
            if (object.awardState) {
                if (!Array.isArray(object.awardState))
                    throw TypeError(".protocol.PlayerMonthLoginMsg.awardState: array expected");
                message.awardState = [];
                for (var i = 0; i < object.awardState.length; ++i)
                    message.awardState[i] = object.awardState[i] | 0;
            }
            if (object.flushTime != null)
                message.flushTime = String(object.flushTime);
            return message;
        };

        /**
         * Creates a plain object from a PlayerMonthLoginMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.PlayerMonthLoginMsg
         * @static
         * @param {protocol.PlayerMonthLoginMsg} message PlayerMonthLoginMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerMonthLoginMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.awardState = [];
            if (options.defaults) {
                object.loginDayNum = 0;
                object.flushTime = "";
            }
            if (message.loginDayNum != null && message.hasOwnProperty("loginDayNum"))
                object.loginDayNum = message.loginDayNum;
            if (message.awardState && message.awardState.length) {
                object.awardState = [];
                for (var j = 0; j < message.awardState.length; ++j)
                    object.awardState[j] = message.awardState[j];
            }
            if (message.flushTime != null && message.hasOwnProperty("flushTime"))
                object.flushTime = message.flushTime;
            return object;
        };

        /**
         * Converts this PlayerMonthLoginMsg to JSON.
         * @function toJSON
         * @memberof protocol.PlayerMonthLoginMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerMonthLoginMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerMonthLoginMsg;
    })();

    protocol.MailItemMsg = (function() {

        /**
         * Properties of a MailItemMsg.
         * @memberof protocol
         * @interface IMailItemMsg
         * @property {number} mailId MailItemMsg mailId
         */

        /**
         * Constructs a new MailItemMsg.
         * @memberof protocol
         * @classdesc Represents a MailItemMsg.
         * @implements IMailItemMsg
         * @constructor
         * @param {protocol.IMailItemMsg=} [properties] Properties to set
         */
        function MailItemMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailItemMsg mailId.
         * @member {number} mailId
         * @memberof protocol.MailItemMsg
         * @instance
         */
        MailItemMsg.prototype.mailId = 0;

        /**
         * Creates a new MailItemMsg instance using the specified properties.
         * @function create
         * @memberof protocol.MailItemMsg
         * @static
         * @param {protocol.IMailItemMsg=} [properties] Properties to set
         * @returns {protocol.MailItemMsg} MailItemMsg instance
         */
        MailItemMsg.create = function create(properties) {
            return new MailItemMsg(properties);
        };

        /**
         * Encodes the specified MailItemMsg message. Does not implicitly {@link protocol.MailItemMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.MailItemMsg
         * @static
         * @param {protocol.IMailItemMsg} message MailItemMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailItemMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mailId);
            return writer;
        };

        /**
         * Encodes the specified MailItemMsg message, length delimited. Does not implicitly {@link protocol.MailItemMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.MailItemMsg
         * @static
         * @param {protocol.IMailItemMsg} message MailItemMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailItemMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailItemMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MailItemMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.MailItemMsg} MailItemMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailItemMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.MailItemMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mailId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mailId"))
                throw $util.ProtocolError("missing required 'mailId'", { instance: message });
            return message;
        };

        /**
         * Decodes a MailItemMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.MailItemMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.MailItemMsg} MailItemMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailItemMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailItemMsg message.
         * @function verify
         * @memberof protocol.MailItemMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailItemMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.mailId))
                return "mailId: integer expected";
            return null;
        };

        /**
         * Creates a MailItemMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.MailItemMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.MailItemMsg} MailItemMsg
         */
        MailItemMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.MailItemMsg)
                return object;
            var message = new $root.protocol.MailItemMsg();
            if (object.mailId != null)
                message.mailId = object.mailId | 0;
            return message;
        };

        /**
         * Creates a plain object from a MailItemMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.MailItemMsg
         * @static
         * @param {protocol.MailItemMsg} message MailItemMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailItemMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.mailId = 0;
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                object.mailId = message.mailId;
            return object;
        };

        /**
         * Converts this MailItemMsg to JSON.
         * @function toJSON
         * @memberof protocol.MailItemMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailItemMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MailItemMsg;
    })();

    protocol.ItemResMsgList = (function() {

        /**
         * Properties of an ItemResMsgList.
         * @memberof protocol
         * @interface IItemResMsgList
         * @property {Array.<protocol.IItemResMsg>|null} [itemList] ItemResMsgList itemList
         */

        /**
         * Constructs a new ItemResMsgList.
         * @memberof protocol
         * @classdesc Represents an ItemResMsgList.
         * @implements IItemResMsgList
         * @constructor
         * @param {protocol.IItemResMsgList=} [properties] Properties to set
         */
        function ItemResMsgList(properties) {
            this.itemList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemResMsgList itemList.
         * @member {Array.<protocol.IItemResMsg>} itemList
         * @memberof protocol.ItemResMsgList
         * @instance
         */
        ItemResMsgList.prototype.itemList = $util.emptyArray;

        /**
         * Creates a new ItemResMsgList instance using the specified properties.
         * @function create
         * @memberof protocol.ItemResMsgList
         * @static
         * @param {protocol.IItemResMsgList=} [properties] Properties to set
         * @returns {protocol.ItemResMsgList} ItemResMsgList instance
         */
        ItemResMsgList.create = function create(properties) {
            return new ItemResMsgList(properties);
        };

        /**
         * Encodes the specified ItemResMsgList message. Does not implicitly {@link protocol.ItemResMsgList.verify|verify} messages.
         * @function encode
         * @memberof protocol.ItemResMsgList
         * @static
         * @param {protocol.IItemResMsgList} message ItemResMsgList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemResMsgList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemList != null && message.itemList.length)
                for (var i = 0; i < message.itemList.length; ++i)
                    $root.protocol.ItemResMsg.encode(message.itemList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ItemResMsgList message, length delimited. Does not implicitly {@link protocol.ItemResMsgList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ItemResMsgList
         * @static
         * @param {protocol.IItemResMsgList} message ItemResMsgList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemResMsgList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemResMsgList message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ItemResMsgList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ItemResMsgList} ItemResMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemResMsgList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ItemResMsgList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.itemList && message.itemList.length))
                        message.itemList = [];
                    message.itemList.push($root.protocol.ItemResMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ItemResMsgList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ItemResMsgList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ItemResMsgList} ItemResMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemResMsgList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemResMsgList message.
         * @function verify
         * @memberof protocol.ItemResMsgList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemResMsgList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemList != null && message.hasOwnProperty("itemList")) {
                if (!Array.isArray(message.itemList))
                    return "itemList: array expected";
                for (var i = 0; i < message.itemList.length; ++i) {
                    var error = $root.protocol.ItemResMsg.verify(message.itemList[i]);
                    if (error)
                        return "itemList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ItemResMsgList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ItemResMsgList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ItemResMsgList} ItemResMsgList
         */
        ItemResMsgList.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ItemResMsgList)
                return object;
            var message = new $root.protocol.ItemResMsgList();
            if (object.itemList) {
                if (!Array.isArray(object.itemList))
                    throw TypeError(".protocol.ItemResMsgList.itemList: array expected");
                message.itemList = [];
                for (var i = 0; i < object.itemList.length; ++i) {
                    if (typeof object.itemList[i] !== "object")
                        throw TypeError(".protocol.ItemResMsgList.itemList: object expected");
                    message.itemList[i] = $root.protocol.ItemResMsg.fromObject(object.itemList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an ItemResMsgList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ItemResMsgList
         * @static
         * @param {protocol.ItemResMsgList} message ItemResMsgList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemResMsgList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.itemList = [];
            if (message.itemList && message.itemList.length) {
                object.itemList = [];
                for (var j = 0; j < message.itemList.length; ++j)
                    object.itemList[j] = $root.protocol.ItemResMsg.toObject(message.itemList[j], options);
            }
            return object;
        };

        /**
         * Converts this ItemResMsgList to JSON.
         * @function toJSON
         * @memberof protocol.ItemResMsgList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemResMsgList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ItemResMsgList;
    })();

    protocol.ItemResMsg = (function() {

        /**
         * Properties of an ItemResMsg.
         * @memberof protocol
         * @interface IItemResMsg
         * @property {number} itemId ItemResMsg itemId
         * @property {number} num ItemResMsg num
         * @property {number} type ItemResMsg type
         */

        /**
         * Constructs a new ItemResMsg.
         * @memberof protocol
         * @classdesc Represents an ItemResMsg.
         * @implements IItemResMsg
         * @constructor
         * @param {protocol.IItemResMsg=} [properties] Properties to set
         */
        function ItemResMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemResMsg itemId.
         * @member {number} itemId
         * @memberof protocol.ItemResMsg
         * @instance
         */
        ItemResMsg.prototype.itemId = 0;

        /**
         * ItemResMsg num.
         * @member {number} num
         * @memberof protocol.ItemResMsg
         * @instance
         */
        ItemResMsg.prototype.num = 0;

        /**
         * ItemResMsg type.
         * @member {number} type
         * @memberof protocol.ItemResMsg
         * @instance
         */
        ItemResMsg.prototype.type = 0;

        /**
         * Creates a new ItemResMsg instance using the specified properties.
         * @function create
         * @memberof protocol.ItemResMsg
         * @static
         * @param {protocol.IItemResMsg=} [properties] Properties to set
         * @returns {protocol.ItemResMsg} ItemResMsg instance
         */
        ItemResMsg.create = function create(properties) {
            return new ItemResMsg(properties);
        };

        /**
         * Encodes the specified ItemResMsg message. Does not implicitly {@link protocol.ItemResMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.ItemResMsg
         * @static
         * @param {protocol.IItemResMsg} message ItemResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.num);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified ItemResMsg message, length delimited. Does not implicitly {@link protocol.ItemResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ItemResMsg
         * @static
         * @param {protocol.IItemResMsg} message ItemResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ItemResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ItemResMsg} ItemResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ItemResMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.itemId = reader.int32();
                    break;
                case 2:
                    message.num = reader.int32();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("itemId"))
                throw $util.ProtocolError("missing required 'itemId'", { instance: message });
            if (!message.hasOwnProperty("num"))
                throw $util.ProtocolError("missing required 'num'", { instance: message });
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes an ItemResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ItemResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ItemResMsg} ItemResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemResMsg message.
         * @function verify
         * @memberof protocol.ItemResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.itemId))
                return "itemId: integer expected";
            if (!$util.isInteger(message.num))
                return "num: integer expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            return null;
        };

        /**
         * Creates an ItemResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ItemResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ItemResMsg} ItemResMsg
         */
        ItemResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ItemResMsg)
                return object;
            var message = new $root.protocol.ItemResMsg();
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.num != null)
                message.num = object.num | 0;
            if (object.type != null)
                message.type = object.type | 0;
            return message;
        };

        /**
         * Creates a plain object from an ItemResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ItemResMsg
         * @static
         * @param {protocol.ItemResMsg} message ItemResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.itemId = 0;
                object.num = 0;
                object.type = 0;
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this ItemResMsg to JSON.
         * @function toJSON
         * @memberof protocol.ItemResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ItemResMsg;
    })();

    protocol.MailInfoListMsg = (function() {

        /**
         * Properties of a MailInfoListMsg.
         * @memberof protocol
         * @interface IMailInfoListMsg
         * @property {Array.<protocol.IMailInfoMsg>|null} [list] MailInfoListMsg list
         */

        /**
         * Constructs a new MailInfoListMsg.
         * @memberof protocol
         * @classdesc Represents a MailInfoListMsg.
         * @implements IMailInfoListMsg
         * @constructor
         * @param {protocol.IMailInfoListMsg=} [properties] Properties to set
         */
        function MailInfoListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailInfoListMsg list.
         * @member {Array.<protocol.IMailInfoMsg>} list
         * @memberof protocol.MailInfoListMsg
         * @instance
         */
        MailInfoListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new MailInfoListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.MailInfoListMsg
         * @static
         * @param {protocol.IMailInfoListMsg=} [properties] Properties to set
         * @returns {protocol.MailInfoListMsg} MailInfoListMsg instance
         */
        MailInfoListMsg.create = function create(properties) {
            return new MailInfoListMsg(properties);
        };

        /**
         * Encodes the specified MailInfoListMsg message. Does not implicitly {@link protocol.MailInfoListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.MailInfoListMsg
         * @static
         * @param {protocol.IMailInfoListMsg} message MailInfoListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailInfoListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.MailInfoMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MailInfoListMsg message, length delimited. Does not implicitly {@link protocol.MailInfoListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.MailInfoListMsg
         * @static
         * @param {protocol.IMailInfoListMsg} message MailInfoListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailInfoListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailInfoListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MailInfoListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.MailInfoListMsg} MailInfoListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailInfoListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.MailInfoListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.MailInfoMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MailInfoListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.MailInfoListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.MailInfoListMsg} MailInfoListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailInfoListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailInfoListMsg message.
         * @function verify
         * @memberof protocol.MailInfoListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailInfoListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.MailInfoMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MailInfoListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.MailInfoListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.MailInfoListMsg} MailInfoListMsg
         */
        MailInfoListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.MailInfoListMsg)
                return object;
            var message = new $root.protocol.MailInfoListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.MailInfoListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.MailInfoListMsg.list: object expected");
                    message.list[i] = $root.protocol.MailInfoMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MailInfoListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.MailInfoListMsg
         * @static
         * @param {protocol.MailInfoListMsg} message MailInfoListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailInfoListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.MailInfoMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this MailInfoListMsg to JSON.
         * @function toJSON
         * @memberof protocol.MailInfoListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailInfoListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MailInfoListMsg;
    })();

    protocol.MailInfoMsg = (function() {

        /**
         * Properties of a MailInfoMsg.
         * @memberof protocol
         * @interface IMailInfoMsg
         * @property {number} mailId MailInfoMsg mailId
         * @property {number|Long} sendDate MailInfoMsg sendDate
         * @property {number} senderUserId MailInfoMsg senderUserId
         * @property {string} senderNickname MailInfoMsg senderNickname
         * @property {number} type MailInfoMsg type
         * @property {string} title MailInfoMsg title
         * @property {string} content MailInfoMsg content
         * @property {boolean} read MailInfoMsg read
         * @property {string} itemList MailInfoMsg itemList
         */

        /**
         * Constructs a new MailInfoMsg.
         * @memberof protocol
         * @classdesc Represents a MailInfoMsg.
         * @implements IMailInfoMsg
         * @constructor
         * @param {protocol.IMailInfoMsg=} [properties] Properties to set
         */
        function MailInfoMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailInfoMsg mailId.
         * @member {number} mailId
         * @memberof protocol.MailInfoMsg
         * @instance
         */
        MailInfoMsg.prototype.mailId = 0;

        /**
         * MailInfoMsg sendDate.
         * @member {number|Long} sendDate
         * @memberof protocol.MailInfoMsg
         * @instance
         */
        MailInfoMsg.prototype.sendDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MailInfoMsg senderUserId.
         * @member {number} senderUserId
         * @memberof protocol.MailInfoMsg
         * @instance
         */
        MailInfoMsg.prototype.senderUserId = 0;

        /**
         * MailInfoMsg senderNickname.
         * @member {string} senderNickname
         * @memberof protocol.MailInfoMsg
         * @instance
         */
        MailInfoMsg.prototype.senderNickname = "";

        /**
         * MailInfoMsg type.
         * @member {number} type
         * @memberof protocol.MailInfoMsg
         * @instance
         */
        MailInfoMsg.prototype.type = 0;

        /**
         * MailInfoMsg title.
         * @member {string} title
         * @memberof protocol.MailInfoMsg
         * @instance
         */
        MailInfoMsg.prototype.title = "";

        /**
         * MailInfoMsg content.
         * @member {string} content
         * @memberof protocol.MailInfoMsg
         * @instance
         */
        MailInfoMsg.prototype.content = "";

        /**
         * MailInfoMsg read.
         * @member {boolean} read
         * @memberof protocol.MailInfoMsg
         * @instance
         */
        MailInfoMsg.prototype.read = false;

        /**
         * MailInfoMsg itemList.
         * @member {string} itemList
         * @memberof protocol.MailInfoMsg
         * @instance
         */
        MailInfoMsg.prototype.itemList = "";

        /**
         * Creates a new MailInfoMsg instance using the specified properties.
         * @function create
         * @memberof protocol.MailInfoMsg
         * @static
         * @param {protocol.IMailInfoMsg=} [properties] Properties to set
         * @returns {protocol.MailInfoMsg} MailInfoMsg instance
         */
        MailInfoMsg.create = function create(properties) {
            return new MailInfoMsg(properties);
        };

        /**
         * Encodes the specified MailInfoMsg message. Does not implicitly {@link protocol.MailInfoMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.MailInfoMsg
         * @static
         * @param {protocol.IMailInfoMsg} message MailInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailInfoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mailId);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.sendDate);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.senderUserId);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.senderNickname);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.title);
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.content);
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.read);
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.itemList);
            return writer;
        };

        /**
         * Encodes the specified MailInfoMsg message, length delimited. Does not implicitly {@link protocol.MailInfoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.MailInfoMsg
         * @static
         * @param {protocol.IMailInfoMsg} message MailInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailInfoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailInfoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MailInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.MailInfoMsg} MailInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailInfoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.MailInfoMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mailId = reader.int32();
                    break;
                case 2:
                    message.sendDate = reader.int64();
                    break;
                case 3:
                    message.senderUserId = reader.int32();
                    break;
                case 4:
                    message.senderNickname = reader.string();
                    break;
                case 5:
                    message.type = reader.int32();
                    break;
                case 6:
                    message.title = reader.string();
                    break;
                case 7:
                    message.content = reader.string();
                    break;
                case 8:
                    message.read = reader.bool();
                    break;
                case 9:
                    message.itemList = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mailId"))
                throw $util.ProtocolError("missing required 'mailId'", { instance: message });
            if (!message.hasOwnProperty("sendDate"))
                throw $util.ProtocolError("missing required 'sendDate'", { instance: message });
            if (!message.hasOwnProperty("senderUserId"))
                throw $util.ProtocolError("missing required 'senderUserId'", { instance: message });
            if (!message.hasOwnProperty("senderNickname"))
                throw $util.ProtocolError("missing required 'senderNickname'", { instance: message });
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("title"))
                throw $util.ProtocolError("missing required 'title'", { instance: message });
            if (!message.hasOwnProperty("content"))
                throw $util.ProtocolError("missing required 'content'", { instance: message });
            if (!message.hasOwnProperty("read"))
                throw $util.ProtocolError("missing required 'read'", { instance: message });
            if (!message.hasOwnProperty("itemList"))
                throw $util.ProtocolError("missing required 'itemList'", { instance: message });
            return message;
        };

        /**
         * Decodes a MailInfoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.MailInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.MailInfoMsg} MailInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailInfoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailInfoMsg message.
         * @function verify
         * @memberof protocol.MailInfoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailInfoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.mailId))
                return "mailId: integer expected";
            if (!$util.isInteger(message.sendDate) && !(message.sendDate && $util.isInteger(message.sendDate.low) && $util.isInteger(message.sendDate.high)))
                return "sendDate: integer|Long expected";
            if (!$util.isInteger(message.senderUserId))
                return "senderUserId: integer expected";
            if (!$util.isString(message.senderNickname))
                return "senderNickname: string expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isString(message.title))
                return "title: string expected";
            if (!$util.isString(message.content))
                return "content: string expected";
            if (typeof message.read !== "boolean")
                return "read: boolean expected";
            if (!$util.isString(message.itemList))
                return "itemList: string expected";
            return null;
        };

        /**
         * Creates a MailInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.MailInfoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.MailInfoMsg} MailInfoMsg
         */
        MailInfoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.MailInfoMsg)
                return object;
            var message = new $root.protocol.MailInfoMsg();
            if (object.mailId != null)
                message.mailId = object.mailId | 0;
            if (object.sendDate != null)
                if ($util.Long)
                    (message.sendDate = $util.Long.fromValue(object.sendDate)).unsigned = false;
                else if (typeof object.sendDate === "string")
                    message.sendDate = parseInt(object.sendDate, 10);
                else if (typeof object.sendDate === "number")
                    message.sendDate = object.sendDate;
                else if (typeof object.sendDate === "object")
                    message.sendDate = new $util.LongBits(object.sendDate.low >>> 0, object.sendDate.high >>> 0).toNumber();
            if (object.senderUserId != null)
                message.senderUserId = object.senderUserId | 0;
            if (object.senderNickname != null)
                message.senderNickname = String(object.senderNickname);
            if (object.type != null)
                message.type = object.type | 0;
            if (object.title != null)
                message.title = String(object.title);
            if (object.content != null)
                message.content = String(object.content);
            if (object.read != null)
                message.read = Boolean(object.read);
            if (object.itemList != null)
                message.itemList = String(object.itemList);
            return message;
        };

        /**
         * Creates a plain object from a MailInfoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.MailInfoMsg
         * @static
         * @param {protocol.MailInfoMsg} message MailInfoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailInfoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.mailId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sendDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sendDate = options.longs === String ? "0" : 0;
                object.senderUserId = 0;
                object.senderNickname = "";
                object.type = 0;
                object.title = "";
                object.content = "";
                object.read = false;
                object.itemList = "";
            }
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                object.mailId = message.mailId;
            if (message.sendDate != null && message.hasOwnProperty("sendDate"))
                if (typeof message.sendDate === "number")
                    object.sendDate = options.longs === String ? String(message.sendDate) : message.sendDate;
                else
                    object.sendDate = options.longs === String ? $util.Long.prototype.toString.call(message.sendDate) : options.longs === Number ? new $util.LongBits(message.sendDate.low >>> 0, message.sendDate.high >>> 0).toNumber() : message.sendDate;
            if (message.senderUserId != null && message.hasOwnProperty("senderUserId"))
                object.senderUserId = message.senderUserId;
            if (message.senderNickname != null && message.hasOwnProperty("senderNickname"))
                object.senderNickname = message.senderNickname;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.read != null && message.hasOwnProperty("read"))
                object.read = message.read;
            if (message.itemList != null && message.hasOwnProperty("itemList"))
                object.itemList = message.itemList;
            return object;
        };

        /**
         * Converts this MailInfoMsg to JSON.
         * @function toJSON
         * @memberof protocol.MailInfoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailInfoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MailInfoMsg;
    })();

    protocol.MailReadMsg = (function() {

        /**
         * Properties of a MailReadMsg.
         * @memberof protocol
         * @interface IMailReadMsg
         * @property {number} mailId MailReadMsg mailId
         */

        /**
         * Constructs a new MailReadMsg.
         * @memberof protocol
         * @classdesc Represents a MailReadMsg.
         * @implements IMailReadMsg
         * @constructor
         * @param {protocol.IMailReadMsg=} [properties] Properties to set
         */
        function MailReadMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailReadMsg mailId.
         * @member {number} mailId
         * @memberof protocol.MailReadMsg
         * @instance
         */
        MailReadMsg.prototype.mailId = 0;

        /**
         * Creates a new MailReadMsg instance using the specified properties.
         * @function create
         * @memberof protocol.MailReadMsg
         * @static
         * @param {protocol.IMailReadMsg=} [properties] Properties to set
         * @returns {protocol.MailReadMsg} MailReadMsg instance
         */
        MailReadMsg.create = function create(properties) {
            return new MailReadMsg(properties);
        };

        /**
         * Encodes the specified MailReadMsg message. Does not implicitly {@link protocol.MailReadMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.MailReadMsg
         * @static
         * @param {protocol.IMailReadMsg} message MailReadMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailReadMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mailId);
            return writer;
        };

        /**
         * Encodes the specified MailReadMsg message, length delimited. Does not implicitly {@link protocol.MailReadMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.MailReadMsg
         * @static
         * @param {protocol.IMailReadMsg} message MailReadMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailReadMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailReadMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MailReadMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.MailReadMsg} MailReadMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailReadMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.MailReadMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mailId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mailId"))
                throw $util.ProtocolError("missing required 'mailId'", { instance: message });
            return message;
        };

        /**
         * Decodes a MailReadMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.MailReadMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.MailReadMsg} MailReadMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailReadMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailReadMsg message.
         * @function verify
         * @memberof protocol.MailReadMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailReadMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.mailId))
                return "mailId: integer expected";
            return null;
        };

        /**
         * Creates a MailReadMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.MailReadMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.MailReadMsg} MailReadMsg
         */
        MailReadMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.MailReadMsg)
                return object;
            var message = new $root.protocol.MailReadMsg();
            if (object.mailId != null)
                message.mailId = object.mailId | 0;
            return message;
        };

        /**
         * Creates a plain object from a MailReadMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.MailReadMsg
         * @static
         * @param {protocol.MailReadMsg} message MailReadMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailReadMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.mailId = 0;
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                object.mailId = message.mailId;
            return object;
        };

        /**
         * Converts this MailReadMsg to JSON.
         * @function toJSON
         * @memberof protocol.MailReadMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailReadMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MailReadMsg;
    })();

    protocol.MailOneUpMsg = (function() {

        /**
         * Properties of a MailOneUpMsg.
         * @memberof protocol
         * @interface IMailOneUpMsg
         * @property {boolean} force MailOneUpMsg force
         */

        /**
         * Constructs a new MailOneUpMsg.
         * @memberof protocol
         * @classdesc Represents a MailOneUpMsg.
         * @implements IMailOneUpMsg
         * @constructor
         * @param {protocol.IMailOneUpMsg=} [properties] Properties to set
         */
        function MailOneUpMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailOneUpMsg force.
         * @member {boolean} force
         * @memberof protocol.MailOneUpMsg
         * @instance
         */
        MailOneUpMsg.prototype.force = false;

        /**
         * Creates a new MailOneUpMsg instance using the specified properties.
         * @function create
         * @memberof protocol.MailOneUpMsg
         * @static
         * @param {protocol.IMailOneUpMsg=} [properties] Properties to set
         * @returns {protocol.MailOneUpMsg} MailOneUpMsg instance
         */
        MailOneUpMsg.create = function create(properties) {
            return new MailOneUpMsg(properties);
        };

        /**
         * Encodes the specified MailOneUpMsg message. Does not implicitly {@link protocol.MailOneUpMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.MailOneUpMsg
         * @static
         * @param {protocol.IMailOneUpMsg} message MailOneUpMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailOneUpMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.force);
            return writer;
        };

        /**
         * Encodes the specified MailOneUpMsg message, length delimited. Does not implicitly {@link protocol.MailOneUpMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.MailOneUpMsg
         * @static
         * @param {protocol.IMailOneUpMsg} message MailOneUpMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailOneUpMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailOneUpMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MailOneUpMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.MailOneUpMsg} MailOneUpMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailOneUpMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.MailOneUpMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.force = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("force"))
                throw $util.ProtocolError("missing required 'force'", { instance: message });
            return message;
        };

        /**
         * Decodes a MailOneUpMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.MailOneUpMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.MailOneUpMsg} MailOneUpMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailOneUpMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailOneUpMsg message.
         * @function verify
         * @memberof protocol.MailOneUpMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailOneUpMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.force !== "boolean")
                return "force: boolean expected";
            return null;
        };

        /**
         * Creates a MailOneUpMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.MailOneUpMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.MailOneUpMsg} MailOneUpMsg
         */
        MailOneUpMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.MailOneUpMsg)
                return object;
            var message = new $root.protocol.MailOneUpMsg();
            if (object.force != null)
                message.force = Boolean(object.force);
            return message;
        };

        /**
         * Creates a plain object from a MailOneUpMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.MailOneUpMsg
         * @static
         * @param {protocol.MailOneUpMsg} message MailOneUpMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailOneUpMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.force = false;
            if (message.force != null && message.hasOwnProperty("force"))
                object.force = message.force;
            return object;
        };

        /**
         * Converts this MailOneUpMsg to JSON.
         * @function toJSON
         * @memberof protocol.MailOneUpMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailOneUpMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MailOneUpMsg;
    })();

    protocol.MailDeleteMsg = (function() {

        /**
         * Properties of a MailDeleteMsg.
         * @memberof protocol
         * @interface IMailDeleteMsg
         * @property {number} mailId MailDeleteMsg mailId
         */

        /**
         * Constructs a new MailDeleteMsg.
         * @memberof protocol
         * @classdesc Represents a MailDeleteMsg.
         * @implements IMailDeleteMsg
         * @constructor
         * @param {protocol.IMailDeleteMsg=} [properties] Properties to set
         */
        function MailDeleteMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailDeleteMsg mailId.
         * @member {number} mailId
         * @memberof protocol.MailDeleteMsg
         * @instance
         */
        MailDeleteMsg.prototype.mailId = 0;

        /**
         * Creates a new MailDeleteMsg instance using the specified properties.
         * @function create
         * @memberof protocol.MailDeleteMsg
         * @static
         * @param {protocol.IMailDeleteMsg=} [properties] Properties to set
         * @returns {protocol.MailDeleteMsg} MailDeleteMsg instance
         */
        MailDeleteMsg.create = function create(properties) {
            return new MailDeleteMsg(properties);
        };

        /**
         * Encodes the specified MailDeleteMsg message. Does not implicitly {@link protocol.MailDeleteMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.MailDeleteMsg
         * @static
         * @param {protocol.IMailDeleteMsg} message MailDeleteMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailDeleteMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mailId);
            return writer;
        };

        /**
         * Encodes the specified MailDeleteMsg message, length delimited. Does not implicitly {@link protocol.MailDeleteMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.MailDeleteMsg
         * @static
         * @param {protocol.IMailDeleteMsg} message MailDeleteMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailDeleteMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailDeleteMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MailDeleteMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.MailDeleteMsg} MailDeleteMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailDeleteMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.MailDeleteMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mailId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mailId"))
                throw $util.ProtocolError("missing required 'mailId'", { instance: message });
            return message;
        };

        /**
         * Decodes a MailDeleteMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.MailDeleteMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.MailDeleteMsg} MailDeleteMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailDeleteMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailDeleteMsg message.
         * @function verify
         * @memberof protocol.MailDeleteMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailDeleteMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.mailId))
                return "mailId: integer expected";
            return null;
        };

        /**
         * Creates a MailDeleteMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.MailDeleteMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.MailDeleteMsg} MailDeleteMsg
         */
        MailDeleteMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.MailDeleteMsg)
                return object;
            var message = new $root.protocol.MailDeleteMsg();
            if (object.mailId != null)
                message.mailId = object.mailId | 0;
            return message;
        };

        /**
         * Creates a plain object from a MailDeleteMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.MailDeleteMsg
         * @static
         * @param {protocol.MailDeleteMsg} message MailDeleteMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailDeleteMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.mailId = 0;
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                object.mailId = message.mailId;
            return object;
        };

        /**
         * Converts this MailDeleteMsg to JSON.
         * @function toJSON
         * @memberof protocol.MailDeleteMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailDeleteMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MailDeleteMsg;
    })();

    protocol.MailDeleteMsgSC = (function() {

        /**
         * Properties of a MailDeleteMsgSC.
         * @memberof protocol
         * @interface IMailDeleteMsgSC
         * @property {number} mailId MailDeleteMsgSC mailId
         */

        /**
         * Constructs a new MailDeleteMsgSC.
         * @memberof protocol
         * @classdesc Represents a MailDeleteMsgSC.
         * @implements IMailDeleteMsgSC
         * @constructor
         * @param {protocol.IMailDeleteMsgSC=} [properties] Properties to set
         */
        function MailDeleteMsgSC(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailDeleteMsgSC mailId.
         * @member {number} mailId
         * @memberof protocol.MailDeleteMsgSC
         * @instance
         */
        MailDeleteMsgSC.prototype.mailId = 0;

        /**
         * Creates a new MailDeleteMsgSC instance using the specified properties.
         * @function create
         * @memberof protocol.MailDeleteMsgSC
         * @static
         * @param {protocol.IMailDeleteMsgSC=} [properties] Properties to set
         * @returns {protocol.MailDeleteMsgSC} MailDeleteMsgSC instance
         */
        MailDeleteMsgSC.create = function create(properties) {
            return new MailDeleteMsgSC(properties);
        };

        /**
         * Encodes the specified MailDeleteMsgSC message. Does not implicitly {@link protocol.MailDeleteMsgSC.verify|verify} messages.
         * @function encode
         * @memberof protocol.MailDeleteMsgSC
         * @static
         * @param {protocol.IMailDeleteMsgSC} message MailDeleteMsgSC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailDeleteMsgSC.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mailId);
            return writer;
        };

        /**
         * Encodes the specified MailDeleteMsgSC message, length delimited. Does not implicitly {@link protocol.MailDeleteMsgSC.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.MailDeleteMsgSC
         * @static
         * @param {protocol.IMailDeleteMsgSC} message MailDeleteMsgSC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailDeleteMsgSC.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailDeleteMsgSC message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MailDeleteMsgSC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.MailDeleteMsgSC} MailDeleteMsgSC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailDeleteMsgSC.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.MailDeleteMsgSC();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mailId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mailId"))
                throw $util.ProtocolError("missing required 'mailId'", { instance: message });
            return message;
        };

        /**
         * Decodes a MailDeleteMsgSC message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.MailDeleteMsgSC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.MailDeleteMsgSC} MailDeleteMsgSC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailDeleteMsgSC.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailDeleteMsgSC message.
         * @function verify
         * @memberof protocol.MailDeleteMsgSC
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailDeleteMsgSC.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.mailId))
                return "mailId: integer expected";
            return null;
        };

        /**
         * Creates a MailDeleteMsgSC message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.MailDeleteMsgSC
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.MailDeleteMsgSC} MailDeleteMsgSC
         */
        MailDeleteMsgSC.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.MailDeleteMsgSC)
                return object;
            var message = new $root.protocol.MailDeleteMsgSC();
            if (object.mailId != null)
                message.mailId = object.mailId | 0;
            return message;
        };

        /**
         * Creates a plain object from a MailDeleteMsgSC message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.MailDeleteMsgSC
         * @static
         * @param {protocol.MailDeleteMsgSC} message MailDeleteMsgSC
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailDeleteMsgSC.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.mailId = 0;
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                object.mailId = message.mailId;
            return object;
        };

        /**
         * Converts this MailDeleteMsgSC to JSON.
         * @function toJSON
         * @memberof protocol.MailDeleteMsgSC
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailDeleteMsgSC.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MailDeleteMsgSC;
    })();

    protocol.NewbiewListMsg = (function() {

        /**
         * Properties of a NewbiewListMsg.
         * @memberof protocol
         * @interface INewbiewListMsg
         * @property {Array.<protocol.INewbiewMsg>|null} [list] NewbiewListMsg list
         */

        /**
         * Constructs a new NewbiewListMsg.
         * @memberof protocol
         * @classdesc Represents a NewbiewListMsg.
         * @implements INewbiewListMsg
         * @constructor
         * @param {protocol.INewbiewListMsg=} [properties] Properties to set
         */
        function NewbiewListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NewbiewListMsg list.
         * @member {Array.<protocol.INewbiewMsg>} list
         * @memberof protocol.NewbiewListMsg
         * @instance
         */
        NewbiewListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new NewbiewListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.NewbiewListMsg
         * @static
         * @param {protocol.INewbiewListMsg=} [properties] Properties to set
         * @returns {protocol.NewbiewListMsg} NewbiewListMsg instance
         */
        NewbiewListMsg.create = function create(properties) {
            return new NewbiewListMsg(properties);
        };

        /**
         * Encodes the specified NewbiewListMsg message. Does not implicitly {@link protocol.NewbiewListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.NewbiewListMsg
         * @static
         * @param {protocol.INewbiewListMsg} message NewbiewListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewbiewListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.NewbiewMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NewbiewListMsg message, length delimited. Does not implicitly {@link protocol.NewbiewListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.NewbiewListMsg
         * @static
         * @param {protocol.INewbiewListMsg} message NewbiewListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewbiewListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NewbiewListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.NewbiewListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.NewbiewListMsg} NewbiewListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewbiewListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.NewbiewListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.NewbiewMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NewbiewListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.NewbiewListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.NewbiewListMsg} NewbiewListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewbiewListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NewbiewListMsg message.
         * @function verify
         * @memberof protocol.NewbiewListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NewbiewListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.NewbiewMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a NewbiewListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.NewbiewListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.NewbiewListMsg} NewbiewListMsg
         */
        NewbiewListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.NewbiewListMsg)
                return object;
            var message = new $root.protocol.NewbiewListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.NewbiewListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.NewbiewListMsg.list: object expected");
                    message.list[i] = $root.protocol.NewbiewMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a NewbiewListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.NewbiewListMsg
         * @static
         * @param {protocol.NewbiewListMsg} message NewbiewListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NewbiewListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.NewbiewMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this NewbiewListMsg to JSON.
         * @function toJSON
         * @memberof protocol.NewbiewListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NewbiewListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NewbiewListMsg;
    })();

    protocol.NewbiewMsg = (function() {

        /**
         * Properties of a NewbiewMsg.
         * @memberof protocol
         * @interface INewbiewMsg
         * @property {number} type NewbiewMsg type
         * @property {number} stepId NewbiewMsg stepId
         * @property {string} param NewbiewMsg param
         */

        /**
         * Constructs a new NewbiewMsg.
         * @memberof protocol
         * @classdesc Represents a NewbiewMsg.
         * @implements INewbiewMsg
         * @constructor
         * @param {protocol.INewbiewMsg=} [properties] Properties to set
         */
        function NewbiewMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NewbiewMsg type.
         * @member {number} type
         * @memberof protocol.NewbiewMsg
         * @instance
         */
        NewbiewMsg.prototype.type = 0;

        /**
         * NewbiewMsg stepId.
         * @member {number} stepId
         * @memberof protocol.NewbiewMsg
         * @instance
         */
        NewbiewMsg.prototype.stepId = 0;

        /**
         * NewbiewMsg param.
         * @member {string} param
         * @memberof protocol.NewbiewMsg
         * @instance
         */
        NewbiewMsg.prototype.param = "";

        /**
         * Creates a new NewbiewMsg instance using the specified properties.
         * @function create
         * @memberof protocol.NewbiewMsg
         * @static
         * @param {protocol.INewbiewMsg=} [properties] Properties to set
         * @returns {protocol.NewbiewMsg} NewbiewMsg instance
         */
        NewbiewMsg.create = function create(properties) {
            return new NewbiewMsg(properties);
        };

        /**
         * Encodes the specified NewbiewMsg message. Does not implicitly {@link protocol.NewbiewMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.NewbiewMsg
         * @static
         * @param {protocol.INewbiewMsg} message NewbiewMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewbiewMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.stepId);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.param);
            return writer;
        };

        /**
         * Encodes the specified NewbiewMsg message, length delimited. Does not implicitly {@link protocol.NewbiewMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.NewbiewMsg
         * @static
         * @param {protocol.INewbiewMsg} message NewbiewMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewbiewMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NewbiewMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.NewbiewMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.NewbiewMsg} NewbiewMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewbiewMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.NewbiewMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.stepId = reader.int32();
                    break;
                case 3:
                    message.param = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("stepId"))
                throw $util.ProtocolError("missing required 'stepId'", { instance: message });
            if (!message.hasOwnProperty("param"))
                throw $util.ProtocolError("missing required 'param'", { instance: message });
            return message;
        };

        /**
         * Decodes a NewbiewMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.NewbiewMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.NewbiewMsg} NewbiewMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewbiewMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NewbiewMsg message.
         * @function verify
         * @memberof protocol.NewbiewMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NewbiewMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isInteger(message.stepId))
                return "stepId: integer expected";
            if (!$util.isString(message.param))
                return "param: string expected";
            return null;
        };

        /**
         * Creates a NewbiewMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.NewbiewMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.NewbiewMsg} NewbiewMsg
         */
        NewbiewMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.NewbiewMsg)
                return object;
            var message = new $root.protocol.NewbiewMsg();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.stepId != null)
                message.stepId = object.stepId | 0;
            if (object.param != null)
                message.param = String(object.param);
            return message;
        };

        /**
         * Creates a plain object from a NewbiewMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.NewbiewMsg
         * @static
         * @param {protocol.NewbiewMsg} message NewbiewMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NewbiewMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                object.stepId = 0;
                object.param = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.stepId != null && message.hasOwnProperty("stepId"))
                object.stepId = message.stepId;
            if (message.param != null && message.hasOwnProperty("param"))
                object.param = message.param;
            return object;
        };

        /**
         * Converts this NewbiewMsg to JSON.
         * @function toJSON
         * @memberof protocol.NewbiewMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NewbiewMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NewbiewMsg;
    })();

    protocol.AccountMsg = (function() {

        /**
         * Properties of an AccountMsg.
         * @memberof protocol
         * @interface IAccountMsg
         * @property {string} nickName AccountMsg nickName
         * @property {string} birth AccountMsg birth
         * @property {string} remark AccountMsg remark
         */

        /**
         * Constructs a new AccountMsg.
         * @memberof protocol
         * @classdesc Represents an AccountMsg.
         * @implements IAccountMsg
         * @constructor
         * @param {protocol.IAccountMsg=} [properties] Properties to set
         */
        function AccountMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountMsg nickName.
         * @member {string} nickName
         * @memberof protocol.AccountMsg
         * @instance
         */
        AccountMsg.prototype.nickName = "";

        /**
         * AccountMsg birth.
         * @member {string} birth
         * @memberof protocol.AccountMsg
         * @instance
         */
        AccountMsg.prototype.birth = "";

        /**
         * AccountMsg remark.
         * @member {string} remark
         * @memberof protocol.AccountMsg
         * @instance
         */
        AccountMsg.prototype.remark = "";

        /**
         * Creates a new AccountMsg instance using the specified properties.
         * @function create
         * @memberof protocol.AccountMsg
         * @static
         * @param {protocol.IAccountMsg=} [properties] Properties to set
         * @returns {protocol.AccountMsg} AccountMsg instance
         */
        AccountMsg.create = function create(properties) {
            return new AccountMsg(properties);
        };

        /**
         * Encodes the specified AccountMsg message. Does not implicitly {@link protocol.AccountMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.AccountMsg
         * @static
         * @param {protocol.IAccountMsg} message AccountMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickName);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.birth);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.remark);
            return writer;
        };

        /**
         * Encodes the specified AccountMsg message, length delimited. Does not implicitly {@link protocol.AccountMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.AccountMsg
         * @static
         * @param {protocol.IAccountMsg} message AccountMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.AccountMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.AccountMsg} AccountMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.AccountMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nickName = reader.string();
                    break;
                case 2:
                    message.birth = reader.string();
                    break;
                case 3:
                    message.remark = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("nickName"))
                throw $util.ProtocolError("missing required 'nickName'", { instance: message });
            if (!message.hasOwnProperty("birth"))
                throw $util.ProtocolError("missing required 'birth'", { instance: message });
            if (!message.hasOwnProperty("remark"))
                throw $util.ProtocolError("missing required 'remark'", { instance: message });
            return message;
        };

        /**
         * Decodes an AccountMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.AccountMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.AccountMsg} AccountMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountMsg message.
         * @function verify
         * @memberof protocol.AccountMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.nickName))
                return "nickName: string expected";
            if (!$util.isString(message.birth))
                return "birth: string expected";
            if (!$util.isString(message.remark))
                return "remark: string expected";
            return null;
        };

        /**
         * Creates an AccountMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.AccountMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.AccountMsg} AccountMsg
         */
        AccountMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.AccountMsg)
                return object;
            var message = new $root.protocol.AccountMsg();
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.birth != null)
                message.birth = String(object.birth);
            if (object.remark != null)
                message.remark = String(object.remark);
            return message;
        };

        /**
         * Creates a plain object from an AccountMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.AccountMsg
         * @static
         * @param {protocol.AccountMsg} message AccountMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.nickName = "";
                object.birth = "";
                object.remark = "";
            }
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.birth != null && message.hasOwnProperty("birth"))
                object.birth = message.birth;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            return object;
        };

        /**
         * Converts this AccountMsg to JSON.
         * @function toJSON
         * @memberof protocol.AccountMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountMsg;
    })();

    protocol.AccountInfoMsg = (function() {

        /**
         * Properties of an AccountInfoMsg.
         * @memberof protocol
         * @interface IAccountInfoMsg
         * @property {string} nickName AccountInfoMsg nickName
         * @property {number} playerId AccountInfoMsg playerId
         * @property {string} headPic AccountInfoMsg headPic
         * @property {number} missionId AccountInfoMsg missionId
         */

        /**
         * Constructs a new AccountInfoMsg.
         * @memberof protocol
         * @classdesc Represents an AccountInfoMsg.
         * @implements IAccountInfoMsg
         * @constructor
         * @param {protocol.IAccountInfoMsg=} [properties] Properties to set
         */
        function AccountInfoMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountInfoMsg nickName.
         * @member {string} nickName
         * @memberof protocol.AccountInfoMsg
         * @instance
         */
        AccountInfoMsg.prototype.nickName = "";

        /**
         * AccountInfoMsg playerId.
         * @member {number} playerId
         * @memberof protocol.AccountInfoMsg
         * @instance
         */
        AccountInfoMsg.prototype.playerId = 0;

        /**
         * AccountInfoMsg headPic.
         * @member {string} headPic
         * @memberof protocol.AccountInfoMsg
         * @instance
         */
        AccountInfoMsg.prototype.headPic = "";

        /**
         * AccountInfoMsg missionId.
         * @member {number} missionId
         * @memberof protocol.AccountInfoMsg
         * @instance
         */
        AccountInfoMsg.prototype.missionId = 0;

        /**
         * Creates a new AccountInfoMsg instance using the specified properties.
         * @function create
         * @memberof protocol.AccountInfoMsg
         * @static
         * @param {protocol.IAccountInfoMsg=} [properties] Properties to set
         * @returns {protocol.AccountInfoMsg} AccountInfoMsg instance
         */
        AccountInfoMsg.create = function create(properties) {
            return new AccountInfoMsg(properties);
        };

        /**
         * Encodes the specified AccountInfoMsg message. Does not implicitly {@link protocol.AccountInfoMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.AccountInfoMsg
         * @static
         * @param {protocol.IAccountInfoMsg} message AccountInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountInfoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickName);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playerId);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.headPic);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.missionId);
            return writer;
        };

        /**
         * Encodes the specified AccountInfoMsg message, length delimited. Does not implicitly {@link protocol.AccountInfoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.AccountInfoMsg
         * @static
         * @param {protocol.IAccountInfoMsg} message AccountInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountInfoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountInfoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.AccountInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.AccountInfoMsg} AccountInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountInfoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.AccountInfoMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nickName = reader.string();
                    break;
                case 2:
                    message.playerId = reader.int32();
                    break;
                case 3:
                    message.headPic = reader.string();
                    break;
                case 4:
                    message.missionId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("nickName"))
                throw $util.ProtocolError("missing required 'nickName'", { instance: message });
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            if (!message.hasOwnProperty("headPic"))
                throw $util.ProtocolError("missing required 'headPic'", { instance: message });
            if (!message.hasOwnProperty("missionId"))
                throw $util.ProtocolError("missing required 'missionId'", { instance: message });
            return message;
        };

        /**
         * Decodes an AccountInfoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.AccountInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.AccountInfoMsg} AccountInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountInfoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountInfoMsg message.
         * @function verify
         * @memberof protocol.AccountInfoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountInfoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.nickName))
                return "nickName: string expected";
            if (!$util.isInteger(message.playerId))
                return "playerId: integer expected";
            if (!$util.isString(message.headPic))
                return "headPic: string expected";
            if (!$util.isInteger(message.missionId))
                return "missionId: integer expected";
            return null;
        };

        /**
         * Creates an AccountInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.AccountInfoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.AccountInfoMsg} AccountInfoMsg
         */
        AccountInfoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.AccountInfoMsg)
                return object;
            var message = new $root.protocol.AccountInfoMsg();
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            if (object.headPic != null)
                message.headPic = String(object.headPic);
            if (object.missionId != null)
                message.missionId = object.missionId | 0;
            return message;
        };

        /**
         * Creates a plain object from an AccountInfoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.AccountInfoMsg
         * @static
         * @param {protocol.AccountInfoMsg} message AccountInfoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountInfoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.nickName = "";
                object.playerId = 0;
                object.headPic = "";
                object.missionId = 0;
            }
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.headPic != null && message.hasOwnProperty("headPic"))
                object.headPic = message.headPic;
            if (message.missionId != null && message.hasOwnProperty("missionId"))
                object.missionId = message.missionId;
            return object;
        };

        /**
         * Converts this AccountInfoMsg to JSON.
         * @function toJSON
         * @memberof protocol.AccountInfoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountInfoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountInfoMsg;
    })();

    protocol.JoinThemList = (function() {

        /**
         * Properties of a JoinThemList.
         * @memberof protocol
         * @interface IJoinThemList
         * @property {Array.<protocol.IAccountInfoMsg>|null} [list] JoinThemList list
         */

        /**
         * Constructs a new JoinThemList.
         * @memberof protocol
         * @classdesc Represents a JoinThemList.
         * @implements IJoinThemList
         * @constructor
         * @param {protocol.IJoinThemList=} [properties] Properties to set
         */
        function JoinThemList(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinThemList list.
         * @member {Array.<protocol.IAccountInfoMsg>} list
         * @memberof protocol.JoinThemList
         * @instance
         */
        JoinThemList.prototype.list = $util.emptyArray;

        /**
         * Creates a new JoinThemList instance using the specified properties.
         * @function create
         * @memberof protocol.JoinThemList
         * @static
         * @param {protocol.IJoinThemList=} [properties] Properties to set
         * @returns {protocol.JoinThemList} JoinThemList instance
         */
        JoinThemList.create = function create(properties) {
            return new JoinThemList(properties);
        };

        /**
         * Encodes the specified JoinThemList message. Does not implicitly {@link protocol.JoinThemList.verify|verify} messages.
         * @function encode
         * @memberof protocol.JoinThemList
         * @static
         * @param {protocol.IJoinThemList} message JoinThemList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinThemList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.AccountInfoMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JoinThemList message, length delimited. Does not implicitly {@link protocol.JoinThemList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.JoinThemList
         * @static
         * @param {protocol.IJoinThemList} message JoinThemList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinThemList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinThemList message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.JoinThemList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.JoinThemList} JoinThemList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinThemList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.JoinThemList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.AccountInfoMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinThemList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.JoinThemList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.JoinThemList} JoinThemList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinThemList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinThemList message.
         * @function verify
         * @memberof protocol.JoinThemList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinThemList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.AccountInfoMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JoinThemList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.JoinThemList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.JoinThemList} JoinThemList
         */
        JoinThemList.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.JoinThemList)
                return object;
            var message = new $root.protocol.JoinThemList();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.JoinThemList.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.JoinThemList.list: object expected");
                    message.list[i] = $root.protocol.AccountInfoMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JoinThemList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.JoinThemList
         * @static
         * @param {protocol.JoinThemList} message JoinThemList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinThemList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.AccountInfoMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this JoinThemList to JSON.
         * @function toJSON
         * @memberof protocol.JoinThemList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinThemList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinThemList;
    })();

    protocol.TaskUpdateMsg = (function() {

        /**
         * Properties of a TaskUpdateMsg.
         * @memberof protocol
         * @interface ITaskUpdateMsg
         * @property {Array.<protocol.ITaskDataMsg>|null} [taskDataList] TaskUpdateMsg taskDataList
         */

        /**
         * Constructs a new TaskUpdateMsg.
         * @memberof protocol
         * @classdesc Represents a TaskUpdateMsg.
         * @implements ITaskUpdateMsg
         * @constructor
         * @param {protocol.ITaskUpdateMsg=} [properties] Properties to set
         */
        function TaskUpdateMsg(properties) {
            this.taskDataList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TaskUpdateMsg taskDataList.
         * @member {Array.<protocol.ITaskDataMsg>} taskDataList
         * @memberof protocol.TaskUpdateMsg
         * @instance
         */
        TaskUpdateMsg.prototype.taskDataList = $util.emptyArray;

        /**
         * Creates a new TaskUpdateMsg instance using the specified properties.
         * @function create
         * @memberof protocol.TaskUpdateMsg
         * @static
         * @param {protocol.ITaskUpdateMsg=} [properties] Properties to set
         * @returns {protocol.TaskUpdateMsg} TaskUpdateMsg instance
         */
        TaskUpdateMsg.create = function create(properties) {
            return new TaskUpdateMsg(properties);
        };

        /**
         * Encodes the specified TaskUpdateMsg message. Does not implicitly {@link protocol.TaskUpdateMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.TaskUpdateMsg
         * @static
         * @param {protocol.ITaskUpdateMsg} message TaskUpdateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskUpdateMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.taskDataList != null && message.taskDataList.length)
                for (var i = 0; i < message.taskDataList.length; ++i)
                    $root.protocol.TaskDataMsg.encode(message.taskDataList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TaskUpdateMsg message, length delimited. Does not implicitly {@link protocol.TaskUpdateMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TaskUpdateMsg
         * @static
         * @param {protocol.ITaskUpdateMsg} message TaskUpdateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskUpdateMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TaskUpdateMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TaskUpdateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TaskUpdateMsg} TaskUpdateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskUpdateMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TaskUpdateMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.taskDataList && message.taskDataList.length))
                        message.taskDataList = [];
                    message.taskDataList.push($root.protocol.TaskDataMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TaskUpdateMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TaskUpdateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TaskUpdateMsg} TaskUpdateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskUpdateMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TaskUpdateMsg message.
         * @function verify
         * @memberof protocol.TaskUpdateMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TaskUpdateMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.taskDataList != null && message.hasOwnProperty("taskDataList")) {
                if (!Array.isArray(message.taskDataList))
                    return "taskDataList: array expected";
                for (var i = 0; i < message.taskDataList.length; ++i) {
                    var error = $root.protocol.TaskDataMsg.verify(message.taskDataList[i]);
                    if (error)
                        return "taskDataList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TaskUpdateMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TaskUpdateMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TaskUpdateMsg} TaskUpdateMsg
         */
        TaskUpdateMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TaskUpdateMsg)
                return object;
            var message = new $root.protocol.TaskUpdateMsg();
            if (object.taskDataList) {
                if (!Array.isArray(object.taskDataList))
                    throw TypeError(".protocol.TaskUpdateMsg.taskDataList: array expected");
                message.taskDataList = [];
                for (var i = 0; i < object.taskDataList.length; ++i) {
                    if (typeof object.taskDataList[i] !== "object")
                        throw TypeError(".protocol.TaskUpdateMsg.taskDataList: object expected");
                    message.taskDataList[i] = $root.protocol.TaskDataMsg.fromObject(object.taskDataList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TaskUpdateMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TaskUpdateMsg
         * @static
         * @param {protocol.TaskUpdateMsg} message TaskUpdateMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TaskUpdateMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.taskDataList = [];
            if (message.taskDataList && message.taskDataList.length) {
                object.taskDataList = [];
                for (var j = 0; j < message.taskDataList.length; ++j)
                    object.taskDataList[j] = $root.protocol.TaskDataMsg.toObject(message.taskDataList[j], options);
            }
            return object;
        };

        /**
         * Converts this TaskUpdateMsg to JSON.
         * @function toJSON
         * @memberof protocol.TaskUpdateMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TaskUpdateMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TaskUpdateMsg;
    })();

    protocol.TaskDataMsg = (function() {

        /**
         * Properties of a TaskDataMsg.
         * @memberof protocol
         * @interface ITaskDataMsg
         * @property {number} taskId TaskDataMsg taskId
         * @property {boolean} isComplete TaskDataMsg isComplete
         * @property {string} process TaskDataMsg process
         */

        /**
         * Constructs a new TaskDataMsg.
         * @memberof protocol
         * @classdesc Represents a TaskDataMsg.
         * @implements ITaskDataMsg
         * @constructor
         * @param {protocol.ITaskDataMsg=} [properties] Properties to set
         */
        function TaskDataMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TaskDataMsg taskId.
         * @member {number} taskId
         * @memberof protocol.TaskDataMsg
         * @instance
         */
        TaskDataMsg.prototype.taskId = 0;

        /**
         * TaskDataMsg isComplete.
         * @member {boolean} isComplete
         * @memberof protocol.TaskDataMsg
         * @instance
         */
        TaskDataMsg.prototype.isComplete = false;

        /**
         * TaskDataMsg process.
         * @member {string} process
         * @memberof protocol.TaskDataMsg
         * @instance
         */
        TaskDataMsg.prototype.process = "";

        /**
         * Creates a new TaskDataMsg instance using the specified properties.
         * @function create
         * @memberof protocol.TaskDataMsg
         * @static
         * @param {protocol.ITaskDataMsg=} [properties] Properties to set
         * @returns {protocol.TaskDataMsg} TaskDataMsg instance
         */
        TaskDataMsg.create = function create(properties) {
            return new TaskDataMsg(properties);
        };

        /**
         * Encodes the specified TaskDataMsg message. Does not implicitly {@link protocol.TaskDataMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.TaskDataMsg
         * @static
         * @param {protocol.ITaskDataMsg} message TaskDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskDataMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.taskId);
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isComplete);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.process);
            return writer;
        };

        /**
         * Encodes the specified TaskDataMsg message, length delimited. Does not implicitly {@link protocol.TaskDataMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TaskDataMsg
         * @static
         * @param {protocol.ITaskDataMsg} message TaskDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskDataMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TaskDataMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TaskDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TaskDataMsg} TaskDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskDataMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TaskDataMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.taskId = reader.int32();
                    break;
                case 2:
                    message.isComplete = reader.bool();
                    break;
                case 3:
                    message.process = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("taskId"))
                throw $util.ProtocolError("missing required 'taskId'", { instance: message });
            if (!message.hasOwnProperty("isComplete"))
                throw $util.ProtocolError("missing required 'isComplete'", { instance: message });
            if (!message.hasOwnProperty("process"))
                throw $util.ProtocolError("missing required 'process'", { instance: message });
            return message;
        };

        /**
         * Decodes a TaskDataMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TaskDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TaskDataMsg} TaskDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskDataMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TaskDataMsg message.
         * @function verify
         * @memberof protocol.TaskDataMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TaskDataMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.taskId))
                return "taskId: integer expected";
            if (typeof message.isComplete !== "boolean")
                return "isComplete: boolean expected";
            if (!$util.isString(message.process))
                return "process: string expected";
            return null;
        };

        /**
         * Creates a TaskDataMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TaskDataMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TaskDataMsg} TaskDataMsg
         */
        TaskDataMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TaskDataMsg)
                return object;
            var message = new $root.protocol.TaskDataMsg();
            if (object.taskId != null)
                message.taskId = object.taskId | 0;
            if (object.isComplete != null)
                message.isComplete = Boolean(object.isComplete);
            if (object.process != null)
                message.process = String(object.process);
            return message;
        };

        /**
         * Creates a plain object from a TaskDataMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TaskDataMsg
         * @static
         * @param {protocol.TaskDataMsg} message TaskDataMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TaskDataMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.taskId = 0;
                object.isComplete = false;
                object.process = "";
            }
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                object.taskId = message.taskId;
            if (message.isComplete != null && message.hasOwnProperty("isComplete"))
                object.isComplete = message.isComplete;
            if (message.process != null && message.hasOwnProperty("process"))
                object.process = message.process;
            return object;
        };

        /**
         * Converts this TaskDataMsg to JSON.
         * @function toJSON
         * @memberof protocol.TaskDataMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TaskDataMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TaskDataMsg;
    })();

    return protocol;
})();