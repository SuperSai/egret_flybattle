class MagicCardSelectView extends BaseAlert {

	private btn_left: eui.Group;
	private btn_right: eui.Group;
	private btn_adv: eui.Group;
	private cardItem0: MagicCardItem;
	private cardItem1: MagicCardItem;
	private _model: MagicCardModel;
	private _magicCardController: MagicCardController;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer, SkinName.MagicCardSelectViewSkin);
		this.isMaskTouch = false;
	}

	public initData(): void {
		super.initData();
		let self = this;
		self.cardItem0.rect.alpha = 0;
		self.cardItem1.rect.alpha = 0;
		self._model = <MagicCardModel>self.controller.getModel();
		self._magicCardController = <MagicCardController>self.controller;
		self.cardItem0.updateItemData(self._model.rewardHeroItem);
		self.cardItem1.updateItemData(self._model.rewardHeroItemTwo);
	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.btn_left.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_right.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_adv.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.setBtnEffect(["btn_left", "btn_right", "btn_adv"]);
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_left.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_right.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_adv.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
	}

	private onClickHandler(evt: egret.TouchEvent): void {
		let self = this;
		switch (evt.target) {
			case self.btn_left:
				SocketManager.Instance.out.sendMagicCardGetReward(self._model.rewardHeroItem.id);
				self.showRewardAlert(self._model.rewardHeroItem);
				self.closeView();
				break;
			case self.btn_right:
				SocketManager.Instance.out.sendMagicCardGetReward(self._model.rewardHeroItemTwo.id);
				self.showRewardAlert(self._model.rewardHeroItemTwo);
				self.closeView();
				break;
			case self.btn_adv://看广告
				SocketManager.Instance.out.sendMagicCardGetReward(-1);
				self.showAdvReward();
				self.closeView();
				break;
		}
	}

	/** 显示奖励提示框 */
	private showRewardAlert(item: AwardVO): void {
		let self = this;
		if (item) {
			let itemInfo: ItemInfo = App.ObjectPool.pop("ItemInfo");
			itemInfo.itemId = item.itemId;
			itemInfo.num = item.num;
			self._magicCardController.showRewardView([itemInfo]);
		}
	}

	private showAdvReward(): void {
		let self = this;
		let itemInfo: ItemInfo = App.ObjectPool.pop("ItemInfo");
		itemInfo.itemId = self._model.rewardHeroItem.itemId;
		itemInfo.num = self._model.rewardHeroItem.num;
		let itemInfoTwo: ItemInfo = App.ObjectPool.pop("ItemInfo");
		itemInfoTwo.itemId = self._model.rewardHeroItemTwo.itemId;
		itemInfoTwo.num = self._model.rewardHeroItemTwo.num;
		self._magicCardController.showRewardView([itemInfo, itemInfoTwo]);
	}

	private closeView(): void {
		let self = this;
		self._model.rewardHeroItem = null;
		self._model.rewardHeroItemTwo = null;
		App.ViewManager.close(ViewConst.MagicCardSelectView);
		App.ViewManager.close(ViewConst.MagicCardMainView);
	}
}