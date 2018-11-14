class LuckyCardModel extends BaseModel {

    public cardItemHeadIds: TSDictionary<number, protocol.IOpenCardHeadPicMsg>;
    public rewardList: TSDictionary<number, RewardInfo>;
    public cardsList: any[] = [];// 所有card列表
    public rewardGetList: any[] = [];//获得的奖励列表
    public row = 4;
    public rowSpace = 12;
    public column = 5;
    public columnSpace = 12;
    public cardW: number = 118;
    public cardH: number = 151;
    /** 可翻牌次数 */
    public openCardCount: number = 2;
    /** 翻牌需要消耗的奖杯数 */
    public openCardTrophy: number = 0;
    /** 奖杯翻牌剩余次数 */
    public openCardTrophyNum: number = 0;
    /** 看广告翻牌剩余次数 */
    public openCardAdNum: number = 0;
    /** 卡的品质 */
    public cardQuality: number = 1;

    public constructor($controller: BaseController) {
        super($controller);
    }
}