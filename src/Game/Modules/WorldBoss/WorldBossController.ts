class WorldBossController extends BaseController {

	public static roomIsOpen: boolean = false;
	/** 排行榜的箭头指引状态 0不升不降  1升 2降 */
	public static rankArrowState: number = HERO_ARROW_STATE.DEFAULT;
	/** BOSS的最大血量值 */
	public static bossMaxHp: number = 0;
	private _worldBossModel: WorldBossModel;

	public constructor() {
		super();
		let self = this;

		self._worldBossModel = new WorldBossModel(self);

		self.addEvent();
		self.initRegisterView();
	}

	private addEvent(): void {
		let self = this;
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.STC_WORLD_BOSS_MSG), self.onWorldBossMsg, self);
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.STC_WORLD_BOSS_RANK_LIST), self.onRankList, self);
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.STC_WORLD_BOSS_RANK_ITEM), self.onUpdateRankItem, self);
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.STC_WORLDBOSS_OVER), self.onWorldBossOver, self);
	}

	/** 注册界面才可以打开界面 */
	private initRegisterView(): void {
		let self = this;
		App.ViewManager.register(ViewConst.WorldBossMainView, new WorldBossMainView(self, LayerManager.GAME_UI_LAYER));
		App.ViewManager.register(ViewConst.CrystalUseAlert, new CrystalUseAlert(self, LayerManager.GAME_UI_LAYER));
		App.ViewManager.register(ViewConst.WorldBossMsgView, new WorldBossMsgView(self, LayerManager.GAME_UI_LAYER));
		App.ViewManager.register(ViewConst.HeroRankView, new HeroRankView(self, LayerManager.GAME_UI_LAYER));
	}

	/** 世界boss个人数据信息 */
	private onWorldBossMsg(evt: egret.Event): void {
		let self = this;
		let msg: protocol.PlayerWorldBossMsg = protocol.PlayerWorldBossMsg.decode(evt.data);
		WorldBossController.roomIsOpen = msg.roomId != 0;
		App.ObjectUtils.copyValue2(self._worldBossModel, msg);
		if (App.ViewManager.isShow(ViewConst.WorldBossMainView) && WorldBossController.roomIsOpen) {
			App.ViewManager.close(ViewConst.WorldBossMainView);
			App.ViewManager.open(ViewConst.WorldBossMsgView);
		}
		self.applyFunc(WorldBossConst.UPDATE_POWER_TIME);
	}

	/** 世界BOSS排行榜列表 */
	private onRankList(evt: egret.Event): void {
		let self = this;
		let msg: protocol.FriendWorldBossRankListMsg = protocol.FriendWorldBossRankListMsg.decode(evt.data);
		if (!self._worldBossModel.rankList) {
			self._worldBossModel.rankList = new TSDictionary<number, protocol.IFriendWorldBossRankMsg>();
		} else {
			self._worldBossModel.rankList.clear();
		}
		if (msg.list && msg.list.length > 0) {
			for (let i: number = 0, len: number = msg.list.length; i < len; i++) {
				self._worldBossModel.rankList.Add(msg.list[i].playerId, msg.list[i]);
			}
			self.applyFunc(WorldBossConst.UPDATE_RANK);
		}
	}

	/** 更新个人排行榜信息 */
	private onUpdateRankItem(evt: egret.Event): void {
		let self = this;
		let msg: protocol.FriendWorldBossRankMsg = protocol.FriendWorldBossRankMsg.decode(evt.data);
		if (self._worldBossModel.rankList) {
			let myRankIndex: number = 0;
			if (App.ViewManager.isShow(ViewConst.Battle)) {
				myRankIndex = self.heroRankOldIndex();
			}
			if (self._worldBossModel.rankList.ContainsKey(msg.playerId)) {
				self._worldBossModel.rankList.SetDicValue(msg.playerId, msg);
			} else {
				self._worldBossModel.rankList.Add(msg.playerId, msg);
			}
			if (App.ViewManager.isShow(ViewConst.Battle)) {
				self.heroRankNewIndex(myRankIndex);
			}
			if (!App.ViewManager.isShow(ViewConst.Battle)) {
				self.applyFunc(WorldBossConst.UPDATE_RANK);
			}
		}
	}

	/** 单场世界BOSS战斗结束 */
	private onWorldBossOver(evt: egret.Event): void {
		let self = this;
		let msg: protocol.CommonMsg = protocol.CommonMsg.decode(evt.data);
		App.ViewManager.open(ViewConst.HeroRankView, msg.intPar1);
	}

	private heroRankOldIndex(): number {
		let self = this;
		let rank: protocol.IFriendWorldBossRankMsg[] = self._worldBossModel.rankList.getValues();
		rank.sort((item1: protocol.IFriendWorldBossRankMsg, item2: protocol.IFriendWorldBossRankMsg) => { return item2.singleHurtHpMax - item1.singleHurtHpMax });
		for (let i: number = 0, len: number = rank.length; i < len; i++) {
			if (rank[i].playerId == App.PlayerInfoManager.Info.playerId) {
				return i;
			}
		}
	}

	private heroRankNewIndex(myRankIndex: number): void {
		let self = this;
		let myIndex: number = 0;
		let newRankList: protocol.IFriendWorldBossRankMsg[] = [];
		let rankList: protocol.IFriendWorldBossRankMsg[] = self._worldBossModel.rankList.getValues();
		rankList.sort((item1: protocol.IFriendWorldBossRankMsg, item2: protocol.IFriendWorldBossRankMsg) => { return item2.singleHurtHpMax - item1.singleHurtHpMax });
		for (let i: number = 0, len: number = rankList.length; i < len; i++) {
			if (rankList[i].playerId == App.PlayerInfoManager.Info.playerId) {
				if (i == myRankIndex) {
					WorldBossController.rankArrowState = HERO_ARROW_STATE.DEFAULT;
				} else if (i > myRankIndex) {
					WorldBossController.rankArrowState = HERO_ARROW_STATE.UP;
				} else if (i < myRankIndex) {
					WorldBossController.rankArrowState = HERO_ARROW_STATE.DOWN;
				}
				myIndex = i;
				break;
			}
		}
		if (rankList.length <= 5) {
			newRankList = rankList;
		} else if (myIndex == 0) {//第一名
			newRankList = rankList.slice(0, 5);
		} else if (myIndex == (rankList.length - 1)) {//最后一名
			newRankList = rankList.slice(rankList.length - 5, rankList.length);
		} else { //在数组中从我为起点找到5个和我相近的数据
			let index: number = myIndex;
			while (rankList) {
				let item = rankList[index];
				if (item && newRankList.length < 3 && index < myIndex) {
					newRankList.push(item);
					index--;
				} else {
					if (newRankList.length < 3 && index < myIndex) {
						index = myIndex + 1;
					} else if (item && newRankList.length < 5) {
						newRankList.push(item);
						index++;
					}
				}
				if (newRankList.length >= 5) {
					break;
				}
			}
		}
		self._worldBossModel.heroRankList = newRankList;
	}

}