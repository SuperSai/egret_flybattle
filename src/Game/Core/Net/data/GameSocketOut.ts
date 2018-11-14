class GameSocketOut {

	private _socketMgr: SocketManager;
	public constructor(socket: SocketManager) {
		let self = this;
		self._socketMgr = socket;
	}
	/** 发送登陆请求 */
	public sendServerLogin(headUrl: string = "", nickName: string = "", shareKey: string = ""): void {
		let self = this;
		let packageOut: PackageOut = new PackageOut();
		packageOut.init(PackageOutTypeVo.LOGIN);
		let msg: protocol.CommonMsg = new protocol.CommonMsg();
		msg.intPar1 = App.PlayerInfoManager.Info.playerId;
		msg.intPar2 = App.PlayerInfoManager.Info.wxScene;
		msg.strPar1 = nickName;
		msg.strPar2 = headUrl;
		msg.strPar3 = shareKey;
		let data = protocol.CommonMsg.encode(msg).finish();
		self._socketMgr.socket.sendProtobuffer(packageOut, data);
	}
	/** 心跳 */
	public sendHeartBeat(): void {
		let self = this;
		let packageOut: PackageOut = new PackageOut();
		packageOut.init(PackageOutTypeVo.HEARTBEAT);
		self._socketMgr.socket.sendProtobuffer(packageOut, null);
	}
	/** 英雄布阵 */
	public sendHerosDoubtful(captain: number, leftPlayer: number, rightPlayer: number): void {
		let self = this;
		let packageOut: PackageOut = new PackageOut();
		packageOut.init(PackageOutTypeVo.HEROS_DOUBTFUL);
		let msg: protocol.CommonMsg = new protocol.CommonMsg();
		msg.intPar1 = captain;
		msg.intPar2 = leftPlayer;
		msg.intPar3 = rightPlayer;
		let data = protocol.CommonMsg.encode(msg).finish();
		self._socketMgr.socket.sendProtobuffer(packageOut, data);
	}
	/** 英雄升级 */
	public sendHerosLevel(heroId: number): void {
		let self = this;
		let packageOut: PackageOut = new PackageOut();
		packageOut.init(PackageOutTypeVo.HERO_LEVEL);
		let msg: protocol.CommonMsg = new protocol.CommonMsg();
		msg.intPar1 = heroId;
		let data = protocol.CommonMsg.encode(msg).finish();
		self._socketMgr.socket.sendProtobuffer(packageOut, data);
	}
	/** 英雄升星 */
	public sendHerosStar(heroId: number): void {
		let self = this;
		let packageOut: PackageOut = new PackageOut();
		packageOut.init(PackageOutTypeVo.HERO_STAR);
		let msg: protocol.CommonMsg = new protocol.CommonMsg();
		msg.intPar1 = heroId;
		let data = protocol.CommonMsg.encode(msg).finish();
		self._socketMgr.socket.sendProtobuffer(packageOut, data);
	}
	/** 英雄出售 */
	public sendHerosSell(heroIds: string): void {
		let self = this;
		let packageOut: PackageOut = new PackageOut();
		packageOut.init(PackageOutTypeVo.HERO_SELL);
		let msg: protocol.CommonMsg = new protocol.CommonMsg();
		msg.strPar1 = heroIds;
		let data = protocol.CommonMsg.encode(msg).finish();
		self._socketMgr.socket.sendProtobuffer(packageOut, data);
	}
	/** 幸运翻牌关闭时清理 */
	public sendLuckCardClear(): void {
		let self = this;
		let packageOut: PackageOut = new PackageOut();
		packageOut.init(PackageOutTypeVo.LUCKCARD_CLEAR);
		self._socketMgr.socket.sendProtobuffer(packageOut, null);
	}
	/** 幸运翻牌奖励池查询 */
	public sendLuckCardCheck(isOpenView: boolean = true): void {
		let self = this;
		let packageOut: PackageOut = new PackageOut();
		packageOut.init(PackageOutTypeVo.LUCKCARD_CHECK);
		let msg: protocol.CommonMsg = new protocol.CommonMsg();
		msg.boolPar1 = isOpenView;
		let data = protocol.CommonMsg.encode(msg).finish();
		self._socketMgr.socket.sendProtobuffer(packageOut, data);
	}
	/** 幸运翻牌购买次数 */
	public sendLuckCardBuyCount(): void {
		let self = this;
		let packageOut: PackageOut = new PackageOut();
		packageOut.init(PackageOutTypeVo.LUCKCARD_BUY_COUNT);
		self._socketMgr.socket.sendProtobuffer(packageOut, null);
	}
	/** 幸运翻牌钻石广告次数查询 */
	public sendLuckCardDataCheck(): void {
		let self = this;
		let packageOut: PackageOut = new PackageOut();
		packageOut.init(PackageOutTypeVo.LUCKCARD_DATA_CHECK);
		self._socketMgr.socket.sendProtobuffer(packageOut, null);
	}
	/** 翻牌 */
	public sendLuckCardOpen($x: number, $y: number): void {
		let self = this;
		let packageOut: PackageOut = new PackageOut();
		packageOut.init(PackageOutTypeVo.LUCKCARD_LOTTERY_CARD);
		let msg: protocol.CommonMsg = new protocol.CommonMsg();
		msg.intPar1 = $x;
		msg.intPar2 = $y;
		let data = protocol.CommonMsg.encode(msg).finish();
		self._socketMgr.socket.sendProtobuffer(packageOut, data);
	}
	/** 开启世界boss */
	public sendWorldBossOpenToKey(keyId: number): void {
		let self = this;
		let packageOut: PackageOut = new PackageOut();
		packageOut.init(PackageOutTypeVo.WORLDBOSS_OPEN);
		let msg: protocol.CommonMsg = new protocol.CommonMsg();
		msg.intPar1 = keyId;
		let data = protocol.CommonMsg.encode(msg).finish();
		self._socketMgr.socket.sendProtobuffer(packageOut, data);
	}
	/** 加入世界boss房间 */
	public sendWorldBossAddRoom(roomId: number): void {
		let self = this;
		let packageOut: PackageOut = new PackageOut();
		packageOut.init(PackageOutTypeVo.WORLDBOSS_ADD_ROOM);
		let msg: protocol.CommonMsg = new protocol.CommonMsg();
		msg.intPar1 = roomId;
		let data = protocol.CommonMsg.encode(msg).finish();
		self._socketMgr.socket.sendProtobuffer(packageOut, data);
	}
	/** 开始副本 */
	public sendWorldBossStart(missionId: number): void {
		let self = this;
		let packageOut: PackageOut = new PackageOut();
		packageOut.init(PackageOutTypeVo.WORLDBOSS_START);
		let msg: protocol.CommonMsg = new protocol.CommonMsg();
		msg.intPar1 = missionId;
		let data = protocol.CommonMsg.encode(msg).finish();
		self._socketMgr.socket.sendProtobuffer(packageOut, data);
	}
	/** 世界BOSS游戏结算 -- 积分（世界boss传总伤害） */
	public sendWorldBossGameOver(score: number, trophys: number[] = [0, 0, 0], keys: number[] = [0, 0, 0]): void {
		let self = this;
		let packageOut: PackageOut = new PackageOut();
		packageOut.init(PackageOutTypeVo.BATTLE_GAMEOVER);
		let msg: protocol.GameOverReqMsg = new protocol.GameOverReqMsg();
		msg.score = score;
		msg.cups = trophys;
		msg.keys = keys;
		let data = protocol.GameOverReqMsg.encode(msg).finish();
		self._socketMgr.socket.sendProtobuffer(packageOut, data);
	}
	/** 领取世界boss奖励 */
	public sendWorldBossGetReward(): void {
		let self = this;
		let packageOut: PackageOut = new PackageOut();
		packageOut.init(PackageOutTypeVo.WORLDBOSS_REWARD);
		self._socketMgr.socket.sendProtobuffer(packageOut, null);
	}
	/** 领取世界boss体力 */
	public sendWorldBossPower(): void {
		let self = this;
		let packageOut: PackageOut = new PackageOut();
		packageOut.init(PackageOutTypeVo.WORLDBOSS_POWER);
		self._socketMgr.socket.sendProtobuffer(packageOut, null);
	}
	/** 魔法卡牌初始化 */
	public sendMagicCardInit(): void {
		let self = this;
		let packageOut: PackageOut = new PackageOut();
		packageOut.init(PackageOutTypeVo.MAGIC_CARD_INIT);
		self._socketMgr.socket.sendProtobuffer(packageOut, null);
	}
	/** 魔法卡牌抽英雄 */
	public sendMagicCardLottery(): void {
		let self = this;
		let packageOut: PackageOut = new PackageOut();
		packageOut.init(PackageOutTypeVo.CARD_LOTTERY);
		self._socketMgr.socket.sendProtobuffer(packageOut, null);
	}
	/** 魔法卡牌 -- 领取抽到的奖励 */
	public sendMagicCardGetReward(awardId: number): void {
		let self = this;
		let packageOut: PackageOut = new PackageOut();
		packageOut.init(PackageOutTypeVo.MAGIC_CARD_REWARD);
		let msg: protocol.CommonMsg = new protocol.CommonMsg();
		msg.intPar1 = awardId;
		let data = protocol.CommonMsg.encode(msg).finish();
		self._socketMgr.socket.sendProtobuffer(packageOut, data);
	}
	/** 魔法卡牌退出 */
	public sendMagicCardExit(): void {
		let self = this;
		let packageOut: PackageOut = new PackageOut();
		packageOut.init(PackageOutTypeVo.MAGIC_CARD_EXIT);
		self._socketMgr.socket.sendProtobuffer(packageOut, null);
	}


}