class LevelVO {
	// id	level	time	spawnMonsterTimeGap	monsters	monsterSpeedRate	maxMonsterCount	monsterProbality	
	//meteorolite	meteMaxCount	meteMinCount	meteMinTimeGap	meteMaxTimeGap	boss
	public constructor() {
	}

	public level: number;
	/** 类型（1，普通关卡。10，世界BOSS） */
	public type: number;
	public time: number;
	public startSpawneTime: number;
	public spawnMonsterTimeGap: number;
	public meteorolite: number;
	public meteSpeedRate: number;
	public meteStartTime: number;
	public meteMaxCount: number;
	public meteMinCount: number;
	public meteMinTimeGap: number;
	public meteMaxTimeGap: number;
	public meteMinRandomGap: number;
	public meteMaxRandomGap: number;
	public meteMinFollowCount: number;
	public meteMaxFollowCount: number;
	public meteAlertTime: number;
	public meteGuidetime: number;
	public meteAlertGuideSpeed: number;
	public boss: number;
	public bossHpRate: number;
	public bossSpeedRate: number;
	public bossSkillRate: number;
	/** BOSS剪影 */
	public icon: number;

	private _backgound: string;
	public get backgound(): string {
		return this._backgound;
	}

	public set backgound(value: string) {
		this._backgound = App.PathManager.MapPath + value;
	}

	public _monsters: number[];
	public get monsters(): number[] {
		return this._monsters;
	}
	public set monsters(value) {
		this._monsters = App.ObjectUtils.splitToNumber(value);
	}

	public _hpRate: number[];
	public get hpRate(): number[] {
		return this._hpRate;
	}
	public set hpRate(value) {
		this._hpRate = App.ObjectUtils.splitToNumber(value);
	}

	public _monsterSpeedRate: number[];
	public get monsterSpeedRate(): number[] {
		return this._monsterSpeedRate;
	}
	public set monsterSpeedRate(value) {
		this._monsterSpeedRate = App.ObjectUtils.splitToNumber(value);
	}

	public _maxMonsterCount: number[];
	public get maxMonsterCount(): number[] {
		return this._maxMonsterCount;
	}
	public set maxMonsterCount(value) {
		this._maxMonsterCount = App.ObjectUtils.splitToNumber(value);
	}

	public _monsterProbality: number[];
	public get monsterProbality(): number[] {
		return this._monsterProbality;
	}
	public set monsterProbality(value) {
		this._monsterProbality = App.ObjectUtils.splitToNumber(value);
	}

}