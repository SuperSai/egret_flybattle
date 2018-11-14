class BuffManager extends BaseClass {

	/** Buff效果 */
	public doBuffEffect(buffCom: BuffCom, entity: IEntity): void {
		let self = this;
		let buffVO: BuffVO = GlobleData.getData(GlobleData.BuffVO, buffCom.id);
		switch (buffVO.id) {
			case BUFF_ID.BUFF_1://技能等级+1
				self.performBulletLevelUpgradeBuff(entity, buffCom);
				break;
			case BUFF_ID.BUFF_2://双排子弹
				self.performMushroomBuff(entity);
				break;
			case BUFF_ID.BUFF_3:
				self.performSnapeBuff(entity, buffCom);
				break;
			case BUFF_ID.BUFF_4://冲刺
				self.performSprintBuff(entity, buffVO);
				break;
			case BUFF_ID.BUFF_5: //万寿菊 -- 增加伤害
				self.performAddDamageBuff(entity, buffCom);
				break;
		}
	}
	/** 磁铁BUFF */
	private performSnapeBuff(entity: IEntity, buffCom: BuffCom): void {
		let self = this;
		if (App.HeroSkillManager.isHaveSnapeTime) {
			buffCom.buffVO.effectTime = buffCom.buffVO.effectTime + (buffCom.buffVO.effectTime * (App.HeroSkillManager.snapeTime / 100));
		}
		if (App.HeroSkillManager.isHaveSnapeRange) {
			buffCom.buffVO.param[0] = buffCom.buffVO.param[0] + App.HeroSkillManager.snapeRange;
		}
		entity.addComponent(ComponentTypes.Snape, buffCom.buffVO);
		let displayCom: DisplayCom = entity.getComponent(ComponentTypes.Display);
		if (!displayCom.hasDisplay("ui_citie")) {
			displayCom.addDisplay("ui_citie", displayCom.displays.length, AssetType.BoneAnimation);
		}
	}
	/** 冲刺BUFF */
	private performSprintBuff(entity: IEntity, buffVO: BuffVO): void {
		BattleManager.Instance.planeStopAttack();
		if (App.HeroSkillManager.isHaveFlowersSkill) {
			buffVO.effectTime = buffVO.effectTime + (buffVO.effectTime * (App.HeroSkillManager.flowersNumber / 100));
		}
		BattleManager.Instance.battleModel.captain.addComponent(ComponentTypes.Sprint, buffVO);
		let hpCom: HPCom = BattleManager.Instance.battleModel.captain.getComponent(ComponentTypes.HP);
		hpCom.hp = 999999;
		World.Instance.changeMonsterSpeed();
		BattleManager.Instance.levelCom.monstersSpeedRatio = 0.2;
		BattleConfig.BackgoundSpeed = 30;
	}
	/** 增加伤害 */
	private performAddDamageBuff(entity: IEntity, buffCom: BuffCom): void {
		let damageCom: DamageCom = entity.getComponent(ComponentTypes.Damage);
		damageCom.damage = damageCom.damage + (damageCom.damage * (Number(buffCom.buffVO.param[0]) / 100));
		if (App.HeroSkillManager.isHaveFlowersSkill) {
			damageCom.damage = damageCom.damage + (damageCom.damage * (App.HeroSkillManager.flowersNumber / 100));
		}
	}
	/** 执行蘑菇BUFF效果 -- 双排子弹发射 */
	private performMushroomBuff(entity: IEntity): void {
		let skillCom: BulletCom = entity.getComponent(ComponentTypes.Bullet);
		if (!skillCom) return;
		// 如果重复吃就重置持续时间
		if (skillCom.bulletVO && skillCom.bulletVO.buffSkill != 0) {
			let bulletVO: BulletVO = GlobleData.getData(GlobleData.BulletVO, skillCom.bulletVO.buffSkill);
			if (App.HeroSkillManager.isHaveMushroomTime) {
				bulletVO.time = bulletVO.time + (bulletVO.time * (App.HeroSkillManager.mushroomTime / 100));
			}
			skillCom.bulletVO = bulletVO;
			skillCom.bullet = bulletVO.id;
			skillCom.infinitySkill = false;
			skillCom.onAdded();
		}
		// 吃了重复的就重新计算时间不叠加
		else if (skillCom.bulletVO && skillCom.bulletVO.buffSkill == 0) {
			skillCom.startTime = 0;
		}
	}
	/** 执行子弹等级提升 */
	private performBulletLevelUpgradeBuff(entity: IEntity, buffCom: BuffCom): void {
		let playerCom: PlayerCom = entity.getComponent(ComponentTypes.Player);
		//子弹等级增加
		playerCom.heroInfo.level += Number(buffCom.buffVO.param[0]);
		//根据最新的等级去查找子弹技能模板ID
		let skillVO: BulletVO = App.HerosManager.getBulletSkillId(playerCom.heroInfo.heroVO.type, playerCom.heroInfo.level);
		playerCom.heroInfo.bulletVO = skillVO;
		playerCom.heroInfo.bulletsSkill = App.HerosManager.getHeroBullets(playerCom.heroInfo.components, skillVO.bullets);
		let skillGroupCom: BulletGroupCom = entity.getComponent(ComponentTypes.BulletGroup);
		if (skillGroupCom) {
			skillGroupCom.bullet = App.ObjectUtils.splitToNumber(skillVO.id + "");
		}
	}
}