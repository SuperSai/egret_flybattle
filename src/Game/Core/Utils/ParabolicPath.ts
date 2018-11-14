/**
 * 抛物线轨迹
 */
class ParabolicPath extends egret.EventDispatcher {

	private _proX: number;
	private _proY: number;
	private _initAngle: number;
	private _initB: number;
	private _coute: number = 0;
	private _relativeAngle: number = 0;
	private _display: any;
	private _pos: egret.Point;
	private _rangX: number = 0;
	private _dir: number = -2;
	private _callback: Function;
	private _updateCallBack: Function;
	private _topHeight: number = -20;
	public constructor() {
		super();
	}

	public initPath(display: any, dir: number, angle: number, targetX: number, updateCallBack: Function, callback: Function = null, topHeight: number = -20): void {
		let self = this;
		self._initAngle = angle;
		self._display = display;
		self._coute = 10;
		self._dir = dir;
		self._topHeight = topHeight;
		self._callback = callback;
		self._updateCallBack = updateCallBack;
		self._pos = new egret.Point(display.x, display.y);
		if (angle < 15)
			angle = 15;
		else if (angle > 75)
			angle = 75;

		self._relativeAngle = display.rotation - angle;
		egret.startTick(self.move, self);
	}

	public stopPath(): void {
		let self = this;
		egret.stopTick(self.move, self);
	}

	private move(): boolean {
		let self = this;
		self._proX = self._display.x;
		self._proY = self._display.y;
		let radiusAngle: number = self._initAngle * Math.PI / 180;
		let pos: any = self.parabolicFormula(radiusAngle, -15, 0.3, self._pos.x, self._pos.y);
		self._display.x = pos.x;
		self._display.y = pos.y;
		self._updateCallBack(self._display.x, self._display.y);
		if (self._display.y > App.StageUtils.stage.stageHeight + self._display.height) {
			self.stopPath();
			if (self._callback) self._callback();
		}
		return false;
	}

	private parabolicFormula(radiusAngle: number, initSpeed: number = -2, gravity: number = 0.3, stX: number = 265, stY: number = 500): any {
		let self = this;
		let newX: number = stX + self._rangX;
		let newY: number = stY + self._coute * Math.tan(radiusAngle) + gravity * self._coute * self._coute / (2 * initSpeed * initSpeed * Math.cos(radiusAngle) * Math.cos(radiusAngle));
		let slope: number = Math.tan(radiusAngle) - 2 * gravity * self._coute / (2 * initSpeed * initSpeed * Math.cos(radiusAngle) * Math.cos(radiusAngle));
		let newAngle: number = Math.atan(slope) * 180 / Math.PI;
		self._coute += self._topHeight * Math.cos(radiusAngle);
		self._rangX += self._dir;
		return { x: newX, y: newY };
	}
}