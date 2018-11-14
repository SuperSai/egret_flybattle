/**
 * 英雄排行榜界面
 */
class HeroRankView extends BaseAlert {

	private lists: eui.List;
	private _model: WorldBossModel;
	private _bossHp: number;
	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer, SkinName.HeroRankViewSkin, 0.7);
	}

	public initData(): void {
		super.initData();
		let self = this;
		self._model = <WorldBossModel>self.controller.getModel();
		self.lists.itemRenderer = HeroRankItem;
		self.lists.dataProvider = new eui.ArrayCollection(self._model.heroRankList);
		self._model.bossLeftHp = self._bossHp;
	}

	public open(...param: any[]): void {
		super.open(param);
		let self = this;
		self._bossHp = param[0];
	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.maskRect.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onMaskHandler, self);
	}

	protected onMaskHandler() {
		super.onMaskHandler();
		World.Instance.removeWorld();
		App.SceneManager.clear();
		App.ViewManager.close(ViewConst.Battle);
		if (App.ViewManager.open(ViewConst.Hall)) {
			App.ViewManager.open(ViewConst.WorldBossMsgView);
		}
	}
}