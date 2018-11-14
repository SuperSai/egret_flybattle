class MagicCardModel extends BaseModel {

    /** 奖励列表 */
    public rewardList: AwardVO[];
    /** 奖励的掉落ID */
    public rewardDropId: number = 1005;
    public rewardIndex: number = 5;
    /** 最高品质的英雄 */
    public topHeroItem: AwardVO;
    /** 第一个抽中的英雄 */
    public rewardHeroItem: AwardVO;
    /** 第二个抽中的英雄 */
    public rewardHeroItemTwo: AwardVO;

    public constructor($controller: BaseController) {
        super($controller);
    }
}