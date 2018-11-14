class HeroInfo {

	/** 和服务器数据传输的Id */
	public heroId: number = 0;
	/** 对应表中的heroId */
	public configId: number = 0;
	public level: number = 0;
	public star: number = 0;
	public wingAssetname: string = "";
	public assetType: string = "2,2";
	public bulletVO: BulletVO = null;
	/** 根据元件序列来转化后得到的子弹列表，用来替换Skill表中的bullets字段 */
	public bulletsSkill: string = "";
	public damage: number = 0;
	public heroVO: HeroVO = null;
	public components: TSDictionary<number, number> = null;
	/** 当前状态 */
	public state: number = HERO_STATE.STAR;
	/** 子弹的加速度技能 */
	public bulletAccSpeed: number = 0;
	/** 是否拥有子弹双倍伤害技能 */
	public isHaveBulletDouble: boolean = false;
	/** 双倍伤害的概率 */
	public bulletDoubleNum: number = 0;
	/** 精灵 or 万寿菊 */
	public heroSkillVO: HeroSkillVO = null;
}