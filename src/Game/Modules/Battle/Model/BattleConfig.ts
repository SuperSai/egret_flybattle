class BattleConfig {
	public static CraftToBottom: number = 200;
	public static AirCraftStartY: number = 1268 - BattleConfig.CraftToBottom;
	public static AirCraftStartX: number = 720 / 2;
	private static WorldWidth: number = 720;
	private static WorldHeight: number = 1268;
	public static monsterSpawnPoints: egret.Point[] = [];
	public static monsterLineCount: number = 5;
	public static monsterSpawnOffsetY: number = -100;
	public static meteEdgeGape: number = 20;
	public static meteStartX: number = BattleConfig.meteEdgeGape;
	public static meteEndX: number;
	public static meteStartY: number = 0;
	public static BackgoundHeight: number = 1368;
	public static BossEnterTime: number = 6000;
	public static BossEnterStartPoint: egret.Point = new egret.Point(BattleConfig.AirCraftStartX, -100);
	public static BossEnterEndPoint: egret.Point = new egret.Point(BattleConfig.AirCraftStartX, 400);
	public static PropEnterEndPosY: number = 1380;
	public static StartCkeckExpireTime: number = 500;
	public static BackgoundSpeed: number = 15;
	/** 飞机的间距 */
	public static planeSpacing: number = 130;
	/** 是否开启碰撞区域框 */
	public static RenderCollision: boolean = false;
	/** 血量的比例 */
	public static HpProportion: number = 3;
	/** 玩家的初始点 */
	public static PlayerInitialPoint: egret.Point = new egret.Point(0, -100);

	public static setup(stageWidth: number, stageHeight: number): void {
		BattleConfig.WorldWidth = stageWidth;
		BattleConfig.WorldHeight = stageHeight;
		BattleConfig.AirCraftStartY = BattleConfig.WorldHeight - BattleConfig.CraftToBottom;
		BattleConfig.AirCraftStartX = BattleConfig.WorldWidth / 2;
		World.Instance.worldRect.width = BattleConfig.WorldWidth;
		World.Instance.worldRect.height = BattleConfig.WorldHeight;
		World.Instance.worldCollisionRect.rect = World.Instance.worldRect;
		World.Instance.worldCollisionRect.update();

		let stepWidth: number = World.Instance.worldRect.width / (this.monsterLineCount + 1);
		for (let i: number = 1; i < this.monsterLineCount + 1; i++) {
			this.monsterSpawnPoints.push(new egret.Point(i * stepWidth, this.monsterSpawnOffsetY));
		}

		this.meteEndX = World.Instance.worldRect.height - this.meteEdgeGape;
	}
}