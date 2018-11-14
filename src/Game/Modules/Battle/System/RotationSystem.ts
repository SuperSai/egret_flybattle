class RotationSystem implements ISystem {
    public name: string = "RotationSystem";
    public excute(entity: IEntity) {
        let rotation: RotationCom = entity.getComponent(ComponentTypes.Rotation);
        let display: DisplayCom = entity.getComponent(ComponentTypes.Display);
        let angle: AngleCom = entity.getComponent(ComponentTypes.Angle);

        if (display.displays.length == 0) return;
        if (rotation.snapToAngle && angle) {
            rotation.rota = angle.angle;
        } else {
            rotation.rotaSpeed = rotation.rotaSpeed + rotation.accRotaSpeed;
            rotation.rota += rotation.rotaSpeed * GlobalTimer.deltaTime;
        }
        let collision: BounceCom = entity.getComponent(ComponentTypes.Bounce);
        if (collision) {
            collision.collisionRect.rotation = rotation.rota + display.additionalRotation;
            if (display.anchor) collision.collisionRect.anchor = display.anchor;
            collision.collisionRect.update();
        }
    }

    public getNeededComponents(): string[] {
        return [ComponentTypes.Rotation, ComponentTypes.Display];
    }
}