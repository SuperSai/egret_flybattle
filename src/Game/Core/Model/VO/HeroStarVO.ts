class HeroStarVO {
	/** 唯一id */
	public id: number;
	/** 英雄id */
	public heroId: number;
	/** 星星数 */
	public star: number;
	/** 消耗英雄id */
	public needHeroId: number;
	/** 消耗的英雄星数 */
	public needHeroStar: number;
	/** 消耗的英雄等级 */
	public needHeroLevel: number;
	/** 消耗的英雄数量 */
	public needHeroNum: number;

	private _skillIdList: number[];
	/** 英雄技能列表 */
	get skillIdList(): number[] {
		return this._skillIdList;
	}

	set skillIdList(value) {
		this._skillIdList = App.ObjectUtils.splitToNumber(value);
	}
}