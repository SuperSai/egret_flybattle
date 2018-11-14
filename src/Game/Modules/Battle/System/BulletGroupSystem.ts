class BulletGroupSystem implements ISystem {
	public name: string = "BulletGroupSystem";
	public excute(entity: IEntity) {
		let bulletGroup: BulletGroupCom = entity.getComponent(ComponentTypes.BulletGroup);
		if (!bulletGroup) return;
		let nextSkillTimeGap: number = bulletGroup.bulletGaps[bulletGroup.nextSkillIndex];
		let currentTime: number = egret.getTimer();

		let bulletCom: BulletCom = entity.getComponent(ComponentTypes.Bullet);
		if (nextSkillTimeGap == 0 && bulletCom) return;
		if (currentTime - bulletGroup.useSkillTimeflag > nextSkillTimeGap) {
			entity.addComponent(ComponentTypes.Bullet, { bullet: bulletGroup.bullet[bulletGroup.nextSkillIndex] });
			bulletCom = entity.getComponent(ComponentTypes.Bullet);
			let typeCom: EntityTypeCom = entity.getComponent(ComponentTypes.EntityType);
			if (typeCom && typeCom.type == EntityTypes.Entity_Player) {
				let playerCom: PlayerCom = entity.getComponent(ComponentTypes.Player);
				if (bulletCom.bulletVO.id != playerCom.heroInfo.bulletVO.id) {
					bulletCom.bulletVO = playerCom.heroInfo.bulletVO;
				}
				let bulletsSkill: any = playerCom.heroInfo.bulletsSkill;
				bulletCom.bulletVO.bullets = bulletsSkill;
			}
			bulletCom.infinitySkill = nextSkillTimeGap == 0;
			bulletGroup.useSkillTimeflag = currentTime;
			bulletGroup.nextSkillIndex++;
			if (bulletGroup.nextSkillIndex >= bulletGroup.bulletGaps.length) bulletGroup.nextSkillIndex = 0;
		}
	}

	public getNeededComponents(): string[] {
		return [ComponentTypes.BulletGroup];
	}
}