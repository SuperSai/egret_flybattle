class AngleCom implements IComponent {
    public componentName: string = ComponentTypes.Angle;

    public angle: number = 0;

    public angleSpeed: number = 0;

    public accAngleSpeed: number = 0;

    public onRemoved(): void {
        this.angle = 0;
        this.angleSpeed = 0;
        this.accAngleSpeed = 0;
    }

    public static canAdd(vo: any): boolean {
        return !(vo.angle == 0 && vo.angleSpeed == 0 && vo.accAngleSpeed == 0);
        
    }

}