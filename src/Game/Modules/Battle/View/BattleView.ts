/**
 * 战斗主界面
 */
class BattleView extends BaseView {

    private txt_count: eui.Label;
    private txt_bossTime: eui.BitmapLabel;
    private txt_damage: eui.BitmapLabel;
    private timeGroup: eui.Group;
    private _currBossTime: number = 0;

    private _world: World = World.Instance;

    public constructor($controller: BaseController, $layer: number) {
        super($controller, $layer);
        let self = this;
        self.skinName = SkinName.BattleViewSkin;
        self.setResources(["battle"]);
    }

    public initUI(): void {
        super.initUI();
        let self = this;
        App.LayerManager.addToLayer(self, LayerManager.GAME_UI_LAYER);
    }

    public initData(): void {
        super.initData();
        let self = this;
        App.BoneManager.start();
        BattleConfig.setup(App.StageUtils.stage.stageWidth, App.StageUtils.stage.stageHeight);
        (<BattleController>self.controller).createMap();

        switch (BattleManager.Instance.levelCom.levelData.type) {
            case BATTLE_TYPE.DEFAULT:
                self.initDefaultView();
                break;
            case BATTLE_TYPE.BOSS:
                self.initBossView();
                break;
        }
    }

    /** 初始化正常副本的战斗界面 */
    private initDefaultView(): void {
        let self = this;
        self.txt_count.visible = true;
        self.timeGroup.visible = self.txt_damage.visible = false;
        self.onUpdateScore();
    }

    /** 初始化BOSS副本的战斗界面 */
    private initBossView(): void {
        let self = this;
        self.txt_count.visible = false;
        self.timeGroup.visible = self.txt_damage.visible = true;
        self._currBossTime = Number(GlobleData.getDataByFilter(GlobleData.ServerConfigVO, "id", "WORLD_BOSS_TIME")[0].value);
        self.txt_bossTime.text = App.TimeUtil.S2H(self._currBossTime, ".", false);
        App.TimerManager.doTimer(1000, 0, self.onUpdateBossTime, self);
        self.onUpdateBossDamage();
    }

    public open(...param: any[]): void {
        super.open(param);
        let self = this;

    }

    public addEvents(): void {
        super.addEvents();
        let self = this;
        self.registerFunc(BattleConst.UPDATE_SCORE, self.onUpdateScore, self);
        self.registerFunc(BattleConst.UPDATE_BOSS_DAMAGE, self.onUpdateBossDamage, self);
    }

    public removeEvents(): void {
        super.removeEvents();
        let self = this;
    }

    /** 更新分数 */
    private onUpdateScore(): void {
        let self = this;
        self.txt_count.text = BattleManager.Instance.score + "";
    }

    /** 更新玩家世界BOSS中对BOSS的攻击伤害 */
    private onUpdateBossDamage(): void {
        let self = this;
        self.txt_damage.text = BattleManager.Instance.topDamage + "";
    }

    /** 更新世界BOSS倒计时 */
    private onUpdateBossTime(): void {
        let self = this;
        if (App.ViewManager.isShow(ViewConst.HeroRankView)) {
            App.TimerManager.remove(self.onUpdateBossTime, self);
            return;
        }
        self._currBossTime -= 1000;
        self.txt_bossTime.text = App.TimeUtil.S2H(self._currBossTime, ".", false);
        if (self._currBossTime <= 0) {
            App.TimerManager.remove(self.onUpdateBossTime, self);
            self.txt_bossTime.text = "00.00";
            BattleManager.Instance.planeStopAttack();
            World.Instance.removeAllData();
            SocketManager.Instance.out.sendWorldBossGameOver(BattleManager.Instance.topDamage);
        }
    }

    public close(...param: any[]): void {
        super.close(param);
        let self = this;
        BattleManager.Instance.score = 0;
        BattleManager.Instance.topDamage = 0;
        App.PlayerInfoManager.isHallTouchHero = false;
        App.TimerManager.remove(self.onUpdateBossTime, self);
        World.Instance.removeAllData();
        App.HeroSkillManager.skillReset();
    }
}

