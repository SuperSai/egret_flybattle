/**
 * 角色出售界面
 */
class RoleSellView extends BaseAlert {

	public btn_ssr: eui.Group;
	public btn_sr: eui.Group;
	public btn_r: eui.Group;
	public btn_all: eui.Group;
	public btn_sure: eui.Group;
	public listRole: eui.List;
	public txt_price: eui.Label;

	private _roleColl: eui.ArrayCollection;
	private _currSelectBtn: any;
	private _model: RoleModel;
	private _isSell: boolean = false;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer, SkinName.RoleSellViewSkin, 0.6);
		this.isMaskTouch = false;
	}

	public initUI(): void {
		super.initUI();
		let self = this;
		self.txt_price.text = "0";
	}

	public initData(): void {
		super.initData();
		let self = this;
		if (!App.HerosManager.oldSelectSellHeroId) {
			App.HerosManager.oldSelectSellHeroId = new TSDictionary<number, HeroInfo>();
		} else {
			App.HerosManager.oldSelectSellHeroId.clear();
		}
		self._model = <RoleModel>self.controller.getModel();
		self._roleColl = new eui.ArrayCollection();
		self.listRole.itemRenderer = Role;
		self.listRole.dataProvider = self._roleColl;
		self.setBtnStyle(self.btn_all);
		self.onUpdateRole(self.getSellHeros(App.HerosManager.getHeroList(HERO_TYPE.ALL, HERO_STATE.GOLD)));
		self._currSelectBtn = self.btn_all;
	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.btn_ssr.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_sr.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_r.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_all.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_sure.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.setBtnEffect(["btn_sure", "btn_close"]);
		self.listRole.addEventListener(eui.ItemTapEvent.ITEM_TAP, self.onSellRoleItemTap, self);
		self.registerFunc(RoleConst.SELL_ROLE_COMPLETE, self.onUpdateView, self);
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_ssr.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_sr.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_r.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_all.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.btn_sure.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickHandler, self);
		self.listRole.removeEventListener(eui.ItemTapEvent.ITEM_TAP, self.onSellRoleItemTap, self);
	}

	private onClickHandler(evt: egret.TouchEvent): void {
		let self = this;
		switch (evt.target) {
			case self.btn_ssr:
				self.setBtnStyle(evt.target);
				self.onUpdateRole(self.getSellHeros(App.HerosManager.getHeroList(HERO_TYPE.SSR, HERO_STATE.GOLD)));
				break;
			case self.btn_sr:
				self.setBtnStyle(evt.target);
				self.onUpdateRole(self.getSellHeros(App.HerosManager.getHeroList(HERO_TYPE.SR, HERO_STATE.GOLD)));
				break;
			case self.btn_r:
				self.setBtnStyle(evt.target);
				self.onUpdateRole(self.getSellHeros(App.HerosManager.getHeroList(HERO_TYPE.R, HERO_STATE.GOLD)));
				break;
			case self.btn_all:
				self.setBtnStyle(evt.target);
				self.onUpdateRole(self.getSellHeros(App.HerosManager.getHeroList(HERO_TYPE.ALL, HERO_STATE.GOLD)));
				break;
			case self.btn_sure:
				self.sellRoleSure();
				break;
		}
		if (evt.target != self.btn_sure) self._currSelectBtn = evt.target;
	}

	private onSellRoleItemTap(itemTap: eui.ItemTapEvent): void {
		let self = this;
		let info: HeroInfo = itemTap.item;
		let item: Role = (<Role>itemTap.itemRenderer);
		if (App.HerosManager.oldSelectSellHeroId.ContainsKey(info.heroId)) {
			item.selectImg.visible = false;
			self.txt_price.text = (Number(self.txt_price.text) - Number(item.txt_count.text)) + "";
			App.HerosManager.oldSelectSellHeroId.Remove(info.heroId);
			return;
		}
		item.selectImg.visible = true;
		self.txt_price.text = (Number(self.txt_price.text) + Number(item.txt_count.text)) + "";
		App.HerosManager.oldSelectSellHeroId.Add(info.heroId, info);
	}

	/** 更新界面 */
	private onUpdateView(): void {
		let self = this;
		if (self._currSelectBtn == self.btn_all) {
			self.onUpdateRole(self.getSellHeros(App.HerosManager.getHeroList(HERO_TYPE.ALL, HERO_STATE.GOLD)));
		}
		else {
			self.setBtnStyle(self.btn_all);
			self.onUpdateRole(self.getSellHeros(App.HerosManager.getHeroList(HERO_TYPE.ALL, HERO_STATE.GOLD)));
			self._currSelectBtn = self.btn_all;
		}
	}

	/** 更新角色列表 */
	private onUpdateRole(roleList: any[]): void {
		let self = this;
		self._roleColl.removeAll();
		self._roleColl.replaceAll(roleList);
	}

	/** 确定出售角色 */
	private sellRoleSure(): void {
		let self = this;
		if (App.HerosManager.oldSelectSellHeroId.GetLenght() < 1) {
			return App.MessageManger.showText(App.LanguageManager.getLanguageText("RoleView.txt.06"));
		}
		if (self.isHaveTopQuaRoleSell()) {
			if (!self._model.roleSellTip) {
				let info: AlertInfo = App.ObjectPool.pop("AlertInfo");
				info.title = App.LanguageManager.getLanguageText("warning");
				info.des = App.LanguageManager.getLanguageText("RoleView.txt.01");
				info.sureCallback = (isTip: boolean) => {
					self._model.roleSellTip = isTip;
					self.sendSellRoles();
				}
				App.ViewManager.open(ViewConst.PromptAlert, info);
			} else {
				self.sendSellRoles();
			}
		} else {
			self.sendSellRoles();
		}
	}

	/** 获取出售的英雄列表 */
	private getSellHeros(list: HeroInfo[]): HeroInfo[] {
		let self = this;
		if (!list || list.length < 1) return [];
		let sellHeros: HeroInfo[] = [];
		for (let i: number = 0, len: number = list.length; i < len; i++) {
			let info: HeroInfo = list[i];
			switch (info.heroId) {
				case App.HerosManager.doubtfulInfo.captain:
					continue;
				default:
					sellHeros.push(info);
					break;
			}
		}
		return sellHeros;
	}

	/** 是否有高品质的角色出售 */
	private isHaveTopQuaRoleSell(): boolean {
		let self = this;
		for (let i: number = 0, len: number = App.HerosManager.oldSelectSellHeroId.GetLenght(); i < len; i++) {
			let info: HeroInfo = App.HerosManager.oldSelectSellHeroId.getValueByIndex(i);
			if (info.heroVO.quality > 1) return true;
		}
		return false;
	}

	/** 出售角色 */
	private sendSellRoles(): void {
		let self = this;
		let heroIds: string = "";
		for (let i: number = 0, len: number = App.HerosManager.oldSelectSellHeroId.GetLenght(); i < len; i++) {
			let info: HeroInfo = App.HerosManager.oldSelectSellHeroId.getValueByIndex(i);
			heroIds = heroIds.concat("#" + info.heroId);
		}
		heroIds = heroIds.substr(1, heroIds.length);
		SocketManager.Instance.out.sendHerosSell(heroIds);
		App.HerosManager.oldSelectSellHeroId.clear();
		self._isSell = true;
	}

	/** 设置按钮样式 */
	private setBtnStyle(btn: any): void {
		let self = this;
		if (self._currSelectBtn) (<eui.Image>self[self._currSelectBtn.name]).source = "role_btn_3";
		(<eui.Image>self[btn.name]).source = "role_btn_2";
	}

	public close(...param: any[]): void {
		super.close(param);
		let self = this;
		if (self._isSell) {
			self._isSell = false;
			self.applyFunc(RoleConst.UPDATE_ROLE_MAIN);
		}
	}

}