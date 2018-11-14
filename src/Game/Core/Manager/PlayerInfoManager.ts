class PlayerInfoManager extends BaseClass {

	/** 更新货币数量 */
	public static UPDATE_CURRENCY_COUNT: string = "UPDATE_CURRENCY_COUNT";

	private _info: PlayerInfo;//玩家信息数据
	private _currencys: TSDictionary<number, number>;
	/** 是否再大厅中点击了英雄 */
	public isHallTouchHero: boolean = false;

	public setup(): void {
		let self = this;
		self._info = new PlayerInfo();
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.STC_PLAYER_MESSAGE), self.onPlayerMessage, self);
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.STC_HEARTBEAT), self.onHeadBeat, self);
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.STC_BAG_LIST), self.onBagList, self);
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.STC_BAG_UPDATE), self.onUpdateBag, self);
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.ERROR_CODE), self.onErrorCode, self);
	}

	/** 初始化心跳 */
	private initHeartBeat(): void {
		let self = this;
		if (!App.TimerManager.isExists(self.sendServerHeartBeat, self)) {
			self.sendServerHeartBeat();
			App.TimerManager.doTimer(5000, 0, () => {
				self.sendServerHeartBeat();
			}, self);
		}
	}

	/** 获取玩家信息 */
	private onPlayerMessage(evt: egret.Event): void {
		let self = this;
		let msg: protocol.AccountInfoMsg = protocol.AccountInfoMsg.decode(evt.data);
		App.ObjectUtils.copyValue2(self._info, msg);
		self.initHeartBeat();
	}

	/** 背包物品列表 */
	private onBagList(evt: egret.Event): void {
		let self = this;
		let msg: protocol.IItemInfoMsg[] = protocol.ItemListMsg.decode(evt.data).itemList;
		if (self._currencys) {
			self._currencys.clear();
		} else {
			self._currencys = new TSDictionary<number, number>();
		}
		for (let i: number = 0, len: number = msg.length; i < len; i++) {
			self._currencys.Add(msg[i].itemId, msg[i].num);
		}
	}

	/** 单个背包物品更新 */
	private onUpdateBag(evt: egret.Event): void {
		let self = this;
		let msg: protocol.ItemInfoMsg = protocol.ItemInfoMsg.decode(evt.data);
		if (!self._currencys) return;
		if (self._currencys.ContainsKey(msg.itemId)) {
			self._currencys.SetDicValue(msg.itemId, msg.num);
		} else {
			self._currencys.Add(msg.itemId, msg.num);
		}
		self.dispatchEventWith(PlayerInfoManager.UPDATE_CURRENCY_COUNT, false, msg.itemId);
	}

	/** 心跳协议返回 */
	private onHeadBeat(evt: egret.Event): void {
		let self = this;
		let dataMsg: protocol.CommonMsg = protocol.CommonMsg.decode(evt.data);
		let sTime: number = Number(dataMsg.strPar1) / 1000;
		let cTime: number = new Date().getTime();
		cTime = Math.floor(cTime / 1000);
		App.TimeUtil.synctime(sTime, cTime);
	}

	/** 服务器错误码 */
	private onErrorCode(evt: egret.Event): void {
		let self = this;
		let codeId: number = protocol.CommonMsg.decode(evt.data).intPar1;
		let vo: ErrorCodeVO = GlobleData.getData(GlobleData.ErrorCodeVO, codeId);
		if (vo) App.MessageManger.showText(vo.desc);
	}

	/** 发送心跳给服务器 */
	private sendServerHeartBeat(): void {
		SocketManager.Instance.out.sendHeartBeat();
	}

	/** 获取对应的货币数量 */
	public getCurrencyNum(type: number): number {
		return this._currencys.ContainsKey(type) ? this._currencys.TryGetValue(type) : 0;
	}

	public getItemInfo(itemId: number, num: number): ItemInfo {
		let info: ItemInfo = new ItemInfo();
		info.itemId = itemId;
		info.num = num;
		return info;
	}

	/** 玩家信息 */
	get Info(): PlayerInfo { return this._info; }
	set Info(value: PlayerInfo) { this._info = value; }

}

enum ITEM_TYPE {
	/** 金币 */
	GOLD = 1,
	/** 钻石 */
	DIAMOND = 2,
	/** 奖杯 */
	TROPHY = 3,
	/** 铜钥匙 */
	COPPER_KEY = 301,
	/** 银钥匙 */
	SILVER_KEY = 302,
	/** 金钥匙 */
	GOLD_KEY = 303,
	/** 紫水晶 */
	PURPLE_CRYSTAL = 101001,
	/** 红水晶 */
	RED_CRYSTAL = 101002,
	/** 蓝水晶 */
	BLUE_CRYSTAL = 101003,
	/** 铜奖杯 */
	COPPER_TROPHY = 102001,
	/** 银奖杯 */
	SILVER_TROPHY = 102002,
	/** 金奖杯 */
	GOLD_TROPHY = 102003,
	/** 四叶草 */
	CLOVER = 103001,
	/** 蘑菇 */
	MUSHROOM = 103002,
	/** 磁铁 */
	MAGNET = 103003,
	/** 冲刺 */
	SPRINT = 103004,
	/** 万寿菊 */
	MARIGOLD = 104001,
}