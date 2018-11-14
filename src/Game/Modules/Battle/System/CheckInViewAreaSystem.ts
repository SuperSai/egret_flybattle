class CheckInViewAreaSystem implements ISystem {
    public name: string = "ExpireSystem";
    public excute(entity: IEntity) {

        let expire: ExpireCom = entity.getComponent(ComponentTypes.Expire);
        let currentTime: number = egret.getTimer();
        if (currentTime < expire.startTime + BattleConfig.StartCkeckExpireTime) return;

        let collision: BounceCom = entity.getComponent(ComponentTypes.Bounce);
        let position: PositionCom = entity.getComponent(ComponentTypes.Position);
        let entityTypeCom: EntityTypeCom = entity.getComponent(ComponentTypes.EntityType);
        if (entityTypeCom && entityTypeCom.type == EntityTypes.Entity_Prop) {
            if (position.point.y <= 0) return;
        }
        if (App.DisplayUtils.isInViewArea(collision.collisionRect, position.point)) {

        } else {
            BattleManager.Instance.removeEntity(entity);
        }
    }

    public getNeededComponents(): string[] {
        return [ComponentTypes.Expire, ComponentTypes.Bounce, ComponentTypes.Position];
    }
}