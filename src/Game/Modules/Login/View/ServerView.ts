class ServerView extends BaseAlert {

	public cancelBtn: eui.Group;
	public okBtn: eui.Group;
	public btn1: TabButton;
	public btn2: TabButton;
	public selectImg: eui.Image;

	public item1: ServerItem;
	public item2: ServerItem;
	public list: eui.List;
	public scroller: eui.Scroller;
	private _arrColl: eui.ArrayCollection;
	private _model: LoginModel;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer, SkinName.ServerViewSkin, 0.6);
		this.isMaskTouch = false;
	}

	public initUI(): void {
		super.initUI();
		let self = this;
		self._model = <LoginModel>self.controller.getModel();
		self._arrColl = new eui.ArrayCollection();
		self.scroller.viewport = self.list;
		self.list.itemRenderer = ServerItem;
		self.list.dataProvider = self._arrColl;
		self.btn1.selected = true;
		self.btn2.selected = false;
		self.updateList(0);
		self.setItemInfo();
	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, self.okBtnHandler, self);
		self.cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, self.cancelBtnHandler, self);
		self.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, self.listBtnHandler, self);
		self.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, self.listBtnHandler, self);
		self.setBtnEffect(["okBtn", "cancelBtn"]);
		self.registerFunc(LoginConst.SELECT_SERVER_VIEW, self.selectServerHandler, self);
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.okBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.okBtnHandler, self);
		self.cancelBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.cancelBtnHandler, self);
		self.btn1.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.listBtnHandler, self);
		self.btn2.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.listBtnHandler, self);
	}

	private listBtnHandler(e: egret.TouchEvent): void {
		let self = this;
		for (let i = 1; i <= 2; i++) {
			self["btn" + String(i)].selected = false;
		}
		e.currentTarget.selected = true;
		self.updateList(e.currentTarget.btnType);
	}

	private showType: number = -1;
	private updateList(type: number): void {
		let self = this;
		if (type == self.showType) return;
		let arr: any[] = [];
		if (type == 0) {
			arr = self._model.allServerList.concat();
		} else {
			arr = self._model.myServerList.concat();
		}
		self._arrColl.replaceAll(arr);
		self.showType = type;
	}

	private setItemInfo(): void {
		let self = this;
		if (self._model.myLatelyServer) {
			self.item1.data = self._model.myLatelyServer;
			self.item1.visible = true;
		} else {
			self.item1.visible = false;
		}

		if (self._model.newServer) {
			self.item2.data = self._model.newServer;
			self.item2.visible = true;
		} else {
			self.item2.visible = false;
		}
	}

	private selectServerHandler(data: any): void {
		let self = this;
		self._model.showServer = data;
		App.ViewManager.close(ViewConst.ServerView);
	}

	private okBtnHandler(): void {
		let self = this;
		App.ViewManager.close(ViewConst.ServerView);
	}

	private cancelBtnHandler(): void {
		let self = this;
		App.ViewManager.close(ViewConst.ServerView);
	}

	public close(...param: any[]): void {
		super.close(param);
		let self = this;
		self.showType = -1;
	}
}