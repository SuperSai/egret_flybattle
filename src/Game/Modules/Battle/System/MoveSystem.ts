class MoveSystem implements ISystem {
    public name: string = "MoveSystem";
    public excute(entity: IEntity) {
        let position: PositionCom = entity.getComponent(ComponentTypes.Position);
        let angle: AngleCom = entity.getComponent(ComponentTypes.Angle);
        let speed: SpeedCom = entity.getComponent(ComponentTypes.Speed);

        position.point.x = position.point.x + speed.speed * Math.cos(angle.angle * Math.PI / 180) * GlobalTimer.deltaTime;
        position.point.y = position.point.y + speed.speed * Math.sin(angle.angle * Math.PI / 180) * GlobalTimer.deltaTime;
    }

    public getNeededComponents(): string[] {
        return [ComponentTypes.Position, ComponentTypes.Angle, ComponentTypes.Speed];
    }
}