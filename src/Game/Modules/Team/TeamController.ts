class TeamController extends BaseController {

	private _teamModel: TeamModel;

	public constructor() {
		super();
		let self = this;

		self._teamModel = new TeamModel(self);

		self.initRegisterView();
	}

	private initRegisterView(): void {
		let self = this;
		App.ViewManager.register(ViewConst.TeamMainView, new TeamMainView(self, LayerManager.GAME_UI_LAYER));
		App.ViewManager.register(ViewConst.TeamReplaceView, new TeamReplaceView(self, LayerManager.GAME_UI_LAYER));
	}
}