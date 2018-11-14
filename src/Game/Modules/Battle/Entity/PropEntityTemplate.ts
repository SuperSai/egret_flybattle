class PropEntityTemplate implements IEntityTemplate {

	public buildEntity(vo: any): IEntity {
		let entity: Entity = App.ObjectPool.pop("Entity");
		entity.name = vo.assetname;
		entity.addComponent(ComponentTypes.Camp, vo);
		entity.addComponent(ComponentTypes.NextPhase, vo);
		entity.addComponent(ComponentTypes.Expire, vo);
		entity.addComponent(ComponentTypes.EntityType, { type: EntityTypes.Entity_Prop });
		entity.addComponent(ComponentTypes.Bounce, vo);
		entity.addComponent(ComponentTypes.Position, vo);
		entity.addComponent(ComponentTypes.Speed, vo);
		entity.addComponent(ComponentTypes.Explode, vo);
		entity.addComponent(ComponentTypes.Display, vo);
		entity.addComponent(ComponentTypes.MoveTarget, vo);
		entity.addComponent(ComponentTypes.Integral, vo);
		entity.addComponent(ComponentTypes.Sound, vo);
		return entity;
	}

	public copyToEntity(vo: any, entity: Entity): IEntity {
		entity.name = vo.assetname;
		entity.removeComponent(ComponentTypes.MoveAI);
		entity.addComponent(ComponentTypes.HP, vo);
		entity.addComponent(ComponentTypes.NextPhase, vo, true);
		entity.addComponent(ComponentTypes.Bounce, vo);
		entity.addComponent(ComponentTypes.Speed, vo);
		entity.addComponent(ComponentTypes.Explode, vo);
		entity.addComponent(ComponentTypes.Display, vo);
		entity.addComponent(ComponentTypes.MoveTarget, vo);
		entity.addComponent(ComponentTypes.Integral, vo);
		entity.addComponent(ComponentTypes.Expire, vo);
		return entity;
	}
}