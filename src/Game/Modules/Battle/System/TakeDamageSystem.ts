class TakeDamageSystem implements ISystem {
	public name: string = "TakeDamageSystem";

	public excute(entity: IEntity) {
		let hpCom: HPCom = entity.getComponent(ComponentTypes.HP);
		if (hpCom.invincible) return;

		if (hpCom.damageTemp > 0) {
			hpCom.hp -= hpCom.damageTemp;
			if (WorldBossController.roomIsOpen) {
				BattleManager.Instance.topDamage += hpCom.damageTemp;
				App.ControllerManager.applyFunc(ControllerConst.Battle, BattleConst.UPDATE_BOSS_DAMAGE);
			}
			hpCom.damageTemp = 0;
		}

		if (hpCom.hp < 0) {
			let expolde: ExplodeCom = entity.getComponent(ComponentTypes.Explode);
			if (expolde) {
				expolde.explode = true;
			}
		}
	}

	public getNeededComponents(): string[] {
		return [ComponentTypes.HP];
	}
}