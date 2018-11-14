class BigLoading extends BaseClass {
	private content: egret.Sprite = null;
	private speed: number = 10 / (1000 / 60);
	private uiImageContainer: egret.DisplayObjectContainer;
	private averageUtils: AverageUtils;

	constructor() {
		super();
		this.init();
	}

	private init(): void {
		this.averageUtils = new AverageUtils();

		this.content = new egret.Sprite();
		this.content.graphics.beginFill(0x000000, 0);
		this.content.graphics.drawRect(0, 0, App.StageUtils.getWidth(), App.StageUtils.getHeight());
		this.content.graphics.endFill();
		this.content.touchEnabled = true;

		this.uiImageContainer = App.ObjectPool.pop("egret.DisplayObjectContainer");
		this.uiImageContainer.x = this.content.width * 0.5;
		this.uiImageContainer.y = this.content.height * 0.5;
		this.content.addChild(this.uiImageContainer);

		var img: eui.Image = App.ObjectPool.pop("eui.Image");
		img.source = "loadingBg";
		this.content.addChild(img);

		RES.getResByUrl("resource/Common/atlas/load_Reel.png", function (texture: egret.Texture): void {
			var img: egret.Bitmap = App.ObjectPool.pop("egret.Bitmap");
			img.texture = texture;
			img.x = -img.width * 0.5;
			img.y = -img.height * 0.5;
			this.uiImageContainer.addChild(img);
		}, this, RES.ResourceItem.TYPE_IMAGE);
	}

	public showLoading(): void {
		App.LayerManager.addToLayer(this.content, LayerManager.GAME_POP_LAYER);
		App.TimerManager.doFrame(1, 0, this.enterFrame, this);
	}

	public hideLoading(): void {
		if (this.content && this.content.parent) {
			App.DisplayUtils.removeFromParent(this.content);
			this.uiImageContainer.rotation = 0;
		}
		App.TimerManager.remove(this.enterFrame, this);
	}
	private enterFrame(time: number) {
		this.averageUtils.push(this.speed * time);
		this.uiImageContainer.rotation += this.averageUtils.getValue();
	}
}