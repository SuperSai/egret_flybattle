class BuffVO {
	public id: number;
	public type: number;
	public name: string;
	/** 有效时间 */
	public effectTime: number;
	public startSound: number;
	/** 目标0：自己 1：怪物 */
	public target: number;

	private _param: string[];
	get param(): string[] {
		return this._param;
	}

	set param(value) {
		this._param = App.ObjectUtils.splitToString(value, "|");
	}

}