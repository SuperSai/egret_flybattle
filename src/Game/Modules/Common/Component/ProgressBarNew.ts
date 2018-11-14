class ProgressBarNew extends eui.ProgressBar {

	public bg: eui.Image;
	/** 是否隐藏文本显示 */
	public isHideLabel: boolean = false;
	/** 现实对象是否已经加载到场景中 */
	private isAddStage: boolean = false;
	/** 血量的比例值 */
	private _proportion: number = 0;

	public constructor() {
		super();
		let self = this;
		self.name = "ProgressBarNew";
		self.anchorOffsetX = 60;
		self.addEventListener(eui.UIEvent.ADDED_TO_STAGE, self.onAddedToStage, self);
	}

	private onAddedToStage(): void {
		let self = this;
		self.isAddStage = true;
		self.initView();
	}

	private initView(): void {
		let self = this;
		this.visible = false;
		self.labelDisplay.visible = self.isHideLabel;
		this.updateHpSkin();
	}

	/** 设置最大血量 */
	public set MaxHp(hp: number) {
		this.maximum = hp;
		this.visible = false;
		//比例
		this._proportion = (this.maximum / 10) * BattleConfig.HpProportion;
	}
	/** 设置当前血量 */
	public set Hp(hp: number) {
		this.value = hp;
		if (hp < this.maximum) {
			this.visible = true;
		}
		this.updateHpSkin();
	}

	public reset(): void {
		this.visible = false;
		this.value = this.maximum;
		this.updateHpSkin();
	}

	private updateHpSkin(): void {
		if (!this.thumb) return;
		//比例 达到一定的血量比如血量改成红色
		if (this.value <= this._proportion) {
			(this.thumb as eui.Image).source = "hp_red_bg";
		}
		else {
			(this.thumb as eui.Image).source = "hp_green_bg";
		}
	}
}