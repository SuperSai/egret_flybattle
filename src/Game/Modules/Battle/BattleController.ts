class BattleController extends BaseController {

    private _battleView: BattleView;
    private _battleModel: BattleModel;

    public constructor() {
        super();
        let self = this;

        self._battleView = new BattleView(self, LayerManager.GAME_MAP_LAYER);
        App.ViewManager.register(ViewConst.Battle, self._battleView);

        self._battleModel = new BattleModel(self);
        self.setModel(self._battleModel);
        BattleManager.Instance.battleModel = self._battleModel;

        //注册模块消息
        self.registerFunc(BattleConst.INIT_BATTLE_VIEW, self.onInitBattleView, self);
        self.registerFunc(BattleConst.INIT_HALL_PLANE, self.onInitHallPlane, self);
        self.registerFunc(BattleConst.INIT_BATTLE_PLANE, self.onInitBattlePlane, self);
        SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.STC_ENTER_BATTLE), self.onEnterBattle, self);
        SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.STC_BATTLE_OVER), self.onBattleOver, self);

    }

    /** 初始化战斗界面 */
    private onInitBattleView(): void {
        let self = this;
        App.ViewManager.open(ViewConst.Battle);
        self.initRegisterView();
    }

    /** 初始化大厅飞机 */
    private onInitHallPlane(world: World): void {
        let self = this;
        BattleManager.Instance.world = world;
        self.enterStart();
    }

    /** 初始化战斗飞机 */
    private onInitBattlePlane(): void {
        let self = this;
        App.PlayerInfoManager.isHallTouchHero = true;
        BattleManager.Instance.planeStartAttack();
    }

    /** 进入战斗 */
    private onEnterBattle(evt: egret.Event): void {
        let self = this;
        let msg: protocol.CommonMsg = protocol.CommonMsg.decode(evt.data);
        PropDropLogic.Instance.initPropList();
        //初始化角色技能
        App.HeroSkillManager.handlerHeroSkill(self._battleModel.captain);
        if (App.HerosManager.doubtfulInfo.leftPlayer != -1) {
            App.HeroSkillManager.handlerHeroSkill(self._battleModel.leftPlayers);
        }
        if (App.HerosManager.doubtfulInfo.rightPlayer != -1) {
            App.HeroSkillManager.handlerHeroSkill(self._battleModel.rightPlayers);
        }
        BattleManager.Instance.missionID = msg.intPar1;
        BattleManager.Instance.score = 0;
        BattleManager.Instance.topDamage = 0;
        App.ViewManager.closeAll();
        App.SceneManager.runScene(SceneConst.BATTLE);
        BattleConfig.AirCraftStartY = 1068;
        App.ControllerManager.applyFunc(ControllerConst.Battle, BattleConst.INIT_BATTLE_PLANE);
    }

    /** 注册界面才可以打开界面 */
    private initRegisterView(): void {
        let self = this;
        App.ViewManager.register(ViewConst.GameOverView, new GameOverView(self, LayerManager.GAME_UI_LAYER));
    }

    /** 单场普通战斗结束 */
    private onBattleOver(evt: egret.Event): void {
        let self = this;
        let msg: protocol.SingleGameOverMsg = protocol.SingleGameOverMsg.decode(evt.data);
        App.ViewManager.open(ViewConst.GameOverView, msg);
    }

    private enterStart(): void {
        if (GlobleData.Instance.hasParasComplete) {
            this.onDataComplete();
        } else {
            GlobleData.Instance.addEventListener(egret.Event.COMPLETE, this.onDataComplete, this);
        }
    }

    private onDataComplete() {
        BattleManager.Instance.addPlanes();
    }

    /** 创建地图 */
    public createMap(): void {
        let self = this;
        let backgound: IEntity = BattleManager.Instance.createFromTemplate(EntityTypes.Entity_Backgound, BattleManager.Instance.missionID, -2, 0, 0);
        self._battleModel.backgoundCom = backgound.getComponent(ComponentTypes.Backgound);
        let spawner: IEntity = BattleManager.Instance.createFromTemplate(EntityTypes.Entity_Spawner, BattleManager.Instance.missionID, -1, 0, 0);
        self._battleModel.levelCom = spawner.getComponent(ComponentTypes.Level);
    }
}