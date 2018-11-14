class RotatedRectangle extends Polygon {
	public constructor() {
		super(4);
	}

	public set rect(rect: egret.Rectangle) {
		this._rect = rect;
	}

	public get rect(): egret.Rectangle {
		return this._rect;
	}

	private _position: egret.Point;
	public set position(value: egret.Point) {
		this._position = value;
	}

	public get position(): egret.Point {
		return this._position;
	}

	private _rotation: number = 0;
	public set rotation(value: number) {
		this._rotation = value;
	}

	public get rotation(): number {
		return this._rotation;
	}

	private _anchor: egret.Point;
	public set anchor(value: egret.Point) {
		this._anchor = value;
	}

	public get anchor(): egret.Point {
		return this._anchor;
	}

	public update(): void {
		if (this._rect == null) return;
		this.resetFromRect();
		this.updateRotation();
		if (this._position) this.updatePosition();
	}

	private _rect: egret.Rectangle;
	private resetFromRect(): void {
		this.points[0].x = this._rect.left;
		this.points[0].y = this._rect.top;

		this.points[1].x = this._rect.right;
		this.points[1].y = this._rect.top;

		this.points[2].x = this._rect.right;
		this.points[2].y = this._rect.bottom;

		this.points[3].x = this._rect.left;
		this.points[3].y = this._rect.bottom;
	}

	private updateRotation(): void {
		App.MathUtils.pointRotation(this.points[0], this._rect.left, this._rect.top, 0, 0, this._rotation);
		App.MathUtils.pointRotation(this.points[1], this._rect.right, this._rect.top, 0, 0, this._rotation);
		App.MathUtils.pointRotation(this.points[2], this._rect.right, this._rect.bottom, 0, 0, this._rotation);
		App.MathUtils.pointRotation(this.points[3], this._rect.left, this._rect.bottom, 0, 0, this._rotation);
	}

	private updatePosition(): void {
		for (let i: number = 0; i < this.points.length; i++) {
			this.points[i].x += this._position.x;
			this.points[i].y += this._position.y;
		}
	}
}