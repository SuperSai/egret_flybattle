class BattleModel extends BaseModel {

    public captain: IEntity;//队长
    public leftPlayers: IEntity;//左队员
    public rightPlayers: IEntity;//右队员

    public backgoundCom: BackgoundCom;
    public levelCom: LevelCom;
    public currentLevel: number;

    /** 铜奖杯 */
    public copperTrophy = 0;
    /** 银奖杯 */
    public silverTrophy = 0;
    /** 金奖杯 */
    public goldTrophy = 0;
    /** 铜钥匙 */
    public copperKey = 0;
    /** 银钥匙 */
    public silverKey = 0;
    /** 金钥匙 */
    public goldKey = 0;

    public constructor($controller: BaseController) {
        super($controller)
        let self = this;
    }
}

/** 战斗副本类型 */
enum BATTLE_TYPE {
    DEFAULT = 1,
    BOSS = 2,
}

