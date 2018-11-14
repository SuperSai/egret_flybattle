class PlayerInputSystem implements ISystem {
    public name: string = "PlayerInputSystem";
    public initialize(): void {
        App.StageUtils.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchMove, this);
        App.StageUtils.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        App.StageUtils.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchMove, this);
    }

    public excute() {
    }

    public getNeededComponents(): string[] {
        return [];
    }

    private onTouchMove(event: egret.TouchEvent): void {
        let self = this;
        if (!App.PlayerInfoManager.isHallTouchHero) return;
        let player: IEntity[] = BattleManager.Instance.player;
        for (let i: number = 0; i < player.length; i++) {
            let playerCom: PlayerCom = player[i].getComponent(ComponentTypes.Player);
            let position: PositionCom = player[i].getComponent(ComponentTypes.Position);
            if (playerCom && playerCom.heroInfo && playerCom.heroInfo.heroId == App.HerosManager.doubtfulInfo.leftPlayer) {
                position.point.x = event.stageX - BattleConfig.planeSpacing;
            } else if (playerCom && playerCom.heroInfo && playerCom.heroInfo.heroId == App.HerosManager.doubtfulInfo.rightPlayer) {
                position.point.x = event.stageX + BattleConfig.planeSpacing;
            } else {
                position.point.x = event.stageX;
            }
        }
    }
}