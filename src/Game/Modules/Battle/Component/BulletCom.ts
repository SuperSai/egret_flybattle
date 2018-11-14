class BulletCom implements IComponent {
	public componentName: string = ComponentTypes.Bullet;
	public bullet: number = -1;
	public bulletVO: BulletVO = null;
	public startTime: number = 0;
	public currentTime: number = 0;
	public nextBulletIndex: number[] = [];
	public infinitySkill: boolean = false;
	public animationIndex: number = 0;

	public onRemoved(): void {
		this.bullet = -1;
		this.bulletVO = null;
		this.startTime = 0;
		this.currentTime = 0;
		this.nextBulletIndex = [];
		this.infinitySkill = false;
	}

	public onAdded(): void {
		this.startTime = egret.getTimer();
		this.bulletVO = GlobleData.getData(GlobleData.BulletVO, this.bullet);
		if (!this.bulletVO) {
			Log.trace("找不到子弹ID：" + this.bullet);
			return;
		}
		App.SoundManager.playEffect(this.bulletVO.startSound);
		this.nextBulletIndex = [];
		for (let i: number = 0; i < this.bulletVO.bullets.length; i++) {
			this.nextBulletIndex.push(0);
		}
	}

	public static canAdd(vo: any): boolean {
		return true;
	}
}