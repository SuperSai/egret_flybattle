class PositionCom implements IComponent
{
    public componentName:string = ComponentTypes.Position;

    public point:egret.Point = new egret.Point();
    
    public onRemoved():void
    {
        this.point.x = 0;
        this.point.y = 0;
    }

    public static canAdd(vo: any): boolean {
        return true;
    }
}