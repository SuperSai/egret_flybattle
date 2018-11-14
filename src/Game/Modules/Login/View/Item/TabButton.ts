class TabButton extends BaseItem {

	public selectImg: eui.Image;
	public unselectImg: eui.Image;
	public contentLabel: eui.Label;
	public content: string = "";
	public selectSource: string = "";
	public unselectSource: string = "";
	public btnType: number = -1;

	private _selecteds: boolean;

	public constructor() {
		super(SkinName.TabButtonSkin);
	}

	public childrenCreated() {
		super.childrenCreated();
		let self = this;
		self.selectImg.source = self.selectSource;
		self.unselectImg.source = self.unselectSource;
		self.contentLabel.text = self.content;
		self.addEvents();
	}

	public addEvents(): void {
		let self = this;
		self.addEventListener(egret.TouchEvent.TOUCH_TAP, self.clickHandler, self);
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.clickHandler, self);
	}

	private clickHandler(): void {
		let self = this;
	}

	public get selected(): boolean {
		let self = this;
		return self._selecteds;
	}

	public set selected(value: boolean) {
		let self = this;
		self.selectImg.visible = value;
		self.unselectImg.visible = !value;
		self._selecteds = value;
	}
}