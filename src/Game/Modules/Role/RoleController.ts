class RoleController extends BaseController {

	private _roleModel: RoleModel;

	public constructor() {
		super();
		let self = this;

		self._roleModel = new RoleModel(self);

		self.initRegisterView();
	}

	/** 注册界面才可以打开界面 */
	private initRegisterView(): void {
		let self = this;
		App.ViewManager.register(ViewConst.RoleMainView, new RoleMainView(self, LayerManager.GAME_UI_LAYER));
		App.ViewManager.register(ViewConst.RoleSellView, new RoleSellView(self, LayerManager.GAME_UI_LAYER));
		App.ViewManager.register(ViewConst.RoleRiseStarView, new RoleRiseStarView(self, LayerManager.GAME_UI_LAYER));

	}
}