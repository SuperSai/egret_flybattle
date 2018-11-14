class ExpireCom implements IComponent {
    public componentName: string = ComponentTypes.Expire;

    public duration: number = Number.MAX_VALUE;
    public startTime: number = 0;
    public startSound:number = 0;

    public onRemoved(): void {
        this.duration = 0;
        this.startSound = 0;
    }

    public onAdded(): void {
        this.startTime = egret.getTimer();
        App.SoundManager.playEffect(this.startSound);
    }

    public static canAdd(vo: any): boolean {
        return true;
    }
}