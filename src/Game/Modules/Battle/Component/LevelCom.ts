class LevelCom {
	public componentName: string = ComponentTypes.Level;
	private _level: number = -1;
	public get level(): number {
		return this._level;
	}

	public set level(value: number) {
		this._level = value;
		this.levelData = GlobleData.getData(GlobleData.LevelVO, this._level);
		this.reset();
	}

	public monstersSpeedRatio: number = 1;
	public levelData: LevelVO = null;
	public currentTime: number;
	public startTime: number;
	public bossTime: number;
	public spawneIndex: number;
	public meteSpawneTimeGap: number;
	public lastMeteSpawnTime: number;
	public hasBossSpawened: boolean = false;
	public bossIsShow: boolean = false;

	public onRemoved(): void {
		this._level = -1;
		this.levelData = null;
		this.currentTime = 0;
		this.startTime = 0;
		this.bossTime = 0;
		this.spawneIndex = 0;
		this.meteSpawneTimeGap = 0;
		this.lastMeteSpawnTime = 0;
		this.hasBossSpawened = false;
		this.bossIsShow = false;
	}

	public onAdded(): void {
		this.reset();
	}

	private reset(): void {
		App.SoundManager.playBg(1001);
		this.meteSpawneTimeGap = 0;
		this.spawneIndex = 0;
		this.currentTime = egret.getTimer();
		this.startTime = this.currentTime;
		this.bossTime = this.currentTime;
		this.lastMeteSpawnTime = this.currentTime;
		this.hasBossSpawened = false;
		this.bossIsShow = false;
	}

	public static canAdd(vo: any): boolean {
		return true;
	}
}