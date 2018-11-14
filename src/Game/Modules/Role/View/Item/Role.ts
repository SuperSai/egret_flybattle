class Role extends BaseItem {

	public roleImg: eui.Image;
	public quaImg: eui.Image;
	public iconImg: eui.Image;
	/** 标识 -- 队长、队员 */
	public tagImg: eui.Image;
	public selectImg: eui.Image;
	public txt_level: eui.Label;
	public listStar: eui.List;
	public dataGroup: eui.Group;
	public txt_count: eui.Label;

	private _info: HeroInfo;

	public constructor() {
		super(SkinName.RoleSkin);
	}

	public dataChanged() {
		super.dataChanged();
		let self = this;
		self._info = self.data;
		if (!self._info) return;
		self.initView();
		self.setImgStyle();
	}

	private initView(): void {
		let self = this;
		self.selectImg.visible = false;
		self.quaImg.source = "com_qua_" + self._info.heroVO.quality;
		self.txt_level.text = App.LanguageManager.getLanguageText("RoleView.txt.02", self._info.level);

		let path: string = App.PathManager.HeroSmallImgPath.replace("{0}", self._info.heroVO.smallIcon);
		App.DisplayUtils.addAsyncBitmapToImage(path, self.roleImg);


		self.dataGroup.visible = self._info.state == HERO_STATE.GOLD || self._info.state == HERO_STATE.ATTACK;
		self.listStar.visible = self._info.state == HERO_STATE.STAR;

		if (self._info.state == HERO_STATE.GOLD) {
			if (App.HerosManager.oldSelectSellHeroId.ContainsKey(self._info.heroId)) {
				self.selectImg.visible = true;
			}
			self.iconImg.source = "com_item_1";
			self.txt_count.text = App.HerosManager.getHeroLevelData(self._info.heroVO.quality, self._info.level).gold + "";
		} else if (self._info.state == HERO_STATE.STAR) {
			if (App.HerosManager.oldSelectHeroId == self._info.heroId) {
				self.selectImg.visible = true;
			}
			self.listStar.itemRenderer = Star;
			self.listStar.dataProvider = new eui.ArrayCollection(App.ObjectUtils.splitToStar(self._info.star));
		} else if (self._info.state == HERO_STATE.ATTACK) {
			if (App.HerosManager.oldSelectReplaceId == self._info.heroId) {
				self.selectImg.visible = true;
			}
			self.iconImg.source = "com_icon_sh";
			self.txt_count.text = self._info.damage + "";
		}
	}

	/** 设置图片样式 */
	private setImgStyle(): void {
		let self = this;
		switch (self._info.heroId) {
			case App.HerosManager.doubtfulInfo.captain:
				self.tagImg.visible = true;
				self.tagImg.source = "role_icon_wold_1";
				break;
			case App.HerosManager.doubtfulInfo.leftPlayer:
				self.tagImg.visible = true;
				self.tagImg.source = "role_icon_wold_2";
				break;
			case App.HerosManager.doubtfulInfo.rightPlayer:
				self.tagImg.visible = true;
				self.tagImg.source = "role_icon_wold_3";
				break;
			default:
				self.tagImg.visible = false;
				break;
		}
	}

	get info(): HeroInfo {
		return this._info;
	}
}