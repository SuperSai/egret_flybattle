/**
 * 物品掉落逻辑
 */
class PropDropLogic {

	private _totalWeights = 0;
	public propDropList: AwardVO[];

	/** 初始化掉落可能会获得的道具列表 */
	public initPropList(): void {
		let self = this;
		self.propDropList = self.getRewardsByDropId(101);
	}
	/** 获取掉落物品 */
	public getDropPropItem(): AwardVO {
		let self = this;
		this.calculatingTotalWeight(self.propDropList);
		if (this._totalWeights < 1) return null;
		return this.randomItem(self.propDropList);
	}
	/** 计算总权重 */
	private calculatingTotalWeight(items: AwardVO[]): void {
		if (!items || items.length < 1) return;
		for (let i: number = 0; i < items.length; i++) {
			this._totalWeights += items[i].probability;
		}
	}

	/** 根据权重随机一个物品 */
	private randomItem(items: AwardVO[]): AwardVO {
		//随机抽取的物品位置
		let random: number = Math.ceil(Math.random() * this._totalWeights);
		let start: number = 0;
		for (let i: number = 0, len: number = items.length; i < len; i++) {
			let item: AwardVO = items[i];	// 取出第一个商品
			//必得物品
			if (item.probabilityType == 1) return item;
			let end: number = start + item.probability;	// 计算区间的结束
			if (random > start && random <= end) {	// 如果随机数在这个区间内，说明抽中了该商品，终止循环
				this._totalWeights = -1;
				return item;
			}
			start = end;	// 当前区间的结束，作为下一个区间的开始
		}
		return null;
	}

	/** 获取对应掉落ID的所有奖励 */
	private getRewardsByDropId(dropId: number): AwardVO[] {
		let self = this;
		return GlobleData.getDataByCondition(GlobleData.AwardVO, (itemData: AwardVO) => {
			return itemData.dropId == dropId;
		});
	}

	private static _instance: PropDropLogic;
	public static get Instance(): PropDropLogic {
		if (PropDropLogic._instance == null) {
			PropDropLogic._instance = new PropDropLogic();
		}
		return PropDropLogic._instance;
	}
}