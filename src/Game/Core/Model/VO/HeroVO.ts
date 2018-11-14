class HeroVO {
	public heroId: number;
	public name: string;
	public quality: number;
	public type: number;
	public bigIcon: string;
	public smallIcon: string;

	private _bulletElements: number[];
	/** 子弹列表 */
	get bulletElements(): number[] {
		return this._bulletElements;
	}

	set bulletElements(value) {
		this._bulletElements = App.ObjectUtils.splitToNumber(value);
	}
}