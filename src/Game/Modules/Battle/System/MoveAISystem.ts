class MoveAISystem implements ISystem {
    public name: string = "MoveAISystem";

    public excute(entity: IEntity) {
        let AICom: MoveAICom = entity.getComponent(ComponentTypes.MoveAI);
        let moveTarget: MoveTargetCom = entity.getComponent(ComponentTypes.MoveTarget);
        let position: PositionCom = entity.getComponent(ComponentTypes.Position);
        let currentTime: number = egret.getTimer();
        if (currentTime < AICom.startAITime) {
            MoveAISystem.handleEntryMenment(entity);
        } else {
            MoveAISystem.handleAIMovement(entity, currentTime);
        }
    }

    private static handleEntryMenment(entity: IEntity): void {
        let moveTarget: MoveTargetCom = entity.getComponent(ComponentTypes.MoveTarget);
        moveTarget.targetX = BattleConfig.BossEnterEndPoint.x;
        moveTarget.targetY = BattleConfig.BossEnterEndPoint.y;
    }

    private static handleAIMovement(entity: IEntity, currentTime: number): void {
        let AICom: MoveAICom = entity.getComponent(ComponentTypes.MoveAI);
        let moveTarget: MoveTargetCom = entity.getComponent(ComponentTypes.MoveTarget);
        let position: PositionCom = entity.getComponent(ComponentTypes.Position);
        switch (AICom.moveType) {
            case MoveAIType.DownMove:
                moveTarget.targetX = position.point.x;
                moveTarget.targetY = 2000;
                break;
            case MoveAIType.RandomMove:
                if (currentTime > AICom.lastMoveTime + AICom.nextMoveTimeGap) {
                    let range: number = App.MathUtils.Range(AICom.moveArgs1[0], AICom.moveArgs1[1]);
                    let point: egret.Point = App.MathUtils.randomPointInWithRange(position.point, range, AICom.moveBounce);
                    moveTarget.targetX = point.x;
                    moveTarget.targetY = point.y;
                    AICom.lastMoveTime = currentTime;
                    AICom.nextMoveTimeGap = App.MathUtils.Range(AICom.moveArgs1[2], AICom.moveArgs1[3]);
                }
                break;
            case MoveAIType.MoveLeftRight:
                if (moveTarget.targetX != AICom.moveArgs1[1] && moveTarget.targetX != AICom.moveArgs1[2]) {
                    moveTarget.targetX = AICom.moveArgs1[1];
                }
                if (position.point.x <= AICom.moveArgs1[1]) {
                    moveTarget.targetX = AICom.moveArgs1[2];
                }
                if (position.point.x >= AICom.moveArgs1[2]) {
                    moveTarget.targetX = AICom.moveArgs1[1];
                }
                moveTarget.targetY = AICom.moveArgs1[0];
                break;
            case MoveAIType.MoveTopBottom:
                if (moveTarget.targetY != AICom.moveArgs1[1] && moveTarget.targetY != AICom.moveArgs1[2]) {
                    moveTarget.targetY = AICom.moveArgs1[1];
                }
                if (position.point.y <= AICom.moveArgs1[1]) {
                    moveTarget.targetY = AICom.moveArgs1[2];
                }
                if (position.point.y >= AICom.moveArgs1[2]) {
                    moveTarget.targetY = AICom.moveArgs1[1];
                }
                moveTarget.targetY = AICom.moveArgs1[0];
                break;
            case MoveAIType.MoveToPlayer:
                let player: IEntity = BattleManager.Instance.player[0];
                let playerPos: PositionCom = player.getComponent(ComponentTypes.Position);
                moveTarget.targetX = playerPos.point.x;
                moveTarget.targetY = playerPos.point.y;
                break;
            case MoveAIType.RadomToBottom:
                if (currentTime > AICom.lastMoveTime + AICom.nextMoveTimeGap) {
                    let range: number = App.MathUtils.Range(AICom.moveArgs1[0], AICom.moveArgs1[1]);
                    moveTarget.targetX = App.MathUtils.Range(AICom.moveBounce.left, AICom.moveBounce.right);
                    moveTarget.targetY = position.point.y + range;
                    AICom.lastMoveTime = currentTime;
                    AICom.nextMoveTimeGap = App.MathUtils.Range(AICom.moveArgs1[2], AICom.moveArgs1[3]);
                }
                break;
            case MoveAIType.RadomToTop:
                if (currentTime > AICom.lastMoveTime + AICom.nextMoveTimeGap) {
                    let range: number = App.MathUtils.Range(AICom.moveArgs1[0], AICom.moveArgs1[1]);
                    moveTarget.targetX = App.MathUtils.Range(AICom.moveBounce.left, AICom.moveBounce.right);
                    moveTarget.targetY = position.point.y - range;
                    AICom.lastMoveTime = currentTime;
                    AICom.nextMoveTimeGap = App.MathUtils.Range(AICom.moveArgs1[2], AICom.moveArgs1[3]);
                }
                break;
            case MoveAIType.RadomToBottomAndToTop:
                if (currentTime > AICom.lastMoveTime + AICom.nextMoveTimeGap) {
                    let range: number = App.MathUtils.Range(AICom.moveArgs1[0], AICom.moveArgs1[1]);
                    moveTarget.targetX = App.MathUtils.Range(AICom.moveBounce.left, AICom.moveBounce.right);
                    let worldRect: egret.Rectangle = World.Instance.worldRect;
                    if (position.point.y >= worldRect.bottom) {
                        moveTarget.targetY = position.point.y - range;
                    } else {
                        moveTarget.targetY = position.point.y + range;
                    }
                    AICom.lastMoveTime = currentTime;
                    AICom.nextMoveTimeGap = App.MathUtils.Range(AICom.moveArgs1[2], AICom.moveArgs1[3]);
                }
                break;
        }
    }

    public getNeededComponents(): string[] {
        return [ComponentTypes.MoveAI, ComponentTypes.MoveTarget, ComponentTypes.Position];
    }
}