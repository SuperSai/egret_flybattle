class RotationCom implements IComponent {
    public componentName: string = ComponentTypes.Rotation;

    public rota: number = 0;
    public rotaSpeed: number = 0;
    public accRotaSpeed: number = 0;
    public snapToAngle:boolean = false;
    

    public onRemoved(): void {
        this.rota = 0;
        this.rotaSpeed = 0;
        this.accRotaSpeed = 0;
        this.snapToAngle = false;
    }

    public onAdded(): void {
    }


    public static canAdd(vo: any): boolean {
        return !(vo.snapToAngle == false && vo.rota == 0 && vo.rotaSpeed == 0 && vo.accRotaSpeed == 0);
        
    }
}