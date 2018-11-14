/**
 * 角色界面
 */
class RoleMainView extends BaseView {

	private btn_level: eui.Group;
	private btn_ssr: eui.Group;
	private btn_sr: eui.Group;
	private btn_r: eui.Group;
	private btn_all: eui.Group;
	private btn_sell: eui.Button;
	private btn_close: eui.Button;
	private txt_skillName: eui.Label;
	private txt_skillDes: eui.Label;
	private txt_heroName: eui.Label;
	private txt_attack: eui.Label;
	private txt_level: eui.Label;
	private txt_gold: eui.Label;
	private txt_btn: eui.Label;
	private heroMask: eui.Image;
	private heroImg: eui.Image;
	private quaImg: eui.Image;
	private listSkill: eui.List;
	private listStar: eui.List;
	private listRole: eui.List;
	private gold: CurrencyItem;
	private diamond: CurrencyItem;

	private _roleColl: eui.ArrayCollection;
	private _currSelectBtn: any;
	private _oldSelectRole: any;
	private _skillVO: HeroSkillVO;
	private _starVO: HeroStarVO;
	private _oldSkillIndex: number = 0;
	private _roleInfo: HeroInfo;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.skinName = SkinName.RoleMainViewSkin;
		this.setResources(["role"]);
	}

	public initUI(): void {
		super.initUI();
		let self = this;
	}

	public initData(): void {
		super.initData();
		let self = this;
		self.gold.onAwake(ITEM_TYPE.GOLD);
		self.diamond.onAwake(ITEM_TYPE.TROPHY);
		self.listStar.itemRenderer = Star;
		self.listSkill.itemRenderer = Skill;
		self.listRole.itemRenderer = Role;
		self._roleColl = new eui.ArrayCollection();
		self.listRole.dataProvider = self._roleColl;
		self._roleInfo = App.HerosManager.getHeroInfo(App.HerosManager.doubtfulInfo.captain);
		App.HerosManager.oldSelectHeroId = self._roleInfo.heroId;
		self.onUpdateRoleData(self._roleInfo);
		self.onUpdateRoleList(App.HerosManager.getHeroList(HERO_TYPE.ALL));
		self.listRole.validateNow();
		self._currSelectBtn = self.btn_all;
		self._oldSelectRole = self.listRole.getChildAt(0);
	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.btn_level.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_ssr.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_sr.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_r.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_all.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_sell.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.setBtnEffect(["btn_level", "btn_sell", "btn_close"]);
		self.listRole.addEventListener(eui.ItemTapEvent.ITEM_TAP, self.onRoleItemTap, self);
		self.listSkill.addEventListener(eui.ItemTapEvent.ITEM_TAP, self.onRoleSkillItemTap, self);
		self.registerFunc(RoleConst.UPDATE_ROLE_MAIN, self.onUpdateRoleListView, self);
		self.registerFunc(RoleConst.UPDATE_ROLE_INFO, self.onUpdateRoleInfo, self);
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_level.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_ssr.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_sr.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_r.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_all.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_sell.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.listRole.removeEventListener(eui.ItemTapEvent.ITEM_TAP, self.onRoleItemTap, self);
		self.listSkill.removeEventListener(eui.ItemTapEvent.ITEM_TAP, self.onRoleSkillItemTap, self);
	}

	private onClickHandler(evt: egret.TouchEvent): void {
		let self = this;
		switch (evt.target) {
			case self.btn_level:
				self.onRoleLevelHandler();
				break;
			case self.btn_ssr:
				self.setBtnStyle(self.btn_ssr);
				self.onUpdateRoleList(App.HerosManager.getHeroList(HERO_TYPE.SSR));
				break;
			case self.btn_sr:
				self.setBtnStyle(self.btn_sr);
				self.onUpdateRoleList(App.HerosManager.getHeroList(HERO_TYPE.SR));
				break;
			case self.btn_r:
				self.setBtnStyle(self.btn_r);
				self.onUpdateRoleList(App.HerosManager.getHeroList(HERO_TYPE.R));
				break;
			case self.btn_all:
				self.setBtnStyle(self.btn_all);
				self.onUpdateRoleList(App.HerosManager.getHeroList(HERO_TYPE.ALL));
				break;
			case self.btn_sell:	//显示出售界面
				App.ViewManager.open(ViewConst.RoleSellView);
				break;
			case self.btn_close:
				App.ViewManager.close(ViewConst.RoleMainView);
				break;
		}
		if (evt.target != self.btn_level && evt.target != self.btn_sell && evt.target != self.btn_close) self._currSelectBtn = evt.target;
	}

	private onRoleItemTap(itemTap: eui.ItemTapEvent): void {
		let self = this;
		if (!itemTap || !itemTap.itemRenderer || !itemTap.item) return;
		if (self._oldSelectRole) {
			(<Role>self._oldSelectRole).selectImg.visible = false;
		}
		(<Role>itemTap.itemRenderer).selectImg.visible = true;
		self.onUpdateRoleData(itemTap.item);
		self._roleInfo = itemTap.item;
		self._oldSelectRole = itemTap.itemRenderer;
		App.HerosManager.oldSelectHeroId = itemTap.item.heroId;
	}

	/** 更新基础角色数据 */
	private onUpdateRoleData(info: HeroInfo): void {
		let self = this;
		self.txt_heroName.text = info.heroVO.name;
		self.txt_level.text = info.level + "";
		self.txt_attack.text = info.damage + "";
		self.quaImg.source = "com_qua_" + info.heroVO.quality;
		let path: string = App.PathManager.HeroBigImgPath.replace("{0}", info.heroVO.bigIcon);
		App.DisplayUtils.addAsyncBitmapToImage(path, self.heroMask);
		App.DisplayUtils.addAsyncBitmapToImage(path, self.heroImg);

		self.listStar.dataProvider = new eui.ArrayCollection(App.ObjectUtils.splitToStar(info.star));
		self._starVO = App.HerosManager.getSkillListByStar(info.configId, info.star);
		self.listSkill.dataProvider = new eui.ArrayCollection(self._starVO.skillIdList);
		self.onUpdateRoleSkillInfo(self._starVO.skillIdList[0]);

		(<eui.Image>self["skillBg0"]).visible = true;
		(<eui.Image>self["skillBg1"]).visible = false;
		(<eui.Image>self["skillBg2"]).visible = false;

		self.onUpdateRoleLevelGold();
	}

	private onRoleSkillItemTap(itemTap: eui.ItemTapEvent): void {
		let self = this;
		if (self._oldSkillIndex != -1) {
			(<eui.Image>self["skillBg" + self._oldSkillIndex]).visible = false;
		}
		(<eui.Image>self["skillBg" + itemTap.itemIndex]).visible = true;
		self.onUpdateRoleSkillInfo(itemTap.item);
		self._oldSkillIndex = itemTap.itemIndex;
	}

	/** 更新角色技能信息 */
	private onUpdateRoleSkillInfo(skillId: number): void {
		let self = this;
		if (self._starVO.skillIdList && self._starVO.skillIdList.length > 0) {
			self._skillVO = GlobleData.getData(GlobleData.HeroSkillVO, skillId);
			self.txt_skillName.text = self._skillVO.name;
			self.txt_skillDes.text = self._skillVO.desc;
		}
	}

	/** 更新角色升级后信息 */
	private onUpdateRoleInfo(): void {
		let self = this;
		if (App.HerosManager.heros.ContainsKey(self._roleInfo.heroId)) {
			self._roleInfo = App.HerosManager.heros.TryGetValue(self._roleInfo.heroId);
			self.onUpdateRoleListView();
			self.onUpdateRoleLevelGold();
			self.setLevelBtnStyle();
		}
	}

	/** 更新角色列表界面 */
	private onUpdateRoleListView(): void {
		let self = this;
		if (!App.HerosManager.heros.ContainsKey(self._roleInfo.heroId)) {
			self._roleInfo = App.HerosManager.getHeroInfo(App.HerosManager.doubtfulInfo.captain);
		}
		App.HerosManager.oldSelectHeroId = self._roleInfo.heroId;
		self.onUpdateRoleData(self._roleInfo);
		if (self._currSelectBtn == self.btn_all) {
			self.onUpdateRoleList(App.HerosManager.getHeroList(HERO_TYPE.ALL));
		}
		else {
			self.setBtnStyle(self.btn_all);
			self.onUpdateRoleList(App.HerosManager.getHeroList(HERO_TYPE.ALL));
			self._currSelectBtn = self.btn_all;
		}
		self.listRole.validateNow();
		self._oldSelectRole = self.listRole.getChildAt(0);
	}

	/** 角色升级处理 */
	private onRoleLevelHandler(): void {
		let self = this;
		if (App.PlayerInfoManager.getCurrencyNum(ITEM_TYPE.GOLD) < Number(self.txt_gold.text)) {
			return App.MessageManger.showText(App.LanguageManager.getLanguageText("RoleView.txt.03"));
		}
		let result: string = self.isShowRiseStar(self._roleInfo.level);
		if (result != "") {
			if (result != "max") {
				App.ViewManager.open(ViewConst.RoleRiseStarView, self._roleInfo);
			}
			return;
		}
		SocketManager.Instance.out.sendHerosLevel(self._roleInfo.heroId);
	}

	/** 更新角色列表 */
	private onUpdateRoleList(roleList: HeroInfo[]): void {
		let self = this;
		self._roleColl.removeAll();
		self._roleColl.replaceAll(roleList);
		self._roleColl.refresh();
	}

	/** 更新角色升级需要的金币数量 */
	private onUpdateRoleLevelGold(): void {
		let self = this;
		self.txt_gold.text = App.HerosManager.getHeroLevelData(self._roleInfo.heroVO.quality, self._roleInfo.level).gold + "";
	}

	/** 是否显示升星界面 */
	private isShowRiseStar(level: number): string {
		if (level % 50 == 0) {
			return "max";
		} else if (level % 40 == 0) {
			return "true";
		} else if (level % 30 == 0) {
			return "true";
		}
		return "";
	}

	/** 设置按钮样式 */
	private setBtnStyle(btn: any): void {
		let self = this;
		if (self._currSelectBtn) (<eui.Image>self[self._currSelectBtn.name]).source = "btn_anniu2";
		(<eui.Image>self[btn.name]).source = "btn_anniu1";
	}

	/** 设置升级按钮的样式 */
	private setLevelBtnStyle() {
		let self = this;
		let result: string = self.isShowRiseStar(self._roleInfo.level);
		if (result != "") {
			if (result == "max") {
				self.txt_btn.text = "MAX";
				self.btn_level.touchEnabled = false;
			} else {
				self.txt_btn.text = App.LanguageManager.getLanguageText("RoleView.txt.05");
			}
			return;
		}
		self.txt_btn.text = App.LanguageManager.getLanguageText("RoleView.txt.04");
	}
}