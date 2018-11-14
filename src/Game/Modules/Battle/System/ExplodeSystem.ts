/**
 * 爆炸系统处理
 */
class ExplodeSystem implements ISystem {
	public name: string = "ExplodeSystem";
	public excute(entity: IEntity) {
		let explode: ExplodeCom = entity.getComponent(ComponentTypes.Explode);
		//播放爆炸特效
		if (explode.explode) {
			if (explode.bombAni != "" && explode.bombAni != "0") {
				let bombAni: BoneAnimation = App.ResourcePool.pop(explode.bombAni, ResourcePool.SKE);
				let position: PositionCom = entity.getComponent(ComponentTypes.Position);
				bombAni.play();
				bombAni.x = position.point.x;
				bombAni.y = position.point.y;
				BattleManager.Instance.world.addChild(bombAni);
			}
			App.SoundManager.playEffect(explode.dieSound);
			let typeCom: EntityTypeCom = entity.getComponent(ComponentTypes.EntityType);
			//只移除死亡后敌人的数据
			if (typeCom.type != EntityTypes.Entity_Player) {
				BattleManager.Instance.removeEntity(entity);
				//是否进入下一关卡 1普通关卡，只有普通关卡才会有下一关
				if (BattleManager.Instance.levelCom.levelData.type == BATTLE_TYPE.DEFAULT && BattleManager.Instance.world.boss.length == 0 && BattleManager.Instance.levelCom.hasBossSpawened) {
					BattleManager.Instance.loadNextLevel();
				} else if (BattleManager.Instance.levelCom.levelData.type == BATTLE_TYPE.BOSS && BattleManager.Instance.world.boss.length == 0 && BattleManager.Instance.levelCom.hasBossSpawened) {
					this.worldBossGameOver();
					SocketManager.Instance.out.sendWorldBossGameOver(BattleManager.Instance.topDamage);
				}

			}
			else {	//如果死亡的是角色就进入结算界面
				this.worldBossGameOver();
				if (BattleManager.Instance.levelCom.levelData.type == BATTLE_TYPE.DEFAULT) {
					SocketManager.Instance.out.sendWorldBossGameOver(BattleManager.Instance.score, BattleManager.Instance.getTrophyCountList(), BattleManager.Instance.getKeyCountList());
				} else if (BattleManager.Instance.levelCom.levelData.type == BATTLE_TYPE.BOSS) {
					SocketManager.Instance.out.sendWorldBossGameOver(BattleManager.Instance.topDamage);
				}
			}
		}
	}

	private worldBossGameOver(): void {
		let self = this;
		BattleManager.Instance.planeStopAttack();
		World.Instance.removeAllData();
	}
	
	public getNeededComponents(): string[] {
		return [ComponentTypes.Explode, ComponentTypes.Position]
	}
}