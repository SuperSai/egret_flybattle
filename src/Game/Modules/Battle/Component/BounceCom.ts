class BounceCom implements IComponent
{
    public componentName:string  = ComponentTypes.Bounce;

    private _bounce:egret.Rectangle;
    // public bounce:egret.Rectangle = null;
    public get bounce():egret.Rectangle
    {
        return this._bounce;
    }

    public set bounce(value:egret.Rectangle)
    {
        this._bounce = value;
        this.collisionRect = App.ObjectPool.pop("RotatedRectangle");
        this.collisionRect.rect = this._bounce;
        this.collisionRect.update();
    }

    public collisionRect:RotatedRectangle;

    public targetType:number = -1;
    public collisionTarget:IEntity = null;

    public onRemoved():void
    {
        this.bounce = null;
        App.ObjectPool.push(this.collisionRect);
        this.collisionRect = null;
        this.targetType = 0;
    }

    public static canAdd(vo: any): boolean {
        return vo.bounce != null;
        
    }
}