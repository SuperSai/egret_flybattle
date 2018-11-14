/**
 * 世界BOSS主界面
 */
class WorldBossMainView extends BaseView {

	private btn_open: eui.Group;
	private btn_add: eui.Group;
	private btn_close: eui.Button;
	private advImg: eui.Image;
	private lists: eui.List;
	/** 能量刷新时间 */
	private txt_time: eui.Label;
	private _model: WorldBossModel;
	private _currPowerTime: number = 0;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.skinName = SkinName.WorldBossMainViewSkin;
		this.setResources(["worldBoss"]);
	}

	public initUI(): void {
		super.initUI();
		let self = this;
		self.advImg.visible = ext.getIsAD();
	}

	public initData(): void {
		super.initData();
		let self = this;
		self._model = <WorldBossModel>self.controller.getModel();
		self.lists.itemRenderer = EnergyItem;
		self.onUpdatePower();
	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.btn_open.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onOpenWorldBoss, self);
		self.btn_add.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onAddEnergyCount, self);
		self.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onCloseHandler, self);
		self.setBtnEffect(["btn_open", "btn_add", "btn_close"])
		self.registerFunc(WorldBossConst.UPDATE_POWER_TIME, self.onUpdatePower, self);
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_open.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onOpenWorldBoss, self);
		self.btn_add.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onAddEnergyCount, self);
		self.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onCloseHandler, self);
	}

	/** 开启世界BOSS */
	private onOpenWorldBoss(): void {
		let self = this;
		App.ViewManager.open(ViewConst.CrystalUseAlert);
	}

	/** 增加战斗能量 */
	private onAddEnergyCount(): void {
		let self = this;
	}

	/** 更新体力 */
	private onUpdatePower(): void {
		let self = this;
		self.lists.dataProvider = new eui.ArrayCollection(new Array(self._model.maxPower));
		self.lists.validateNow();
		for (let i: number = 0; i < self._model.maxPower; i++) {
			if (i < self._model.power) {
				(<EnergyItem>self.lists.getChildAt(i)).setState(true);
			}
		}
		if (self._model.power == self._model.maxPower) {
			App.TimerManager.remove(self.onUpdatePowerTime, self);
			self.txt_time.text = App.LanguageManager.getLanguageText("worldBossView.txt.10");
		} else {
			self._currPowerTime = Number(self._model.powerTime) - App.TimeUtil.getCurServerTime() * 1000;
			self.txt_time.text = App.TimeUtil.S2H(self._currPowerTime, ":", false);
			App.TimerManager.doTimer(1000, 0, self.onUpdatePowerTime, self);
		}
	}

	/** 更新体力恢复时间 */
	private onUpdatePowerTime(): void {
		let self = this;
		self._currPowerTime -= 1000;
		self.txt_time.text = App.TimeUtil.S2H(self._currPowerTime, ":", false);
		if (self._currPowerTime <= 0) {
			App.TimerManager.remove(self.onUpdatePowerTime, self);
			self.txt_time.text = "00:00";
			SocketManager.Instance.out.sendWorldBossPower();
		}
	}

	private onCloseHandler(): void {
		let self = this;
		App.ViewManager.close(ViewConst.WorldBossMainView);
	}
}