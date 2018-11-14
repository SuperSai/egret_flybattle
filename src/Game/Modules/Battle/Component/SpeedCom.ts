class SpeedCom implements IComponent {
    public componentName: string = ComponentTypes.Speed;

    public speed: number = 0;
    public accSpeed: number = 0;

    public onRemoved(): void {
        this.speed = 0;
        this.accSpeed = 0;
    }

    public static canAdd(vo: any): boolean {
        return !(vo.speed == 0 && vo.accSpeed == 0);

    }
}