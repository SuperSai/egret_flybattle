class UpdateHpSystem implements ISystem {
	public name: string = "UpdateHpSystem";

	public excute(entity: IEntity) {
		let hpCom: HPCom = entity.getComponent(ComponentTypes.HP);
		let displayCom: DisplayCom = entity.getComponent(ComponentTypes.Display);
		if (displayCom) {
			let progress: ProgressBarNew = displayCom.getDisplayByName("ProgressBarNew");
			if (progress) {
				progress.MaxHp = hpCom.totalHp;
				progress.Hp = hpCom.hp;
			}
		}
	}

	public getNeededComponents(): string[] {
		return [ComponentTypes.HP, ComponentTypes.Display];
	}
}