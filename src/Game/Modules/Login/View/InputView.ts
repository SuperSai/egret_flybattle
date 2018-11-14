class InputView extends BaseView {

	public nickNameGroup: eui.Group;
	public txt_input: eui.EditableText;
	public serverGroup: eui.Group;
	public serverNameLabel: eui.Label;
	public btn_random: eui.Button;
	public stateIcon: eui.Image;
	public serverIdLabel: eui.Label;
	public btn_enter: eui.Group;
	public okBtn: eui.Group;
	private state: number;
	private _model: LoginModel;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.skinName = SkinName.InputViewSkin;
	}

	/**
	 * 1.测试环境输入账号   
	 * 2.选服，老号可以点击直接进入游戏   
	 * 3.新号输入昵称，点击确定进入游戏 
	 * */
	public setState(state: number): void {
		let self = this;
		self._model = <LoginModel>self.controller.getModel();
		self.state = state;
		self.serverGroup.visible = state == 2;
		self.nickNameGroup.visible = state != 2;
		self.btn_random.visible = state != 2;
		self.btn_enter.visible = state != 3;
		self.okBtn.visible = state == 3;
		if (state == 1) {
			self.txt_input.text = Math.ceil(Math.random() * 100000) + ".gm";
		} else if (state == 2) {
			self.serverNameLabel.text = self._model.showServer.serverName;
			self.serverIdLabel.text = self._model.showServer.serverId + "";
			if (self._model.showServer.heat == 1 || self._model.showServer.heat == 4) {
				self.stateIcon.visible = true;
				self.stateIcon.source = self._model.showServer.heat == 1 ? "login_json.login_icon_xin" : "login_json.login_icon_huo";
			} else {
				self.stateIcon.visible = false;
			}
		} else if (state == 3) {
			self.txt_input.text = App.PlayerInfoManager.Info.nickName;
		}
	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.btn_enter.addEventListener(egret.TouchEvent.TOUCH_TAP, self.enterHandler, self);
		self.serverGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onShowServerView, self);
		self.btn_random.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onRandomName, self);
		self.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, self.okBtnHandler, self);
		self.setBtnEffect(["btn_enter", "btn_random", "serverGroup", "okBtn"]);
		self.registerFunc(LoginConst.SELECT_SERVER, self.selectServerHandler, self);
		self.registerFunc(LoginConst.SERVERLIST_MSG, self.serverListHandler, self);
		self.registerFunc(LoginConst.NEWPLAYER_LOGIN, self.newPlayerHandler, self);
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.LOGIN_ERROR), self.loginErrorHandler, self);
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_enter.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.enterHandler, self);
		self.serverGroup.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onShowServerView, self);
		self.btn_random.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onRandomName, self);
		self.okBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.okBtnHandler, self);
	}

	private enterHandler(): void {
		let self = this;
		if (self.state == 1) {
			App.PlayerInfoManager.Info.userName = self.txt_input.text;
			(<LoginController>self.controller).getServerInfo();
		} else {
			(<LoginController>self.controller).loginGame();
			self.btn_enter.touchEnabled = false;
		}
	}

	/** 随机名字 */
	private onRandomName(): void {
		let self = this;
		let firstName = (GlobleData.getData(GlobleData.PlayerNameVO, Math.floor(App.MathUtils.Range(1, 5486))) as PlayerNameVO).firstName;
		let lastName = (GlobleData.getData(GlobleData.PlayerNameVO, Math.floor(App.MathUtils.Range(1, 5486))) as PlayerNameVO).lastName;
		self.txt_input.text = firstName + lastName;
	}

	private okBtnHandler(): void {
		let self = this;
		if (self.txt_input.text == "") {

			return App.MessageManger.showText(App.LanguageManager.getLanguageText("login.inputName.No"));
		}
		let shareData: string = App.PlayerInfoManager.Info.shareData + ",1";
		App.PlayerInfoManager.Info.nickName = self.txt_input.text;
		let headPic: string = "";
		switch (ext.getPlatform()) {
			case "wx":
				headPic = App.PlayerInfoManager.Info.wxUserInfo.avatarUrl;
				break;
			case "hgame":
				headPic = App.PlayerInfoManager.Info.headPic;
				break;
		}
		SocketManager.Instance.out.sendServerLogin(headPic, App.PlayerInfoManager.Info.nickName, shareData);
		self.okBtn.touchEnabled = false;
	}

	private onShowServerView(): void {
		let self = this;
		App.ViewManager.open(ViewConst.ServerView);
	}

	private selectServerHandler(e: egret.Event): void {
		let self = this;
		self.setState(2);
	}

	private newPlayerHandler(): void {
		let self = this;
		self.setState(3);
	}

	private serverListHandler(): void {
		let self = this;
		self.setState(2);
	}

	private loginErrorHandler(): void {
		let self = this;
		self.okBtn.touchEnabled = true;
	}

}