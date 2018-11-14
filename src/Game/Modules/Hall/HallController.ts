class HallController extends BaseController {

	private _hall: HallMainView;
	private _hallModel: HallModel;

	public constructor() {
		super();
		let self = this;
		App.RedPointManager.initData();
		//View初始化
		self._hall = new HallMainView(self, LayerManager.GAME_UI_LAYER);
		App.ViewManager.register(ViewConst.Hall, self._hall);
		self._hallModel = new HallModel(self);

		self.initRegisterView();
		//注册模块消息
		self.registerFunc(HallConst.HALL_INIT, self.onHallInit, self);
	}

	private onHallInit(param: any[]): void {
		let self = this;
		App.ViewManager.open(ViewConst.Hall, self._hallModel);
	}


	/** 注册界面才可以打开界面 */
	private initRegisterView(): void {
		let self = this;
		App.ViewManager.register(ViewConst.SystemMenuView, new SystemMenuView(self, LayerManager.GAME_UI_LAYER));
	}
}