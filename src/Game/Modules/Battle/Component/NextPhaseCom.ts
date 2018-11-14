class NextPhaseCom implements IComponent{
    public componentName:string  = ComponentTypes.NextPhase;
    public nextPhase:number[] = [];
    public phaseArgs:number = 0;
    public phaseCondition:number = 0;
    public nextData:any = null;

    public onRemoved():void
    {
        this.nextPhase  = [];
        this.phaseArgs = 0;
        this.phaseCondition = 0;
        this.nextData = null;
    }

    public static canAdd(vo: any): boolean {
        return vo.nextPhase != 0;
        
    }
}