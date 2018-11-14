class GuideCom implements IComponent {
    public componentName: string = ComponentTypes.Guide;
    public guideMissile: number = 0;
    public guideDelay: number = 0;
    public startTime: number = 0;

    public onRemoved(): void {
        this.guideMissile = 0;
        this.guideDelay = 0;
        this.startTime = 0;
    }

    public onAdded(): void {
        this.startTime = egret.getTimer();
    }

    public static canAdd(vo: any): boolean {
        return vo.guideMissile != 0;
        
    }
}