class TeamReplaceView extends BaseAlert {

	private btn_ssr: eui.Group;
	private btn_sr: eui.Group;
	private btn_r: eui.Group;
	private btn_all: eui.Group;
	private btn_captain: eui.Group;
	private btn_leftPlayer: eui.Group;
	private btn_rightPlayer: eui.Group;
	private listRole: eui.List;
	private listSkill: eui.List;
	private listStar: eui.List;
	private txt_heroName: eui.Label;
	private txt_attack: eui.Label;
	private txt_level: eui.Label;
	private quaImg: eui.Image;
	private heroImg: eui.Image;

	private _roleColl: eui.ArrayCollection;
	private _currSelectBtn: any;
	private _oldSelectRole: any;
	private _roleInfo: HeroInfo;
	private _starVO: HeroStarVO;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer, SkinName.TeamReplaceViewSkin, 0.6);
		this.isMaskTouch = false;
	}

	public initUI(): void {
		super.initUI();
		let self = this;
	}

	public initData(): void {
		super.initData();
		let self = this;

		self._roleInfo = App.HerosManager.getHeroInfo(App.HerosManager.doubtfulInfo.captain);
		App.HerosManager.oldSelectReplaceId = self._roleInfo.heroId;
		self.onUpdateRoleData(self._roleInfo);

		self.listStar.itemRenderer = Star;
		self.listSkill.itemRenderer = Skill;
		self._roleColl = new eui.ArrayCollection();
		self.listRole.itemRenderer = Role;
		self.listRole.dataProvider = self._roleColl;
		self.setBtnStyle(self.btn_all);
		self.onUpdateRoleList(App.HerosManager.getHeroList(HERO_TYPE.ALL, HERO_STATE.ATTACK));
		self.listRole.validateNow();
		self._currSelectBtn = self.btn_all;
		self._oldSelectRole = self.listRole.getChildAt(0);
	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.btn_ssr.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_sr.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_r.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_all.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_captain.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_leftPlayer.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_rightPlayer.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.setBtnEffect(["btn_captain", "btn_leftPlayer", "btn_rightPlayer", "btn_close"]);
		self.listRole.addEventListener(eui.ItemTapEvent.ITEM_TAP, self.onRoleItemTap, self);
		App.HerosManager.addEventListener(HerosEventType.UPDATE_DOUBTFUL, self.onUpdateView, self);
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_ssr.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_sr.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_r.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_all.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_captain.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_leftPlayer.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_rightPlayer.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.listRole.removeEventListener(eui.ItemTapEvent.ITEM_TAP, self.onRoleItemTap, self);
		App.HerosManager.removeEventListener(HerosEventType.UPDATE_DOUBTFUL, self.onUpdateView, self);
	}

	private onClickHandler(evt: egret.TouchEvent): void {
		let self = this;
		switch (evt.target) {
			case self.btn_ssr:
				self.setBtnStyle(self.btn_ssr);
				self.onUpdateRoleList(App.HerosManager.getHeroList(HERO_TYPE.SSR, HERO_STATE.ATTACK));
				break;
			case self.btn_sr:
				self.setBtnStyle(self.btn_sr);
				self.onUpdateRoleList(App.HerosManager.getHeroList(HERO_TYPE.SR, HERO_STATE.ATTACK));
				break;
			case self.btn_r:
				self.setBtnStyle(self.btn_r);
				self.onUpdateRoleList(App.HerosManager.getHeroList(HERO_TYPE.R, HERO_STATE.ATTACK));
				break;
			case self.btn_all:
				self.setBtnStyle(self.btn_all);
				self.onUpdateRoleList(App.HerosManager.getHeroList(HERO_TYPE.ALL, HERO_STATE.ATTACK));
				break;
			case self.btn_captain://队长
				if (self._roleInfo.heroId == App.HerosManager.doubtfulInfo.captain) {
					return App.MessageManger.showText(App.LanguageManager.getLanguageText("TeamView.txt.01"));
				}
				if (self._roleInfo.heroId == App.HerosManager.doubtfulInfo.leftPlayer) {
					SocketManager.Instance.out.sendHerosDoubtful(self._roleInfo.heroId, App.HerosManager.doubtfulInfo.captain, App.HerosManager.doubtfulInfo.rightPlayer);
				} else if (self._roleInfo.heroId == App.HerosManager.doubtfulInfo.rightPlayer) {
					SocketManager.Instance.out.sendHerosDoubtful(self._roleInfo.heroId, App.HerosManager.doubtfulInfo.leftPlayer, App.HerosManager.doubtfulInfo.captain);
				} else {
					SocketManager.Instance.out.sendHerosDoubtful(self._roleInfo.heroId, App.HerosManager.doubtfulInfo.leftPlayer, App.HerosManager.doubtfulInfo.rightPlayer);
				}
				break;
			case self.btn_leftPlayer://左队员
				if (self._roleInfo.heroId == App.HerosManager.doubtfulInfo.leftPlayer) {
					return App.MessageManger.showText(App.LanguageManager.getLanguageText("TeamView.txt.02"));
				}
				if (self._roleInfo.heroId == App.HerosManager.doubtfulInfo.captain) {
					SocketManager.Instance.out.sendHerosDoubtful(App.HerosManager.doubtfulInfo.leftPlayer, self._roleInfo.heroId, App.HerosManager.doubtfulInfo.rightPlayer);
				} else if (self._roleInfo.heroId == App.HerosManager.doubtfulInfo.rightPlayer) {
					SocketManager.Instance.out.sendHerosDoubtful(App.HerosManager.doubtfulInfo.captain, self._roleInfo.heroId, App.HerosManager.doubtfulInfo.leftPlayer);
				} else {
					SocketManager.Instance.out.sendHerosDoubtful(App.HerosManager.doubtfulInfo.captain, self._roleInfo.heroId, App.HerosManager.doubtfulInfo.rightPlayer);
				}
				break;
			case self.btn_rightPlayer://右队员
				if (self._roleInfo.heroId == App.HerosManager.doubtfulInfo.rightPlayer) {
					return App.MessageManger.showText(App.LanguageManager.getLanguageText("TeamView.txt.03"));
				}
				if (self._roleInfo.heroId == App.HerosManager.doubtfulInfo.captain) {
					SocketManager.Instance.out.sendHerosDoubtful(App.HerosManager.doubtfulInfo.rightPlayer, App.HerosManager.doubtfulInfo.leftPlayer, self._roleInfo.heroId);
				} else if (self._roleInfo.heroId == App.HerosManager.doubtfulInfo.leftPlayer) {
					SocketManager.Instance.out.sendHerosDoubtful(App.HerosManager.doubtfulInfo.captain, App.HerosManager.doubtfulInfo.rightPlayer, self._roleInfo.heroId);
				} else {
					SocketManager.Instance.out.sendHerosDoubtful(App.HerosManager.doubtfulInfo.captain, App.HerosManager.doubtfulInfo.leftPlayer, self._roleInfo.heroId);
				}
				break;
		}
		if (evt.target != self.btn_captain && evt.target != self.btn_leftPlayer && evt.target != self.btn_rightPlayer) self._currSelectBtn = evt.target;
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
		App.HerosManager.oldSelectReplaceId = itemTap.item.heroId;
	}

	private onUpdateView(): void {
		let self = this;
		if (self._oldSelectRole) {
			(<Role>self._oldSelectRole).selectImg.visible = false;
			self._oldSelectRole = null;
			App.HerosManager.oldSelectReplaceId = -1;
		}
		self.setBtnStyle(self.btn_all);
		self.onUpdateRoleList(App.HerosManager.getHeroList(HERO_TYPE.ALL, HERO_STATE.ATTACK));
		self._currSelectBtn = self.btn_all;
	}

	/** 更新基础角色数据 */
	private onUpdateRoleData(info: HeroInfo): void {
		let self = this;
		self.txt_heroName.text = info.heroVO.name;
		self.txt_level.text = info.level + "";
		self.txt_attack.text = info.damage + "";
		self.quaImg.source = "com_qua_" + info.heroVO.quality;
		let path: string = App.PathManager.HeroBigImgPath.replace("{0}", info.heroVO.bigIcon);
		App.DisplayUtils.addAsyncBitmapToImage(path, self.heroImg);

		self.listStar.dataProvider = new eui.ArrayCollection(App.ObjectUtils.splitToStar(info.star));
		self._starVO = App.HerosManager.getSkillListByStar(info.configId, info.star);
		self.listSkill.dataProvider = new eui.ArrayCollection(self._starVO.skillIdList);
	}

	/** 更新角色列表 */
	private onUpdateRoleList(roleList: any[]): void {
		let self = this;
		self._roleColl.removeAll();
		self._roleColl.replaceAll(roleList);
	}

	/** 设置按钮样式 */
	private setBtnStyle(btn: any): void {
		let self = this;
		if (self._currSelectBtn) (<eui.Image>self[self._currSelectBtn.name]).source = "role_btn_3";
		(<eui.Image>self[btn.name]).source = "role_btn_2";
	}
}