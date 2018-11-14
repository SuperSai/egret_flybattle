class BulletEntityTemplate implements IEntityTemplate {
    public buildEntity(vo: any): IEntity {
        let entity: Entity = App.ObjectPool.pop("Entity");
        entity.name = vo.assetname;

        entity.addComponent(ComponentTypes.Camp, vo);
        entity.addComponent(ComponentTypes.Damage, vo);
        entity.addComponent(ComponentTypes.NextPhase, vo);
        entity.addComponent(ComponentTypes.EntityType, { type: EntityTypes.Entity_Bullt });
        entity.addComponent(ComponentTypes.Bounce, vo);
        entity.addComponent(ComponentTypes.Position, vo);
        entity.addComponent(ComponentTypes.Speed, vo);
        entity.addComponent(ComponentTypes.Angle, vo);
        entity.addComponent(ComponentTypes.Explode, vo);
        entity.addComponent(ComponentTypes.Display, vo);
        entity.addComponent(ComponentTypes.Rotation, vo);
        entity.addComponent(ComponentTypes.MoveTarget, vo);
        entity.addComponent(ComponentTypes.Guide, vo);
        entity.addComponent(ComponentTypes.Expire, vo);
        entity.addComponent(ComponentTypes.Reflect, vo);
        return entity;
    }

    public copyToEntity(vo: any, entity: Entity): IEntity {
        entity.name = vo.assetname;
        entity.addComponent(ComponentTypes.Damage, vo);
        entity.addComponent(ComponentTypes.NextPhase, vo, true);
        entity.addComponent(ComponentTypes.EntityType, { type: EntityTypes.Entity_Bullt });
        entity.addComponent(ComponentTypes.Bounce, vo);
        entity.addComponent(ComponentTypes.Speed, vo);
        entity.addComponent(ComponentTypes.Angle, vo);
        entity.addComponent(ComponentTypes.Explode, vo);
        entity.addComponent(ComponentTypes.Display, vo);
        entity.addComponent(ComponentTypes.Rotation, vo);
        entity.addComponent(ComponentTypes.MoveTarget, vo, true);
        entity.addComponent(ComponentTypes.Guide, vo, true);
        entity.addComponent(ComponentTypes.Expire, vo);
        return entity;
    }
}