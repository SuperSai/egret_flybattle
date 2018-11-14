class GameEnterManager extends BaseClass {

	public setup(): void {
		App.HerosManager.setup();
		App.PlayerInfoManager.setup();
		App.RedPointManager.setup();
	}

	public constructor() { super(); }
}