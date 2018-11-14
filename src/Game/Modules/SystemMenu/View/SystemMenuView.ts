/**
 * 系统菜单功能界面
 */
class SystemMenuView extends BaseView {

	public btn_role: eui.Button;//角色
	public btn_woven: eui.Button;//编成
	public btn_task: eui.Button;//任务
	public btn_shop: eui.Button;//商店
	public btn_rank: eui.Button;//排行榜
	public btn_mail: eui.Button;//邮件
	public btn_set: eui.Button;//设置
	public btn_close: eui.Button;//关闭

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.skinName = SkinName.SystemMenuViewSkin;
		this.setResources(["systemMenu"]);
	}

	public initUI(): void {
		super.initUI();
		let self = this;
	}

	public initData(): void {
		super.initData();
		let self = this;

	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.btn_role.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickMenu, self);
		self.btn_woven.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickMenu, self);
		self.btn_task.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickMenu, self);
		self.btn_shop.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickMenu, self);
		self.btn_rank.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickMenu, self);
		self.btn_mail.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickMenu, self);
		self.btn_set.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickMenu, self);
		self.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickMenu, self);
		self.setBtnEffect(["btn_role", "btn_woven", "btn_task", "btn_shop", "btn_rank", "btn_mail", "btn_set", "btn_close"]);
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_role.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickMenu, self);
		self.btn_woven.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickMenu, self);
		self.btn_task.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickMenu, self);
		self.btn_shop.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickMenu, self);
		self.btn_rank.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickMenu, self);
		self.btn_mail.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickMenu, self);
		self.btn_set.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickMenu, self);
		self.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickMenu, self);
	}

	/** 点击系统菜单功能按钮 */
	private onClickMenu(evt: egret.TouchEvent): void {
		let self = this;
		switch (evt.target) {
			case self.btn_role://角色
				App.ViewManager.open(ViewConst.RoleMainView);
				break;
			case self.btn_woven://编成队伍
				App.ViewManager.open(ViewConst.TeamMainView);
				break;
			case self.btn_task://任务
				SocketManager.Instance.out.sendLuckCardCheck();
				break;
			case self.btn_shop://商店
				SocketManager.Instance.out.sendMagicCardInit();
				break;
			case self.btn_rank://排行榜

				break;
			case self.btn_mail://邮件

				break;
			case self.btn_set://设置

				break;
			case self.btn_close:
				App.ViewManager.close(ViewConst.SystemMenuView);
				break;
		}
	}
}