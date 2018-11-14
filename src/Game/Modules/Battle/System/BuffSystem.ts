class BuffSystem implements ISystem {
	public name: string = "BuffSystem";

	public excute(entity: IEntity) {
		let buffCom: BuffCom = entity.getComponent(ComponentTypes.Buff);
		if (!buffCom || !buffCom.perform || buffCom.id == -1) return;
		App.BuffManager.doBuffEffect(buffCom, entity);
		buffCom.perform = false;
		entity.removeComponent(ComponentTypes.Buff);
	}


	public getNeededComponents(): string[] {
		return [ComponentTypes.Buff]
	}
}