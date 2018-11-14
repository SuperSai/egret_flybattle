class SpeedSystem implements ISystem {
    public name:string = "SpeedSystem";
    public excute(entity:IEntity) {
        let speed: SpeedCom = entity.getComponent(ComponentTypes.Speed);
        speed.speed = speed.speed + speed.accSpeed;
    }

    public getNeededComponents(): string[] {
        return [ComponentTypes.Speed];
    }

}