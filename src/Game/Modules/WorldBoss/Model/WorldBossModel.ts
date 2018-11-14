class WorldBossModel extends BaseModel {

    /** 房间id  0-表示未开启或上次已结束 */
    public roomId: number = 0;
    /** 关卡id */
    public missionId: number = 0;
    /** 体力 */
    public power: number = 0;
    /** 最大体力 */
    public maxPower: number = 0;
    /** 是否已结束  true-结束了 false-未结束 */
    public isOver: boolean = false;
    /** 世界BOSS结束时间 */
    public overTime: number = 0;
    /** 体力恢复时间 */
    public powerTime: number = 0;
    /** 当前BOSS血量 */
    public bossLeftHp: number = 0;
    /** 世界BOSS排行榜列表 */
    public rankList: TSDictionary<number, protocol.IFriendWorldBossRankMsg>;
    /** 英雄排行榜数据 */
    public heroRankList: protocol.IFriendWorldBossRankMsg[];

    public constructor($controller: BaseController) {
        super($controller);
        let self = this;
        if (GlobleData.Instance.hasParasComplete) {
            this.onDataComplete();
        } else {
            GlobleData.Instance.addEventListener(egret.Event.COMPLETE, self.onDataComplete, self);
        }
    }

    private onDataComplete(): void {
        let self = this;
        self.maxPower = Number(GlobleData.getDataByFilter(GlobleData.ServerConfigVO, "id", "WORLD_BOSS_POWER")[0].value);
    }


    /** 获取世界BOSS阶段信息 */
    public getWorldBossAwardMsg(): WorldBossAwardVO[] {
        let self = this;
        return GlobleData.getDataByCondition(GlobleData.WorldBossAwardVO, (itemData: WorldBossAwardVO) => {
            return itemData.missionId == self.missionId;
        });
    }

    /** 获取英雄排行榜数据列表 */
    public getHeroRankList(): void {
        let self = this;

    }
}

/** 英雄排行榜箭头状态 */
enum HERO_ARROW_STATE {
    DEFAULT = 0,
    UP = 1,
    DOWN = 2
}