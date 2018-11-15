class ServerItem extends BaseItem {

	public serverInfoLabel: eui.Label;
	public serverNameLabel: eui.Label;
	public serverStateIcon: eui.Image;
	private interval: number = -1;

	public constructor() {
		super(SkinName.ServerItemSkin);
	}

	public dataChanged(): void {
		super.dataChanged();
		let self = this;
		self.addEvents();
		self.setInfo();
	}

	private setInfo(): void {
		let self = this;
		self.serverInfoLabel.text = self.data.serverId + "";
		self.serverNameLabel.text = self.data.serverName;
		egret.clearInterval(self.interval);
		if (self.data.heat == 1 || self.data.heat == 4) {
			self.serverStateIcon.visible = true;
			self.serverStateIcon.source = self.data.heat == 1 ? "login_json.login_icon_xin" : "login_json.login_icon_huo";
			self.interval = egret.setInterval(() => {
				self.serverStateIcon.visible = !self.serverStateIcon.visible;
			}, self, 1500);
		} else {
			self.serverStateIcon.visible = false;
		}
	}

	public addEvents(): void {
		let self = this;
		self.addEventListener(egret.TouchEvent.TOUCH_TAP, self.clickHandler, self);
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.clickHandler, self);
	}

	private clickHandler(): void {
		let self = this;
		App.ControllerManager.applyFunc(ControllerConst.Login, LoginConst.SELECT_SERVER_VIEW, self.data);
		App.ControllerManager.applyFunc(ControllerConst.Login, LoginConst.SELECT_SERVER, self.data);
	}
}