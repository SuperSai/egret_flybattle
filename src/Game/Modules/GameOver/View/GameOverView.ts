class GameOverView extends BaseAlert {

	private playerImg1: eui.Image;
	private playerImg2: eui.Image;
	private playerImg3: eui.Image;
	private btn_sure: eui.Group;
	private btn_share: eui.Group;
	private txt_gold: eui.Label;
	private txt_score: eui.Label;
	private txt_trophy: eui.Label;
	private _data: protocol.SingleGameOverMsg;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer, SkinName.GameOverViewSkin, 0.7);
		this.isMaskTouch = false;
		this.setResources(["gameOver"]);
	}

	public open(...param: any[]): void {
		super.open(param);
		let self = this;
		self._data = param[0];
		if (self._data) {
			self.txt_gold.text = self._data.gold + "";
			self.txt_score.text = self._data.score + "";
			self.txt_trophy.text = self._data.cup + "";
		}
		let path: string = App.PathManager.HeroBigImgPath.replace("{0}", App.HerosManager.heros.TryGetValue(App.HerosManager.doubtfulInfo.captain).heroVO.bigIcon);
		App.DisplayUtils.addAsyncBitmapToImage(path, self.playerImg1);
		if (App.HerosManager.doubtfulInfo.leftPlayer != -1) {
			let path: string = App.PathManager.HeroBigImgPath.replace("{0}", App.HerosManager.heros.TryGetValue(App.HerosManager.doubtfulInfo.leftPlayer).heroVO.bigIcon);
			App.DisplayUtils.addAsyncBitmapToImage(path, self.playerImg2);
		}
		if (App.HerosManager.doubtfulInfo.rightPlayer != -1) {
			let path: string = App.PathManager.HeroBigImgPath.replace("{0}", App.HerosManager.heros.TryGetValue(App.HerosManager.doubtfulInfo.rightPlayer).heroVO.bigIcon);
			App.DisplayUtils.addAsyncBitmapToImage(path, self.playerImg3);
		}
	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.btn_sure.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onGotoHall, self);
		self.btn_share.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onShareHandler, self);
		self.setBtnEffect(["btn_sure", "btn_share"])
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_sure.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onGotoHall, self);
		self.btn_share.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onShareHandler, self);
	}
	/** 回到大厅 */
	private onGotoHall(): void {
		let self = this;
		World.Instance.removeWorld();
		App.SceneManager.clear();
		App.ViewManager.closeAll();
		App.ViewManager.open(ViewConst.Hall);
	}

	/** 分享 */
	private onShareHandler(): void {
		let self = this;
	}

}