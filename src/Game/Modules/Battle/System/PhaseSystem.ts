class PhaseSystem implements ISystem {
    public name: string = "PhaseSystem";
    public excute(entity: IEntity) {
        let phaseCom: NextPhaseCom = entity.getComponent(ComponentTypes.NextPhase);
        let currentTime: number = egret.getTimer();
        switch (phaseCom.phaseCondition) {
            case PhaseConditionType.HPPercent:
                let hpCom: HPCom = entity.getComponent(ComponentTypes.HP);
                if (hpCom) {
                    let percent: number = hpCom.hp / hpCom.totalHp * 100;
                    //血量小于指定值后就会进入下一个状态
                    if (percent <= phaseCom.phaseArgs) {
                        PhaseSystem.gotoNextPhase(entity, phaseCom.nextPhase, phaseCom.nextData);
                    }
                }
                break;
            case PhaseConditionType.TimePass:
                let expireCom: ExpireCom = entity.getComponent(ComponentTypes.Expire);
                if (currentTime > expireCom.startTime + expireCom.duration) {
                    PhaseSystem.gotoNextPhase(entity, phaseCom.nextPhase, phaseCom.nextData);
                }
                break;
            case PhaseConditionType.ArrivePosition:
                let position: PositionCom = entity.getComponent(ComponentTypes.Position);
                if (position.point.y >= phaseCom.phaseArgs) {
                    PhaseSystem.gotoNextPhase(entity, phaseCom.nextPhase, phaseCom.nextData);
                    SpawEntitySystem.handleBossRateParameter(entity, BattleManager.Instance.levelCom);
                }
                break;
        }
    }

    private static gotoNextPhase(entity: IEntity, nextPhase: number[], data: any = null): void {
        let typeCom: EntityTypeCom = entity.getComponent(ComponentTypes.EntityType);
        let camp: CampCom = entity.getComponent(ComponentTypes.Camp);
        let position: PositionCom = entity.getComponent(ComponentTypes.Position);
        if (nextPhase.length == 1) {
            BattleManager.Instance.copyToEntity(entity, typeCom.type, nextPhase[0], camp.camp, data);
            return;
        } else {
            for (let i: number = 1; i < nextPhase.length; i++) {
                BattleManager.Instance.createFromTemplate(typeCom.type, nextPhase[i], camp.camp, position.point.x, position.point.y);
            }
            BattleManager.Instance.copyToEntity(entity, typeCom.type, nextPhase[0], camp.camp, data);
        }
    }

    public getNeededComponents(): string[] {
        return [ComponentTypes.NextPhase, ComponentTypes.EntityType];
    }
}