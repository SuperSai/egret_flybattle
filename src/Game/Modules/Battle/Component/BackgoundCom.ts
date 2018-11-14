class BackgoundCom implements IComponent {
	public componentName: string = ComponentTypes.Backgound;

	private _backgound: string = "";
	public get backgound(): string {
		return this._backgound;
	}
	public set backgound(value: string) {
		this._backgound = value;
		this.loadBackgoundResource();
	}

	public rowCount: number = 2;

	public bitmaps: egret.Bitmap[] = [];
	public displayContainer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
	public onRemoved(): void {
		for (let i: number = 0; i < this.bitmaps.length; i++) {
			App.ResourcePool.push(this.bitmaps[i]);
		}
	}

	public onAdded(): void {

	}

	private loadBackgoundResource() {
		if (RES.hasRes(this.backgound)) {
			this.initImages();
		} else {
			RES.getResByUrl(this.backgound, () => {
				this.initImages();
			}, this, RES.ResourceItem.TYPE_IMAGE);
		}
	}

	private initImages(): void {
		if (this.bitmaps) {
			for (let j: number = 0; j < this.bitmaps.length; j++) {
				App.ResourcePool.push(this.bitmaps[j]);
			}
		}

		this.bitmaps = [];
		for (let i: number = 0; i < this.rowCount; i++) {
			let bgBmp: egret.Bitmap = App.ResourcePool.pop(this.backgound, ResourcePool.BITMAP);
			this.bitmaps.push(bgBmp);
			bgBmp.y = BattleConfig.BackgoundHeight * i - (BattleConfig.BackgoundHeight * this.rowCount - World.Instance.worldRect.height);
			this.displayContainer.addChild(bgBmp);
		}
	}

	public static canAdd(vo: any): boolean {
		return true;
	}
}