/**
 * BOSS出现的警告逻辑
 */
class BossWarningLogic {

	/** 预警动画 */
	private _warningBone: BoneAnimation;
	private _silhouetteImg: eui.Image;
	public constructor() {
	}

	/** 开始BOSS预警 */
	public startWarning(icon: string, callBcak: Function): void {
		let self = this;
		if (self._warningBone) {
			App.DisplayUtils.removeFromParent(self._warningBone);
		}
		if (self._silhouetteImg) {
			App.DisplayUtils.removeFromParent(self._silhouetteImg);
		}
		let path: string = App.PathManager.BossSilhouettePath.replace("{0}", icon);
		self._silhouetteImg = new eui.Image(path);
		self._silhouetteImg.horizontalCenter = "0";
		self._silhouetteImg.top = 230;
		self._warningBone = App.ResourcePool.pop("ui_danger", ResourcePool.SKE);
		App.LayerManager.addToLayer(self._warningBone, LayerManager.GAME_UI_LAYER);
		App.LayerManager.addToLayer(self._silhouetteImg, LayerManager.GAME_UI_LAYER);
		self._warningBone.play(() => {
			App.DisplayUtils.removeFromParent(self._silhouetteImg);
			App.DisplayUtils.removeFromParent(self._warningBone);
			callBcak();
		}, self);
	}

	private static _instance: BossWarningLogic;
	public static get Instance(): BossWarningLogic {
		if (BossWarningLogic._instance == null) {
			BossWarningLogic._instance = new BossWarningLogic();
		}
		return BossWarningLogic._instance;
	}
}