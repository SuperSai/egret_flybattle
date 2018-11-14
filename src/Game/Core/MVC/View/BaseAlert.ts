class BaseAlert extends BaseView {

	public maskRect: eui.Rect;
	public btn_close: eui.Group;
	public effectCallBack: Function;
	protected isMaskTouch: boolean = true;
	private _layer: number;
	private _viewShowType: number;
	private _maskAlpha: number = 0;

	public constructor($controller: BaseController, $layer: number, $skinName: string, maskAlpha: number = 0, $viewShowType: number = VIEW_SHOW_TYPE.UP) {
		super($controller, $layer);
		this.skinName = $skinName;
		this._layer = $layer;
		this._viewShowType = $viewShowType;
		this._maskAlpha = maskAlpha;
	}

	/** 对面板进行显示初始化，用于子类继承 */
	public initUI(): void {
		super.initUI();
		let self = this;
		if (!self.maskRect) {
			self.maskRect = self.getMask(self._maskAlpha);
			self.addChild(self.maskRect);
		}
		self.setChildIndex(self.maskRect, 0);

	}

	public initData(): void {
		super.initData();
		let self = this;
		App.EffectUtils.viewShowEffect(self, self._viewShowType, self.effectCallBack);
	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.isMaskTouch && self.maskRect && self.maskRect.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onMaskHandler, self);
		self.btn_close && self.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClosePanel, self);
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_close && self.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClosePanel, self);
		self.isMaskTouch && self.maskRect && self.maskRect.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onMaskHandler, self);
	}

	protected onMaskHandler() {
		let self = this;
		App.DisplayUtils.removeFromParent(self.maskRect);
		self.maskRect = null;
		App.ViewManager.closeView(self);
	}

	protected onClosePanel(): void {
		let self = this;
		App.DisplayUtils.removeFromParent(self.maskRect);
		self.maskRect = null;
		App.ViewManager.closeView(self);
	}

	public close(...param: any[]): void {
		super.close(param);
		let self = this;
		App.DisplayUtils.removeFromParent(self.maskRect);
		self.maskRect = null;
	}

	/** 创建遮罩 */
	protected getMask(maskAlpha) {
		let rect = new eui.Rect();
		rect.touchEnabled = true;
		rect.percentWidth = 100;
		rect.percentHeight = 100;
		rect.fillColor = 0x0;
		rect.fillAlpha = maskAlpha;
		return rect;
	}
}