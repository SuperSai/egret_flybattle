/**
 * 通用消息提示框
 */
class PromptAlert extends BaseAlert {

	public txt_title: eui.Label;
	public txt_des: eui.Label;
	public btn_cancel: eui.Group;
	public btn_sure: eui.Group;
	public btn_isTip: eui.CheckBox;

	private _info: AlertInfo;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer, SkinName.PromptAlertSkin);
	}

	public open(...param: any[]): void {
		super.open(param);
		let self = this;
		self._info = param[0];
		if (self._info) {
			self.updateView();
		}
	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.btn_sure.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onSureHandler, self);
		self.btn_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onCancelHandler, self);
		self.btn_isTip.addEventListener(egret.Event.CHANGE, self.onClickIsTip, self);
		self.setBtnEffect(["btn_sure", "btn_cancel"])
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_sure.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onSureHandler, self);
		self.btn_cancel.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onCancelHandler, self);
		self.btn_isTip.removeEventListener(egret.Event.CHANGE, self.onClickIsTip, self);
	}

	private updateView(): void {
		let self = this;
		self.txt_title.text = self._info.title;
		self.txt_des.text = self._info.des;
	}

	private onSureHandler(): void {
		let self = this;
		if (self._info && self._info.sureCallback) {
			self._info.sureCallback(self._info.isTip);
		}
		App.ViewManager.close(ViewConst.PromptAlert);
	}

	private onCancelHandler(): void {
		let self = this;
		App.ViewManager.close(ViewConst.PromptAlert);
	}

	/** 本次登陆不再提示 */
	private onClickIsTip(event: egret.TouchEvent): void {
		let self = this;
		///获得当前复选框
		var checkBox: eui.CheckBox = <eui.CheckBox>event.target;
		if (!self._info.isTip) {
			self._info.isTip = true;
			checkBox.currentState = "down";
		}
		else {
			self._info.isTip = false;
			checkBox.currentState = "upAndSelected";
		}
	}
}
