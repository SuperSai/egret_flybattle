/**
 * 魔法卡牌主界面
 */
class MagicCardMainView extends BaseView {

	public btn_close: eui.Button;
	public btn_reward: eui.Group;
	public btn_lottery: eui.Group;
	public advGroup: eui.Group;
	public txtImg: eui.Image;
	public advImg: eui.Image;
	/** 显示有可能得到的卡Item */
	public cardHaveItem: MagicCardItem;
	private _model: MagicCardModel;
	private _magicCardController: MagicCardController;
	private _delay: number = 30;
	private _timer: egret.Timer;
	private _selectItem: MagicCardItem;
	/** 抽卡次数 */
	private _lotteryCount: number = 0;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.skinName = SkinName.MagicCardMainViewSkin;
		this.setResources(["magicCard"]);
	}

	public initUI(): void {
		super.initUI();
		let self = this;
		self.cardHaveItem.rect.alpha = 0;
		self.btn_reward.visible = self.advImg.visible = false;
		self.advGroup.visible = ext.getIsAD();
	}

	public initData(): void {
		super.initData();
		let self = this;
		self._model = <MagicCardModel>self.controller.getModel();
		self._magicCardController = <MagicCardController>self.controller;
		for (let i: number = 0; i < 5; i++) {
			self["cardItem" + i].onAwake(self._model);
		}
		self.cardHaveItem.updateItemData(self._model.topHeroItem);
	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.btn_reward.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_lottery.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.setBtnEffect(["btn_reward", "btn_lottery", "btn_close"]);
		self.registerFunc(MagicCardConst.CARD_ROLL_ITEM, self.onLotteryCardItem, self);
		self.registerFunc(MagicCardConst.HERO_LOTTERY, self.onStartLotteryRoll, self);
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_reward.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_lottery.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
	}

	private onClickHandler(evt: egret.TouchEvent): void {
		let self = this;
		switch (evt.target) {
			case self.btn_lottery:
				self.startLottery();
				break;
			case self.btn_reward:
				self.showRewardView();
				break;
			case self.btn_close:
				self.exitMagicCardView();
				break;
		}
	}

	/** 开始抽奖 */
	private startLottery(): void {
		let self = this;
		if (self._timer && self._timer.running) {
			return App.MessageManger.showText(App.LanguageManager.getLanguageText("magicCardView.txt.01"));
		}
		if (self._lotteryCount >= 2) {
			return App.MessageManger.showText(App.LanguageManager.getLanguageText("magicCardView.txt.02"));
		}
		SocketManager.Instance.out.sendMagicCardLottery();
		self._lotteryCount++;
	}

	private onStartLotteryRoll(): void {
		let self = this;
		if (self._selectItem) self._selectItem.lightImg.visible = false;
		self.removeTimer();
		self._timer = new egret.Timer(50, 0);
		self._timer.addEventListener(egret.TimerEvent.TIMER, self.allCardRoll, self);
		self._timer.start();
		self["cardItem2"].lightImg.visible = false;
		if (self._model.rewardHeroItemTwo || !ext.getIsAD()) {
			self.btn_lottery.touchEnabled = false;
			App.DisplayUtils.setFilters(self.btn_lottery);
		}
	}

	/** 滚动卡牌 */
	private allCardRoll(): void {
		let self = this;
		for (let i: number = 0; i < 5; i++) {
			self["cardItem" + i].cardRoll(self._delay);
		}
		self._delay += 10;
		self._timer.delay = self._delay + 50;
	}

	/** 显示奖励界面 */
	private showRewardView(): void {
		let self = this;
		if (self._timer && self._timer.running) {
			return App.MessageManger.showText(App.LanguageManager.getLanguageText("magicCardView.txt.01"));
		}
		if (self._lotteryCount == 1) {
			SocketManager.Instance.out.sendMagicCardGetReward(self._model.rewardHeroItem.id);
			self.showRewardAlert();
			self.exitMagicCardView();
		} else {
			//打开选择界面
			App.ViewManager.open(ViewConst.MagicCardSelectView);
		}
	}

	/** 获取抽中的角色 */
	private onLotteryCardItem(info: AwardVO, item: MagicCardItem): void {
		let self = this;
		if (self._timer && self._timer.running && self._delay > 300) {
			if (!self._model.rewardHeroItemTwo) {
				if (info.id == self._model.rewardHeroItem.id) {
					self.removeTimer();
					self._selectItem = item;
					self.updateView();
				}
			} else {
				if (info.id == self._model.rewardHeroItemTwo.id) {
					self.removeTimer();
					self._selectItem = item;
					self.updateView();
				}
			}
		}
	}

	/** 更新界面 */
	private updateView(): void {
		let self = this;
		self._selectItem.lightImg.visible = true;
		if (ext.getIsAD()) {
			self.txtImg.source = "magicCard_zi1";
			self.btn_reward.visible = self.advImg.visible = true;
			if (!self._model.rewardHeroItemTwo) {

			}
		} else {
			App.TimerManager.doTimer(1000, 1, self.showRewardView, self, () => {
				App.TimerManager.remove(self.showRewardView, self);
			}, self);
		}
	}

	/** 重置界面 */
	private resetView(): void {
		let self = this;
		if (self._selectItem) self._selectItem.lightImg.visible = false;
		self.btn_lottery.touchEnabled = true;
		self.btn_lottery.filters = null;
		self.btn_reward.visible = false;
		self.advImg.visible = false;
		self.txtImg.source = "magicCard_zi2";
		self._model.rewardIndex = 5;
		self._lotteryCount = 0;
		self._model.rewardHeroItem = null;
		self._model.rewardHeroItemTwo = null;
	}

	/** 显示奖励提示框 */
	private showRewardAlert(): void {
		let self = this;
		if (self._model.rewardHeroItem) {
			let itemInfo: ItemInfo = App.ObjectPool.pop("ItemInfo");
			itemInfo.itemId = self._model.rewardHeroItem.itemId;
			itemInfo.num = self._model.rewardHeroItem.num;
			self._magicCardController.showRewardView([itemInfo]);
			self._model.rewardHeroItem = null;
		}
	}

	private removeTimer(): void {
		let self = this;
		if (self._timer) {
			self._timer.stop();
			self._timer.removeEventListener(egret.TimerEvent.TIMER, self.allCardRoll, self);
			self._timer = null;
			self._delay = 30;
		}
	}

	private exitMagicCardView(): void {
		let self = this;
		if (self._timer && self._timer.running) {
			return App.MessageManger.showText(App.LanguageManager.getLanguageText("magicCardView.txt.01"));
		}
		if (!self._model.rewardHeroItemTwo) {
			self.showRewardAlert();
		}
		App.ViewManager.close(ViewConst.MagicCardMainView);
	}

	public close(...param: any[]): void {
		super.close(param);
		let self = this;
		self.removeTimer();
		self.resetView();
		SocketManager.Instance.out.sendMagicCardExit();
	}
}
