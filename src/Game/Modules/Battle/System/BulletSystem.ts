class BulletSystem implements ISystem {
	public name: string = "BulletSystem";
	public excute(entity: IEntity) {
		let bullet: BulletCom = entity.getComponent(ComponentTypes.Bullet);
		if (!bullet.bulletVO) return;
		bullet.currentTime = egret.getTimer();
		let timePass: boolean = bullet.currentTime > bullet.startTime + bullet.bulletVO.time;
		if (timePass && !bullet.infinitySkill) {
			App.HeroSkillManager.isHaveMushroomTime = false;
			App.HeroSkillManager.mushroomTime = 0;
			entity.removeComponent(bullet);
			return;
		}

		let nextAnimationTime: number = bullet.startTime + bullet.bulletVO.animationDelay + bullet.animationIndex * bullet.bulletVO.animationInterval;
		if (nextAnimationTime < bullet.currentTime) {
			let display: DisplayCom = entity.getComponent(ComponentTypes.Display);
			display.playAnimationOnce(bullet.bulletVO.animation);
			bullet.animationIndex++;
		}

		let camp: CampCom = entity.getComponent(ComponentTypes.Camp);
		for (let i: number = 0; i < bullet.bulletVO.bullets.length; i++) {
			let delay: number = bullet.bulletVO.delay[i];
			let interval: number = bullet.bulletVO.interval[i];

			let nextFireTime: number = bullet.startTime + interval * bullet.nextBulletIndex[i] + delay;
			if (nextFireTime < bullet.currentTime) {
				BulletSystem.fireSkillBullet(entity, bullet, i, camp.camp);
				bullet.nextBulletIndex[i]++;
			}
		}
	}

	private static fireSkillBullet(entity: IEntity, bulletCom: BulletCom, i: number, camp: number) {
		let position: PositionCom = entity.getComponent(ComponentTypes.Position);
		let startPos: egret.Point = bulletCom.bulletVO.startPos[i];
		let addtionalPos: egret.Point = bulletCom.bulletVO.addtionalPos[i];
		let startAngle: number = bulletCom.bulletVO.startAngle[i];
		let addtionalAngle: number = bulletCom.bulletVO.addtionalAngle[i];
		let startRotation: number = bulletCom.bulletVO.startRotation[i];
		let addtionalRotation: number = bulletCom.bulletVO.addtionalRotation[i];

		let index: number = bulletCom.nextBulletIndex[i];
		let startX: number = startPos.x + index * addtionalPos.x + position.point.x;
		let startY: number = startPos.y + index * addtionalPos.y + position.point.y;

		let angle: number = startAngle + index * addtionalAngle;
		let rotation: number = startRotation + index * addtionalRotation;
		let damageCom: DamageCom = entity.getComponent(ComponentTypes.Damage);
		let bullet: IEntity = BattleManager.Instance.createFromTemplate(EntityTypes.Entity_Bullt, bulletCom.bulletVO.bullets[i], camp, startX, startY, { damage: damageCom.damage });

		let playerCom: PlayerCom = entity.getComponent(ComponentTypes.Player);
		if (playerCom && playerCom.heroInfo) {
			//角色技能 -- 子弹加速度
			let speedCom: SpeedCom = bullet.getComponent(ComponentTypes.Speed);
			if (speedCom) speedCom.accSpeed = speedCom.accSpeed + playerCom.heroInfo.bulletAccSpeed;
			//是否双倍伤害
			if (playerCom.heroInfo.isHaveBulletDouble) {
				let ran: number = 100 * Math.random();
				if (playerCom.heroInfo.bulletDoubleNum >= ran) {
					let damageCom: DamageCom = bullet.getComponent(ComponentTypes.Damage);
					if (damageCom) damageCom.damage = damageCom.damage * 2;
				}
			}
			bullet.data = playerCom.heroInfo.bulletVO;
		}

		let angleCom: AngleCom = bullet.getComponent(ComponentTypes.Angle);
		if (angleCom) angleCom.angle = angle;

		let rotaCom: RotationCom = bullet.getComponent(ComponentTypes.Rotation);
		if (rotaCom) rotaCom.rota = rotation;
	}

	public getNeededComponents(): string[] {
		return [ComponentTypes.Bullet, ComponentTypes.Camp];
	}
}