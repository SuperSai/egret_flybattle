class BattleManager {

    /** 关卡ID */
    public missionID: number = 1;
    /** 世界BOSS单次最高伤害 */
    public topDamage: number = 0;
    /** 普通副本的分数记录 */
    public score: number = 0;
    private _battleModel: BattleModel;
    private _player: IEntity[] = [];
    private _world: World;

    /** 飞机攻击 */
    public planeStartAttack(): void {
        let self = this;
        let captainInfo: HeroInfo = App.HerosManager.getHeroInfo(App.HerosManager.doubtfulInfo.captain);
        self.planeAddSkillGroupCom(self._battleModel.captain, captainInfo);
        //左队员
        if (App.HerosManager.doubtfulInfo.leftPlayer != -1) {
            let leftPlayersInfo: HeroInfo = App.HerosManager.getHeroInfo(App.HerosManager.doubtfulInfo.leftPlayer);
            self.planeAddSkillGroupCom(self._battleModel.leftPlayers, leftPlayersInfo);
        }
        //右队员
        if (App.HerosManager.doubtfulInfo.rightPlayer != -1) {
            let rightPlayersInfo: HeroInfo = App.HerosManager.getHeroInfo(App.HerosManager.doubtfulInfo.rightPlayer);
            self.planeAddSkillGroupCom(self._battleModel.rightPlayers, rightPlayersInfo);
        }
    }

    /** 飞机添加子弹技能组 */
    private planeAddSkillGroupCom(entity: IEntity, info: HeroInfo): void {
        let vo: MonsterVO = EntityTemplates.getDataByEntityType(EntityTypes.Entity_Player, info.configId);
        App.ObjectUtils.copyValue2(vo, { bullet: info.bulletVO.id + "" });
        entity.addComponent(ComponentTypes.BulletGroup, vo);
    }

    /** 飞机停止攻击 */
    public planeStopAttack(): void {
        let self = this;
        self._battleModel.captain.removeComponent(ComponentTypes.BulletGroup);
        if (self._battleModel.captain.hasComponent(ComponentTypes.Bullet)) {
            self._battleModel.captain.removeComponent(ComponentTypes.Bullet);
        }
        //左队员
        if (App.HerosManager.doubtfulInfo.leftPlayer != -1) {
            self._battleModel.leftPlayers.removeComponent(ComponentTypes.BulletGroup);
            if (self._battleModel.leftPlayers.hasComponent(ComponentTypes.Bullet)) {
                self._battleModel.leftPlayers.removeComponent(ComponentTypes.Bullet);
            }
        }
        //右队员
        if (App.HerosManager.doubtfulInfo.rightPlayer != -1) {
            self._battleModel.rightPlayers.removeComponent(ComponentTypes.BulletGroup);
            if (self._battleModel.rightPlayers.hasComponent(ComponentTypes.Bullet)) {
                self._battleModel.rightPlayers.removeComponent(ComponentTypes.Bullet);
            }
        }
    }

    /** 添加飞机 */
    public addPlanes(): void {
        let self = this;
        //队长
        let captainInfo: HeroInfo = App.HerosManager.getHeroInfo(App.HerosManager.doubtfulInfo.captain);
        self._battleModel.captain = this.createPlane(captainInfo, new egret.Point(0, 0));
        //左队员
        if (App.HerosManager.doubtfulInfo.leftPlayer != -1) {
            let leftPlayersInfo: HeroInfo = App.HerosManager.getHeroInfo(App.HerosManager.doubtfulInfo.leftPlayer);
            self._battleModel.leftPlayers = this.createPlane(leftPlayersInfo, new egret.Point(-BattleConfig.planeSpacing, 0), self._battleModel.captain, "0.8,0.8");
        }
        //右队员
        if (App.HerosManager.doubtfulInfo.rightPlayer != -1) {
            let rightPlayersInfo: HeroInfo = App.HerosManager.getHeroInfo(App.HerosManager.doubtfulInfo.rightPlayer);
            self._battleModel.rightPlayers = this.createPlane(rightPlayersInfo, new egret.Point(BattleConfig.planeSpacing, 0), self._battleModel.captain, "0.8,0.8");
        }
    }

    /** 创建飞机 */
    private createPlane(info: HeroInfo, relativePos: egret.Point, mainPlan: IEntity = null, planeScale: string = "1,1"): IEntity {
        let relativeX = BattleConfig.AirCraftStartX + relativePos.x;
        let relativeY = BattleConfig.AirCraftStartY + relativePos.y;
        let plane: IEntity = BattleManager.Instance.createFromTemplate(EntityTypes.Entity_Player, info.configId,
            CampTypes.Camp_Self, relativeX, relativeY, { assetname: info.wingAssetname, assetScale: planeScale });
        //重置伤害，不读模板伤害
        let damage: DamageCom = plane.getComponent(ComponentTypes.Damage);
        damage.damage = info.damage;
        //把英雄数据添加到角色组件上
        let playerCom: PlayerCom = plane.getComponent(ComponentTypes.Player);
        let heroInfo: HeroInfo = new HeroInfo();
        App.ObjectUtils.copyValue2(heroInfo, info);
        playerCom.heroInfo = heroInfo;
        let display: DisplayCom = plane.getComponent(ComponentTypes.Display);
        if (relativePos.x != 0 || relativePos.y != 0) {
            plane.addComponent(ComponentTypes.RelativePos, { relativeX: relativePos.x, relaTiveY: relativePos.y, relativeTarget: mainPlan })
            let bounceCom: BounceCom = plane.getComponent(ComponentTypes.Bounce);
            bounceCom.targetType = -1;
        }
        return plane;
    }

    /** 加载下一关卡 */
    public loadNextLevel(): void {
        let self = this;
        BattleManager.Instance.missionID++;
        self._battleModel.levelCom.level = BattleManager.Instance.missionID;
        self._battleModel.backgoundCom.backgound = self._battleModel.levelCom.levelData.backgound;
    }

    public createFromTemplate(type: number, id: number, camp: number, posX: number, posY: number, addtional: any = null): IEntity {
        let template: IEntityTemplate = EntityTemplates.getTemplateByType(type);
        let vo: any = EntityTemplates.getDataByEntityType(type, id);
        if (addtional) {
            if (type == EntityTypes.Entity_Player) {
                addtional.assetname = vo.assetname + "," + addtional.assetname;
            }
            App.ObjectUtils.copyValue2(vo, addtional);
        }
        let entity: IEntity = template.buildEntity(vo);
        if (type == EntityTypes.Entity_Player) this._player.push(entity);
        if (type == EntityTypes.Entity_Prop) World.Instance.props.push(entity);
        entity.setupCamp(camp);
        entity.setupType(type);
        entity.setupPos(posX, posY);
        this._world.addEntity(entity, camp);
        return entity;
    }

    /** 添加单架飞机 */
    public addPlane(type: number): void {
        let self = this;
        switch (type) {
            case PLANE_TYPE.CAPTAIN:
                let captainInfo: HeroInfo = App.HerosManager.getHeroInfo(App.HerosManager.doubtfulInfo.captain);
                self._battleModel.captain = this.createPlane(captainInfo, new egret.Point(0, 0));
                break;
            case PLANE_TYPE.LEFT_PLAYER:
                let leftPlayersInfo: HeroInfo = App.HerosManager.getHeroInfo(App.HerosManager.doubtfulInfo.leftPlayer);
                self._battleModel.leftPlayers = this.createPlane(leftPlayersInfo, new egret.Point(-BattleConfig.planeSpacing, 0), self._battleModel.captain, "0.8,0.8");
                break;
            case PLANE_TYPE.RIGHT_PLAYER:
                let rightPlayersInfo: HeroInfo = App.HerosManager.getHeroInfo(App.HerosManager.doubtfulInfo.rightPlayer);
                self._battleModel.rightPlayers = this.createPlane(rightPlayersInfo, new egret.Point(BattleConfig.planeSpacing, 0), self._battleModel.captain, "0.8,0.8");
                break;
        }
    }

    /** 移除飞机 */
    public removePlane(type: number): void {
        let self = this;
        switch (type) {
            case PLANE_TYPE.CAPTAIN:
                if (self._battleModel.captain) self.removeEntity(self._battleModel.captain);
                break;
            case PLANE_TYPE.LEFT_PLAYER:
                if (self._battleModel.leftPlayers) self.removeEntity(self._battleModel.leftPlayers);
                break;
            case PLANE_TYPE.RIGHT_PLAYER:
                if (self._battleModel.rightPlayers) self.removeEntity(self._battleModel.rightPlayers);
                break;
        }
    }

    public copyToEntity(entity: IEntity, type: number, id: number, camp: number, data: any = null): void {
        let template: IEntityTemplate = EntityTemplates.getTemplateByType(type);
        let vo: any = EntityTemplates.getDataByEntityType(type, id);
        if (data) App.ObjectUtils.copyValue2(vo, data);
        template.copyToEntity(vo, entity);
        entity.setupType(type);
    }

    public removeEntity(entity: IEntity): void {
        this._world.removeEntity(entity);
    }

    /** 记录获得的道具数量 */
    public handlerGetItemCount(id: number): void {
        let self = this;
        switch (id) {
            case ITEM_TYPE.COPPER_TROPHY:
                self._battleModel.copperTrophy++;
                break;
            case ITEM_TYPE.SILVER_TROPHY:
                self._battleModel.silverTrophy++;
                break;
            case ITEM_TYPE.GOLD_TROPHY:
                self._battleModel.goldTrophy++;
                break;
            case ITEM_TYPE.COPPER_KEY:
                self._battleModel.copperKey++;
                break;
            case ITEM_TYPE.SILVER_KEY:
                self._battleModel.silverKey++;
                break;
            case ITEM_TYPE.GOLD_KEY:
                self._battleModel.goldKey++;
                break;
        }
    }

    /** 获取各类奖杯的数量 */
    public getTrophyCountList(): number[] {
        let self = this;
        return [self._battleModel.copperTrophy, self._battleModel.silverTrophy, self._battleModel.goldTrophy];
    }

    /** 获取各类钥匙的数量 */
    public getKeyCountList(): number[] {
        let self = this;
        return [self._battleModel.copperKey, self._battleModel.silverKey, self._battleModel.goldKey];
    }


    get player(): IEntity[] { return this._player; }
    get levelCom(): LevelCom { return this._battleModel.levelCom; }
    get battleModel(): BattleModel { return this._battleModel; }
    get world(): World { return this._world; }

    set battleModel(value: BattleModel) { this._battleModel = value; }
    set world(value: World) { this._world = value; }



    private static _instance: BattleManager;
    public static get Instance(): BattleManager {
        if (BattleManager._instance == null) {
            BattleManager._instance = new BattleManager();
        }
        return BattleManager._instance;
    }
}

enum PLANE_TYPE {
    /** 队长 */
    CAPTAIN,
    /** 左队员 */
    LEFT_PLAYER,
    /** 右队员 */
    RIGHT_PLAYER,
}