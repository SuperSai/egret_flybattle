class MonsterEntityTemplate implements IEntityTemplate {

    public buildEntity(vo: any): IEntity {
        let entity: Entity = App.ObjectPool.pop("Entity");
        entity.name = vo.assetname;
        entity.addComponent(ComponentTypes.Camp, vo);
        entity.addComponent(ComponentTypes.HP, vo);
        entity.addComponent(ComponentTypes.NextPhase, vo);
        entity.addComponent(ComponentTypes.Damage, vo);
        entity.addComponent(ComponentTypes.EntityType, { type: EntityTypes.Entity_Monster });
        entity.addComponent(ComponentTypes.Bounce, vo);
        entity.addComponent(ComponentTypes.Position, vo);
        entity.addComponent(ComponentTypes.Speed, vo);
        entity.addComponent(ComponentTypes.Explode, vo);
        entity.addComponent(ComponentTypes.Display, vo);
        entity.addComponent(ComponentTypes.MoveAI, vo);
        entity.addComponent(ComponentTypes.MoveTarget, vo);
        entity.addComponent(ComponentTypes.BulletGroup, vo);
        entity.addComponent(ComponentTypes.Prop, vo);
        return entity;
    }

    public copyToEntity(vo: any, entity: Entity): IEntity {
        entity.name = vo.assetname;
        //因为skillComponent是动态添加的，所以转入下一阶段时要移除
        entity.removeComponent(ComponentTypes.Bullet);
        entity.removeComponent(ComponentTypes.Buff);
        entity.addComponent(ComponentTypes.HP, vo);
        entity.addComponent(ComponentTypes.NextPhase, vo, true);
        entity.addComponent(ComponentTypes.Damage, vo);
        entity.addComponent(ComponentTypes.Bounce, vo);
        entity.addComponent(ComponentTypes.Speed, vo);
        entity.addComponent(ComponentTypes.Explode, vo);
        entity.addComponent(ComponentTypes.Display, vo);
        entity.addComponent(ComponentTypes.MoveAI, vo);
        entity.addComponent(ComponentTypes.MoveTarget, vo);
        entity.addComponent(ComponentTypes.BulletGroup, vo);
        entity.addComponent(ComponentTypes.Prop, vo);
        return entity;
    }
}