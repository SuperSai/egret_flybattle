/** 
 * 控制器注册管理类
 */
class RegisterManager extends BaseClass {
	public constructor() {
		super();
	}

	public init(): void {
		let self = this;
		self.initScene();
		self.initModules();
	}

	/** 初始化场景 */
	private initScene(): void {
		App.SceneManager.register(SceneConst.LOGIN, new LoginScene());
		App.SceneManager.register(SceneConst.HALL, new HallScene());
		App.SceneManager.register(SceneConst.BATTLE, new BattleScene());
	}

	/** 
	 * 初始化所有模块控制器
	 */
	private initModules(): void {
		App.ControllerManager.register(ControllerConst.Login, new LoginController());
		App.ControllerManager.register(ControllerConst.Hall, new HallController());
		App.ControllerManager.register(ControllerConst.Battle, new BattleController());
		App.ControllerManager.register(ControllerConst.Common, new CommonController());
		App.ControllerManager.register(ControllerConst.Role, new RoleController());
		App.ControllerManager.register(ControllerConst.Team, new TeamController());
		App.ControllerManager.register(ControllerConst.LuckyCard, new LuckyCardController());
		App.ControllerManager.register(ControllerConst.WorldBoss, new WorldBossController());
		App.ControllerManager.register(ControllerConst.MagicCard, new MagicCardController());
		

	}
}
