class HandleCollisionSystem implements ISystem {
	public name: string = "HandleCollisionSystem";
	public excute(entity: IEntity) {
		let bounce: BounceCom = entity.getComponent(ComponentTypes.Bounce);
		let target: IEntity = bounce.collisionTarget;
		if (target) {
			let typeCom: EntityTypeCom = target.getComponent(ComponentTypes.EntityType);
			//检测碰撞是否道具
			if (typeCom && typeCom.type == EntityTypes.Entity_Prop) {
				let expolde: ExplodeCom = target.getComponent(ComponentTypes.Explode);
				if (expolde) {
					expolde.explode = true;
					let sound: SoundCom = target.getComponent(ComponentTypes.Sound);
					if (sound) App.SoundManager.playEffect(sound.startSound);
				}
				let integralCom: IntegralCom = target.getComponent(ComponentTypes.Integral);
				// 不属于BUFF系列的道具
				if (integralCom.type != BUFF_TYPE.BUFF_TYPE_1 && integralCom.type != BUFF_TYPE.BUFF_TYPE_2) {
					BattleManager.Instance.score += integralCom.integral;
					BattleManager.Instance.handlerGetItemCount(integralCom.id);
					App.ControllerManager.applyFunc(ControllerConst.Battle, BattleConst.UPDATE_SCORE);
				}
				else {
					let buffVO: BuffVO = GlobleData.getData(GlobleData.BuffVO, integralCom.id);
					entity.addComponent(ComponentTypes.Buff, buffVO);
					let buffCom: BuffCom = entity.getComponent(ComponentTypes.Buff);
					if (buffCom) {
						buffCom.perform = true;
					}
				}
			}
			else {
				let hp: HPCom = entity.getComponent(ComponentTypes.HP);
				if (hp) {
					let damage: DamageCom = target.getComponent(ComponentTypes.Damage);
					typeCom = entity.getComponent(ComponentTypes.EntityType);
					if (typeCom && typeCom.type == EntityTypes.Entity_Boss && target && target.data && target.data.isHaveBossDamageAscension) {//首领杀手技能 -- 对首领造成的伤害增加
						hp.damageTemp += (damage.damage + target.data.damageAscension);
					} else if (typeCom && typeCom.type == EntityTypes.Entity_Monster) {//杂兵杀手技能 -- 对杂兵造成的伤害增加
						if (App.HeroSkillManager.isHaveMonsterDamager) {
							hp.damageTemp += (damage.damage + App.HeroSkillManager.monsterDamager);
						} else {
							hp.damageTemp += damage.damage;
						}
					} else {
						//命运 -- 概率免疫本次伤害
						if (typeCom && typeCom.type == EntityTypes.Entity_Player && App.HeroSkillManager.isHaveImmuneSkill) {
							if (!App.HeroSkillManager.isImmuneDamager()) {
								hp.damageTemp += damage.damage;
							}
						} else {
							hp.damageTemp += damage.damage;
						}
					}
				} else {
					let expolde: ExplodeCom = entity.getComponent(ComponentTypes.Explode);
					if (expolde) {
						expolde.explode = true;
					}
				}
			}
			bounce.collisionTarget = null;
		}
	}

	public getNeededComponents(): string[] {
		return [ComponentTypes.Bounce, ComponentTypes.EntityType];
	}
}