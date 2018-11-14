/**
 * 冲刺系统
 */
class SprintSystem implements ISystem {
	public name: string = "SprintSystem";
	public excute(entity: IEntity) {
		let sprintCom: SprintCom = entity.getComponent(ComponentTypes.Sprint);
		if (!sprintCom) return;
		sprintCom.currentTime = egret.getTimer();
		let timePass: boolean = sprintCom.currentTime > sprintCom.startTime + sprintCom.effectTime;
		if (timePass || BattleManager.Instance.levelCom.bossIsShow) {
			this.restore(entity, sprintCom);
			return;
		}
		World.Instance.eliminateMonstersOnSameLine();
	}

	private restore(entity: IEntity, sprintCom: SprintCom): void {
		entity.removeComponent(sprintCom);
		BattleConfig.BackgoundSpeed = 15;
		BattleManager.Instance.levelCom.monstersSpeedRatio = 1;
		BattleManager.Instance.planeStartAttack();
		App.TimerManager.doTimer(2000, 1, () => {
			let hpCom: HPCom = BattleManager.Instance.battleModel.captain.getComponent(ComponentTypes.HP);
			hpCom.hp = 1;
		}, self);
	}

	public getNeededComponents(): string[] {
		return [ComponentTypes.Sprint];
	}

}