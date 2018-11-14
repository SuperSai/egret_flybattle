class BulletConfigVO {
	public skillId: number;
	public bulletSkillId: number;

	private _buffIdList: number[];
	/** buff列表 */
	get buffIdList(): number[] {
		return this._buffIdList;
	}

	set buffIdList(value) {
		this._buffIdList = App.ObjectUtils.splitToNumber(value);
	}

}