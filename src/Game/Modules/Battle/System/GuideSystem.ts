class GuideSystem implements ISystem{
	public name:string = "GuideSystem";
	public excute(entity:IEntity) {
		let guide:GuideCom = entity.getComponent(ComponentTypes.Guide);
		let currentTime:number = egret.getTimer();
		if(currentTime < guide.startTime + guide.guideDelay)return;
		let moveTarget:MoveTargetCom = entity.getComponent(ComponentTypes.MoveTarget);
		let player: IEntity = BattleManager.Instance.player[0];
		let playerPosition:PositionCom = player.getComponent(ComponentTypes.Position);
		switch(guide.guideMissile)
		{
			case GuideType.NoGuide:
				break;
			case GuideType.GuideXY:
				moveTarget.targetX = playerPosition.point.x;
				moveTarget.targetY = playerPosition.point.y;
				break;
			case GuideType.GuideX:
				moveTarget.targetX = playerPosition.point.x;
				break;
			case GuideType.GuideY:
				moveTarget.targetY = playerPosition.point.y;
				break;
            case GuideType.Bounce:
            	
                // moveTarget.targetY = playerPosition.point.y;
                break;
		}
	}

	public getNeededComponents():string[]
	{
		return [ComponentTypes.Guide,ComponentTypes.MoveTarget]
	}
}