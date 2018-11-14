type Long = protobuf.Long;

/** Namespace protocol. */
declare namespace protocol {

    /** Properties of an ActivityOpenListMsg. */
    interface IActivityOpenListMsg {

        /** ActivityOpenListMsg list */
        list?: (protocol.IActivityOpenMsg[]|null);

        /** ActivityOpenListMsg loginDayNum */
        loginDayNum: number;
    }

    /** Represents an ActivityOpenListMsg. */
    class ActivityOpenListMsg implements IActivityOpenListMsg {

        /**
         * Constructs a new ActivityOpenListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IActivityOpenListMsg);

        /** ActivityOpenListMsg list. */
        public list: protocol.IActivityOpenMsg[];

        /** ActivityOpenListMsg loginDayNum. */
        public loginDayNum: number;

        /**
         * Creates a new ActivityOpenListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActivityOpenListMsg instance
         */
        public static create(properties?: protocol.IActivityOpenListMsg): protocol.ActivityOpenListMsg;

        /**
         * Encodes the specified ActivityOpenListMsg message. Does not implicitly {@link protocol.ActivityOpenListMsg.verify|verify} messages.
         * @param message ActivityOpenListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IActivityOpenListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ActivityOpenListMsg message, length delimited. Does not implicitly {@link protocol.ActivityOpenListMsg.verify|verify} messages.
         * @param message ActivityOpenListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IActivityOpenListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ActivityOpenListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityOpenListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ActivityOpenListMsg;

        /**
         * Decodes an ActivityOpenListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActivityOpenListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ActivityOpenListMsg;

        /**
         * Verifies an ActivityOpenListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActivityOpenListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityOpenListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.ActivityOpenListMsg;

        /**
         * Creates a plain object from an ActivityOpenListMsg message. Also converts values to other types if specified.
         * @param message ActivityOpenListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ActivityOpenListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityOpenListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityOpenMsg. */
    interface IActivityOpenMsg {

        /** ActivityOpenMsg activityId */
        activityId: number;

        /** ActivityOpenMsg endTime */
        endTime: string;
    }

    /** Represents an ActivityOpenMsg. */
    class ActivityOpenMsg implements IActivityOpenMsg {

        /**
         * Constructs a new ActivityOpenMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IActivityOpenMsg);

        /** ActivityOpenMsg activityId. */
        public activityId: number;

        /** ActivityOpenMsg endTime. */
        public endTime: string;

        /**
         * Creates a new ActivityOpenMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActivityOpenMsg instance
         */
        public static create(properties?: protocol.IActivityOpenMsg): protocol.ActivityOpenMsg;

        /**
         * Encodes the specified ActivityOpenMsg message. Does not implicitly {@link protocol.ActivityOpenMsg.verify|verify} messages.
         * @param message ActivityOpenMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IActivityOpenMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ActivityOpenMsg message, length delimited. Does not implicitly {@link protocol.ActivityOpenMsg.verify|verify} messages.
         * @param message ActivityOpenMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IActivityOpenMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ActivityOpenMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityOpenMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ActivityOpenMsg;

        /**
         * Decodes an ActivityOpenMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActivityOpenMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ActivityOpenMsg;

        /**
         * Verifies an ActivityOpenMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActivityOpenMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityOpenMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.ActivityOpenMsg;

        /**
         * Creates a plain object from an ActivityOpenMsg message. Also converts values to other types if specified.
         * @param message ActivityOpenMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ActivityOpenMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityOpenMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityStateListMsg. */
    interface IActivityStateListMsg {

        /** ActivityStateListMsg list */
        list?: (protocol.IActivityStateMsg[]|null);
    }

    /** Represents an ActivityStateListMsg. */
    class ActivityStateListMsg implements IActivityStateListMsg {

        /**
         * Constructs a new ActivityStateListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IActivityStateListMsg);

        /** ActivityStateListMsg list. */
        public list: protocol.IActivityStateMsg[];

        /**
         * Creates a new ActivityStateListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActivityStateListMsg instance
         */
        public static create(properties?: protocol.IActivityStateListMsg): protocol.ActivityStateListMsg;

        /**
         * Encodes the specified ActivityStateListMsg message. Does not implicitly {@link protocol.ActivityStateListMsg.verify|verify} messages.
         * @param message ActivityStateListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IActivityStateListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ActivityStateListMsg message, length delimited. Does not implicitly {@link protocol.ActivityStateListMsg.verify|verify} messages.
         * @param message ActivityStateListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IActivityStateListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ActivityStateListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityStateListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ActivityStateListMsg;

        /**
         * Decodes an ActivityStateListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActivityStateListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ActivityStateListMsg;

        /**
         * Verifies an ActivityStateListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActivityStateListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityStateListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.ActivityStateListMsg;

        /**
         * Creates a plain object from an ActivityStateListMsg message. Also converts values to other types if specified.
         * @param message ActivityStateListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ActivityStateListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityStateListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityStateMsg. */
    interface IActivityStateMsg {

        /** ActivityStateMsg activityId */
        activityId: number;

        /** ActivityStateMsg state */
        state: number;
    }

    /** Represents an ActivityStateMsg. */
    class ActivityStateMsg implements IActivityStateMsg {

        /**
         * Constructs a new ActivityStateMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IActivityStateMsg);

        /** ActivityStateMsg activityId. */
        public activityId: number;

        /** ActivityStateMsg state. */
        public state: number;

        /**
         * Creates a new ActivityStateMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActivityStateMsg instance
         */
        public static create(properties?: protocol.IActivityStateMsg): protocol.ActivityStateMsg;

        /**
         * Encodes the specified ActivityStateMsg message. Does not implicitly {@link protocol.ActivityStateMsg.verify|verify} messages.
         * @param message ActivityStateMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IActivityStateMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ActivityStateMsg message, length delimited. Does not implicitly {@link protocol.ActivityStateMsg.verify|verify} messages.
         * @param message ActivityStateMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IActivityStateMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ActivityStateMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityStateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ActivityStateMsg;

        /**
         * Decodes an ActivityStateMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActivityStateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ActivityStateMsg;

        /**
         * Verifies an ActivityStateMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActivityStateMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityStateMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.ActivityStateMsg;

        /**
         * Creates a plain object from an ActivityStateMsg message. Also converts values to other types if specified.
         * @param message ActivityStateMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ActivityStateMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityStateMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OpenServerRankMsg. */
    interface IOpenServerRankMsg {

        /** OpenServerRankMsg list */
        list?: (protocol.ITopUserMsg[]|null);

        /** OpenServerRankMsg awardTime */
        awardTime: string;

        /** OpenServerRankMsg currentRank */
        currentRank: number;

        /** OpenServerRankMsg differMisiionNum */
        differMisiionNum: number;
    }

    /** Represents an OpenServerRankMsg. */
    class OpenServerRankMsg implements IOpenServerRankMsg {

        /**
         * Constructs a new OpenServerRankMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IOpenServerRankMsg);

        /** OpenServerRankMsg list. */
        public list: protocol.ITopUserMsg[];

        /** OpenServerRankMsg awardTime. */
        public awardTime: string;

        /** OpenServerRankMsg currentRank. */
        public currentRank: number;

        /** OpenServerRankMsg differMisiionNum. */
        public differMisiionNum: number;

        /**
         * Creates a new OpenServerRankMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OpenServerRankMsg instance
         */
        public static create(properties?: protocol.IOpenServerRankMsg): protocol.OpenServerRankMsg;

        /**
         * Encodes the specified OpenServerRankMsg message. Does not implicitly {@link protocol.OpenServerRankMsg.verify|verify} messages.
         * @param message OpenServerRankMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IOpenServerRankMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OpenServerRankMsg message, length delimited. Does not implicitly {@link protocol.OpenServerRankMsg.verify|verify} messages.
         * @param message OpenServerRankMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IOpenServerRankMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an OpenServerRankMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OpenServerRankMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.OpenServerRankMsg;

        /**
         * Decodes an OpenServerRankMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OpenServerRankMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.OpenServerRankMsg;

        /**
         * Verifies an OpenServerRankMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OpenServerRankMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OpenServerRankMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.OpenServerRankMsg;

        /**
         * Creates a plain object from an OpenServerRankMsg message. Also converts values to other types if specified.
         * @param message OpenServerRankMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.OpenServerRankMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OpenServerRankMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TopUserMsg. */
    interface ITopUserMsg {

        /** TopUserMsg playerId */
        playerId?: (number|null);

        /** TopUserMsg nickName */
        nickName: string;

        /** TopUserMsg headPic */
        headPic: string;

        /** TopUserMsg missionMaxNum */
        missionMaxNum?: (number|null);

        /** TopUserMsg cardLevel */
        cardLevel?: (number|null);

        /** TopUserMsg rank */
        rank?: (number|null);
    }

    /** Represents a TopUserMsg. */
    class TopUserMsg implements ITopUserMsg {

        /**
         * Constructs a new TopUserMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITopUserMsg);

        /** TopUserMsg playerId. */
        public playerId: number;

        /** TopUserMsg nickName. */
        public nickName: string;

        /** TopUserMsg headPic. */
        public headPic: string;

        /** TopUserMsg missionMaxNum. */
        public missionMaxNum: number;

        /** TopUserMsg cardLevel. */
        public cardLevel: number;

        /** TopUserMsg rank. */
        public rank: number;

        /**
         * Creates a new TopUserMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TopUserMsg instance
         */
        public static create(properties?: protocol.ITopUserMsg): protocol.TopUserMsg;

        /**
         * Encodes the specified TopUserMsg message. Does not implicitly {@link protocol.TopUserMsg.verify|verify} messages.
         * @param message TopUserMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITopUserMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TopUserMsg message, length delimited. Does not implicitly {@link protocol.TopUserMsg.verify|verify} messages.
         * @param message TopUserMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITopUserMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TopUserMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TopUserMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.TopUserMsg;

        /**
         * Decodes a TopUserMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TopUserMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.TopUserMsg;

        /**
         * Verifies a TopUserMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TopUserMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TopUserMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.TopUserMsg;

        /**
         * Creates a plain object from a TopUserMsg message. Also converts values to other types if specified.
         * @param message TopUserMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TopUserMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TopUserMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ItemListMsg. */
    interface IItemListMsg {

        /** ItemListMsg itemList */
        itemList?: (protocol.IItemInfoMsg[]|null);
    }

    /** Represents an ItemListMsg. */
    class ItemListMsg implements IItemListMsg {

        /**
         * Constructs a new ItemListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IItemListMsg);

        /** ItemListMsg itemList. */
        public itemList: protocol.IItemInfoMsg[];

        /**
         * Creates a new ItemListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemListMsg instance
         */
        public static create(properties?: protocol.IItemListMsg): protocol.ItemListMsg;

        /**
         * Encodes the specified ItemListMsg message. Does not implicitly {@link protocol.ItemListMsg.verify|verify} messages.
         * @param message ItemListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IItemListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ItemListMsg message, length delimited. Does not implicitly {@link protocol.ItemListMsg.verify|verify} messages.
         * @param message ItemListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IItemListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ItemListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ItemListMsg;

        /**
         * Decodes an ItemListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ItemListMsg;

        /**
         * Verifies an ItemListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.ItemListMsg;

        /**
         * Creates a plain object from an ItemListMsg message. Also converts values to other types if specified.
         * @param message ItemListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ItemListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ItemInfoMsg. */
    interface IItemInfoMsg {

        /** ItemInfoMsg itemId */
        itemId: number;

        /** ItemInfoMsg num */
        num: number;
    }

    /** Represents an ItemInfoMsg. */
    class ItemInfoMsg implements IItemInfoMsg {

        /**
         * Constructs a new ItemInfoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IItemInfoMsg);

        /** ItemInfoMsg itemId. */
        public itemId: number;

        /** ItemInfoMsg num. */
        public num: number;

        /**
         * Creates a new ItemInfoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemInfoMsg instance
         */
        public static create(properties?: protocol.IItemInfoMsg): protocol.ItemInfoMsg;

        /**
         * Encodes the specified ItemInfoMsg message. Does not implicitly {@link protocol.ItemInfoMsg.verify|verify} messages.
         * @param message ItemInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IItemInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ItemInfoMsg message, length delimited. Does not implicitly {@link protocol.ItemInfoMsg.verify|verify} messages.
         * @param message ItemInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IItemInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ItemInfoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ItemInfoMsg;

        /**
         * Decodes an ItemInfoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ItemInfoMsg;

        /**
         * Verifies an ItemInfoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemInfoMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.ItemInfoMsg;

        /**
         * Creates a plain object from an ItemInfoMsg message. Also converts values to other types if specified.
         * @param message ItemInfoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ItemInfoMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemInfoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ItemMsgCS. */
    interface IItemMsgCS {

        /** ItemMsgCS itemId */
        itemId: number;

        /** ItemMsgCS num */
        num: number;
    }

    /** Represents an ItemMsgCS. */
    class ItemMsgCS implements IItemMsgCS {

        /**
         * Constructs a new ItemMsgCS.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IItemMsgCS);

        /** ItemMsgCS itemId. */
        public itemId: number;

        /** ItemMsgCS num. */
        public num: number;

        /**
         * Creates a new ItemMsgCS instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemMsgCS instance
         */
        public static create(properties?: protocol.IItemMsgCS): protocol.ItemMsgCS;

        /**
         * Encodes the specified ItemMsgCS message. Does not implicitly {@link protocol.ItemMsgCS.verify|verify} messages.
         * @param message ItemMsgCS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IItemMsgCS, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ItemMsgCS message, length delimited. Does not implicitly {@link protocol.ItemMsgCS.verify|verify} messages.
         * @param message ItemMsgCS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IItemMsgCS, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ItemMsgCS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemMsgCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ItemMsgCS;

        /**
         * Decodes an ItemMsgCS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemMsgCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ItemMsgCS;

        /**
         * Verifies an ItemMsgCS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemMsgCS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemMsgCS
         */
        public static fromObject(object: { [k: string]: any }): protocol.ItemMsgCS;

        /**
         * Creates a plain object from an ItemMsgCS message. Also converts values to other types if specified.
         * @param message ItemMsgCS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ItemMsgCS, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemMsgCS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ItemMsgListCS. */
    interface IItemMsgListCS {

        /** ItemMsgListCS list */
        list?: (protocol.IItemMsgCS[]|null);
    }

    /** Represents an ItemMsgListCS. */
    class ItemMsgListCS implements IItemMsgListCS {

        /**
         * Constructs a new ItemMsgListCS.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IItemMsgListCS);

        /** ItemMsgListCS list. */
        public list: protocol.IItemMsgCS[];

        /**
         * Creates a new ItemMsgListCS instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemMsgListCS instance
         */
        public static create(properties?: protocol.IItemMsgListCS): protocol.ItemMsgListCS;

        /**
         * Encodes the specified ItemMsgListCS message. Does not implicitly {@link protocol.ItemMsgListCS.verify|verify} messages.
         * @param message ItemMsgListCS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IItemMsgListCS, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ItemMsgListCS message, length delimited. Does not implicitly {@link protocol.ItemMsgListCS.verify|verify} messages.
         * @param message ItemMsgListCS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IItemMsgListCS, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ItemMsgListCS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemMsgListCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ItemMsgListCS;

        /**
         * Decodes an ItemMsgListCS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemMsgListCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ItemMsgListCS;

        /**
         * Verifies an ItemMsgListCS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemMsgListCS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemMsgListCS
         */
        public static fromObject(object: { [k: string]: any }): protocol.ItemMsgListCS;

        /**
         * Creates a plain object from an ItemMsgListCS message. Also converts values to other types if specified.
         * @param message ItemMsgListCS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ItemMsgListCS, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemMsgListCS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ShopMsgCS. */
    interface IShopMsgCS {

        /** ShopMsgCS itemId */
        itemId: number;

        /** ShopMsgCS time */
        time?: (number|null);
    }

    /** Represents a ShopMsgCS. */
    class ShopMsgCS implements IShopMsgCS {

        /**
         * Constructs a new ShopMsgCS.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IShopMsgCS);

        /** ShopMsgCS itemId. */
        public itemId: number;

        /** ShopMsgCS time. */
        public time: number;

        /**
         * Creates a new ShopMsgCS instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ShopMsgCS instance
         */
        public static create(properties?: protocol.IShopMsgCS): protocol.ShopMsgCS;

        /**
         * Encodes the specified ShopMsgCS message. Does not implicitly {@link protocol.ShopMsgCS.verify|verify} messages.
         * @param message ShopMsgCS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IShopMsgCS, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ShopMsgCS message, length delimited. Does not implicitly {@link protocol.ShopMsgCS.verify|verify} messages.
         * @param message ShopMsgCS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IShopMsgCS, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ShopMsgCS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShopMsgCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ShopMsgCS;

        /**
         * Decodes a ShopMsgCS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ShopMsgCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ShopMsgCS;

        /**
         * Verifies a ShopMsgCS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ShopMsgCS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ShopMsgCS
         */
        public static fromObject(object: { [k: string]: any }): protocol.ShopMsgCS;

        /**
         * Creates a plain object from a ShopMsgCS message. Also converts values to other types if specified.
         * @param message ShopMsgCS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ShopMsgCS, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ShopMsgCS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CSChatProtoMsg. */
    interface ICSChatProtoMsg {

        /** CSChatProtoMsg type */
        type: number;

        /** CSChatProtoMsg content */
        content: string;

        /** CSChatProtoMsg contentType */
        contentType: protocol.ContentType;

        /** CSChatProtoMsg sendToPlayerId */
        sendToPlayerId?: (number|null);

        /** CSChatProtoMsg roomId */
        roomId?: (number|null);
    }

    /** Represents a CSChatProtoMsg. */
    class CSChatProtoMsg implements ICSChatProtoMsg {

        /**
         * Constructs a new CSChatProtoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ICSChatProtoMsg);

        /** CSChatProtoMsg type. */
        public type: number;

        /** CSChatProtoMsg content. */
        public content: string;

        /** CSChatProtoMsg contentType. */
        public contentType: protocol.ContentType;

        /** CSChatProtoMsg sendToPlayerId. */
        public sendToPlayerId: number;

        /** CSChatProtoMsg roomId. */
        public roomId: number;

        /**
         * Creates a new CSChatProtoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CSChatProtoMsg instance
         */
        public static create(properties?: protocol.ICSChatProtoMsg): protocol.CSChatProtoMsg;

        /**
         * Encodes the specified CSChatProtoMsg message. Does not implicitly {@link protocol.CSChatProtoMsg.verify|verify} messages.
         * @param message CSChatProtoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ICSChatProtoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CSChatProtoMsg message, length delimited. Does not implicitly {@link protocol.CSChatProtoMsg.verify|verify} messages.
         * @param message CSChatProtoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ICSChatProtoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CSChatProtoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CSChatProtoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.CSChatProtoMsg;

        /**
         * Decodes a CSChatProtoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CSChatProtoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.CSChatProtoMsg;

        /**
         * Verifies a CSChatProtoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CSChatProtoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CSChatProtoMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.CSChatProtoMsg;

        /**
         * Creates a plain object from a CSChatProtoMsg message. Also converts values to other types if specified.
         * @param message CSChatProtoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.CSChatProtoMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CSChatProtoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** ContentType enum. */
    enum ContentType {
        TEXT = 1,
        WORLD_BOSS = 2
    }

    /** Properties of a SCChatProtoMsg. */
    interface ISCChatProtoMsg {

        /** SCChatProtoMsg type */
        type: number;

        /** SCChatProtoMsg content */
        content: string;

        /** SCChatProtoMsg playerId */
        playerId: number;

        /** SCChatProtoMsg nickName */
        nickName: string;

        /** SCChatProtoMsg headPic */
        headPic: string;

        /** SCChatProtoMsg contentType */
        contentType: protocol.ContentType;

        /** SCChatProtoMsg sendToPlayerId */
        sendToPlayerId?: (number|null);

        /** SCChatProtoMsg roomId */
        roomId?: (number|null);
    }

    /** Represents a SCChatProtoMsg. */
    class SCChatProtoMsg implements ISCChatProtoMsg {

        /**
         * Constructs a new SCChatProtoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISCChatProtoMsg);

        /** SCChatProtoMsg type. */
        public type: number;

        /** SCChatProtoMsg content. */
        public content: string;

        /** SCChatProtoMsg playerId. */
        public playerId: number;

        /** SCChatProtoMsg nickName. */
        public nickName: string;

        /** SCChatProtoMsg headPic. */
        public headPic: string;

        /** SCChatProtoMsg contentType. */
        public contentType: protocol.ContentType;

        /** SCChatProtoMsg sendToPlayerId. */
        public sendToPlayerId: number;

        /** SCChatProtoMsg roomId. */
        public roomId: number;

        /**
         * Creates a new SCChatProtoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SCChatProtoMsg instance
         */
        public static create(properties?: protocol.ISCChatProtoMsg): protocol.SCChatProtoMsg;

        /**
         * Encodes the specified SCChatProtoMsg message. Does not implicitly {@link protocol.SCChatProtoMsg.verify|verify} messages.
         * @param message SCChatProtoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISCChatProtoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SCChatProtoMsg message, length delimited. Does not implicitly {@link protocol.SCChatProtoMsg.verify|verify} messages.
         * @param message SCChatProtoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISCChatProtoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SCChatProtoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SCChatProtoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.SCChatProtoMsg;

        /**
         * Decodes a SCChatProtoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SCChatProtoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.SCChatProtoMsg;

        /**
         * Verifies a SCChatProtoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SCChatProtoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SCChatProtoMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.SCChatProtoMsg;

        /**
         * Creates a plain object from a SCChatProtoMsg message. Also converts values to other types if specified.
         * @param message SCChatProtoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SCChatProtoMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SCChatProtoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WorldChatDefMsgList. */
    interface IWorldChatDefMsgList {

        /** WorldChatDefMsgList list */
        list?: (protocol.ISCChatProtoMsg[]|null);
    }

    /** Represents a WorldChatDefMsgList. */
    class WorldChatDefMsgList implements IWorldChatDefMsgList {

        /**
         * Constructs a new WorldChatDefMsgList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IWorldChatDefMsgList);

        /** WorldChatDefMsgList list. */
        public list: protocol.ISCChatProtoMsg[];

        /**
         * Creates a new WorldChatDefMsgList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WorldChatDefMsgList instance
         */
        public static create(properties?: protocol.IWorldChatDefMsgList): protocol.WorldChatDefMsgList;

        /**
         * Encodes the specified WorldChatDefMsgList message. Does not implicitly {@link protocol.WorldChatDefMsgList.verify|verify} messages.
         * @param message WorldChatDefMsgList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IWorldChatDefMsgList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified WorldChatDefMsgList message, length delimited. Does not implicitly {@link protocol.WorldChatDefMsgList.verify|verify} messages.
         * @param message WorldChatDefMsgList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IWorldChatDefMsgList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a WorldChatDefMsgList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WorldChatDefMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.WorldChatDefMsgList;

        /**
         * Decodes a WorldChatDefMsgList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WorldChatDefMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.WorldChatDefMsgList;

        /**
         * Verifies a WorldChatDefMsgList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WorldChatDefMsgList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WorldChatDefMsgList
         */
        public static fromObject(object: { [k: string]: any }): protocol.WorldChatDefMsgList;

        /**
         * Creates a plain object from a WorldChatDefMsgList message. Also converts values to other types if specified.
         * @param message WorldChatDefMsgList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.WorldChatDefMsgList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WorldChatDefMsgList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SystemNoticeMsg. */
    interface ISystemNoticeMsg {

        /** SystemNoticeMsg type */
        type: number;

        /** SystemNoticeMsg params */
        params?: (string[]|null);
    }

    /** Represents a SystemNoticeMsg. */
    class SystemNoticeMsg implements ISystemNoticeMsg {

        /**
         * Constructs a new SystemNoticeMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISystemNoticeMsg);

        /** SystemNoticeMsg type. */
        public type: number;

        /** SystemNoticeMsg params. */
        public params: string[];

        /**
         * Creates a new SystemNoticeMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SystemNoticeMsg instance
         */
        public static create(properties?: protocol.ISystemNoticeMsg): protocol.SystemNoticeMsg;

        /**
         * Encodes the specified SystemNoticeMsg message. Does not implicitly {@link protocol.SystemNoticeMsg.verify|verify} messages.
         * @param message SystemNoticeMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISystemNoticeMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SystemNoticeMsg message, length delimited. Does not implicitly {@link protocol.SystemNoticeMsg.verify|verify} messages.
         * @param message SystemNoticeMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISystemNoticeMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SystemNoticeMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SystemNoticeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.SystemNoticeMsg;

        /**
         * Decodes a SystemNoticeMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SystemNoticeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.SystemNoticeMsg;

        /**
         * Verifies a SystemNoticeMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SystemNoticeMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SystemNoticeMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.SystemNoticeMsg;

        /**
         * Creates a plain object from a SystemNoticeMsg message. Also converts values to other types if specified.
         * @param message SystemNoticeMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SystemNoticeMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SystemNoticeMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BarrageMsg. */
    interface IBarrageMsg {

        /** BarrageMsg playerId */
        playerId: number;

        /** BarrageMsg nickName */
        nickName: string;

        /** BarrageMsg headPic */
        headPic: string;

        /** BarrageMsg content */
        content: string;
    }

    /** Represents a BarrageMsg. */
    class BarrageMsg implements IBarrageMsg {

        /**
         * Constructs a new BarrageMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBarrageMsg);

        /** BarrageMsg playerId. */
        public playerId: number;

        /** BarrageMsg nickName. */
        public nickName: string;

        /** BarrageMsg headPic. */
        public headPic: string;

        /** BarrageMsg content. */
        public content: string;

        /**
         * Creates a new BarrageMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BarrageMsg instance
         */
        public static create(properties?: protocol.IBarrageMsg): protocol.BarrageMsg;

        /**
         * Encodes the specified BarrageMsg message. Does not implicitly {@link protocol.BarrageMsg.verify|verify} messages.
         * @param message BarrageMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBarrageMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BarrageMsg message, length delimited. Does not implicitly {@link protocol.BarrageMsg.verify|verify} messages.
         * @param message BarrageMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBarrageMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BarrageMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BarrageMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.BarrageMsg;

        /**
         * Decodes a BarrageMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BarrageMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.BarrageMsg;

        /**
         * Verifies a BarrageMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BarrageMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BarrageMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.BarrageMsg;

        /**
         * Creates a plain object from a BarrageMsg message. Also converts values to other types if specified.
         * @param message BarrageMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BarrageMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BarrageMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BarrageMsgList. */
    interface IBarrageMsgList {

        /** BarrageMsgList list */
        list?: (protocol.IBarrageMsg[]|null);
    }

    /** Represents a BarrageMsgList. */
    class BarrageMsgList implements IBarrageMsgList {

        /**
         * Constructs a new BarrageMsgList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBarrageMsgList);

        /** BarrageMsgList list. */
        public list: protocol.IBarrageMsg[];

        /**
         * Creates a new BarrageMsgList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BarrageMsgList instance
         */
        public static create(properties?: protocol.IBarrageMsgList): protocol.BarrageMsgList;

        /**
         * Encodes the specified BarrageMsgList message. Does not implicitly {@link protocol.BarrageMsgList.verify|verify} messages.
         * @param message BarrageMsgList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBarrageMsgList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BarrageMsgList message, length delimited. Does not implicitly {@link protocol.BarrageMsgList.verify|verify} messages.
         * @param message BarrageMsgList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBarrageMsgList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BarrageMsgList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BarrageMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.BarrageMsgList;

        /**
         * Decodes a BarrageMsgList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BarrageMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.BarrageMsgList;

        /**
         * Verifies a BarrageMsgList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BarrageMsgList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BarrageMsgList
         */
        public static fromObject(object: { [k: string]: any }): protocol.BarrageMsgList;

        /**
         * Creates a plain object from a BarrageMsgList message. Also converts values to other types if specified.
         * @param message BarrageMsgList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BarrageMsgList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BarrageMsgList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CardGameListMsg. */
    interface ICardGameListMsg {

        /** CardGameListMsg cardGameMsg */
        cardGameMsg?: (protocol.ICardGameMsg[]|null);
    }

    /** Represents a CardGameListMsg. */
    class CardGameListMsg implements ICardGameListMsg {

        /**
         * Constructs a new CardGameListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ICardGameListMsg);

        /** CardGameListMsg cardGameMsg. */
        public cardGameMsg: protocol.ICardGameMsg[];

        /**
         * Creates a new CardGameListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardGameListMsg instance
         */
        public static create(properties?: protocol.ICardGameListMsg): protocol.CardGameListMsg;

        /**
         * Encodes the specified CardGameListMsg message. Does not implicitly {@link protocol.CardGameListMsg.verify|verify} messages.
         * @param message CardGameListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ICardGameListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CardGameListMsg message, length delimited. Does not implicitly {@link protocol.CardGameListMsg.verify|verify} messages.
         * @param message CardGameListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ICardGameListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CardGameListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardGameListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.CardGameListMsg;

        /**
         * Decodes a CardGameListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardGameListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.CardGameListMsg;

        /**
         * Verifies a CardGameListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CardGameListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CardGameListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.CardGameListMsg;

        /**
         * Creates a plain object from a CardGameListMsg message. Also converts values to other types if specified.
         * @param message CardGameListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.CardGameListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CardGameListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CardGameMsg. */
    interface ICardGameMsg {

        /** CardGameMsg gameId */
        gameId: number;

        /** CardGameMsg name */
        name: string;

        /** CardGameMsg iconPath */
        iconPath: string;

        /** CardGameMsg totalNum */
        totalNum?: (number|null);
    }

    /** Represents a CardGameMsg. */
    class CardGameMsg implements ICardGameMsg {

        /**
         * Constructs a new CardGameMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ICardGameMsg);

        /** CardGameMsg gameId. */
        public gameId: number;

        /** CardGameMsg name. */
        public name: string;

        /** CardGameMsg iconPath. */
        public iconPath: string;

        /** CardGameMsg totalNum. */
        public totalNum: number;

        /**
         * Creates a new CardGameMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardGameMsg instance
         */
        public static create(properties?: protocol.ICardGameMsg): protocol.CardGameMsg;

        /**
         * Encodes the specified CardGameMsg message. Does not implicitly {@link protocol.CardGameMsg.verify|verify} messages.
         * @param message CardGameMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ICardGameMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CardGameMsg message, length delimited. Does not implicitly {@link protocol.CardGameMsg.verify|verify} messages.
         * @param message CardGameMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ICardGameMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CardGameMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardGameMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.CardGameMsg;

        /**
         * Decodes a CardGameMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardGameMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.CardGameMsg;

        /**
         * Verifies a CardGameMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CardGameMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CardGameMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.CardGameMsg;

        /**
         * Creates a plain object from a CardGameMsg message. Also converts values to other types if specified.
         * @param message CardGameMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.CardGameMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CardGameMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CommonMsg. */
    interface ICommonMsg {

        /** CommonMsg intPar1 */
        intPar1?: (number|null);

        /** CommonMsg intPar2 */
        intPar2?: (number|null);

        /** CommonMsg intPar3 */
        intPar3?: (number|null);

        /** CommonMsg strPar1 */
        strPar1?: (string|null);

        /** CommonMsg strPar2 */
        strPar2?: (string|null);

        /** CommonMsg strPar3 */
        strPar3?: (string|null);

        /** CommonMsg boolPar1 */
        boolPar1?: (boolean|null);

        /** CommonMsg boolPar2 */
        boolPar2?: (boolean|null);

        /** CommonMsg boolPar3 */
        boolPar3?: (boolean|null);

        /** CommonMsg longPar1 */
        longPar1?: (number|Long|null);

        /** CommonMsg longPar2 */
        longPar2?: (number|Long|null);

        /** CommonMsg longPar3 */
        longPar3?: (number|Long|null);

        /** CommonMsg longPar4 */
        longPar4?: (number|Long|null);

        /** CommonMsg floatPar1 */
        floatPar1?: (number|null);

        /** CommonMsg floatPar2 */
        floatPar2?: (number|null);

        /** CommonMsg floatPar3 */
        floatPar3?: (number|null);
    }

    /** Represents a CommonMsg. */
    class CommonMsg implements ICommonMsg {

        /**
         * Constructs a new CommonMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ICommonMsg);

        /** CommonMsg intPar1. */
        public intPar1: number;

        /** CommonMsg intPar2. */
        public intPar2: number;

        /** CommonMsg intPar3. */
        public intPar3: number;

        /** CommonMsg strPar1. */
        public strPar1: string;

        /** CommonMsg strPar2. */
        public strPar2: string;

        /** CommonMsg strPar3. */
        public strPar3: string;

        /** CommonMsg boolPar1. */
        public boolPar1: boolean;

        /** CommonMsg boolPar2. */
        public boolPar2: boolean;

        /** CommonMsg boolPar3. */
        public boolPar3: boolean;

        /** CommonMsg longPar1. */
        public longPar1: (number|Long);

        /** CommonMsg longPar2. */
        public longPar2: (number|Long);

        /** CommonMsg longPar3. */
        public longPar3: (number|Long);

        /** CommonMsg longPar4. */
        public longPar4: (number|Long);

        /** CommonMsg floatPar1. */
        public floatPar1: number;

        /** CommonMsg floatPar2. */
        public floatPar2: number;

        /** CommonMsg floatPar3. */
        public floatPar3: number;

        /**
         * Creates a new CommonMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommonMsg instance
         */
        public static create(properties?: protocol.ICommonMsg): protocol.CommonMsg;

        /**
         * Encodes the specified CommonMsg message. Does not implicitly {@link protocol.CommonMsg.verify|verify} messages.
         * @param message CommonMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ICommonMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CommonMsg message, length delimited. Does not implicitly {@link protocol.CommonMsg.verify|verify} messages.
         * @param message CommonMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ICommonMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CommonMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommonMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.CommonMsg;

        /**
         * Decodes a CommonMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommonMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.CommonMsg;

        /**
         * Verifies a CommonMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommonMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommonMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.CommonMsg;

        /**
         * Creates a plain object from a CommonMsg message. Also converts values to other types if specified.
         * @param message CommonMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.CommonMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommonMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FriendInfoListMsg. */
    interface IFriendInfoListMsg {

        /** FriendInfoListMsg list */
        list?: (protocol.IFriendInfoMsg[]|null);
    }

    /** Represents a FriendInfoListMsg. */
    class FriendInfoListMsg implements IFriendInfoListMsg {

        /**
         * Constructs a new FriendInfoListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IFriendInfoListMsg);

        /** FriendInfoListMsg list. */
        public list: protocol.IFriendInfoMsg[];

        /**
         * Creates a new FriendInfoListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendInfoListMsg instance
         */
        public static create(properties?: protocol.IFriendInfoListMsg): protocol.FriendInfoListMsg;

        /**
         * Encodes the specified FriendInfoListMsg message. Does not implicitly {@link protocol.FriendInfoListMsg.verify|verify} messages.
         * @param message FriendInfoListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IFriendInfoListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FriendInfoListMsg message, length delimited. Does not implicitly {@link protocol.FriendInfoListMsg.verify|verify} messages.
         * @param message FriendInfoListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IFriendInfoListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FriendInfoListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendInfoListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.FriendInfoListMsg;

        /**
         * Decodes a FriendInfoListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendInfoListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.FriendInfoListMsg;

        /**
         * Verifies a FriendInfoListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendInfoListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendInfoListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.FriendInfoListMsg;

        /**
         * Creates a plain object from a FriendInfoListMsg message. Also converts values to other types if specified.
         * @param message FriendInfoListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.FriendInfoListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendInfoListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FriendInfoMsg. */
    interface IFriendInfoMsg {

        /** FriendInfoMsg friendId */
        friendId: number;

        /** FriendInfoMsg nickName */
        nickName: string;

        /** FriendInfoMsg headPic */
        headPic: string;

        /** FriendInfoMsg distance */
        distance: number;

        /** FriendInfoMsg online */
        online: boolean;

        /** FriendInfoMsg sex */
        sex: number;

        /** FriendInfoMsg age */
        age: number;

        /** FriendInfoMsg constellation */
        constellation: string;

        /** FriendInfoMsg signature */
        signature: string;
    }

    /** Represents a FriendInfoMsg. */
    class FriendInfoMsg implements IFriendInfoMsg {

        /**
         * Constructs a new FriendInfoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IFriendInfoMsg);

        /** FriendInfoMsg friendId. */
        public friendId: number;

        /** FriendInfoMsg nickName. */
        public nickName: string;

        /** FriendInfoMsg headPic. */
        public headPic: string;

        /** FriendInfoMsg distance. */
        public distance: number;

        /** FriendInfoMsg online. */
        public online: boolean;

        /** FriendInfoMsg sex. */
        public sex: number;

        /** FriendInfoMsg age. */
        public age: number;

        /** FriendInfoMsg constellation. */
        public constellation: string;

        /** FriendInfoMsg signature. */
        public signature: string;

        /**
         * Creates a new FriendInfoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendInfoMsg instance
         */
        public static create(properties?: protocol.IFriendInfoMsg): protocol.FriendInfoMsg;

        /**
         * Encodes the specified FriendInfoMsg message. Does not implicitly {@link protocol.FriendInfoMsg.verify|verify} messages.
         * @param message FriendInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IFriendInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FriendInfoMsg message, length delimited. Does not implicitly {@link protocol.FriendInfoMsg.verify|verify} messages.
         * @param message FriendInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IFriendInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FriendInfoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.FriendInfoMsg;

        /**
         * Decodes a FriendInfoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.FriendInfoMsg;

        /**
         * Verifies a FriendInfoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendInfoMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.FriendInfoMsg;

        /**
         * Creates a plain object from a FriendInfoMsg message. Also converts values to other types if specified.
         * @param message FriendInfoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.FriendInfoMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendInfoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FriendRecentListMsg. */
    interface IFriendRecentListMsg {

        /** FriendRecentListMsg list */
        list?: (protocol.IFriendInfoMsg[]|null);
    }

    /** Represents a FriendRecentListMsg. */
    class FriendRecentListMsg implements IFriendRecentListMsg {

        /**
         * Constructs a new FriendRecentListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IFriendRecentListMsg);

        /** FriendRecentListMsg list. */
        public list: protocol.IFriendInfoMsg[];

        /**
         * Creates a new FriendRecentListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendRecentListMsg instance
         */
        public static create(properties?: protocol.IFriendRecentListMsg): protocol.FriendRecentListMsg;

        /**
         * Encodes the specified FriendRecentListMsg message. Does not implicitly {@link protocol.FriendRecentListMsg.verify|verify} messages.
         * @param message FriendRecentListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IFriendRecentListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FriendRecentListMsg message, length delimited. Does not implicitly {@link protocol.FriendRecentListMsg.verify|verify} messages.
         * @param message FriendRecentListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IFriendRecentListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FriendRecentListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendRecentListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.FriendRecentListMsg;

        /**
         * Decodes a FriendRecentListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendRecentListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.FriendRecentListMsg;

        /**
         * Verifies a FriendRecentListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendRecentListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendRecentListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.FriendRecentListMsg;

        /**
         * Creates a plain object from a FriendRecentListMsg message. Also converts values to other types if specified.
         * @param message FriendRecentListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.FriendRecentListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendRecentListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FriendNearbyListMsg. */
    interface IFriendNearbyListMsg {

        /** FriendNearbyListMsg list */
        list?: (protocol.IFriendInfoMsg[]|null);
    }

    /** Represents a FriendNearbyListMsg. */
    class FriendNearbyListMsg implements IFriendNearbyListMsg {

        /**
         * Constructs a new FriendNearbyListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IFriendNearbyListMsg);

        /** FriendNearbyListMsg list. */
        public list: protocol.IFriendInfoMsg[];

        /**
         * Creates a new FriendNearbyListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendNearbyListMsg instance
         */
        public static create(properties?: protocol.IFriendNearbyListMsg): protocol.FriendNearbyListMsg;

        /**
         * Encodes the specified FriendNearbyListMsg message. Does not implicitly {@link protocol.FriendNearbyListMsg.verify|verify} messages.
         * @param message FriendNearbyListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IFriendNearbyListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FriendNearbyListMsg message, length delimited. Does not implicitly {@link protocol.FriendNearbyListMsg.verify|verify} messages.
         * @param message FriendNearbyListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IFriendNearbyListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FriendNearbyListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendNearbyListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.FriendNearbyListMsg;

        /**
         * Decodes a FriendNearbyListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendNearbyListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.FriendNearbyListMsg;

        /**
         * Verifies a FriendNearbyListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendNearbyListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendNearbyListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.FriendNearbyListMsg;

        /**
         * Creates a plain object from a FriendNearbyListMsg message. Also converts values to other types if specified.
         * @param message FriendNearbyListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.FriendNearbyListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendNearbyListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OpenCardMsg. */
    interface IOpenCardMsg {

        /** OpenCardMsg openCardNum */
        openCardNum: number;

        /** OpenCardMsg index */
        index: number;

        /** OpenCardMsg x */
        x: number;

        /** OpenCardMsg y */
        y: number;
    }

    /** Represents an OpenCardMsg. */
    class OpenCardMsg implements IOpenCardMsg {

        /**
         * Constructs a new OpenCardMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IOpenCardMsg);

        /** OpenCardMsg openCardNum. */
        public openCardNum: number;

        /** OpenCardMsg index. */
        public index: number;

        /** OpenCardMsg x. */
        public x: number;

        /** OpenCardMsg y. */
        public y: number;

        /**
         * Creates a new OpenCardMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OpenCardMsg instance
         */
        public static create(properties?: protocol.IOpenCardMsg): protocol.OpenCardMsg;

        /**
         * Encodes the specified OpenCardMsg message. Does not implicitly {@link protocol.OpenCardMsg.verify|verify} messages.
         * @param message OpenCardMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IOpenCardMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OpenCardMsg message, length delimited. Does not implicitly {@link protocol.OpenCardMsg.verify|verify} messages.
         * @param message OpenCardMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IOpenCardMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an OpenCardMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OpenCardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.OpenCardMsg;

        /**
         * Decodes an OpenCardMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OpenCardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.OpenCardMsg;

        /**
         * Verifies an OpenCardMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OpenCardMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OpenCardMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.OpenCardMsg;

        /**
         * Creates a plain object from an OpenCardMsg message. Also converts values to other types if specified.
         * @param message OpenCardMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.OpenCardMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OpenCardMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OpenCardItemListMsg. */
    interface IOpenCardItemListMsg {

        /** OpenCardItemListMsg list */
        list?: (protocol.ICardItemMsg[]|null);

        /** OpenCardItemListMsg quality */
        quality: number;

        /** OpenCardItemListMsg open */
        open: boolean;
    }

    /** Represents an OpenCardItemListMsg. */
    class OpenCardItemListMsg implements IOpenCardItemListMsg {

        /**
         * Constructs a new OpenCardItemListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IOpenCardItemListMsg);

        /** OpenCardItemListMsg list. */
        public list: protocol.ICardItemMsg[];

        /** OpenCardItemListMsg quality. */
        public quality: number;

        /** OpenCardItemListMsg open. */
        public open: boolean;

        /**
         * Creates a new OpenCardItemListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OpenCardItemListMsg instance
         */
        public static create(properties?: protocol.IOpenCardItemListMsg): protocol.OpenCardItemListMsg;

        /**
         * Encodes the specified OpenCardItemListMsg message. Does not implicitly {@link protocol.OpenCardItemListMsg.verify|verify} messages.
         * @param message OpenCardItemListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IOpenCardItemListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OpenCardItemListMsg message, length delimited. Does not implicitly {@link protocol.OpenCardItemListMsg.verify|verify} messages.
         * @param message OpenCardItemListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IOpenCardItemListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an OpenCardItemListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OpenCardItemListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.OpenCardItemListMsg;

        /**
         * Decodes an OpenCardItemListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OpenCardItemListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.OpenCardItemListMsg;

        /**
         * Verifies an OpenCardItemListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OpenCardItemListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OpenCardItemListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.OpenCardItemListMsg;

        /**
         * Creates a plain object from an OpenCardItemListMsg message. Also converts values to other types if specified.
         * @param message OpenCardItemListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.OpenCardItemListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OpenCardItemListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CardItemMsg. */
    interface ICardItemMsg {

        /** CardItemMsg index */
        index: number;

        /** CardItemMsg itemId */
        itemId: number;

        /** CardItemMsg num */
        num: number;
    }

    /** Represents a CardItemMsg. */
    class CardItemMsg implements ICardItemMsg {

        /**
         * Constructs a new CardItemMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ICardItemMsg);

        /** CardItemMsg index. */
        public index: number;

        /** CardItemMsg itemId. */
        public itemId: number;

        /** CardItemMsg num. */
        public num: number;

        /**
         * Creates a new CardItemMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardItemMsg instance
         */
        public static create(properties?: protocol.ICardItemMsg): protocol.CardItemMsg;

        /**
         * Encodes the specified CardItemMsg message. Does not implicitly {@link protocol.CardItemMsg.verify|verify} messages.
         * @param message CardItemMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ICardItemMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CardItemMsg message, length delimited. Does not implicitly {@link protocol.CardItemMsg.verify|verify} messages.
         * @param message CardItemMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ICardItemMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CardItemMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardItemMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.CardItemMsg;

        /**
         * Decodes a CardItemMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardItemMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.CardItemMsg;

        /**
         * Verifies a CardItemMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CardItemMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CardItemMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.CardItemMsg;

        /**
         * Creates a plain object from a CardItemMsg message. Also converts values to other types if specified.
         * @param message CardItemMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.CardItemMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CardItemMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OpenCardNumMsg. */
    interface IOpenCardNumMsg {

        /** OpenCardNumMsg openCardDiamond */
        openCardDiamond: number;

        /** OpenCardNumMsg openCardDiamondNum */
        openCardDiamondNum: number;

        /** OpenCardNumMsg openCardAdNum */
        openCardAdNum: number;

        /** OpenCardNumMsg openCardNum */
        openCardNum: number;
    }

    /** Represents an OpenCardNumMsg. */
    class OpenCardNumMsg implements IOpenCardNumMsg {

        /**
         * Constructs a new OpenCardNumMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IOpenCardNumMsg);

        /** OpenCardNumMsg openCardDiamond. */
        public openCardDiamond: number;

        /** OpenCardNumMsg openCardDiamondNum. */
        public openCardDiamondNum: number;

        /** OpenCardNumMsg openCardAdNum. */
        public openCardAdNum: number;

        /** OpenCardNumMsg openCardNum. */
        public openCardNum: number;

        /**
         * Creates a new OpenCardNumMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OpenCardNumMsg instance
         */
        public static create(properties?: protocol.IOpenCardNumMsg): protocol.OpenCardNumMsg;

        /**
         * Encodes the specified OpenCardNumMsg message. Does not implicitly {@link protocol.OpenCardNumMsg.verify|verify} messages.
         * @param message OpenCardNumMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IOpenCardNumMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OpenCardNumMsg message, length delimited. Does not implicitly {@link protocol.OpenCardNumMsg.verify|verify} messages.
         * @param message OpenCardNumMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IOpenCardNumMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an OpenCardNumMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OpenCardNumMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.OpenCardNumMsg;

        /**
         * Decodes an OpenCardNumMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OpenCardNumMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.OpenCardNumMsg;

        /**
         * Verifies an OpenCardNumMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OpenCardNumMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OpenCardNumMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.OpenCardNumMsg;

        /**
         * Creates a plain object from an OpenCardNumMsg message. Also converts values to other types if specified.
         * @param message OpenCardNumMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.OpenCardNumMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OpenCardNumMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerWorldBossMsg. */
    interface IPlayerWorldBossMsg {

        /** PlayerWorldBossMsg roomId */
        roomId: number;

        /** PlayerWorldBossMsg missionId */
        missionId: number;

        /** PlayerWorldBossMsg power */
        power: number;

        /** PlayerWorldBossMsg isOver */
        isOver: boolean;

        /** PlayerWorldBossMsg overTime */
        overTime: string;

        /** PlayerWorldBossMsg powerTime */
        powerTime: string;

        /** PlayerWorldBossMsg bossLeftHp */
        bossLeftHp: number;
    }

    /** Represents a PlayerWorldBossMsg. */
    class PlayerWorldBossMsg implements IPlayerWorldBossMsg {

        /**
         * Constructs a new PlayerWorldBossMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IPlayerWorldBossMsg);

        /** PlayerWorldBossMsg roomId. */
        public roomId: number;

        /** PlayerWorldBossMsg missionId. */
        public missionId: number;

        /** PlayerWorldBossMsg power. */
        public power: number;

        /** PlayerWorldBossMsg isOver. */
        public isOver: boolean;

        /** PlayerWorldBossMsg overTime. */
        public overTime: string;

        /** PlayerWorldBossMsg powerTime. */
        public powerTime: string;

        /** PlayerWorldBossMsg bossLeftHp. */
        public bossLeftHp: number;

        /**
         * Creates a new PlayerWorldBossMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerWorldBossMsg instance
         */
        public static create(properties?: protocol.IPlayerWorldBossMsg): protocol.PlayerWorldBossMsg;

        /**
         * Encodes the specified PlayerWorldBossMsg message. Does not implicitly {@link protocol.PlayerWorldBossMsg.verify|verify} messages.
         * @param message PlayerWorldBossMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IPlayerWorldBossMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerWorldBossMsg message, length delimited. Does not implicitly {@link protocol.PlayerWorldBossMsg.verify|verify} messages.
         * @param message PlayerWorldBossMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IPlayerWorldBossMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerWorldBossMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerWorldBossMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.PlayerWorldBossMsg;

        /**
         * Decodes a PlayerWorldBossMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerWorldBossMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.PlayerWorldBossMsg;

        /**
         * Verifies a PlayerWorldBossMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerWorldBossMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerWorldBossMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.PlayerWorldBossMsg;

        /**
         * Creates a plain object from a PlayerWorldBossMsg message. Also converts values to other types if specified.
         * @param message PlayerWorldBossMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.PlayerWorldBossMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerWorldBossMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FriendWorldBossRankListMsg. */
    interface IFriendWorldBossRankListMsg {

        /** FriendWorldBossRankListMsg list */
        list?: (protocol.IFriendWorldBossRankMsg[]|null);
    }

    /** Represents a FriendWorldBossRankListMsg. */
    class FriendWorldBossRankListMsg implements IFriendWorldBossRankListMsg {

        /**
         * Constructs a new FriendWorldBossRankListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IFriendWorldBossRankListMsg);

        /** FriendWorldBossRankListMsg list. */
        public list: protocol.IFriendWorldBossRankMsg[];

        /**
         * Creates a new FriendWorldBossRankListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendWorldBossRankListMsg instance
         */
        public static create(properties?: protocol.IFriendWorldBossRankListMsg): protocol.FriendWorldBossRankListMsg;

        /**
         * Encodes the specified FriendWorldBossRankListMsg message. Does not implicitly {@link protocol.FriendWorldBossRankListMsg.verify|verify} messages.
         * @param message FriendWorldBossRankListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IFriendWorldBossRankListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FriendWorldBossRankListMsg message, length delimited. Does not implicitly {@link protocol.FriendWorldBossRankListMsg.verify|verify} messages.
         * @param message FriendWorldBossRankListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IFriendWorldBossRankListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FriendWorldBossRankListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendWorldBossRankListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.FriendWorldBossRankListMsg;

        /**
         * Decodes a FriendWorldBossRankListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendWorldBossRankListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.FriendWorldBossRankListMsg;

        /**
         * Verifies a FriendWorldBossRankListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendWorldBossRankListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendWorldBossRankListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.FriendWorldBossRankListMsg;

        /**
         * Creates a plain object from a FriendWorldBossRankListMsg message. Also converts values to other types if specified.
         * @param message FriendWorldBossRankListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.FriendWorldBossRankListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendWorldBossRankListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FriendWorldBossRankMsg. */
    interface IFriendWorldBossRankMsg {

        /** FriendWorldBossRankMsg playerId */
        playerId: number;

        /** FriendWorldBossRankMsg nickName */
        nickName: string;

        /** FriendWorldBossRankMsg headPic */
        headPic: string;

        /** FriendWorldBossRankMsg totalHurtHp */
        totalHurtHp: number;

        /** FriendWorldBossRankMsg singleHurtHpMax */
        singleHurtHpMax: number;
    }

    /** Represents a FriendWorldBossRankMsg. */
    class FriendWorldBossRankMsg implements IFriendWorldBossRankMsg {

        /**
         * Constructs a new FriendWorldBossRankMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IFriendWorldBossRankMsg);

        /** FriendWorldBossRankMsg playerId. */
        public playerId: number;

        /** FriendWorldBossRankMsg nickName. */
        public nickName: string;

        /** FriendWorldBossRankMsg headPic. */
        public headPic: string;

        /** FriendWorldBossRankMsg totalHurtHp. */
        public totalHurtHp: number;

        /** FriendWorldBossRankMsg singleHurtHpMax. */
        public singleHurtHpMax: number;

        /**
         * Creates a new FriendWorldBossRankMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendWorldBossRankMsg instance
         */
        public static create(properties?: protocol.IFriendWorldBossRankMsg): protocol.FriendWorldBossRankMsg;

        /**
         * Encodes the specified FriendWorldBossRankMsg message. Does not implicitly {@link protocol.FriendWorldBossRankMsg.verify|verify} messages.
         * @param message FriendWorldBossRankMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IFriendWorldBossRankMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FriendWorldBossRankMsg message, length delimited. Does not implicitly {@link protocol.FriendWorldBossRankMsg.verify|verify} messages.
         * @param message FriendWorldBossRankMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IFriendWorldBossRankMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FriendWorldBossRankMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendWorldBossRankMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.FriendWorldBossRankMsg;

        /**
         * Decodes a FriendWorldBossRankMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendWorldBossRankMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.FriendWorldBossRankMsg;

        /**
         * Verifies a FriendWorldBossRankMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendWorldBossRankMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendWorldBossRankMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.FriendWorldBossRankMsg;

        /**
         * Creates a plain object from a FriendWorldBossRankMsg message. Also converts values to other types if specified.
         * @param message FriendWorldBossRankMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.FriendWorldBossRankMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendWorldBossRankMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameOverReqMsg. */
    interface IGameOverReqMsg {

        /** GameOverReqMsg score */
        score: number;

        /** GameOverReqMsg cups */
        cups?: (number[]|null);

        /** GameOverReqMsg keys */
        keys?: (number[]|null);
    }

    /** Represents a GameOverReqMsg. */
    class GameOverReqMsg implements IGameOverReqMsg {

        /**
         * Constructs a new GameOverReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IGameOverReqMsg);

        /** GameOverReqMsg score. */
        public score: number;

        /** GameOverReqMsg cups. */
        public cups: number[];

        /** GameOverReqMsg keys. */
        public keys: number[];

        /**
         * Creates a new GameOverReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameOverReqMsg instance
         */
        public static create(properties?: protocol.IGameOverReqMsg): protocol.GameOverReqMsg;

        /**
         * Encodes the specified GameOverReqMsg message. Does not implicitly {@link protocol.GameOverReqMsg.verify|verify} messages.
         * @param message GameOverReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IGameOverReqMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GameOverReqMsg message, length delimited. Does not implicitly {@link protocol.GameOverReqMsg.verify|verify} messages.
         * @param message GameOverReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IGameOverReqMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameOverReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameOverReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.GameOverReqMsg;

        /**
         * Decodes a GameOverReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameOverReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.GameOverReqMsg;

        /**
         * Verifies a GameOverReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameOverReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameOverReqMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.GameOverReqMsg;

        /**
         * Creates a plain object from a GameOverReqMsg message. Also converts values to other types if specified.
         * @param message GameOverReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.GameOverReqMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameOverReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SingleGameOverMsg. */
    interface ISingleGameOverMsg {

        /** SingleGameOverMsg cup */
        cup: number;

        /** SingleGameOverMsg gold */
        gold: number;

        /** SingleGameOverMsg score */
        score: number;
    }

    /** Represents a SingleGameOverMsg. */
    class SingleGameOverMsg implements ISingleGameOverMsg {

        /**
         * Constructs a new SingleGameOverMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISingleGameOverMsg);

        /** SingleGameOverMsg cup. */
        public cup: number;

        /** SingleGameOverMsg gold. */
        public gold: number;

        /** SingleGameOverMsg score. */
        public score: number;

        /**
         * Creates a new SingleGameOverMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SingleGameOverMsg instance
         */
        public static create(properties?: protocol.ISingleGameOverMsg): protocol.SingleGameOverMsg;

        /**
         * Encodes the specified SingleGameOverMsg message. Does not implicitly {@link protocol.SingleGameOverMsg.verify|verify} messages.
         * @param message SingleGameOverMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISingleGameOverMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SingleGameOverMsg message, length delimited. Does not implicitly {@link protocol.SingleGameOverMsg.verify|verify} messages.
         * @param message SingleGameOverMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISingleGameOverMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SingleGameOverMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SingleGameOverMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.SingleGameOverMsg;

        /**
         * Decodes a SingleGameOverMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SingleGameOverMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.SingleGameOverMsg;

        /**
         * Verifies a SingleGameOverMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SingleGameOverMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SingleGameOverMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.SingleGameOverMsg;

        /**
         * Creates a plain object from a SingleGameOverMsg message. Also converts values to other types if specified.
         * @param message SingleGameOverMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SingleGameOverMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SingleGameOverMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OpenCardHeadPicMsg. */
    interface IOpenCardHeadPicMsg {

        /** OpenCardHeadPicMsg playerId */
        playerId: number;

        /** OpenCardHeadPicMsg headPic */
        headPic: string;

        /** OpenCardHeadPicMsg indexList */
        indexList: string;

        /** OpenCardHeadPicMsg dropId */
        dropId?: (number|null);
    }

    /** Represents an OpenCardHeadPicMsg. */
    class OpenCardHeadPicMsg implements IOpenCardHeadPicMsg {

        /**
         * Constructs a new OpenCardHeadPicMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IOpenCardHeadPicMsg);

        /** OpenCardHeadPicMsg playerId. */
        public playerId: number;

        /** OpenCardHeadPicMsg headPic. */
        public headPic: string;

        /** OpenCardHeadPicMsg indexList. */
        public indexList: string;

        /** OpenCardHeadPicMsg dropId. */
        public dropId: number;

        /**
         * Creates a new OpenCardHeadPicMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OpenCardHeadPicMsg instance
         */
        public static create(properties?: protocol.IOpenCardHeadPicMsg): protocol.OpenCardHeadPicMsg;

        /**
         * Encodes the specified OpenCardHeadPicMsg message. Does not implicitly {@link protocol.OpenCardHeadPicMsg.verify|verify} messages.
         * @param message OpenCardHeadPicMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IOpenCardHeadPicMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OpenCardHeadPicMsg message, length delimited. Does not implicitly {@link protocol.OpenCardHeadPicMsg.verify|verify} messages.
         * @param message OpenCardHeadPicMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IOpenCardHeadPicMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an OpenCardHeadPicMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OpenCardHeadPicMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.OpenCardHeadPicMsg;

        /**
         * Decodes an OpenCardHeadPicMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OpenCardHeadPicMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.OpenCardHeadPicMsg;

        /**
         * Verifies an OpenCardHeadPicMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OpenCardHeadPicMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OpenCardHeadPicMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.OpenCardHeadPicMsg;

        /**
         * Creates a plain object from an OpenCardHeadPicMsg message. Also converts values to other types if specified.
         * @param message OpenCardHeadPicMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.OpenCardHeadPicMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OpenCardHeadPicMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroListMsg. */
    interface IHeroListMsg {

        /** HeroListMsg list */
        list?: (protocol.IHeroMsg[]|null);
    }

    /** Represents a HeroListMsg. */
    class HeroListMsg implements IHeroListMsg {

        /**
         * Constructs a new HeroListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IHeroListMsg);

        /** HeroListMsg list. */
        public list: protocol.IHeroMsg[];

        /**
         * Creates a new HeroListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroListMsg instance
         */
        public static create(properties?: protocol.IHeroListMsg): protocol.HeroListMsg;

        /**
         * Encodes the specified HeroListMsg message. Does not implicitly {@link protocol.HeroListMsg.verify|verify} messages.
         * @param message HeroListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IHeroListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HeroListMsg message, length delimited. Does not implicitly {@link protocol.HeroListMsg.verify|verify} messages.
         * @param message HeroListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IHeroListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.HeroListMsg;

        /**
         * Decodes a HeroListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.HeroListMsg;

        /**
         * Verifies a HeroListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.HeroListMsg;

        /**
         * Creates a plain object from a HeroListMsg message. Also converts values to other types if specified.
         * @param message HeroListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.HeroListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroMsg. */
    interface IHeroMsg {

        /** HeroMsg heroId */
        heroId: number;

        /** HeroMsg configId */
        configId: number;

        /** HeroMsg level */
        level: number;

        /** HeroMsg star */
        star: number;

        /** HeroMsg wingId */
        wingId?: (number|null);
    }

    /** Represents a HeroMsg. */
    class HeroMsg implements IHeroMsg {

        /**
         * Constructs a new HeroMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IHeroMsg);

        /** HeroMsg heroId. */
        public heroId: number;

        /** HeroMsg configId. */
        public configId: number;

        /** HeroMsg level. */
        public level: number;

        /** HeroMsg star. */
        public star: number;

        /** HeroMsg wingId. */
        public wingId: number;

        /**
         * Creates a new HeroMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroMsg instance
         */
        public static create(properties?: protocol.IHeroMsg): protocol.HeroMsg;

        /**
         * Encodes the specified HeroMsg message. Does not implicitly {@link protocol.HeroMsg.verify|verify} messages.
         * @param message HeroMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IHeroMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HeroMsg message, length delimited. Does not implicitly {@link protocol.HeroMsg.verify|verify} messages.
         * @param message HeroMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IHeroMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.HeroMsg;

        /**
         * Decodes a HeroMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.HeroMsg;

        /**
         * Verifies a HeroMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.HeroMsg;

        /**
         * Creates a plain object from a HeroMsg message. Also converts values to other types if specified.
         * @param message HeroMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.HeroMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerOnlineAwardMsg. */
    interface IPlayerOnlineAwardMsg {

        /** PlayerOnlineAwardMsg timeId */
        timeId: number;

        /** PlayerOnlineAwardMsg coodTime */
        coodTime: string;
    }

    /** Represents a PlayerOnlineAwardMsg. */
    class PlayerOnlineAwardMsg implements IPlayerOnlineAwardMsg {

        /**
         * Constructs a new PlayerOnlineAwardMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IPlayerOnlineAwardMsg);

        /** PlayerOnlineAwardMsg timeId. */
        public timeId: number;

        /** PlayerOnlineAwardMsg coodTime. */
        public coodTime: string;

        /**
         * Creates a new PlayerOnlineAwardMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerOnlineAwardMsg instance
         */
        public static create(properties?: protocol.IPlayerOnlineAwardMsg): protocol.PlayerOnlineAwardMsg;

        /**
         * Encodes the specified PlayerOnlineAwardMsg message. Does not implicitly {@link protocol.PlayerOnlineAwardMsg.verify|verify} messages.
         * @param message PlayerOnlineAwardMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IPlayerOnlineAwardMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerOnlineAwardMsg message, length delimited. Does not implicitly {@link protocol.PlayerOnlineAwardMsg.verify|verify} messages.
         * @param message PlayerOnlineAwardMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IPlayerOnlineAwardMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerOnlineAwardMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerOnlineAwardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.PlayerOnlineAwardMsg;

        /**
         * Decodes a PlayerOnlineAwardMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerOnlineAwardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.PlayerOnlineAwardMsg;

        /**
         * Verifies a PlayerOnlineAwardMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerOnlineAwardMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerOnlineAwardMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.PlayerOnlineAwardMsg;

        /**
         * Creates a plain object from a PlayerOnlineAwardMsg message. Also converts values to other types if specified.
         * @param message PlayerOnlineAwardMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.PlayerOnlineAwardMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerOnlineAwardMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerSignMsg. */
    interface IPlayerSignMsg {

        /** PlayerSignMsg signState */
        signState: boolean;

        /** PlayerSignMsg signNum */
        signNum: number;

        /** PlayerSignMsg noEbsenceNum */
        noEbsenceNum: number;

        /** PlayerSignMsg totalDutyNum */
        totalDutyNum: number;

        /** PlayerSignMsg totalSignNum */
        totalSignNum: number;
    }

    /** Represents a PlayerSignMsg. */
    class PlayerSignMsg implements IPlayerSignMsg {

        /**
         * Constructs a new PlayerSignMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IPlayerSignMsg);

        /** PlayerSignMsg signState. */
        public signState: boolean;

        /** PlayerSignMsg signNum. */
        public signNum: number;

        /** PlayerSignMsg noEbsenceNum. */
        public noEbsenceNum: number;

        /** PlayerSignMsg totalDutyNum. */
        public totalDutyNum: number;

        /** PlayerSignMsg totalSignNum. */
        public totalSignNum: number;

        /**
         * Creates a new PlayerSignMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerSignMsg instance
         */
        public static create(properties?: protocol.IPlayerSignMsg): protocol.PlayerSignMsg;

        /**
         * Encodes the specified PlayerSignMsg message. Does not implicitly {@link protocol.PlayerSignMsg.verify|verify} messages.
         * @param message PlayerSignMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IPlayerSignMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerSignMsg message, length delimited. Does not implicitly {@link protocol.PlayerSignMsg.verify|verify} messages.
         * @param message PlayerSignMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IPlayerSignMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerSignMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerSignMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.PlayerSignMsg;

        /**
         * Decodes a PlayerSignMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerSignMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.PlayerSignMsg;

        /**
         * Verifies a PlayerSignMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerSignMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerSignMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.PlayerSignMsg;

        /**
         * Creates a plain object from a PlayerSignMsg message. Also converts values to other types if specified.
         * @param message PlayerSignMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.PlayerSignMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerSignMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerMonthLoginMsg. */
    interface IPlayerMonthLoginMsg {

        /** PlayerMonthLoginMsg loginDayNum */
        loginDayNum: number;

        /** PlayerMonthLoginMsg awardState */
        awardState?: (number[]|null);

        /** PlayerMonthLoginMsg flushTime */
        flushTime: string;
    }

    /** Represents a PlayerMonthLoginMsg. */
    class PlayerMonthLoginMsg implements IPlayerMonthLoginMsg {

        /**
         * Constructs a new PlayerMonthLoginMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IPlayerMonthLoginMsg);

        /** PlayerMonthLoginMsg loginDayNum. */
        public loginDayNum: number;

        /** PlayerMonthLoginMsg awardState. */
        public awardState: number[];

        /** PlayerMonthLoginMsg flushTime. */
        public flushTime: string;

        /**
         * Creates a new PlayerMonthLoginMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerMonthLoginMsg instance
         */
        public static create(properties?: protocol.IPlayerMonthLoginMsg): protocol.PlayerMonthLoginMsg;

        /**
         * Encodes the specified PlayerMonthLoginMsg message. Does not implicitly {@link protocol.PlayerMonthLoginMsg.verify|verify} messages.
         * @param message PlayerMonthLoginMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IPlayerMonthLoginMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerMonthLoginMsg message, length delimited. Does not implicitly {@link protocol.PlayerMonthLoginMsg.verify|verify} messages.
         * @param message PlayerMonthLoginMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IPlayerMonthLoginMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerMonthLoginMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerMonthLoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.PlayerMonthLoginMsg;

        /**
         * Decodes a PlayerMonthLoginMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerMonthLoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.PlayerMonthLoginMsg;

        /**
         * Verifies a PlayerMonthLoginMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerMonthLoginMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerMonthLoginMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.PlayerMonthLoginMsg;

        /**
         * Creates a plain object from a PlayerMonthLoginMsg message. Also converts values to other types if specified.
         * @param message PlayerMonthLoginMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.PlayerMonthLoginMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerMonthLoginMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailItemMsg. */
    interface IMailItemMsg {

        /** MailItemMsg mailId */
        mailId: number;
    }

    /** Represents a MailItemMsg. */
    class MailItemMsg implements IMailItemMsg {

        /**
         * Constructs a new MailItemMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMailItemMsg);

        /** MailItemMsg mailId. */
        public mailId: number;

        /**
         * Creates a new MailItemMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailItemMsg instance
         */
        public static create(properties?: protocol.IMailItemMsg): protocol.MailItemMsg;

        /**
         * Encodes the specified MailItemMsg message. Does not implicitly {@link protocol.MailItemMsg.verify|verify} messages.
         * @param message MailItemMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMailItemMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MailItemMsg message, length delimited. Does not implicitly {@link protocol.MailItemMsg.verify|verify} messages.
         * @param message MailItemMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMailItemMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailItemMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailItemMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.MailItemMsg;

        /**
         * Decodes a MailItemMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailItemMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.MailItemMsg;

        /**
         * Verifies a MailItemMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailItemMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailItemMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.MailItemMsg;

        /**
         * Creates a plain object from a MailItemMsg message. Also converts values to other types if specified.
         * @param message MailItemMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.MailItemMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailItemMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ItemResMsgList. */
    interface IItemResMsgList {

        /** ItemResMsgList itemList */
        itemList?: (protocol.IItemResMsg[]|null);
    }

    /** Represents an ItemResMsgList. */
    class ItemResMsgList implements IItemResMsgList {

        /**
         * Constructs a new ItemResMsgList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IItemResMsgList);

        /** ItemResMsgList itemList. */
        public itemList: protocol.IItemResMsg[];

        /**
         * Creates a new ItemResMsgList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemResMsgList instance
         */
        public static create(properties?: protocol.IItemResMsgList): protocol.ItemResMsgList;

        /**
         * Encodes the specified ItemResMsgList message. Does not implicitly {@link protocol.ItemResMsgList.verify|verify} messages.
         * @param message ItemResMsgList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IItemResMsgList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ItemResMsgList message, length delimited. Does not implicitly {@link protocol.ItemResMsgList.verify|verify} messages.
         * @param message ItemResMsgList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IItemResMsgList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ItemResMsgList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemResMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ItemResMsgList;

        /**
         * Decodes an ItemResMsgList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemResMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ItemResMsgList;

        /**
         * Verifies an ItemResMsgList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemResMsgList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemResMsgList
         */
        public static fromObject(object: { [k: string]: any }): protocol.ItemResMsgList;

        /**
         * Creates a plain object from an ItemResMsgList message. Also converts values to other types if specified.
         * @param message ItemResMsgList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ItemResMsgList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemResMsgList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ItemResMsg. */
    interface IItemResMsg {

        /** ItemResMsg itemId */
        itemId: number;

        /** ItemResMsg num */
        num: number;

        /** ItemResMsg type */
        type: number;
    }

    /** Represents an ItemResMsg. */
    class ItemResMsg implements IItemResMsg {

        /**
         * Constructs a new ItemResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IItemResMsg);

        /** ItemResMsg itemId. */
        public itemId: number;

        /** ItemResMsg num. */
        public num: number;

        /** ItemResMsg type. */
        public type: number;

        /**
         * Creates a new ItemResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemResMsg instance
         */
        public static create(properties?: protocol.IItemResMsg): protocol.ItemResMsg;

        /**
         * Encodes the specified ItemResMsg message. Does not implicitly {@link protocol.ItemResMsg.verify|verify} messages.
         * @param message ItemResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IItemResMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ItemResMsg message, length delimited. Does not implicitly {@link protocol.ItemResMsg.verify|verify} messages.
         * @param message ItemResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IItemResMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ItemResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ItemResMsg;

        /**
         * Decodes an ItemResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ItemResMsg;

        /**
         * Verifies an ItemResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemResMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.ItemResMsg;

        /**
         * Creates a plain object from an ItemResMsg message. Also converts values to other types if specified.
         * @param message ItemResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ItemResMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailInfoListMsg. */
    interface IMailInfoListMsg {

        /** MailInfoListMsg list */
        list?: (protocol.IMailInfoMsg[]|null);
    }

    /** Represents a MailInfoListMsg. */
    class MailInfoListMsg implements IMailInfoListMsg {

        /**
         * Constructs a new MailInfoListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMailInfoListMsg);

        /** MailInfoListMsg list. */
        public list: protocol.IMailInfoMsg[];

        /**
         * Creates a new MailInfoListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailInfoListMsg instance
         */
        public static create(properties?: protocol.IMailInfoListMsg): protocol.MailInfoListMsg;

        /**
         * Encodes the specified MailInfoListMsg message. Does not implicitly {@link protocol.MailInfoListMsg.verify|verify} messages.
         * @param message MailInfoListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMailInfoListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MailInfoListMsg message, length delimited. Does not implicitly {@link protocol.MailInfoListMsg.verify|verify} messages.
         * @param message MailInfoListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMailInfoListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailInfoListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailInfoListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.MailInfoListMsg;

        /**
         * Decodes a MailInfoListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailInfoListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.MailInfoListMsg;

        /**
         * Verifies a MailInfoListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailInfoListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailInfoListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.MailInfoListMsg;

        /**
         * Creates a plain object from a MailInfoListMsg message. Also converts values to other types if specified.
         * @param message MailInfoListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.MailInfoListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailInfoListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailInfoMsg. */
    interface IMailInfoMsg {

        /** MailInfoMsg mailId */
        mailId: number;

        /** MailInfoMsg sendDate */
        sendDate: (number|Long);

        /** MailInfoMsg senderUserId */
        senderUserId: number;

        /** MailInfoMsg senderNickname */
        senderNickname: string;

        /** MailInfoMsg type */
        type: number;

        /** MailInfoMsg title */
        title: string;

        /** MailInfoMsg content */
        content: string;

        /** MailInfoMsg read */
        read: boolean;

        /** MailInfoMsg itemList */
        itemList: string;
    }

    /** Represents a MailInfoMsg. */
    class MailInfoMsg implements IMailInfoMsg {

        /**
         * Constructs a new MailInfoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMailInfoMsg);

        /** MailInfoMsg mailId. */
        public mailId: number;

        /** MailInfoMsg sendDate. */
        public sendDate: (number|Long);

        /** MailInfoMsg senderUserId. */
        public senderUserId: number;

        /** MailInfoMsg senderNickname. */
        public senderNickname: string;

        /** MailInfoMsg type. */
        public type: number;

        /** MailInfoMsg title. */
        public title: string;

        /** MailInfoMsg content. */
        public content: string;

        /** MailInfoMsg read. */
        public read: boolean;

        /** MailInfoMsg itemList. */
        public itemList: string;

        /**
         * Creates a new MailInfoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailInfoMsg instance
         */
        public static create(properties?: protocol.IMailInfoMsg): protocol.MailInfoMsg;

        /**
         * Encodes the specified MailInfoMsg message. Does not implicitly {@link protocol.MailInfoMsg.verify|verify} messages.
         * @param message MailInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMailInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MailInfoMsg message, length delimited. Does not implicitly {@link protocol.MailInfoMsg.verify|verify} messages.
         * @param message MailInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMailInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailInfoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.MailInfoMsg;

        /**
         * Decodes a MailInfoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.MailInfoMsg;

        /**
         * Verifies a MailInfoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailInfoMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.MailInfoMsg;

        /**
         * Creates a plain object from a MailInfoMsg message. Also converts values to other types if specified.
         * @param message MailInfoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.MailInfoMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailInfoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailReadMsg. */
    interface IMailReadMsg {

        /** MailReadMsg mailId */
        mailId: number;
    }

    /** Represents a MailReadMsg. */
    class MailReadMsg implements IMailReadMsg {

        /**
         * Constructs a new MailReadMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMailReadMsg);

        /** MailReadMsg mailId. */
        public mailId: number;

        /**
         * Creates a new MailReadMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailReadMsg instance
         */
        public static create(properties?: protocol.IMailReadMsg): protocol.MailReadMsg;

        /**
         * Encodes the specified MailReadMsg message. Does not implicitly {@link protocol.MailReadMsg.verify|verify} messages.
         * @param message MailReadMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMailReadMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MailReadMsg message, length delimited. Does not implicitly {@link protocol.MailReadMsg.verify|verify} messages.
         * @param message MailReadMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMailReadMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailReadMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailReadMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.MailReadMsg;

        /**
         * Decodes a MailReadMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailReadMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.MailReadMsg;

        /**
         * Verifies a MailReadMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailReadMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailReadMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.MailReadMsg;

        /**
         * Creates a plain object from a MailReadMsg message. Also converts values to other types if specified.
         * @param message MailReadMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.MailReadMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailReadMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailOneUpMsg. */
    interface IMailOneUpMsg {

        /** MailOneUpMsg force */
        force: boolean;
    }

    /** Represents a MailOneUpMsg. */
    class MailOneUpMsg implements IMailOneUpMsg {

        /**
         * Constructs a new MailOneUpMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMailOneUpMsg);

        /** MailOneUpMsg force. */
        public force: boolean;

        /**
         * Creates a new MailOneUpMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailOneUpMsg instance
         */
        public static create(properties?: protocol.IMailOneUpMsg): protocol.MailOneUpMsg;

        /**
         * Encodes the specified MailOneUpMsg message. Does not implicitly {@link protocol.MailOneUpMsg.verify|verify} messages.
         * @param message MailOneUpMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMailOneUpMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MailOneUpMsg message, length delimited. Does not implicitly {@link protocol.MailOneUpMsg.verify|verify} messages.
         * @param message MailOneUpMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMailOneUpMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailOneUpMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailOneUpMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.MailOneUpMsg;

        /**
         * Decodes a MailOneUpMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailOneUpMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.MailOneUpMsg;

        /**
         * Verifies a MailOneUpMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailOneUpMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailOneUpMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.MailOneUpMsg;

        /**
         * Creates a plain object from a MailOneUpMsg message. Also converts values to other types if specified.
         * @param message MailOneUpMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.MailOneUpMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailOneUpMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailDeleteMsg. */
    interface IMailDeleteMsg {

        /** MailDeleteMsg mailId */
        mailId: number;
    }

    /** Represents a MailDeleteMsg. */
    class MailDeleteMsg implements IMailDeleteMsg {

        /**
         * Constructs a new MailDeleteMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMailDeleteMsg);

        /** MailDeleteMsg mailId. */
        public mailId: number;

        /**
         * Creates a new MailDeleteMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailDeleteMsg instance
         */
        public static create(properties?: protocol.IMailDeleteMsg): protocol.MailDeleteMsg;

        /**
         * Encodes the specified MailDeleteMsg message. Does not implicitly {@link protocol.MailDeleteMsg.verify|verify} messages.
         * @param message MailDeleteMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMailDeleteMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MailDeleteMsg message, length delimited. Does not implicitly {@link protocol.MailDeleteMsg.verify|verify} messages.
         * @param message MailDeleteMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMailDeleteMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailDeleteMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailDeleteMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.MailDeleteMsg;

        /**
         * Decodes a MailDeleteMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailDeleteMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.MailDeleteMsg;

        /**
         * Verifies a MailDeleteMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailDeleteMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailDeleteMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.MailDeleteMsg;

        /**
         * Creates a plain object from a MailDeleteMsg message. Also converts values to other types if specified.
         * @param message MailDeleteMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.MailDeleteMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailDeleteMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailDeleteMsgSC. */
    interface IMailDeleteMsgSC {

        /** MailDeleteMsgSC mailId */
        mailId: number;
    }

    /** Represents a MailDeleteMsgSC. */
    class MailDeleteMsgSC implements IMailDeleteMsgSC {

        /**
         * Constructs a new MailDeleteMsgSC.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMailDeleteMsgSC);

        /** MailDeleteMsgSC mailId. */
        public mailId: number;

        /**
         * Creates a new MailDeleteMsgSC instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailDeleteMsgSC instance
         */
        public static create(properties?: protocol.IMailDeleteMsgSC): protocol.MailDeleteMsgSC;

        /**
         * Encodes the specified MailDeleteMsgSC message. Does not implicitly {@link protocol.MailDeleteMsgSC.verify|verify} messages.
         * @param message MailDeleteMsgSC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMailDeleteMsgSC, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MailDeleteMsgSC message, length delimited. Does not implicitly {@link protocol.MailDeleteMsgSC.verify|verify} messages.
         * @param message MailDeleteMsgSC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMailDeleteMsgSC, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailDeleteMsgSC message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailDeleteMsgSC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.MailDeleteMsgSC;

        /**
         * Decodes a MailDeleteMsgSC message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailDeleteMsgSC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.MailDeleteMsgSC;

        /**
         * Verifies a MailDeleteMsgSC message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailDeleteMsgSC message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailDeleteMsgSC
         */
        public static fromObject(object: { [k: string]: any }): protocol.MailDeleteMsgSC;

        /**
         * Creates a plain object from a MailDeleteMsgSC message. Also converts values to other types if specified.
         * @param message MailDeleteMsgSC
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.MailDeleteMsgSC, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailDeleteMsgSC to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NewbiewListMsg. */
    interface INewbiewListMsg {

        /** NewbiewListMsg list */
        list?: (protocol.INewbiewMsg[]|null);
    }

    /** Represents a NewbiewListMsg. */
    class NewbiewListMsg implements INewbiewListMsg {

        /**
         * Constructs a new NewbiewListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.INewbiewListMsg);

        /** NewbiewListMsg list. */
        public list: protocol.INewbiewMsg[];

        /**
         * Creates a new NewbiewListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NewbiewListMsg instance
         */
        public static create(properties?: protocol.INewbiewListMsg): protocol.NewbiewListMsg;

        /**
         * Encodes the specified NewbiewListMsg message. Does not implicitly {@link protocol.NewbiewListMsg.verify|verify} messages.
         * @param message NewbiewListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.INewbiewListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NewbiewListMsg message, length delimited. Does not implicitly {@link protocol.NewbiewListMsg.verify|verify} messages.
         * @param message NewbiewListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.INewbiewListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NewbiewListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NewbiewListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.NewbiewListMsg;

        /**
         * Decodes a NewbiewListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NewbiewListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.NewbiewListMsg;

        /**
         * Verifies a NewbiewListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NewbiewListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NewbiewListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.NewbiewListMsg;

        /**
         * Creates a plain object from a NewbiewListMsg message. Also converts values to other types if specified.
         * @param message NewbiewListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.NewbiewListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NewbiewListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NewbiewMsg. */
    interface INewbiewMsg {

        /** NewbiewMsg type */
        type: number;

        /** NewbiewMsg stepId */
        stepId: number;

        /** NewbiewMsg param */
        param: string;
    }

    /** Represents a NewbiewMsg. */
    class NewbiewMsg implements INewbiewMsg {

        /**
         * Constructs a new NewbiewMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.INewbiewMsg);

        /** NewbiewMsg type. */
        public type: number;

        /** NewbiewMsg stepId. */
        public stepId: number;

        /** NewbiewMsg param. */
        public param: string;

        /**
         * Creates a new NewbiewMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NewbiewMsg instance
         */
        public static create(properties?: protocol.INewbiewMsg): protocol.NewbiewMsg;

        /**
         * Encodes the specified NewbiewMsg message. Does not implicitly {@link protocol.NewbiewMsg.verify|verify} messages.
         * @param message NewbiewMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.INewbiewMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NewbiewMsg message, length delimited. Does not implicitly {@link protocol.NewbiewMsg.verify|verify} messages.
         * @param message NewbiewMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.INewbiewMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NewbiewMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NewbiewMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.NewbiewMsg;

        /**
         * Decodes a NewbiewMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NewbiewMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.NewbiewMsg;

        /**
         * Verifies a NewbiewMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NewbiewMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NewbiewMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.NewbiewMsg;

        /**
         * Creates a plain object from a NewbiewMsg message. Also converts values to other types if specified.
         * @param message NewbiewMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.NewbiewMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NewbiewMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccountMsg. */
    interface IAccountMsg {

        /** AccountMsg nickName */
        nickName: string;

        /** AccountMsg birth */
        birth: string;

        /** AccountMsg remark */
        remark: string;
    }

    /** Represents an AccountMsg. */
    class AccountMsg implements IAccountMsg {

        /**
         * Constructs a new AccountMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IAccountMsg);

        /** AccountMsg nickName. */
        public nickName: string;

        /** AccountMsg birth. */
        public birth: string;

        /** AccountMsg remark. */
        public remark: string;

        /**
         * Creates a new AccountMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountMsg instance
         */
        public static create(properties?: protocol.IAccountMsg): protocol.AccountMsg;

        /**
         * Encodes the specified AccountMsg message. Does not implicitly {@link protocol.AccountMsg.verify|verify} messages.
         * @param message AccountMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IAccountMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AccountMsg message, length delimited. Does not implicitly {@link protocol.AccountMsg.verify|verify} messages.
         * @param message AccountMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IAccountMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AccountMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.AccountMsg;

        /**
         * Decodes an AccountMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.AccountMsg;

        /**
         * Verifies an AccountMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.AccountMsg;

        /**
         * Creates a plain object from an AccountMsg message. Also converts values to other types if specified.
         * @param message AccountMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.AccountMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccountInfoMsg. */
    interface IAccountInfoMsg {

        /** AccountInfoMsg nickName */
        nickName: string;

        /** AccountInfoMsg playerId */
        playerId: number;

        /** AccountInfoMsg headPic */
        headPic: string;

        /** AccountInfoMsg missionId */
        missionId: number;
    }

    /** Represents an AccountInfoMsg. */
    class AccountInfoMsg implements IAccountInfoMsg {

        /**
         * Constructs a new AccountInfoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IAccountInfoMsg);

        /** AccountInfoMsg nickName. */
        public nickName: string;

        /** AccountInfoMsg playerId. */
        public playerId: number;

        /** AccountInfoMsg headPic. */
        public headPic: string;

        /** AccountInfoMsg missionId. */
        public missionId: number;

        /**
         * Creates a new AccountInfoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountInfoMsg instance
         */
        public static create(properties?: protocol.IAccountInfoMsg): protocol.AccountInfoMsg;

        /**
         * Encodes the specified AccountInfoMsg message. Does not implicitly {@link protocol.AccountInfoMsg.verify|verify} messages.
         * @param message AccountInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IAccountInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AccountInfoMsg message, length delimited. Does not implicitly {@link protocol.AccountInfoMsg.verify|verify} messages.
         * @param message AccountInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IAccountInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AccountInfoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.AccountInfoMsg;

        /**
         * Decodes an AccountInfoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.AccountInfoMsg;

        /**
         * Verifies an AccountInfoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountInfoMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.AccountInfoMsg;

        /**
         * Creates a plain object from an AccountInfoMsg message. Also converts values to other types if specified.
         * @param message AccountInfoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.AccountInfoMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountInfoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinThemList. */
    interface IJoinThemList {

        /** JoinThemList list */
        list?: (protocol.IAccountInfoMsg[]|null);
    }

    /** Represents a JoinThemList. */
    class JoinThemList implements IJoinThemList {

        /**
         * Constructs a new JoinThemList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IJoinThemList);

        /** JoinThemList list. */
        public list: protocol.IAccountInfoMsg[];

        /**
         * Creates a new JoinThemList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinThemList instance
         */
        public static create(properties?: protocol.IJoinThemList): protocol.JoinThemList;

        /**
         * Encodes the specified JoinThemList message. Does not implicitly {@link protocol.JoinThemList.verify|verify} messages.
         * @param message JoinThemList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IJoinThemList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified JoinThemList message, length delimited. Does not implicitly {@link protocol.JoinThemList.verify|verify} messages.
         * @param message JoinThemList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IJoinThemList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a JoinThemList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinThemList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.JoinThemList;

        /**
         * Decodes a JoinThemList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinThemList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.JoinThemList;

        /**
         * Verifies a JoinThemList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinThemList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinThemList
         */
        public static fromObject(object: { [k: string]: any }): protocol.JoinThemList;

        /**
         * Creates a plain object from a JoinThemList message. Also converts values to other types if specified.
         * @param message JoinThemList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.JoinThemList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinThemList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TaskUpdateMsg. */
    interface ITaskUpdateMsg {

        /** TaskUpdateMsg taskDataList */
        taskDataList?: (protocol.ITaskDataMsg[]|null);
    }

    /** Represents a TaskUpdateMsg. */
    class TaskUpdateMsg implements ITaskUpdateMsg {

        /**
         * Constructs a new TaskUpdateMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITaskUpdateMsg);

        /** TaskUpdateMsg taskDataList. */
        public taskDataList: protocol.ITaskDataMsg[];

        /**
         * Creates a new TaskUpdateMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskUpdateMsg instance
         */
        public static create(properties?: protocol.ITaskUpdateMsg): protocol.TaskUpdateMsg;

        /**
         * Encodes the specified TaskUpdateMsg message. Does not implicitly {@link protocol.TaskUpdateMsg.verify|verify} messages.
         * @param message TaskUpdateMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITaskUpdateMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TaskUpdateMsg message, length delimited. Does not implicitly {@link protocol.TaskUpdateMsg.verify|verify} messages.
         * @param message TaskUpdateMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITaskUpdateMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TaskUpdateMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskUpdateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.TaskUpdateMsg;

        /**
         * Decodes a TaskUpdateMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaskUpdateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.TaskUpdateMsg;

        /**
         * Verifies a TaskUpdateMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TaskUpdateMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskUpdateMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.TaskUpdateMsg;

        /**
         * Creates a plain object from a TaskUpdateMsg message. Also converts values to other types if specified.
         * @param message TaskUpdateMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TaskUpdateMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskUpdateMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TaskDataMsg. */
    interface ITaskDataMsg {

        /** TaskDataMsg taskId */
        taskId: number;

        /** TaskDataMsg isComplete */
        isComplete: boolean;

        /** TaskDataMsg process */
        process: string;
    }

    /** Represents a TaskDataMsg. */
    class TaskDataMsg implements ITaskDataMsg {

        /**
         * Constructs a new TaskDataMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITaskDataMsg);

        /** TaskDataMsg taskId. */
        public taskId: number;

        /** TaskDataMsg isComplete. */
        public isComplete: boolean;

        /** TaskDataMsg process. */
        public process: string;

        /**
         * Creates a new TaskDataMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskDataMsg instance
         */
        public static create(properties?: protocol.ITaskDataMsg): protocol.TaskDataMsg;

        /**
         * Encodes the specified TaskDataMsg message. Does not implicitly {@link protocol.TaskDataMsg.verify|verify} messages.
         * @param message TaskDataMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITaskDataMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TaskDataMsg message, length delimited. Does not implicitly {@link protocol.TaskDataMsg.verify|verify} messages.
         * @param message TaskDataMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITaskDataMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TaskDataMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.TaskDataMsg;

        /**
         * Decodes a TaskDataMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaskDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.TaskDataMsg;

        /**
         * Verifies a TaskDataMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TaskDataMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskDataMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.TaskDataMsg;

        /**
         * Creates a plain object from a TaskDataMsg message. Also converts values to other types if specified.
         * @param message TaskDataMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TaskDataMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskDataMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
