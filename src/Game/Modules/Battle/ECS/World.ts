class World extends egret.DisplayObjectContainer {

    private _shape: egret.Shape = new egret.Shape();

    private _worldRect: egret.Rectangle;
    get worldRect(): egret.Rectangle { return this._worldRect; }
    set worldRect(value) { this._worldRect = value; }

    private _worldCollisionRect: RotatedRectangle;
    get worldCollisionRect(): RotatedRectangle { return this._worldCollisionRect };
    set worldCollisionRect(value) { this._worldCollisionRect = value; }

    constructor() {
        super();
        let self = this;
        self._worldRect = new egret.Rectangle();
        self._worldCollisionRect = new RotatedRectangle();
        this.addChild(this._shape);
    }

    private static _instance: World;
    public static get Instance(): World {
        if (World._instance == null) {
            World._instance = new World();
        }
        return World._instance;
    }
    /** 所有系统的集合 */
    private _systems: ISystem[];
    /** 所有实体的集合 */
    private _entitys: IEntity[] = [];
    private _monsters: IEntity[] = [];
    private _players: IEntity[] = [];
    private _enemys: IEntity[] = [];//包含子弹
    private _ally: IEntity[] = [];//包含子弹
    private _boss: IEntity[] = [];
    private _props: IEntity[] = [];//掉落道具
    private _sameLineMonsters: TSDictionary<number, IEntity[]> = new TSDictionary<number, IEntity[]>();

    public set sameLineMonsters(value) { this._sameLineMonsters = value; };
    public get sameLineMonsters(): TSDictionary<number, IEntity[]> { return this._sameLineMonsters };
    public set props(value) { this._props = value; };
    public get props(): IEntity[] { return this._props };
    public get players(): IEntity[] { return this._players };
    public get boss(): IEntity[] { return this._boss };

    /** 是否第一次初始化 */
    private isFirstSetup: boolean = true;

    public setup(): void {
        let self = this;
        if (self.isFirstSetup) {
            self.isFirstSetup = false;
            Systems.setup();
            this._systems = Systems.AllSystems;
        }
        App.TimerManager.doFrame(1, 0, self.onFrameUpdate, self);
    }
    /** 
     * 添加实体到对应的阵营中
     * @param entity 实体
     * @param camp 阵营
     */
    public addEntity(entity: IEntity, camp: number) {
        this._entitys.push(entity);
        switch (camp) {
            case CampTypes.Camp_Enemy:
                this._enemys.push(entity);
                break;
            case CampTypes.Camp_Self:
                this._ally.push(entity);
                break;
        }

        let hpCom: HPCom = entity.getComponent(ComponentTypes.HP);
        if (hpCom == null) return;
        let typeCom: EntityTypeCom = entity.getComponent(ComponentTypes.EntityType);
        if (typeCom.type == EntityTypes.Entity_Boss) this._boss.push(entity);

        switch (camp) {
            case CampTypes.Camp_Enemy:
                this._monsters.push(entity);
                break;
            case CampTypes.Camp_Self:
                if (this._players.length == 0)
                    this._players.push(entity);
                break;
        }

    }

    public handleCollision(entity: IEntity, targetType: number, collisionCall: Function): boolean {
        let targetBounce: BounceCom = entity.getComponent(ComponentTypes.Bounce);
        let enemys: IEntity[] = this.getGroupEntitysByCheckType(targetType);
        for (let i: number = 0; i < enemys.length; i++) {
            let bounce: BounceCom = enemys[i].getComponent(ComponentTypes.Bounce);
            if (bounce == null) continue;
            if (bounce.targetType == TargetTypes.NONE) continue;
            if (bounce.collisionRect == null) continue;
            if (bounce.collisionRect.position == null) continue;
            if (Polygon.doPolygonsIntersect(targetBounce.collisionRect, bounce.collisionRect)) {
                collisionCall(enemys[i], entity);
            }
        }
        return false;
    }

    public handlerReflectCollision(entity: IEntity, targetType: number, collisionCall: Function): boolean {
        let targetBounce: BounceCom = entity.getComponent(ComponentTypes.Bounce);
        let enemys: IEntity[] = this.getGroupEntitysByCheckType(targetType);
        for (let i: number = 0; i < enemys.length; i++) {
            let bounce: BounceCom = enemys[i].getComponent(ComponentTypes.Bounce);
            if (bounce == null) continue;
            if (bounce.targetType == TargetTypes.NONE) continue;
            if (bounce.collisionRect == null) continue;
            if (bounce.collisionRect.position == null) continue;
            let points = Polygon.getsCollisionSegmentPoints(targetBounce.collisionRect, bounce.collisionRect);
            if (points) {
                collisionCall(points);
            }
        }
        return false;
    }
    /** 检查道具是否碰撞 */
    public handlerPropCollision(displayRectangle: RotatedRectangle, entity: IEntity, collisionCall: Function): boolean {
        let targetBounce: BounceCom = entity.getComponent(ComponentTypes.Bounce);
        if (Polygon.doPolygonsIntersect(displayRectangle, targetBounce.collisionRect)) {
            collisionCall();
        }
        return false;
    }

    public getGroupEntitysByCheckType(type: number): IEntity[] {
        let self = this;
        switch (type) {
            case TargetTypes.AllEntitys:
                return self._entitys;
            case TargetTypes.Allys:
                return self._ally;
            case TargetTypes.Enemys:
                return self._enemys;
            case TargetTypes.Monsters:
                return self._monsters;
            case TargetTypes.Players:
                return self._players;
            case TargetTypes.Prop:
                return self._props;
        }
        return null;
    }

    public removeEntity(entity: IEntity): void {
        let self = this;
        entity.removeComponents();
        App.ObjectUtils.removeFromArray(entity, self._monsters);
        App.ObjectUtils.removeFromArray(entity, self._enemys);
        App.ObjectUtils.removeFromArray(entity, self._ally);
        App.ObjectUtils.removeFromArray(entity, self._players);
        App.ObjectUtils.removeFromArray(entity, self._boss);
        App.ObjectUtils.removeFromArray(entity, self._entitys);
        App.ObjectUtils.removeFromArray(entity, self._props);
    }
    /** 移除所有数据 */
    public removeAllData(): void {
        let self = this;
        App.TimerManager.remove(self.onFrameUpdate, self);
        App.DisplayUtils.removeAllChildren(self._entitys);
        App.DisplayUtils.removeAllChildren(self._monsters);
        App.DisplayUtils.removeAllChildren(self._ally);
        App.DisplayUtils.removeAllChildren(self._boss);
        App.DisplayUtils.removeAllChildren(self._enemys);
        App.DisplayUtils.removeAllChildren(self._props);
        App.DisplayUtils.removeAllChildren(self._players);

        self._entitys = [];
        self._monsters = [];
        self._ally = [];
        self._boss = [];
        self._enemys = [];
        self._props = [];
        self._players = [];
    }

    public removeWorld(): void {
        App.DisplayUtils.removeAllChildren(this);
    }

    public getEntitysInRange(pos: egret.Point, range: number, type: number = 0): IEntity[] {
        let self = this;
        let entitys: IEntity[] = [];
        if (self._props && self._props.length > 0) {
            for (let i: number = 0; i < self._props.length; i++) {
                let prop: IEntity = self._props[i];
                if (prop.hasComponent(ComponentTypes.MoveAI)) continue;
                let position: PositionCom = prop.getComponent(ComponentTypes.Position);
                let distance: number = egret.Point.distance(pos, position.point);
                if (distance < range) {
                    entitys.push(prop);
                }
            }
        }
        return entitys;
    }
    /** 消灭一排怪 */
    public eliminateMonstersOnSameLine(): void {
        let self = this;
        for (let i: number = 0, len: number = self._monsters.length; i < len; i++) {
            let monster: IEntity = self._monsters[i];
            let positionCom: PositionCom = monster.getComponent(ComponentTypes.Position);
            if (positionCom.point.y >= BattleConfig.AirCraftStartY) {
                let hpCom: HPCom = monster.getComponent(ComponentTypes.HP);
                hpCom.hp = -1;
            }
        }
    }
    /** 改变怪物的速度 */
    public changeMonsterSpeed(): void {
        for (let i: number = 0, len: number = this._monsters.length; i < len; i++) {
            let entity: IEntity = this._monsters[i];
            let typeCom: EntityTypeCom = entity.getComponent(ComponentTypes.EntityType);
            //Boss不会加速
            if (typeCom.type == EntityTypes.Entity_Boss) {
                continue;
            }
            let speedCom: SpeedCom = entity.getComponent(ComponentTypes.Speed);
            speedCom.accSpeed = 1;
        }
    }

    private onFrameUpdate() {
        for (let i: number = 0; i < this._systems.length; i++) {
            let sys: ISystem = this._systems[i];
            //获取当前这个系统的组件组
            let neededCom: string[] = sys.getNeededComponents();
            //如果当前这个系统是没有组件组的就直接去检查下一个系统
            if (neededCom.length == 0) {
                sys.excute(null);
                continue;
            }
            //如果当前的系统是有组件组的，那么就去检查所有的实体，看那些实体包含这些组件
            if (this._entitys && this._entitys.length > 0) {
                for (let j: number = 0; j < this._entitys.length; j++) {
                    //判断这个实体是否包含当前这个组件组中的所有组件
                    let hasCom: boolean = this._entitys[j] ? this._entitys[j].hasComponents(neededCom) : false;
                    //如果包含那么这个系统通知实体去执行这些组件
                    if (hasCom) {
                        sys.excute(this._entitys[j]);
                    }
                    if (this._entitys[j] && this._entitys[j].hasComponent(ComponentTypes.EntityType)) {
                        let typeCom: EntityTypeCom = this._entitys[j].getComponent(ComponentTypes.EntityType);
                        if (typeCom && typeCom.type == EntityTypes.Entity_Player) {
                            let pos: PositionCom = this._entitys[j].getComponent(ComponentTypes.Position);
                            if (pos.point.y != BattleConfig.AirCraftStartY) {
                                pos.point.y = BattleConfig.AirCraftStartY;
                            }
                        }
                    }
                }
            }
        }

        //渲染控制器
        if (BattleConfig.RenderCollision) {
            this._shape.graphics.clear();
            this._shape.graphics.lineStyle(2, 0x00ff00);
            for (let t: number = 0; t < this._entitys.length; t++) {
                let bounce: BounceCom = this._entitys[t].getComponent(ComponentTypes.Bounce);
                if (bounce) {
                    let points: egret.Point[] = bounce.collisionRect.points;
                    for (let m: number = 0; m < points.length; m++) {
                        let nextP: egret.Point = m == points.length - 1 ? points[0] : points[m + 1];
                        this._shape.graphics.moveTo(points[m].x, points[m].y);
                        this._shape.graphics.lineTo(nextP.x, nextP.y);
                    }
                    this._shape.graphics.endFill();
                }
            }
        }
    }
}