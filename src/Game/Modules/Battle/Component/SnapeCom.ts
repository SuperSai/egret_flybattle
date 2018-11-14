class SnapeCom implements IComponent {

	public componentName: string = ComponentTypes.Snape;
	public param: number = 0;
	/** 有效时间 */
	public effectTime: number = 0;
	public startTime: number = 0;
	public currentTime: number = 0;

	public onRemoved(): void {
		this.param = 0;
		this.startTime = 0;
		this.currentTime = 0;
		this.effectTime = 0;
	}

	public onAdded(): void {
		this.startTime = egret.getTimer();
	}

	public static canAdd(vo: any): boolean {
		return true;
	}
}