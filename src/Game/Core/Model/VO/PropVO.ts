class PropVO {

	public id: number;
	public name: string;
	public targetType: number;
	public moveType: number;
	public speed: number;
	public accSpeed: number;
	public phaseCondition: number;
	public phaseArgs: number;
	public nextPhase: string;
	public integral: number;
	public type: number;
	public startSound: number;
	public dieSound: number;

	private _assetScale: number[];
	get assetScale(): number[] {
		return this._assetScale;
	}

	set assetScale(value) {
		this._assetScale = App.ObjectUtils.splitToNumber(value);
	}

	get assetType(): number[] {
		return this._assetType;
	}

	set assetType(value) {
		this._assetType = App.ObjectUtils.splitToNumber(value);
	}
	private _assetType: number[];

	get assetname(): string[] {
		return this._assetname;
	}

	set assetname(value) {
		this._assetname = String(value).split(",");
	}
	private _assetname: string[];

	private _bounce: egret.Rectangle;

	public set bounce(value) {
		this._bounce = App.ObjectUtils.converToRectangle(value);

	}
	public get bounce(): egret.Rectangle {
		return this._bounce;
	}
}