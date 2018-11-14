class WorldBossMsgView extends BaseView {

	private txt_bossName: eui.Label;
	/** 造成的总伤害 */
	private txt_totalDamage: eui.Label;
	/** 造成的总伤害比例 */
	private txt_damageRatio: eui.Label;
	/** BOSS血量比例 */
	private txt_bossHpRatio: eui.Label;
	private txt_bossHp: eui.Label;
	/** 下阶段的首领伤害 */
	private txt_nextDamage: eui.Label;
	/** 当前副本的剩余时间 */
	private txt_lastTime: eui.Label;
	/** 体力的恢复时间 */
	private txt_time: eui.Label;
	/** 好卡的概率 */
	private txt_cardProbability: eui.Label;
	private btn_start: eui.Group;
	/** 发布 */
	private btn_release: eui.Group;
	/** 招募 */
	private btn_recruiting: eui.Group;
	/** 增加体力 */
	private btn_add: eui.Group;
	/** 领取奖励 */
	private btn_reward: eui.Group;
	private btn_close: eui.Button;
	/** 体力列表 */
	private lists: eui.List;
	/** 伤害排名列表 */
	private listsItem: eui.List;
	private curCardImg: eui.Image;
	private cardNameImg: eui.Image;
	private bossTagImg: eui.Image;
	private advImg: eui.Image;
	/** BOSS血量进度条 */
	private bossHpBar: ProgressBarNew;
	/** 伤害进度条 */
	private damageBar: ProgressBarNew;
	/** BOSS当前血量 */
	private _currBossHP: number = 0;
	/** 玩家的当前伤害 */
	private _currDamage: number = 0;
	private _model: WorldBossModel;
	private _missionVO: MissionVO;
	private _worldBossAwardList: WorldBossAwardVO[];
	private _arrColl: eui.ArrayCollection;
	private _currBossTime: number = 0;
	private _currPowerTime: number = 0;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.skinName = SkinName.WorldBossMsgViewSkin;
		this.setResources(["worldBoss"]);
	}

	public initUI(): void {
		super.initUI();
		let self = this;
		self.advImg.visible = ext.getIsAD();
		self._arrColl = new eui.ArrayCollection();
		self.lists.itemRenderer = EnergyItem;
		self.listsItem.itemRenderer = WorldBossRankItem;
		self.listsItem.dataProvider = self._arrColl;
		self.bossHpBar.visible = true;
		self.bossHpBar.labelDisplay.visible = false;
		self.bossHpBar.bg.source = "worldBoss_jingdutiaodi";
		(self.bossHpBar.thumb as eui.Image).source = "worldBoss_jingdutiao";

		self.damageBar.visible = true;
		self.damageBar.labelDisplay.visible = false;
		self.damageBar.bg.source = "worldBoss_jingdutiaodi2";
		(self.damageBar.thumb as eui.Image).source = "worldBoss_jingdutiao2";
	}

	public initData(): void {
		super.initData();
		let self = this;
		self._model = <WorldBossModel>self.controller.getModel();
		self._missionVO = GlobleData.getData(GlobleData.MissionVO, self._model.missionId);
		self._worldBossAwardList = self._model.getWorldBossAwardMsg();
		if (self._missionVO) {
			self.onUpdatePower();
		} else {
			App.MessageManger.showText(App.LanguageManager.getLanguageText("worldBossView.txt.03", self._model.missionId));
		}
		self.initView();
		self.updateBossHP();
		self.updateDamage();
		self.onUpdateDamageRank();
		self._currBossTime = Number(self._model.overTime) - App.TimeUtil.getCurServerTime() * 1000;
		if (self._currBossTime > 0 && !self._model.isOver) {
			self.btn_reward.visible = false;
			self.txt_lastTime.text = App.TimeUtil.S2H(self._currBossTime);
			App.TimerManager.doTimer(1000, 0, self.onUpdateLastBossTime, self);
		} else {
			self.txt_lastTime.text = App.LanguageManager.getLanguageText("worldBossView.txt.11");
			self.btn_reward.visible = true;
		}
	}

	private initView(): void {
		let self = this;
		self.bossTagImg.source = "worldBoss_" + self._model.missionId;
		self.txt_bossName.text = self._missionVO.name;
		self._currBossHP = self._model.bossLeftHp;
		self.bossHpBar.maximum = WorldBossController.bossMaxHp = self._missionVO.totalHp;
		self.damageBar.maximum = self._worldBossAwardList[self._worldBossAwardList.length - 1].hurtHp;
		if (self._model.rankList && self._model.rankList.ContainsKey(App.PlayerInfoManager.Info.playerId)) {
			self._currDamage = self._model.rankList.TryGetValue(App.PlayerInfoManager.Info.playerId).totalHurtHp;
		}
		for (let i: number = 0, len: number = self._worldBossAwardList.length; i < len; i++) {
			let vo: WorldBossAwardVO = self._worldBossAwardList[i];
			(<eui.Label>self["txt_cardNum" + i]).text = vo.lotteryNum + "";
			(<eui.Image>self["cardImg" + i]).source = "worldBoss_icon_" + vo.icon;
			if (i < (len - 1)) {
				(<eui.Group>self["cardGroup" + i]).x = 37 + (vo.hurtHp * self.damageBar.width / self.damageBar.maximum);
			}
		}
	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickBtnHandler, self);
		self.btn_release.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickBtnHandler, self);
		self.btn_recruiting.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickBtnHandler, self);
		self.btn_add.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickBtnHandler, self);
		self.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickBtnHandler, self);
		self.btn_reward.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickBtnHandler, self);
		self.setBtnEffect(["btn_start", "btn_release", "btn_recruiting", "btn_add", "btn_reward", "btn_close"]);
		self.registerFunc(WorldBossConst.UPDATE_RANK, self.onUpdateDamageRank, self);
		self.registerFunc(WorldBossConst.UPDATE_POWER_TIME, self.onUpdatePower, self);
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_start.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickBtnHandler, self);
		self.btn_release.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickBtnHandler, self);
		self.btn_recruiting.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickBtnHandler, self);
		self.btn_add.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickBtnHandler, self);
		self.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickBtnHandler, self);
		self.btn_reward.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickBtnHandler, self);
	}

	private onClickBtnHandler(evt: egret.TouchEvent): void {
		let self = this;
		switch (evt.target) {
			case self.btn_start:
				SocketManager.Instance.out.sendWorldBossStart(self._model.missionId);
				break;
			case self.btn_release:

				break;
			case self.btn_recruiting:

				break;
			case self.btn_add:

				break;
			case self.btn_reward:
				SocketManager.Instance.out.sendWorldBossGetReward();
				break;
			case self.btn_close:
				App.ViewManager.close(ViewConst.WorldBossMsgView);
				break;
		}
	}

	/** 更新体力 */
	private onUpdatePower(): void {
		let self = this;
		self.lists.dataProvider = new eui.ArrayCollection(new Array(self._model.maxPower));
		self.lists.validateNow();
		for (let i: number = 0; i < self._model.maxPower; i++) {
			if (i < self._model.power) {
				(<EnergyItem>self.lists.getChildAt(i)).setState(true);
			}
		}
		if (self._model.power == self._model.maxPower) {
			App.TimerManager.remove(self.onUpdatePowerTime, self);
			self.txt_time.text = App.LanguageManager.getLanguageText("worldBossView.txt.10");
		} else {
			self._currPowerTime = Number(self._model.powerTime) - App.TimeUtil.getCurServerTime() * 1000;
			self.txt_time.text = App.TimeUtil.S2H(self._currPowerTime, ":", false);
			App.TimerManager.doTimer(1000, 0, self.onUpdatePowerTime, self);
		}
	}

	/** 更新BOSS血量 */
	private updateBossHP(): void {
		let self = this;
		self.bossHpBar.value = self._currBossHP;
		self.txt_bossHp.text = App.LanguageManager.getLanguageText("worldBossView.txt.04", self._currBossHP, self._missionVO.totalHp);
		self.txt_bossHpRatio.text = App.LanguageManager.getLanguageText("worldBossView.txt.06", ((self._currBossHP / self._missionVO.totalHp) * 100).toFixed());
	}

	/** 更新玩家伤害进度 */
	private updateDamage(): void {
		let self = this;
		for (let i: number = 0, len: number = self._worldBossAwardList.length; i < len; i++) {
			let vo: WorldBossAwardVO = self._worldBossAwardList[i];
			if (self._currDamage < vo.hurtHp) {
				self.cardNameImg.source = "worldBoss_word_" + vo.icon;
				self.curCardImg.source = "worldBoss_icon_" + vo.icon;
				self.txt_nextDamage.text = App.LanguageManager.getLanguageText("worldBossView.txt.05", vo.hurtHp - self._currDamage);
				self.txt_cardProbability.text = vo.des;
				break;
			}
		}
		self.damageBar.value = self._currDamage;
		self.txt_totalDamage.text = self._currDamage + "";
		self.txt_damageRatio.text = App.LanguageManager.getLanguageText("worldBossView.txt.07", Number(((self._currDamage / self._missionVO.totalHp) * 100).toFixed(2)));

	}

	/** 更新BOSS剩余时间 */
	private onUpdateLastBossTime(): void {
		let self = this;
		self._currBossTime -= 1000;
		self.txt_lastTime.text = App.TimeUtil.S2H(self._currBossTime);
		if (self._currBossTime <= 0) {
			App.TimerManager.remove(self.onUpdateLastBossTime, self);
			self.txt_lastTime.text = "00:00:00";
			self.btn_start.visible = false;
		}
	}

	/** 更新体力恢复时间 */
	private onUpdatePowerTime(): void {
		let self = this;
		self._currPowerTime -= 1000;
		self.txt_time.text = App.TimeUtil.S2H(self._currPowerTime, ":", false);
		if (self._currPowerTime <= 0) {
			App.TimerManager.remove(self.onUpdatePowerTime, self);
			self.txt_time.text = "00:00";
			SocketManager.Instance.out.sendWorldBossPower();
		}
	}

	/** 更新伤害排行列表 */
	private onUpdateDamageRank(): void {
		let self = this;
		if (!self._model.rankList || self._model.rankList.GetLenght() < 1) return;
		let rankList: protocol.IFriendWorldBossRankMsg[] = self._model.rankList.getValues();
		rankList.sort((item1: protocol.IFriendWorldBossRankMsg, item2: protocol.IFriendWorldBossRankMsg) => { return item2.totalHurtHp - item1.totalHurtHp });
		self._arrColl.replaceAll(rankList);
	}
}