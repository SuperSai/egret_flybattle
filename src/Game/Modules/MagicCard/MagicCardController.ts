class MagicCardController extends BaseController {

	private _magicCardModel: MagicCardModel;

	public constructor() {
		super();
		let self = this;
		self._magicCardModel = new MagicCardModel(self);

		self.initRegisterView();
		self.addEvents();
	}

	private addEvents(): void {
		let self = this;
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.MAGIC_CARD_INIT), self.onShowView, self);
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.MAGIC_CARD_LOTTERY), self.onLotteryHeroItem, self);
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.MAGIC_CARD_SELECT), self.onShowSelectView, self);
	}

	/** 注册界面才可以打开界面 */
	private initRegisterView(): void {
		let self = this;
		App.ViewManager.register(ViewConst.MagicCardMainView, new MagicCardMainView(self, LayerManager.GAME_UI_LAYER));
		App.ViewManager.register(ViewConst.MagicCardSelectView, new MagicCardSelectView(self, LayerManager.GAME_UI_LAYER));
	}

	/** 显示界面 */
	private onShowView(evt: egret.Event): void {
		let self = this;
		let msg: protocol.CommonMsg = protocol.CommonMsg.decode(evt.data);
		self._magicCardModel.topHeroItem = self.getRewardHeroItem(msg.intPar1);
		let list: number[] = App.ObjectUtils.splitToNumber(msg.strPar1, "#");
		self._magicCardModel.rewardList = [];
		for (let i: number = 0, len: number = list.length; i < len; i++) {
			let item: AwardVO = GlobleData.getData(GlobleData.AwardVO, list[i]);
			self._magicCardModel.rewardList.push(item);
		}
		App.ViewManager.open(ViewConst.MagicCardMainView);
	}

	/** 抽英雄 */
	private onLotteryHeroItem(evt: egret.Event): void {
		let self = this;
		let msg: protocol.CommonMsg = protocol.CommonMsg.decode(evt.data);
		if (!self._magicCardModel.rewardHeroItem) {
			self._magicCardModel.rewardHeroItem = self.getRewardHeroItem(msg.intPar1);
		} else if (self._magicCardModel.rewardHeroItem) {
			self._magicCardModel.rewardHeroItemTwo = self.getRewardHeroItem(msg.intPar1);
		}
		self.applyFunc(MagicCardConst.HERO_LOTTERY);
	}

	/** 显示选择界面 */
	private onShowSelectView(evt: egret.Event): void {
		let self = this;
		let msg: protocol.CommonMsg = protocol.CommonMsg.decode(evt.data);
		self._magicCardModel.rewardHeroItem = self.getRewardHeroItem(msg.intPar1);
		self._magicCardModel.rewardHeroItemTwo = self.getRewardHeroItem(msg.intPar2);

		let itemInfo: ItemInfo = App.ObjectPool.pop("ItemInfo");
		itemInfo.itemId = self._magicCardModel.rewardHeroItem.itemId;
		itemInfo.num = self._magicCardModel.rewardHeroItem.num;
		let itemInfoTwo: ItemInfo = App.ObjectPool.pop("ItemInfo");
		itemInfoTwo.itemId = self._magicCardModel.rewardHeroItemTwo.itemId;
		itemInfoTwo.num = self._magicCardModel.rewardHeroItemTwo.num;
		App.ViewManager.open(ViewConst.MagicCardSelectView);
	}

	public showRewardView(rewards: ItemInfo[]): void {
		let self = this;
		App.ViewManager.open(ViewConst.RewardAlert, rewards, REWARD_ITEM_TYPE.ITEM);
	}

	public getRewardHeroItem(awardId: number): AwardVO {
		return GlobleData.getDataByCondition(GlobleData.AwardVO, (itemData: AwardVO) => {
			return itemData.id == awardId;
		})[0];
	}
}