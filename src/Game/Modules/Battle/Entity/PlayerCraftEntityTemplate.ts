class PlayerCraftEntityTemplate implements IEntityTemplate {
    public buildEntity(vo: any): IEntity {
        let entity: Entity = App.ObjectPool.pop("Entity");
        entity.name = vo.assetname;
        entity.addComponent(ComponentTypes.Camp, vo);
        entity.addComponent(ComponentTypes.HP, vo);
        entity.addComponent(ComponentTypes.Damage, vo);
        entity.addComponent(ComponentTypes.EntityType, { type: EntityTypes.Entity_Player });
        entity.addComponent(ComponentTypes.Bounce, vo);
        entity.addComponent(ComponentTypes.Position, vo);
        entity.addComponent(ComponentTypes.Speed, vo);
        entity.addComponent(ComponentTypes.Explode, vo);
        entity.addComponent(ComponentTypes.Display, vo);
        entity.addComponent(ComponentTypes.Player, vo);
        entity.addComponent(ComponentTypes.Wing, vo);
        return entity;
    }

    public copyToEntity(vo: any, entity: Entity): IEntity {
        entity.name = vo.assetname;
        entity.addComponent(ComponentTypes.Buff, vo);
        return entity;

    }
}