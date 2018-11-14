/**
 * 通用奖励提示框
 */
class RewardAlert extends BaseAlert {

	public lists: eui.List;
	public bg: eui.Image;
	public btn_sure: eui.Group;
	private _rewardList: any[];

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer, SkinName.RewardAlertSkin);
	}

	public open(...param: any[]): void {
		super.open(param);
		let self = this;
		self._rewardList = param[0];
		if (!self._rewardList || self._rewardList.length < 1) return;
		switch (param[1]) {
			case REWARD_ITEM_TYPE.ITEM:
				self.lists.itemRenderer = Items;
				break;
			case REWARD_ITEM_TYPE.CARD:
				self.lists.itemRenderer = LuckyCardItem;
				break;
		}
		self.lists.dataProvider = new eui.ArrayCollection(self._rewardList);
		(self.lists.layout as eui.TileLayout).requestedColumnCount = self._rewardList.length > 3 ? 4 : self._rewardList.length == 1 ? 1 : 2;
		if (self._rewardList.length > 3) {
			self.bg.height = 644;
		} else {
			self.bg.height = 506;
		}
	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.btn_sure.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onSureHandler, self);
		self.setBtnEffect(["btn_sure", "btn_close"])
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_sure.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onSureHandler, self);
	}

	private onSureHandler(): void {
		let self = this;
		App.ObjectUtils.removeAllArrayItem(self._rewardList);
		App.ViewManager.close(ViewConst.RewardAlert);
	}
}