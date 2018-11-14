class CurrencyItem extends BaseItem {

	public btn_add: eui.Button;
	public iconImg: eui.Image;
	public lab_count: eui.Label;

	/** 货币类型 */
	private _type: number;

	public constructor() {
		super(SkinName.CurrencyItemSkin);
	}

	public onAwake($data: any): void {
		super.onAwake($data);
		let self = this;
		self._type = $data;
		self.iconImg.source = "com_item_" + self._type;

		self.addEvents();
		self.updateCurrencyCount();
	}

	public addEvents(): void {
		let self = this;
		self.btn_add.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onShowCechargeView, self);
		self.setBtnEffect(["btn_add"]);
		App.PlayerInfoManager.addEventListener(PlayerInfoManager.UPDATE_CURRENCY_COUNT, self.onUpdateView, self);
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_add.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onShowCechargeView, self);
		App.PlayerInfoManager.removeEventListener(PlayerInfoManager.UPDATE_CURRENCY_COUNT, self.onUpdateView, self);
	}

	/** 更新界面 */
	private onUpdateView(evt: egret.Event): void {
		let self = this;
		if (evt.data != self._type) return;
		self.updateCurrencyCount();
	}

	/** 更新货币数量 */
	private updateCurrencyCount(): void {
		let self = this;
		self.lab_count.text = App.PlayerInfoManager.getCurrencyNum(self._type) + "";
	}

	/** 显示充值界面 */
	private onShowCechargeView(): void {

	}
}