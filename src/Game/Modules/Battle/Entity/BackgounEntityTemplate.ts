class BackgounEntityTemplate implements IEntityTemplate {
	public buildEntity(vo: any): IEntity {
		let entity: Entity = App.ObjectPool.pop("Entity");
		entity.name = "BackgounEntity";
		entity.addComponent(ComponentTypes.Display,{addToBottom:true});
		entity.addComponent(ComponentTypes.Position,{});
		entity.addComponent(ComponentTypes.Backgound,vo);
		return entity;
	}
}