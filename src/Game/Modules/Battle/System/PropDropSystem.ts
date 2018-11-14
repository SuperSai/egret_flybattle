/**
 * 道具掉落系统
 */
class PropDropSystem implements ISystem {
	public name: string = "PropDropSystem";
	private _dir: number = 1;
	private _h: number = 2;
	private _positionCom: PositionCom;

	public excute(entity: IEntity) {
		let self = this;
		let propCom: PropCom = entity.getComponent(ComponentTypes.Prop);
		if (!propCom) return;
		let hpCom: HPCom = entity.getComponent(ComponentTypes.HP);
		self._positionCom = entity.getComponent(ComponentTypes.Position);
		if (!hpCom || !self._positionCom) return;
		let playerCom: PlayerCom = entity.getComponent(ComponentTypes.Player);
		if (playerCom && playerCom.heroInfo.heroSkillVO) {
			propCom.currentTime = egret.getTimer();
			let time: number = playerCom.heroInfo.heroSkillVO.param * 1000;
			if (playerCom.heroInfo.heroSkillVO.skillId == SKILL_TYPE.MAGNETS) {//精灵 -- 每X秒丢出一个磁铁
				if (propCom.currentTime > propCom.startTime + time) {
					this.createDropProp(ITEM_TYPE.MAGNET, false);
					propCom.startTime = propCom.currentTime;
				}
			} else if (playerCom.heroInfo.heroSkillVO.skillId == SKILL_TYPE.MARIGOLD) {//万寿菊 -- 有概率丢出一朵万寿菊，拾取后队长伤害提高，持续一段时间
				if (propCom.currentTime > propCom.startTime + time) {
					this.createDropProp(ITEM_TYPE.MARIGOLD, false);
					propCom.startTime = propCom.currentTime;
				}
			}
		} else if (hpCom.hp <= 0) {
			let typeCom: EntityTypeCom = entity.getComponent(ComponentTypes.EntityType);
			let isBoss: boolean = typeCom && typeCom.type == EntityTypes.Entity_Boss ? true : false;
			for (let i: number = 0; i < propCom.dropCount; i++) {
				let itemId = PropDropLogic.Instance.getDropPropItem().itemId;
				this.createDropProp(itemId, isBoss);
			}
			//金币分裂技能
			if (App.HeroSkillManager.isHaveDropGold) {
				if (App.HeroSkillManager.isExtraDropGold()) {
					this.createDropProp(ITEM_TYPE.GOLD, isBoss);
				}
			}
		}
	}

	private createDropProp(itemId: number, isBoss: boolean): void {
		let self = this;
		let propEntity = BattleManager.Instance.createFromTemplate(EntityTypes.Entity_Prop, itemId, -3, self._positionCom.point.x, self._positionCom.point.y);
		let moveTargetCom: MoveTargetCom = propEntity.getComponent(ComponentTypes.MoveTarget);
		moveTargetCom.moveState = MoveState.Parabolic;
		moveTargetCom.targetY = BattleConfig.PropEnterEndPosY;
		this.setPropDropDir(self._positionCom, isBoss);
		moveTargetCom.param = { dir: this._dir, h: this._h };
	}

	/** 设置掉落的位置方向 */
	private setPropDropDir(positionCom: PositionCom, isBoss: boolean): void {
		this._h = isBoss ? App.MathUtils.Range(1, 3) : 2;
		if (positionCom.point.x < 100) {
			this._dir = isBoss ? App.MathUtils.Range(1, 5) : 1;
		}
		else if (positionCom.point.x > (App.StageUtils.stage.stageWidth - 50)) {
			this._dir = isBoss ? App.MathUtils.Range(-1, -5) : -1;
		}
		else {
			if (isBoss) {
				this._dir = Math.random() > 0.5 ? App.MathUtils.Range(-1, -2) : App.MathUtils.Range(1, 2);
			}
			else {
				this._dir = Math.random() > 0.5 ? 1 : -1;
			}
		}
	}

	public getNeededComponents(): string[] {
		return [ComponentTypes.Prop];
	}
}