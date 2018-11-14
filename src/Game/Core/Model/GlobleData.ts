class GlobleData extends egret.DisplayObject {

	private _hasParasComplete: boolean = false;
	private _totalStepCsvList: TSDictionary<string, any> = new TSDictionary<string, any>();
	private _needParseCount: number = 0;
	private _currParseCount: number = 0;
	private _csvZipData: JSZip;
	private static AllCacheData: TSDictionary<string, TSDictionary<number, any>> = new TSDictionary<string, TSDictionary<number, any>>();

	public get hasParasComplete(): boolean {
		return this._hasParasComplete;
	}

	public setup(): void {
		let self = this;
		self.initModel();
		self.initStep();
	}

	public static SoundVO: string = "Sound_json";
	public static BoneAnimationVO: string = "BoneAnimation_json";
	public static MonsterVO: string = "Monster_json";
	public static BulletVO: string = "Bullet_json";
	public static BulletCellVO: string = "BulletCell_json";
	public static LevelVO: string = "Level_json";
	public static ItemVO: string = "Item_json";
	public static BuffVO: string = "Buff_json";
	public static AwardVO: string = "Award_json";
	public static PropVO: string = "Prop_json";
	public static HeroVO: string = "Hero_json";
	public static HeroLevelVO: string = "HeroLevel_json";
	public static HeroStarVO: string = "HeroStar_json";
	public static BulletConfigVO: string = "BulletConfig_json";
	public static ServerConfigVO: string = "ServerConfig_json";
	public static ErrorCodeVO: string = "ErrorCode_json";
	public static ComponentVO: string = "Component_json";
	public static PlayerNameVO: string = "PlayerName_json";
	public static HeroSkillVO: string = "HeroSkill_json";
	public static ActivityVO: string = "Activity_json";
	public static MissionVO: string = "Mission_json";
	public static WorldBossAwardVO: string = "WorldBossAward_json";

	private initModel(): void {
		let self = this;
		self._totalStepCsvList.Add(GlobleData.SoundVO, SoundVO);
		self._totalStepCsvList.Add(GlobleData.BoneAnimationVO, BoneAnimationVO);
		self._totalStepCsvList.Add(GlobleData.MonsterVO, MonsterVO);
		self._totalStepCsvList.Add(GlobleData.BulletVO, BulletVO);
		self._totalStepCsvList.Add(GlobleData.BulletCellVO, BulletCellVO);
		self._totalStepCsvList.Add(GlobleData.LevelVO, LevelVO);
		self._totalStepCsvList.Add(GlobleData.ItemVO, ItemVO);
		self._totalStepCsvList.Add(GlobleData.BuffVO, BuffVO);
		self._totalStepCsvList.Add(GlobleData.AwardVO, AwardVO);
		self._totalStepCsvList.Add(GlobleData.PropVO, PropVO);
		self._totalStepCsvList.Add(GlobleData.HeroVO, HeroVO);
		self._totalStepCsvList.Add(GlobleData.HeroLevelVO, HeroLevelVO);
		self._totalStepCsvList.Add(GlobleData.HeroStarVO, HeroStarVO);
		self._totalStepCsvList.Add(GlobleData.BulletConfigVO, BulletConfigVO);
		self._totalStepCsvList.Add(GlobleData.ServerConfigVO, ServerConfigVO);
		self._totalStepCsvList.Add(GlobleData.ErrorCodeVO, ErrorCodeVO);
		self._totalStepCsvList.Add(GlobleData.ComponentVO, ComponentVO);
		self._totalStepCsvList.Add(GlobleData.PlayerNameVO, PlayerNameVO);
		self._totalStepCsvList.Add(GlobleData.HeroSkillVO, HeroSkillVO);
		self._totalStepCsvList.Add(GlobleData.ActivityVO, ActivityVO);
		self._totalStepCsvList.Add(GlobleData.MissionVO, MissionVO);
		self._totalStepCsvList.Add(GlobleData.WorldBossAwardVO, WorldBossAwardVO);
	}

	// 解析初始数据表
	private initStep(): void {
		let self = this;
		self._needParseCount = self._totalStepCsvList.GetLenght();
		RES.getResAsync("json_zip", this.onloadDataComplete, self);
	}
	private onloadDataComplete(data: any, key: string): void {
		let self = this;
		self._csvZipData = new JSZip(data);
		self.addEventListener(egret.Event.ENTER_FRAME, self.onEnterFrameLoader, self);
	}

	private onEnterFrameLoader(): void {
		let self = this;
		if (self._currParseCount >= self._needParseCount) {
			self.removeEventListener(egret.Event.ENTER_FRAME, self.onEnterFrameLoader, self);
			this._hasParasComplete = true;
			App.GameEnterManager.setup();
			this.dispatchEvent(new egret.Event(egret.Event.COMPLETE, true, false))
		}
		else {
			//一次解析两个文件
			self.getCsvFile();
			self.getCsvFile();
		}
	}

	private getCsvFile(): void {
		let self = this;
		if (self._currParseCount < self._needParseCount) {
			let key: string = self._totalStepCsvList.getKeyByIndex(self._currParseCount);
			key = key.replace('_', '.');
			let data: any = self._csvZipData.file(key);
			if (data == null) {
				Log.traceError("can't get key from key :" + key);
			}
			let csvStr: string = self._csvZipData.file(key).asText();
			self.starSingleParse(csvStr);
		}
	}

	private starSingleParse(csvStr: string): void {
		let self = this;
		let key: string = self._totalStepCsvList.getKeyByIndex(self._currParseCount);
		let DataClass: any = self._totalStepCsvList.getValueByIndex(self._currParseCount);
		let dic: TSDictionary<number, any> = CSVParser.ParseJsonData(DataClass, csvStr);
		GlobleData.AllCacheData.Add(key, dic);
		self._currParseCount++;
	}

	private static _instance: GlobleData;
	public constructor() { super(); }
	public static get Instance(): GlobleData {
		if (!this._instance) {
			this._instance = new GlobleData();
		}
		return this._instance;
	}

	public static getData(type: string, key: number): any {
		let dic: TSDictionary<number, any> = GlobleData.AllCacheData.TryGetValue(type);
		return dic.TryGetValue(key);
	}

	public static getDataByFilter(type: string, filterType: any, filterValue: any): any[] {
		let dic: TSDictionary<number, any> = GlobleData.AllCacheData.TryGetValue(type);
		return dic.TryGetListByCondition((bean) => bean[filterType] == filterValue)
	}

	public static getAllValue(type: string): Array<any> {
		let dic: TSDictionary<number, any> = GlobleData.AllCacheData.TryGetValue(type);
		return dic.getValues();
	}

	public static getDataByCondition(type: string, value: (value: any) => boolean): Array<any> {
		let dic: TSDictionary<number, any> = GlobleData.AllCacheData.TryGetValue(type);
		let arr: any[] = dic.TryGetListByCondition(value);
		return arr;
	}
}