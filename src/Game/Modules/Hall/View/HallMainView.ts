/**
 * 主场景
 */
class HallMainView extends BaseView {

	public btn_tool: eui.Button;//功能按钮
	public btn_change: eui.Button;//切换按钮
	public btn_details: eui.Button;//角色详情
	public btn_chat: eui.Group;//聊天按钮
	public btn_invite: eui.Group;//邀请按钮
	public container: eui.Group;
	public touchArea: eui.Group;//点击飞机的区域
	public btn_boss: eui.Group;
	public btn_activity: eui.Group;
	public txt_heroName: eui.Label;//角色名字
	public friendPro: ProgressBarNew;//好友邀请的进度条
	public gold: CurrencyItem;//金币
	public diamond: CurrencyItem;//钻石
	public quaImg: eui.Image;//品质
	public headImg: eui.Image;//头像
	public maskImg: eui.Image;//头像遮罩
	public heroImg: eui.Image;
	public arrowImg: eui.Image;
	public listStar: eui.List;//星级列表

	private _world: World = World.Instance;
	private _heroIndex: number = 0;
	private _starColl: eui.ArrayCollection;
	private _heroInfo: HeroInfo;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.skinName = SkinName.HallMainViewSkin;
		this.setResources(["hall", "font"]);
	}

	public initUI(): void {
		super.initUI();
		let self = this;
		BattleConfig.AirCraftStartY = 960;
		self.container.scaleX = self.container.scaleY = 1;
		self._world.setup();
		App.LayerManager.addToLayer(self._world, LayerManager.GAME_UI_LAYER);
		App.ControllerManager.applyFunc(ControllerConst.Battle, BattleConst.INIT_HALL_PLANE, self._world);
		self.initFriendBarProgress();
	}

	/** 初始化邀请好友进度条 */
	private initFriendBarProgress(): void {
		let self = this;
		self.friendPro.visible = true;
		self.friendPro.labelDisplay.visible = true;
		self.friendPro.bg.source = "hall_icon_jingdutiaodi";
		(self.friendPro.thumb as eui.Image).source = "hall_icon_jingdutiao";
	}

	public initData(): void {
		super.initData();
		let self = this;
		self._starColl = new eui.ArrayCollection();
		self.listStar.itemRenderer = Star;
		self.listStar.dataProvider = self._starColl;
		self.gold.onAwake(ITEM_TYPE.GOLD);
		self.diamond.onAwake(ITEM_TYPE.TROPHY);
		self.updateHeroData(App.HerosManager.doubtfulInfo.captain);
		self.onUpdateInviteProgress();
		self._heroIndex++;
	}

	public open(...param: any[]): void {
		super.open(param);
		let self = this;
	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.touchArea.once(egret.TouchEvent.TOUCH_BEGIN, self.onEnterBattle, self);
		self.btn_tool.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickButton, self);
		self.btn_change.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickButton, self);
		self.btn_chat.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickButton, self);
		self.btn_invite.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickButton, self);
		self.btn_details.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickButton, self);
		self.btn_boss.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickButton, self);
		self.btn_activity.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickButton, self);
		self.setBtnEffect(["btn_tool", "btn_change", "btn_chat", "btn_invite", "btn_details", "btn_boss", "btn_activity"]);
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_tool.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickButton, self);
		self.btn_change.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickButton, self);
		self.btn_chat.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickButton, self);
		self.btn_invite.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickButton, self);
		self.btn_details.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickButton, self);
		self.btn_boss.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickButton, self);
		self.btn_activity.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickButton, self);
	}

	/** 进入战斗 */
	private onEnterBattle(): void {
		let self = this;
		BattleManager.Instance.missionID = 1;
		egret.Tween.get(self.container).to({ scaleX: 0, scaleY: 0 }, 300).call(() => {
			SocketManager.Instance.out.sendWorldBossStart(BattleManager.Instance.missionID);
		});
	}

	/** 点击按钮 */
	private onClickButton(evt: egret.TouchEvent): void {
		let self = this;
		switch (evt.target) {
			case self.btn_change://切换英雄
				self.onChangeHero();
				break;
			case self.btn_tool://显示功能界面
				App.ViewManager.open(ViewConst.SystemMenuView);
				break;
			case self.btn_chat://显示聊天界面
				break;
			case self.btn_details://显示角色详情界面
				break;
			case self.btn_invite://显示邀请好友界面
				break;
			case self.btn_boss://世界BOSS
				if (WorldBossController.roomIsOpen) {
					App.ViewManager.open(ViewConst.WorldBossMsgView);
				} else {
					App.ViewManager.open(ViewConst.WorldBossMainView);
				}
				break;
			case self.btn_activity://活动列表按钮
				self.showAllActivity();
				break;
		}
	}

	/** 切换英雄 */
	private onChangeHero(): void {
		let self = this;
		let heroId: number = App.HerosManager.doubtfulInfo.captain;
		switch (self._heroIndex) {
			case 0:
				heroId = App.HerosManager.doubtfulInfo.captain;
				break;
			case 1:
				if (App.HerosManager.doubtfulInfo.leftPlayer < 0) {
					return App.MessageManger.showText(App.LanguageManager.getLanguageText("hallMainView.txt.01"));
				}
				heroId = App.HerosManager.doubtfulInfo.leftPlayer;
				break;
			case 2:
				if (App.HerosManager.doubtfulInfo.rightPlayer < 0) {
					return App.MessageManger.showText(App.LanguageManager.getLanguageText("hallMainView.txt.01"));
				}
				heroId = App.HerosManager.doubtfulInfo.rightPlayer;
				break;
		}
		self.updateHeroData(heroId);
		self._heroIndex++;
		if (self._heroIndex > 2) self._heroIndex = 0;
	}

	/** 更新角色信息 */
	private updateHeroData(heroId: number): void {
		let self = this;
		self._heroInfo = App.HerosManager.getHeroInfo(heroId);
		self.txt_heroName.text = self._heroInfo.heroVO.name;
		self.quaImg.source = "com_qua_" + self._heroInfo.heroVO.quality;
		let path: string = App.PathManager.HeroBigImgPath.replace("{0}", self._heroInfo.heroVO.bigIcon);
		App.DisplayUtils.addAsyncBitmapToImage(path, self.heroImg);
		self._starColl.replaceAll(App.ObjectUtils.splitToStar(self._heroInfo.star));
	}

	/** 更新邀请好友进度 */
	private onUpdateInviteProgress(): void {
		let self = this;
		self.friendPro.maximum = 10;
		self.friendPro.value = 5;
	}

	/** 显示所有活动 */
	private showAllActivity(): void {
		let self = this;
		if (self.arrowImg.scaleX == 1) {	//活动显示出来
			self.arrowImg.scaleX = -1;
		} else {	//活动隐藏起来
			self.arrowImg.scaleX = 1;
		}
	}
}