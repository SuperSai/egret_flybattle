class MoveTargetCom implements IComponent {
	public componentName: string = ComponentTypes.MoveTarget;
	public targetX: number = 0;
	public targetY: number = 0;
	public moveState: number = 0;
	public param: any = null;

	public onRemoved(): void {
		this.targetX = 0;
		this.targetY = 0;
		this.moveState = 0;
		this.param = null;
	}

	public static canAdd(vo: any): boolean {
		return !(vo.moveType == 0 || vo.guideMissile == 0);
	}
}