/**
 * 水晶使用界面
 */
class CrystalUseAlert extends BaseAlert {

	private lists: eui.List;
	private btn_sure: eui.Group;
	private _oldSelectItem: any;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer, SkinName.CrystalUseAlertSkin);
	}

	public initData(): void {
		super.initData();
		let self = this;
		self.lists.itemRenderer = Items;
		self.updateCrystal();
	}

	public open(...param: any[]): void {
		super.open(param);
		let self = this;

	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.btn_sure.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onSureHandler, self);
		self.setBtnEffect(["btn_sure", "btn_close"]);
		self.lists.addEventListener(eui.ItemTapEvent.ITEM_TAP, self.onListItemTap, self);
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_sure.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onSureHandler, self);
		self.lists.removeEventListener(eui.ItemTapEvent.ITEM_TAP, self.onListItemTap, self);
	}

	private onListItemTap(itemTap: eui.ItemTapEvent): void {
		let self = this;
		if (!itemTap || !itemTap.itemRenderer || !itemTap.item) return;
		if (self._oldSelectItem) {
			(<Items>self._oldSelectItem).selectImg.visible = false;
		}
		(<Items>itemTap.itemRenderer).selectImg.visible = true;
		self._oldSelectItem = itemTap.itemRenderer;
	}

	private onSureHandler(): void {
		let self = this;
		if (!self._oldSelectItem) return App.MessageManger.showText(App.LanguageManager.getLanguageText("worldBossView.txt.01"));
		let itemInfo: ItemInfo = (<Items>self._oldSelectItem).Info;
		if (itemInfo && itemInfo.num > 0) {
			SocketManager.Instance.out.sendWorldBossOpenToKey(itemInfo.itemId);
			App.ViewManager.close(ViewConst.CrystalUseAlert);
		} else {
			return App.MessageManger.showText(App.LanguageManager.getLanguageText("worldBossView.txt.02"));
		}
	}

	private updateCrystal(): void {
		let self = this;
		self.lists.dataProvider = new eui.ArrayCollection([
			App.PlayerInfoManager.getItemInfo(ITEM_TYPE.COPPER_KEY, App.PlayerInfoManager.getCurrencyNum(ITEM_TYPE.COPPER_KEY)),
			App.PlayerInfoManager.getItemInfo(ITEM_TYPE.SILVER_KEY, App.PlayerInfoManager.getCurrencyNum(ITEM_TYPE.SILVER_KEY)),
			App.PlayerInfoManager.getItemInfo(ITEM_TYPE.GOLD_KEY, App.PlayerInfoManager.getCurrencyNum(ITEM_TYPE.GOLD_KEY))
		]);
		self.lists.validateNow();
	}

}