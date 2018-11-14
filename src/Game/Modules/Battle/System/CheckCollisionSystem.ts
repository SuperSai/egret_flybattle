class CheckCollisionSystem implements ISystem{
    public name:string = "CheckCollisionSystem";
    public excute(entity:IEntity)
    {
        let position:PositionCom = entity.getComponent(ComponentTypes.Position);
        let bounce:BounceCom = entity.getComponent(ComponentTypes.Bounce);
        bounce.collisionRect.position = position.point;
        bounce.collisionRect.update();
        if(bounce.targetType == TargetTypes.NONE)return;
        BattleManager.Instance.world.handleCollision(entity,bounce.targetType, (entity1:IEntity,entity2:IEntity)=>{
            let bounce1:BounceCom = entity1.getComponent(ComponentTypes.Bounce);
            let bounce2:BounceCom = entity2.getComponent(ComponentTypes.Bounce);
            bounce1.collisionTarget = entity2;
            bounce2.collisionTarget = entity1;
        });
    }
    
    public getNeededComponents():string[]
    {
        return [ComponentTypes.Position,ComponentTypes.Bounce,ComponentTypes.EntityType];
    }
}