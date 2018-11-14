class MoveAICom {

	public componentName: string = ComponentTypes.MoveAI;
	public moveArgs1: number[] = [];
	public moveBounce: egret.Rectangle = null;
	public moveType: number = 0;
	public nextMoveTimeGap: number = 0;
	public lastMoveTime: number = 0;
	public bornType: number = 0;
	public startAITime: number = 0;
	public onRemoved(): void {
		this.moveArgs1 = [];
		this.moveBounce = null;
		this.moveType = 0;
		this.nextMoveTimeGap = 0;
		this.lastMoveTime = 0;
		this.bornType = 0;
	}

	public onAdded(): void {
		this.setupAIStartTime();
	}

	private setupAIStartTime():void
	{
		this.startAITime = egret.getTimer();
		if (this.bornType == BornType.BossEntry) {
			this.startAITime = this.startAITime + BattleConfig.BossEnterTime;
		}
	}

	public static canAdd(vo: any): boolean {
		return vo.moveType != -1;
	}
}