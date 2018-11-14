class AngleSystem implements ISystem {
    public name: string = "AngleSystem";
    public excute(entity: IEntity) {
        let angle: AngleCom = entity.getComponent(ComponentTypes.Angle);
        angle.angleSpeed = angle.angleSpeed + angle.accAngleSpeed;
        angle.angle = angle.angle + angle.angleSpeed * GlobalTimer.deltaTime;
    }

    public getNeededComponents(): string[] {
        return [ComponentTypes.Angle];
    }
}