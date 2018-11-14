class RelativePosSystem implements ISystem {
	public name: string = "RelativePosSystem";

	public excute(entity: IEntity) {
		let relative: RelativePosCom = entity.getComponent(ComponentTypes.RelativePos);
		let moveTarget: MoveTargetCom = entity.getComponent(ComponentTypes.MoveTarget);
		let targetPos: MoveTargetCom = relative.relativeTarget.getComponent(ComponentTypes.MoveTarget);
		moveTarget.targetX = targetPos.targetX + relative.relativeX;
		moveTarget.targetY = targetPos.targetY + relative.relativeY;
	}

	public getNeededComponents(): string[] {
		return [ComponentTypes.RelativePos,ComponentTypes.MoveTarget];
	}
}