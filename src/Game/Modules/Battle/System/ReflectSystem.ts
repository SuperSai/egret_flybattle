/**
 * 反射系统
 */
class ReflectSystem implements ISystem {

	public name: string = "ReflectSystem";

	public excute(entity: IEntity) {
		let reflect: ReflectCom = entity.getComponent(ComponentTypes.Reflect);
		//不需要反射
		if (!reflect.edgeTypes && reflect.edgeTypes[0] == ReflectEdgeType.No_Reflect && reflect.edgeTypes.length < 1) return;

		let angleCom: AngleCom = entity.getComponent(ComponentTypes.Angle);
		let position: PositionCom = entity.getComponent(ComponentTypes.Position);
		let targetBounce: BounceCom = entity.getComponent(ComponentTypes.Bounce);
		let speed: SpeedCom = entity.getComponent(ComponentTypes.Speed);
		if (speed) {
			//下面是判断4条边是否需要反射
			let points = Polygon.getsCollisionSegmentPoints(targetBounce.collisionRect, World.Instance.worldCollisionRect);
			if (!points) return;
			if (this.isReflect(reflect.edgeTypes, points[0])) {
				let newAngle: number = App.MathUtils.getReflectAngle(points[1], points[2], position.point, speed.speed, angleCom.angle);
				if (newAngle) angleCom.angle = newAngle;
			}

			//判断怪物是否需要反射
			if (this.isReflect(reflect.edgeTypes, ReflectEdgeType.Monster)) {
				World.Instance.handlerReflectCollision(entity, TargetTypes.Monsters, (monsterPoints: any[]) => {
					let newAngle: number = App.MathUtils.getReflectAngle(monsterPoints[1], monsterPoints[2], position.point, speed.speed, angleCom.angle);
					if (newAngle) angleCom.angle = newAngle;
				});
			}
		}
	}

	/** 检查是否可以反射 */
	private isReflect(edgeTypes: number[], type: number): boolean {
		if (!edgeTypes || edgeTypes.length < 1) return;
		let datas = edgeTypes.filter((ele) => {
			return ele == type;
		});
		return datas.length > 0;
	}

	public getNeededComponents(): string[] {
		return [ComponentTypes.Reflect];
	}
}