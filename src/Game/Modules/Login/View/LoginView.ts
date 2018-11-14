class LoginView extends BaseView {

	public bg: eui.Image;
	public inputView: InputView;
	private _newPlayer: boolean = true;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.skinName = SkinName.LoginViewSkin;
		this.setResources(["login"]);
	}

	public initUI(): void {
		super.initUI();
		let self = this;
		self.inputView.controller = self.controller;
		if (ext.getPlatform() == "dev") {
			self.inputView.setState(1);
		}
		else {
			self.inputView.setState(2);
		}
		self.inputView.addEvents();
	}
}