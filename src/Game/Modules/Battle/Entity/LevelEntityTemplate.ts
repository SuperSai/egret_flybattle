class LevelEntityTemplate implements IEntityTemplate {
	public buildEntity(vo: any): IEntity {
		let entity: Entity = App.ObjectPool.pop("Entity");
		entity.name = "LevelEntity";
		entity.addComponent(ComponentTypes.Level,vo);
		return entity;
	}
}