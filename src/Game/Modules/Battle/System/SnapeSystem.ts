/**
 * 吸收系统
 */
class SnapeSystem implements ISystem {
    public name: string = "SnapeSystem";

    public excute(entity: IEntity) {
        let snapeCom: SnapeCom = entity.getComponent(ComponentTypes.Snape);
        if (!snapeCom) return;
        let position: PositionCom = entity.getComponent(ComponentTypes.Position);
        snapeCom.currentTime = egret.getTimer();
        let timePass: boolean = snapeCom.currentTime > snapeCom.startTime + snapeCom.effectTime;
        if (timePass) {
            App.HeroSkillManager.isHaveSnapeTime = false;
            App.HeroSkillManager.snapeTime = 0;
            App.HeroSkillManager.isHaveSnapeRange = false;
            App.HeroSkillManager.snapeRange = 0;
            let displayCom: DisplayCom = entity.getComponent(ComponentTypes.Display);
            let display = displayCom.getDisplayBoneByName("ui_citie");
            displayCom.removeDisplay(display);
            entity.removeComponent(snapeCom);
            return;
        }
        // 满足被吸收的实体
        let snapes: IEntity[] = World.Instance.getEntitysInRange(position.point, snapeCom.param);
        if (snapes && snapes.length > 0) {
            for (let i: number = 0; i < snapes.length; i++) {
                let snapeEntity: IEntity = snapes[i];
                let moveTarget: MoveTargetCom = snapeEntity.getComponent(ComponentTypes.MoveTarget);
                moveTarget.moveState = MoveState.Default;
                snapeEntity.addComponent(ComponentTypes.MoveAI, { moveType: MoveAIType.MoveToPlayer });
                let speed: SpeedCom = snapeEntity.getComponent(ComponentTypes.Speed);
                speed.accSpeed = speed.accSpeed * 10;
            }
        }
    }

    public getNeededComponents(): string[] {
        return [ComponentTypes.Snape];
    }

}