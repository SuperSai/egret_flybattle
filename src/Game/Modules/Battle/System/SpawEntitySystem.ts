class SpawEntitySystem implements ISystem {
    public name: string = "SpawEntitySystem";

    public excute(entity: IEntity): void {
        let levelCom: LevelCom = entity.getComponent(ComponentTypes.Level);
        levelCom.currentTime = egret.getTimer();
        if (levelCom.currentTime > levelCom.bossTime + levelCom.levelData.time && !levelCom.bossIsShow) {
            //start boss fright
            if (levelCom.bossIsShow) return;
            levelCom.bossIsShow = true;
            //先开始BOSS预警后再出现BOSS
            BossWarningLogic.Instance.startWarning(levelCom.levelData.icon + "", () => {
                SpawEntitySystem.spawenBossEntity(levelCom);
                App.SoundManager.playBg(1002);
                levelCom.hasBossSpawened = true;
            })
        } else if (!levelCom.bossIsShow) {
            //开始刷怪的时间还没到
            if (levelCom.currentTime < levelCom.startTime + levelCom.levelData.startSpawneTime) return;
            let nextSpawneTime: number = levelCom.startTime + levelCom.levelData.spawnMonsterTimeGap * levelCom.monstersSpeedRatio;
            if (nextSpawneTime < levelCom.currentTime) {
                //刷新怪物
                SpawEntitySystem.spawneMonster(levelCom.levelData, levelCom.monstersSpeedRatio != 1);
                levelCom.startTime = levelCom.currentTime;
            }

            let nextMeteTime: number = levelCom.lastMeteSpawnTime + levelCom.levelData.meteStartTime + levelCom.meteSpawneTimeGap;
            if (nextMeteTime < levelCom.currentTime) {
                levelCom.meteSpawneTimeGap = App.MathUtils.Range(levelCom.levelData.meteMinTimeGap, levelCom.levelData.meteMaxTimeGap);
                levelCom.lastMeteSpawnTime = levelCom.currentTime;
                //刷新陨石
                this.spawneMete(levelCom.levelData);
            }
        }
    }

    private static spawenBossEntity(levelCom: LevelCom): void {
        let entity: IEntity = BattleManager.Instance.createFromTemplate(
            EntityTypes.Entity_Boss, levelCom.levelData.boss, CampTypes.Camp_Enemy,
            BattleConfig.BossEnterStartPoint.x, BattleConfig.BossEnterStartPoint.y);
        SpawEntitySystem.handleBossRateParameter(entity, levelCom);
    }

    public static handleBossRateParameter(entity: IEntity, levelCom: LevelCom): void {
        if (levelCom.levelData.type == BATTLE_TYPE.BOSS) {
            entity.removeComponent(ComponentTypes.Prop);
        }
        SpawEntitySystem.handleSpeedRate(entity, levelCom.levelData.bossSpeedRate);
        SpawEntitySystem.handleHpRate(entity, levelCom.levelData.bossHpRate);
        SpawEntitySystem.handleSkillRate(entity, levelCom.levelData.bossSkillRate);
    }

    private static spawneMonster(vo: LevelVO, isAccSpeed: boolean = false): void {
        for (let i: number = 0; i < BattleConfig.monsterLineCount; i++) {
            let monsterID: number = App.MathUtils.getProbalityItemFromArray(vo.monsters, vo.monsterProbality);
            let monsterIndex: number = vo.monsters.indexOf(monsterID);
            let points: egret.Point[] = BattleConfig.monsterSpawnPoints;
            let entity: IEntity = BattleManager.Instance.createFromTemplate(EntityTypes.Entity_Monster, monsterID, CampTypes.Camp_Enemy, points[i].x, points[i].y);
            SpawEntitySystem.handleSpeedRate(entity, vo.monsterSpeedRate[monsterIndex]);
            SpawEntitySystem.handleHpRate(entity, vo.hpRate[monsterIndex]);
            if (isAccSpeed) {
                let speedCom: SpeedCom = entity.getComponent(ComponentTypes.Speed);
                speedCom.accSpeed = 1;
            }
        }
    }

    private spawneMete(vo: LevelVO): void {
        let count: number = Math.round(App.MathUtils.Range(vo.meteMinCount, vo.meteMaxCount));
        let self = this;
        let guideBornCount: number = Math.round(App.MathUtils.Range(vo.meteMinFollowCount, vo.meteMaxFollowCount));
        for (let i: number = 0; i < count; i++) {
            egret.setTimeout(() => {
                let meteX: number;
                if (guideBornCount > 0) {
                    let player: IEntity = BattleManager.Instance.player[0];
                    let position: PositionCom = player.getComponent(ComponentTypes.Position);
                    meteX = position.point.x;
                    guideBornCount--;
                } else {
                    meteX = App.MathUtils.Range(BattleConfig.meteStartX, BattleConfig.meteEndX);
                }
                let entity: IEntity = BattleManager.Instance.createFromTemplate(EntityTypes.Entity_Bullt, vo.meteorolite, CampTypes.Camp_Enemy, meteX, BattleConfig.meteStartY);
                //下面这个要像个方法转换过去
                // self.handleSpeedRate(entity, vo.meteSpeedRate);
                SpawEntitySystem.handleSpeedRate(entity, vo.meteAlertGuideSpeed);
                SpawEntitySystem.handleExpireTime(entity, vo.meteAlertTime);
                SpawEntitySystem.handleGuideTime(entity, vo.meteAlertTime - vo.meteGuidetime);
                SpawEntitySystem.handleNextPhase(entity, { speed: vo.meteSpeedRate });
            }, self, App.MathUtils.Range(vo.meteMinRandomGap, vo.meteMaxRandomGap))
        }
    }

    private static handleSpeedRate(entity: IEntity, speedRate: number): void {
        let speedCom: SpeedCom = entity.getComponent(ComponentTypes.Speed);
        speedCom.speed *= speedRate;
    }

    private static handleExpireTime(entity: IEntity, expireTime: number): void {
        let expireCom: ExpireCom = entity.getComponent(ComponentTypes.Expire);
        expireCom.duration = expireTime;
    }

    private static handleGuideTime(entity: IEntity, startDelay: number): void {
        let guideCom: GuideCom = entity.getComponent(ComponentTypes.Guide);
        guideCom.guideDelay = startDelay;
    }

    private static handleNextPhase(entity: IEntity, data: any): void {
        let nextPhase: NextPhaseCom = entity.getComponent(ComponentTypes.NextPhase);
        nextPhase.nextData = data;
    }

    private static handleHpRate(entity: IEntity, hpRate: number): void {
        let display: DisplayCom = entity.getComponent(ComponentTypes.Display);
        let bounce: BounceCom = entity.getComponent(ComponentTypes.Bounce);
        let hpCom: HPCom = entity.getComponent(ComponentTypes.HP);
        hpCom.hp *= hpRate;
        hpCom.totalHp = hpCom.hp;
    }

    private static handleSkillRate(entity: IEntity, skillRate: number): void {
        let skillCom: BulletGroupCom = entity.getComponent(ComponentTypes.BulletGroup);
        if (!skillCom) return;
        let skillGaps: number[] = [];
        for (let i: number = 0; i < skillCom.bulletGaps.length; i++) {
            skillGaps.push(skillCom.bulletGaps[i] * skillRate);
        }
        skillCom.bulletGaps = skillGaps;
    }

    public getNeededComponents(): string[] {
        return [ComponentTypes.Level];
    }
}