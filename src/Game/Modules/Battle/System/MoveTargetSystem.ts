class MoveTargetSystem implements ISystem {
    public name: string = "MoveTargetSystem";

    public excute(entity: IEntity) {
        let moveTarget: MoveTargetCom = entity.getComponent(ComponentTypes.MoveTarget);
        let position: PositionCom = entity.getComponent(ComponentTypes.Position);
        if (position.point.x == moveTarget.targetX && position.point.y == moveTarget.targetY) return;

        let speed: SpeedCom = entity.getComponent(ComponentTypes.Speed);
        let angle = App.MathUtils.getAngle(position.point.x, position.point.y, moveTarget.targetX, moveTarget.targetY);
        if (moveTarget.moveState == MoveState.Default) {
            let xSpeed: number = speed.speed * Math.cos(angle * Math.PI / 180) * GlobalTimer.deltaTime;
            let ySpeed: number = - (speed.speed * Math.sin(angle * Math.PI / 180)) * GlobalTimer.deltaTime;
            let resultX = position.point.x + xSpeed;
            let resultY = position.point.y + ySpeed;
            position.point.x = Math.abs(resultX - moveTarget.targetX) < xSpeed ? moveTarget.targetX : resultX;
            position.point.y = Math.abs(resultY - moveTarget.targetY) < ySpeed ? moveTarget.targetY : resultY;
        }
        else if (moveTarget.moveState == MoveState.Parabolic) {
            let xSpeed: number = speed.speed * Math.cos(-90 * Math.PI / 180) * GlobalTimer.deltaTime + moveTarget.param.dir;
            let ySpeed: number = -((speed.speed * Math.sin(-90 * Math.PI / 180)) * GlobalTimer.deltaTime + (9.8 * GlobalTimer.deltaTime * GlobalTimer.deltaTime * moveTarget.param.h));
            let resultX = position.point.x + xSpeed;
            let resultY = position.point.y + ySpeed;
            position.point.x = Math.abs(resultX - moveTarget.targetX) < xSpeed ? moveTarget.targetX : resultX;
            position.point.y = Math.abs(resultY - moveTarget.targetY) < ySpeed ? moveTarget.targetY : resultY;
        }
    }

    public getNeededComponents(): string[] {
        return [ComponentTypes.MoveTarget, ComponentTypes.Position, ComponentTypes.Speed];
    }
}