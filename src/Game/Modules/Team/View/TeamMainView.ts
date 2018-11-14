/**
 * 编成队伍主界面
 */
class TeamMainView extends BaseView {

	private gold: CurrencyItem;
	private diamond: CurrencyItem;
	private btn_strong: eui.Group;//去强化系统
	private btn_replace: eui.Group;//更换阵容
	private btn_close: eui.Button;
	private item0: TeamItem;//队长
	private item1: TeamItem;//左队员
	private item2: TeamItem;//右队员

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.skinName = SkinName.TeamMainViewSkin;
		this.setResources(["team"]);
	}

	public initUI(): void {
		super.initUI();
		let self = this;
		BattleConfig.AirCraftStartY = 1050;
		App.LayerManager.addToLayer(World.Instance, LayerManager.GAME_UI_LAYER);
	}

	public initData(): void {
		super.initData();
		let self = this;
		self.gold.onAwake(ITEM_TYPE.GOLD);
		self.diamond.onAwake(ITEM_TYPE.TROPHY);
		self.item0.onAwake(App.HerosManager.doubtfulInfo.captain);
		self.item1.onAwake(App.HerosManager.doubtfulInfo.leftPlayer);
		self.item2.onAwake(App.HerosManager.doubtfulInfo.rightPlayer);
	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.btn_strong.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onShowStrongView, self);
		self.btn_replace.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onShowReplaceView, self);
		self.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onCloseView, self);
		self.setBtnEffect(["btn_strong", "btn_replace", "btn_close"]);
		App.HerosManager.addEventListener(HerosEventType.UPDATE_DOUBTFUL, self.onReplaceBattlePlane, self);
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_strong.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onShowStrongView, self);
		self.btn_replace.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onShowReplaceView, self);
		self.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onCloseView, self);
	}


	/** 更换战斗中的角色飞机 */
	private onReplaceBattlePlane(evt: egret.Event): void {
		let self = this;
		switch (evt.data) {
			case PLANE_TYPE.CAPTAIN:
				self.item0.onAwake(App.HerosManager.doubtfulInfo.captain);
				break;
			case PLANE_TYPE.LEFT_PLAYER:
				self.item1.onAwake(App.HerosManager.doubtfulInfo.leftPlayer);
				break;
			case PLANE_TYPE.RIGHT_PLAYER:
				self.item2.onAwake(App.HerosManager.doubtfulInfo.rightPlayer);
				break;
		}
		BattleManager.Instance.removePlane(evt.data);
		BattleManager.Instance.addPlane(evt.data);
	}

	/** 显示强化界面 */
	private onShowStrongView(): void {
		let self = this;
	}

	/** 显示更换阵容界面 */
	private onShowReplaceView(): void {
		let self = this;
		App.ViewManager.open(ViewConst.TeamReplaceView);
	}

	private onCloseView(): void {
		App.ViewManager.close(ViewConst.TeamMainView);
		BattleConfig.AirCraftStartY = 960;
		let displayLayer: DisplayLayer = App.LayerManager.getLayerByType(LayerManager.GAME_UI_LAYER);
		displayLayer.setChildIndex(World.Instance, 1);
	}
}