class AwardVO {

	public id: number;
	public dropId: number;
	public itemId: number;
	public num: number;
	public desc: string;
	/** 权重 */
	public probability: number;
	/** 是否必得 0-否 1-是 */
	public probabilityType: number;
	public hardLevel: number;
	public critRate: number;
	public awardIcon: string;
}