/**
 * 角色升星界面
 */
class RoleRiseStarView extends BaseAlert {

	private btn_riseStar: eui.Group;
	private txt_roleName: eui.Label;
	private txt_level: eui.Label;
	private txt_attack: eui.Label;
	private txt_addAttack: eui.Label;
	private roleImg: eui.Image;
	private listStar: eui.List;
	private listSkill: eui.List;
	private role: Role;
	private _roleInfo: HeroInfo;
	private _starVO: HeroStarVO;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer, SkinName.RoleRiseStarViewSkin, 0.6);
		this.isMaskTouch = false;
	}

	public initUI(): void {
		super.initUI();
		let self = this;
		self.listStar.itemRenderer = Star;
		self.listSkill.itemRenderer = Skill;
	}

	public open(...param: any[]): void {
		super.open(param);
		let self = this;
		self._roleInfo = param[0];
	}

	public initData(): void {
		super.initData();
		let self = this;
		self.txt_level.text = App.LanguageManager.getLanguageText("RoleView.txt.02", self._roleInfo.level);
		self.txt_roleName.text = self._roleInfo.heroVO.name;
		let path: string = App.PathManager.HeroSmallImgPath.replace("{0}", self._roleInfo.heroVO.smallIcon);
		App.DisplayUtils.addAsyncBitmapToImage(path, self.roleImg);
		self.txt_attack.text = self._roleInfo.damage + "";
		let heroLevelVO: HeroLevelVO = App.HerosManager.getHeroLevelData(self._roleInfo.heroVO.quality, self._roleInfo.level + 1);
		if (heroLevelVO) {
			self.txt_addAttack.text = "+" + heroLevelVO.attack;
		}
		self.listStar.dataProvider = new eui.ArrayCollection(App.ObjectUtils.splitToStar(self._roleInfo.star));
		self._starVO = App.HerosManager.getSkillListByStar(self._roleInfo.configId, self._roleInfo.star);
		self.listSkill.dataProvider = new eui.ArrayCollection(self._starVO.skillIdList);
	}



	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.btn_riseStar.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onRiseStar, self);
		self.setBtnEffect(["btn_riseStar", "btn_close"])
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_riseStar.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onRiseStar, self);
	}

	/** 升星 */
	private onRiseStar(): void {
		let self = this;
		SocketManager.Instance.out.sendHerosStar(self._roleInfo.heroId);
		super.onClosePanel();
	}
}

