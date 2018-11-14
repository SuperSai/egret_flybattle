class TeamItem extends BaseItem {

	private bgImg: eui.Image;
	private tagImg: eui.Image;
	private quaImg: eui.Image;
	private txt_heroName: eui.Label;
	private txt_level: eui.Label;
	private txt_attack: eui.Label;
	private listSkill: eui.List;
	private listStar: eui.List;
	private btn_addRole: eui.Button;
	private tagGroup: eui.Group;
	private starGroup: eui.Group;
	private infoGroup: eui.Group;
	private roleDataGroup: eui.Group;
	private _heroId: number;
	private _heroInfo: HeroInfo;
	private _starVO: HeroStarVO;

	public constructor() {
		super(SkinName.TeamItemSkin);
	}

	public onAwake($data: any): void {
		super.onAwake($data);
		let self = this;
		self._heroId = $data;
		self.roleDataGroup.visible = self._heroId != -1;
		self.btn_addRole.visible = self._heroId == -1;
		if (self._heroId != -1) {
			self._heroInfo = App.HerosManager.getHeroInfo(self._heroId);
			self.txt_heroName.text = self._heroInfo.heroVO.name;
			self.txt_level.text = self._heroInfo.level + "";
			self.txt_attack.text = self._heroInfo.damage + "";
			self.quaImg.source = "com_qua_" + self._heroInfo.heroVO.quality;

			switch (self._heroId) {
				case App.HerosManager.doubtfulInfo.captain:
					self.tagGroup.left = 0;
					self.starGroup.left = 12;
					self.infoGroup.right = 22;
					self.bgImg.source = "team_icon_di1";
					self.tagImg.source = "team_icon_wlod_1";
					break;
				case App.HerosManager.doubtfulInfo.leftPlayer:
					self.tagGroup.right = 0;
					self.starGroup.right = 12;
					self.infoGroup.left = 22;
					self.bgImg.source = "team_icon_di2";
					self.tagImg.source = "team_icon_wlod_2";
					break;
				case App.HerosManager.doubtfulInfo.rightPlayer:
					self.tagGroup.left = 0;
					self.starGroup.left = 12;
					self.infoGroup.right = 22;
					self.bgImg.source = "team_icon_di3";
					self.tagImg.source = "team_icon_wlod_3";
					break;
			}
			self.initStarList();
			self.initSkillList();
		}
		else {
			self.bgImg.source = "team_icon_di6";
		}
		self.addEvents();
	}

	private initSkillList(): void {
		let self = this;
		self.listSkill.itemRenderer = Skill;
		self._starVO = App.HerosManager.getSkillListByStar(self._heroInfo.configId, self._heroInfo.star);
		self.listSkill.dataProvider = new eui.ArrayCollection(self._starVO.skillIdList);
	}

	private initStarList(): void {
		let self = this;
		self.listStar.itemRenderer = Star;
		self.listStar.dataProvider = new eui.ArrayCollection(App.ObjectUtils.splitToStar(self._heroInfo.star));
	}

	public addEvents(): void {
		let self = this;
		self.btn_addRole.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onShowReplaceView, self);
		self.setBtnEffect(["btn_addRole"]);
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_addRole.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onShowReplaceView, self);
	}

	/** 显示更换阵容界面 */
	private onShowReplaceView(): void {
		let self = this;
		App.ViewManager.open(ViewConst.TeamReplaceView);
	}
}