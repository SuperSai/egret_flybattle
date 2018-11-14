class MathUtils extends BaseClass {
	public constructor() {
		super();
	}

	public Deg2Rad: number = 0.01745329;
	public Rad2Deg: number = 57.29578;
	public Max: number = 9999999;

	public Clamp(a, b, c) {
		return Math.max(b, Math.min(c, a));
	}

	public Approximately(a, b): boolean {
		return Math.abs(a - b) < 0.01;
	}

	public Range(start: number, end: number): number {
		let max: number = Math.max(start, end);
		let min: number = Math.min(start, end);
		return Math.random() * (max - min) + min;
	}

	public moveToNextPosition(startPoint: egret.Point, endPoint: egret.Point, speed: number) {
		let angle = this.getAngle(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
		let resultX = startPoint.x + speed * Math.cos(angle * Math.PI / 180);
		let resultY = startPoint.y - speed * Math.sin(angle * Math.PI / 180);
		startPoint.x = resultX;
		startPoint.y = resultY;
	}

	public getAngle(point1X: number, point1Y: number, point2X: number, point2Y: number): number {
		let vx = point2X - point1X;
		let vy = point1Y - point2Y;
		let hyp = Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2));
		let rad = Math.acos(vx / hyp);
		let deg = 180 / (Math.PI / rad);
		//得到了一个角度“rad”，不过是以弧度为单位的
		//把它转换成角度 
		if (vy < 0) {
			deg = (-deg);
		} else if ((vy == 0) && (vx < 0)) {
			deg = 180;
		}
		return deg;
	}

	public randomBool(): boolean {
		return Math.round(Math.random()) == 1;
	}

	public getProbalityItemFromArray(arr: any[], probality: number[]): any {
		let total: number = this.getTotal(probality);
		let range: number = Math.random() * total;
		let currentRange: number = 0;
		for (let i: number = 0; i < probality.length; i++) {
			if (i == probality.length - 1) return arr[probality.length - 1]
			currentRange += probality[i];
			if (range < currentRange) {
				return arr[i];
			}
		}
		return
	}

	public getTotal(arr: number[]): number {
		let result: number = 0;
		for (let i: number = 0; i < arr.length; i++) {
			result += arr[i];
		}
		return result;
	}

	public pointRotation(target: egret.Point, sourcePX: number, sourcePY: number, originalX: number, originalY: number, angle: number): void {
		angle = angle / 180 * Math.PI;
		target.x = (sourcePX - originalX) * Math.cos(angle) - (sourcePY - originalY) * Math.sin(angle) + originalX;
		target.y = (sourcePY - originalY) * Math.cos(angle) + (sourcePX - originalX) * Math.sin(angle) + originalY;
	}

	public randomPointInWithRange(point: egret.Point, range: number, rect: egret.Rectangle): egret.Point {
		let result: egret.Point = new egret.Point(-50, -50);
		while (!rect.containsPoint(result)) {
			let angle = Math.random() * 360;
			this.pointRotation(result, point.x + range, point.y, point.x, point.y, angle)
		}
		return result;
	}
	/** 求两个线段的交点 */
	public segmentsIntr(l1p1x: number, l1p1y: number, l1p2x: number, l1p2y: number, l2p1x: number, l2p1y: number, l2p2x: number, l2p2y: number): any {
		//如果分母为0，则平行或共线，不相交
		let denominator: number = (l1p2y - l1p1y) * (l2p2x - l2p1x) - (l1p1x - l1p2x) * (l2p1y - l2p2y);
		if (denominator == 0) return false;
		//线段所在直线的交点坐标
		let x: number = ((l1p2x - l1p1x) * (l2p2x - l2p1x) * (l2p1y - l1p1y)
			+ (l1p2y - l1p1y) * (l2p2x - l2p1x) * l1p1x
			- (l2p2y - l2p1y) * (l1p2x - l1p1x) * l2p1x) / denominator;
		let y: number = -((l1p2y - l1p1y) * (l2p2y - l2p1y) * (l2p1x - l1p1x)
			+ (l1p2x - l1p1x) * (l2p2y - l2p1y) * l1p1y
			- (l2p2x - l2p1x) * (l1p2y - l1p1y) * l2p1y) / denominator;
		//判断交点是否在两条线段上
		if (
			//交点在线段1上
			(x - l1p1x) * (x - l1p2x) <= 0 && (y - l1p1y) * (y - l1p2y) <= 0 &&
			//且交点也在线段2上
			(x - l2p1x) * (x - l2p2x) <= 0 && (y - l2p1y) * (y - l2p2y) <= 0
		) {
			return { x: x, y: y };
		}
		//否则不相交
		return false;
	}

	/**
	 * 反射后的物体角度
	 * @param p1 碰撞线段的第一个点
	 * @param p2 碰撞线段的第二个点
	 * @param p3 物体的当前点
	 * @param speed 物体的移动速度
	 */
	public getReflectAngle(p1: egret.Point, p2: egret.Point, p3: egret.Point, speed: number, currAngle: number): number {
		//求2线段相交的交点
		let data: any = App.MathUtils.segmentsIntr(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p3.x + speed, p3.y + speed);
		if (!data) return;
		let distance: number = egret.Point.distance(new egret.Point(data.x, data.y), p3);
		if (distance < 20) {
			let num: number = (p1.y - p2.y) == 0 ? 90 : Math.atan((p1.x - p2.x) / (p1.y - p2.y));
			let angle: number = 2 * num - currAngle - 180;
			return angle;
		}
		return;
	}
}