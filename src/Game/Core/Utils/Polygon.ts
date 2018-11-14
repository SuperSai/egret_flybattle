class Polygon {
	private count: number = 0;

	constructor(count: number) {
		this.count = count;
		for (let i: number = 0; i < this.count; i++) {
			this.points.push(new egret.Point());
		}
	}

	public points: egret.Point[] = [];

	/**
	 * Helper function to determine whether there is an intersection between the two polygons described
	 * by the lists of vertices. Uses the Separating Axis Theorem
	 * @param a an array of connected points [{x:, y:}, {x:, y:},...] that form a closed polygon
	 * @param b an array of connected points [{x:, y:}, {x:, y:},...] that form a closed polygon
	 * @return true if there is any intersection between the 2 polygons, false otherwise
	 */
	public reset(): void {
		for (let i: number = 0; i < this.points.length; i++) {
			this.points[i].setTo(0, 0);
		}
	}

	public getPointString(): string {
		let result: string = "";
		for (let i: number = 0; i < this.points.length; i++) {
			result += "point " + i + " x: " + this.points[i].x + " y: " + this.points[i].y;
		}
		return result;
	}

	public static doPolygonsIntersect(a: Polygon, b: Polygon) {
		let aPoints: egret.Point[] = a.points;
		let bPoints: egret.Point[] = b.points;
		for (let i: number = 0; i < aPoints.length; i++) {
			let endAPoint: egret.Point = i == aPoints.length - 1 ? aPoints[0] : aPoints[i + 1];
			for (let j: number = 0; j < bPoints.length; j++) {
				let endBPoint: egret.Point = j == bPoints.length - 1 ? bPoints[0] : bPoints[j + 1];
				if (this.lineIsCrossed(
					aPoints[i].x, aPoints[i].y,
					endAPoint.x, endAPoint.y,
					bPoints[j].x, bPoints[j].y,
					endBPoint.x, endBPoint.y)
				) return true;
			}
		}
		return false;
	}
	/** 获取碰撞到的线段的头尾2个坐标点 */
	public static getsCollisionSegmentPoints(a: Polygon, b: Polygon): any {
		let aPoints: egret.Point[] = a.points;
		let bPoints: egret.Point[] = b.points;
		for (let i: number = 0; i < aPoints.length; i++) {
			let endAPoint: egret.Point = i == aPoints.length - 1 ? aPoints[0] : aPoints[i + 1];
			for (let j: number = 0; j < bPoints.length; j++) {
				let endBPoint: egret.Point = j == bPoints.length - 1 ? bPoints[0] : bPoints[j + 1];
				if (this.lineIsCrossed(
					aPoints[i].x, aPoints[i].y,
					endAPoint.x, endAPoint.y,
					bPoints[j].x, bPoints[j].y,
					endBPoint.x, endBPoint.y)
				) return [j + 1, endBPoint, bPoints[j]];
			}
		}
		return false;
	}


	public static lineIsCrossed(l1p1x: number, l1p1y: number, l1p2x: number, l1p2y: number, l2p1x: number, l2p1y: number, l2p2x: number, l2p2y: number): boolean {//这个函数是核心，它检测两条线是否相交，每条线有四项数据（开始点的两个坐标，结束点的两个坐标），所以两条线总共需要8个参数
		let line1p1: number = (l1p2x - l1p1x) * (l2p1y - l1p1y) - (l2p1x - l1p1x) * (l1p2y - l1p1y);//第一条线段的向量和（第一条线段的开始点与第二条线段的开始点组成的向量）的向量积
		let line1p2: number = (l1p2x - l1p1x) * (l2p2y - l1p1y) - (l2p2x - l1p1x) * (l1p2y - l1p1y);//第一条线段的向量和（第一条线段的开始点与第二条线段的结束点组成的向量）的向量积

		let line2p1: number = (l2p2x - l2p1x) * (l1p1y - l2p1y) - (l1p1x - l2p1x) * (l2p2y - l2p1y);//第二条线段的向量和（第二条线段的开始点与第一条线段的开始点组成的向量）的向量积
		let line2p2: number = (l2p2x - l2p1x) * (l1p2y - l2p1y) - (l1p2x - l2p1x) * (l2p2y - l2p1y);//第二条线段的向量和（第二条线段的开始点与第一条线段的结束点组成的向量）的向量积
		if ((line1p1 * line1p2 < 0) && (line2p1 * line2p2 < 0)) {//判断方法在先前讲过
			return true;//相交
		} else {
			return false;//否则不相交
		}
	}

	public static lineIsCrossed2(argument0: number, argument1: number, argument2: number, argument3: number, argument4: number, argument5: number, argument6: number, argument7: number): boolean {//这个函数是核心，它检测两条线是否相交，每条线有四项数据（开始点的两个坐标，结束点的两个坐标），所以两条线总共需要8个参数
		let denominator = ((argument2 - argument0) * (argument7 - argument5)) - ((argument3 - argument1) * (argument6 - argument4));
		let numerator1 = ((argument1 - argument5) * (argument6 - argument4)) - ((argument0 - argument4) * (argument7 - argument5));
		let numerator2 = ((argument1 - argument5) * (argument2 - argument0)) - ((argument0 - argument4) * (argument3 - argument1));

		// Detect coincident lines
		if (denominator == 0) { return (numerator1 == 0 && numerator2 == 0) }

		let r = numerator1 / denominator;
		let s = numerator2 / denominator;

		return ((r >= 0 && r <= 1) && (s >= 0 && s <= 1));
	}


}

