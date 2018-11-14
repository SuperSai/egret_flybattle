class PropCom implements IComponent {
	public componentName: string = ComponentTypes.Prop;
	public dropID: number = -1;
	public dropCount: number = -1;
	public currentTime: number;
	public startTime: number;

	public onRemoved(): void {
		this.dropID = -1;
		this.dropCount = -1;
		this.currentTime = 0;
		this.startTime = 0;
	}

	public onAdded(): void {
		this.currentTime = egret.getTimer();
		this.startTime = this.currentTime;
	}

	public static canAdd(vo: any): boolean {
		if (vo.id == 0) return;
		return true;
	}
}