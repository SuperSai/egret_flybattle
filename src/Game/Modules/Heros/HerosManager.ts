class HerosManager extends BaseClass {

	private _heros: TSDictionary<number, HeroInfo>;	//英雄列表信息
	private _doubtfulInfo: DoubtfulInfo;	//布阵信息

	private _herosSSR: HeroInfo[];
	private _herosSR: HeroInfo[];
	private _herosR: HeroInfo[];

	public oldSelectHeroId: number = -1;
	public oldSelectReplaceId: number = -1;
	public oldSelectSellHeroId: TSDictionary<number, HeroInfo>;

	public setup(): void {
		let self = this;
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.STC_HEROS_MESSAGE), self.onHerosMsg, self);
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.STC_HERO_INFO), self.onHeroInfo, self);
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.STC_HEROS_DOUBTFUL), self.onHerosDoubtful, self);
	}

	/** 获取英雄们信息*/
	private onHerosMsg(evt: egret.Event): void {
		let self = this;
		let msg: protocol.HeroListMsg = protocol.HeroListMsg.decode(evt.data);
		if (!msg || msg.list.length < 1) return;
		self._herosR = [];
		self._herosSR = [];
		self._herosSSR = [];
		if (self._heros) {
			self._heros.clear();
		} else {
			self._heros = new TSDictionary<number, HeroInfo>();
		}
		self.assemblyHerosData(msg.list);
		App.ControllerManager.applyFunc(ControllerConst.Role, RoleConst.SELL_ROLE_COMPLETE);
	}

	/** 单个英雄信息 */
	private onHeroInfo(evt: egret.Event): void {
		let self = this;
		let msg: protocol.HeroMsg = protocol.HeroMsg.decode(evt.data);
		if (self._heros.ContainsKey(msg.heroId)) {
			let oldInfo: HeroInfo = self._heros.TryGetValue(msg.heroId);
			self._heros.SetDicValue(msg.heroId, self.assemblySingleHeroData(msg, oldInfo));
			self.assemblyHerosListData(oldInfo);
		}
		else {
			let info: HeroInfo = App.ObjectPool.pop("HeroInfo");
			self._heros.Add(msg.heroId, self.assemblySingleHeroData(msg, info));
			self.assemblyHerosListData(info);
		}
		App.ControllerManager.applyFunc(ControllerConst.Role, RoleConst.UPDATE_ROLE_INFO, );
	}

	/** 英雄布阵 */
	private onHerosDoubtful(evt: egret.Event): void {
		let self = this;
		let msg: protocol.CommonMsg = protocol.CommonMsg.decode(evt.data);
		let replaceType: number = -1;
		if (self._doubtfulInfo) {
			if (self._doubtfulInfo.captain != msg.intPar1) {
				replaceType = PLANE_TYPE.CAPTAIN;
			} else if (self._doubtfulInfo.leftPlayer != msg.intPar2) {
				replaceType = PLANE_TYPE.LEFT_PLAYER;
			} else if (self._doubtfulInfo.rightPlayer != msg.intPar3) {
				replaceType = PLANE_TYPE.RIGHT_PLAYER;
			}
		}
		if (!self._doubtfulInfo) {
			self._doubtfulInfo = App.ObjectPool.pop("DoubtfulInfo");
		}
		self._doubtfulInfo.captain = msg.intPar1;
		self._doubtfulInfo.leftPlayer = msg.intPar2;
		self._doubtfulInfo.rightPlayer = msg.intPar3;
		self.dispatchEventWith(HerosEventType.UPDATE_DOUBTFUL, false, replaceType);
	}

	/** 组装英雄数据 */
	private assemblyHerosData(heros: protocol.IHeroMsg[]): void {
		let self = this;
		for (let i: number = 0, len: number = heros.length; i < len; i++) {
			let hero: protocol.IHeroMsg = heros[i];
			let info: HeroInfo = new HeroInfo();
			self._heros.Add(hero.heroId, self.assemblySingleHeroData(hero, info));
			self.assemblyHerosListData(info);
		}
	}

	/** 组装英雄列表数据 */
	private assemblyHerosListData(info: HeroInfo): void {
		let self = this;
		switch (info.heroVO.quality) {
			case HERO_TYPE.R:
				App.ObjectUtils.removeFromArray(info, self._herosR);
				self._herosR.push(info);
				break;
			case HERO_TYPE.SR:
				App.ObjectUtils.removeFromArray(info, self._herosSR);
				self._herosSR.push(info);
				break;
			case HERO_TYPE.SSR:
				App.ObjectUtils.removeFromArray(info, self._herosSSR);
				self._herosSSR.push(info);
				break;
		}
	}

	/** 组装单个英雄数据 */
	private assemblySingleHeroData(hero: protocol.IHeroMsg, info: HeroInfo): HeroInfo {
		let self = this;
		App.ObjectUtils.copyValue2(info, hero);
		//处理英雄的资源
		let heroVO: HeroVO = GlobleData.getData(GlobleData.HeroVO, hero.configId);
		info.heroVO = heroVO;
		info.wingAssetname = "wing_02";
		//处理英雄当前使用的子弹技能排列ID
		let bulletVO: BulletVO = self.getBulletSkillId(heroVO.type, hero.level);
		info.bulletVO = bulletVO;
		//处理英雄需要的子弹列表
		info.components = self.getBulletComponentByID(heroVO);
		info.bulletsSkill = self.getHeroBullets(info.components, bulletVO.bullets);
		info.damage = self.getHeroLevelData(heroVO.quality, hero.level).attack;
		return info;
	}

	/** 获取HeroLevel表中的数据 */
	public getHeroLevelData(quality: number, level: number): HeroLevelVO {
		let self = this;
		return GlobleData.getDataByCondition(GlobleData.HeroLevelVO, (itemData: HeroLevelVO) => {
			return itemData.quality == quality && itemData.level == level;
		})[0];
	}

	/** 获取子弹的技能ID */
	public getBulletSkillId(type: number, level: number): BulletVO {
		let self = this;
		let bulletVO: BulletVO = GlobleData.getDataByCondition(GlobleData.BulletVO, (itemData: BulletVO) => {
			return itemData.type == type && itemData.level == level;
		})[0];
		let newVO: BulletVO = new BulletVO();
		App.ObjectUtils.copyValue2(newVO, bulletVO);
		return newVO;
	}

	/** 获取子弹元件对应的序列ID */
	private getBulletComponentByID(heroVO: HeroVO): TSDictionary<number, number> {
		let bullets: TSDictionary<number, number> = new TSDictionary<number, number>();
		for (let i: number = 0, len: number = heroVO.bulletElements.length; i < len; i++) {
			let componentVO: ComponentVO = GlobleData.getData(GlobleData.ComponentVO, heroVO.bulletElements[i]);
			bullets.Add(componentVO.type, heroVO.bulletElements[i]);
		}
		return bullets;
	}

	/** 获取英雄的子弹列表 */
	public getHeroBullets(components: TSDictionary<number, number>, sequences: number[]): string {
		let bulletsStr: string = "";
		for (let i: number = 0, len: number = sequences.length; i < len; i++) {
			if (components.ContainsKey(sequences[i])) {
				bulletsStr += components.TryGetValue(sequences[i]) + ",";
			}
		}
		if (bulletsStr != "") {
			bulletsStr = bulletsStr.substring(0, bulletsStr.length - 1);
		}
		return bulletsStr;
	}

	/** 获取英雄的信息 */
	public getHeroInfo(heroId: number): HeroInfo {
		return this._heros.ContainsKey(heroId) && this._heros.TryGetValue(heroId);
	}

	/** 获取英雄角色列表 */
	public getHeroList(type: number, state: number = HERO_STATE.STAR): HeroInfo[] {
		let self = this;
		if (!self.heros || self.heros.GetLenght() < 1) return [];
		switch (type) {
			case HERO_TYPE.R:
				return self.heroListSort(self._herosR, state);
			case HERO_TYPE.SR:
				return self.heroListSort(self._herosSR, state);
			case HERO_TYPE.SSR:
				return self.heroListSort(self._herosSSR, state);
			case HERO_TYPE.ALL:
				return self.heroListSort(self.heros.getValues(), state);
			default:
				return [];
		}
	}

	/** 英雄排序 */
	private heroListSort(list: HeroInfo[], state: number = HERO_STATE.STAR): HeroInfo[] {
		let self = this;
		if (!list || list.length < 1) return;
		let battleHeros: HeroInfo[] = [];
		let herosList: HeroInfo[] = [];
		for (let i: number = 0, len: number = list.length; i < len; i++) {
			let info: HeroInfo = list[i];
			info.state = state;
			switch (info.heroId) {
				case self._doubtfulInfo.captain:
					battleHeros.unshift(info);
					break;
				case self._doubtfulInfo.leftPlayer:
					battleHeros.push(info);
					break;
				case self._doubtfulInfo.rightPlayer:
					battleHeros.push(info);
					break;
				default:
					herosList.push(info);
					break;
			}
		}
		herosList.sort((item1: HeroInfo, item2: HeroInfo) => { return item2.heroVO.quality - item1.heroVO.quality; });
		battleHeros = battleHeros.concat(herosList);
		return battleHeros;
	}

	/** 获取对应英雄的技能列表 */
	public getSkillListByStar(configId: number, star: number): HeroStarVO {
		let self = this;
		return GlobleData.getDataByCondition(GlobleData.HeroStarVO, (itemData: HeroStarVO) => {
			return (itemData.heroId == configId && itemData.star == star);
		})[0];
	}

	/** 获取英雄布阵信息 */
	get doubtfulInfo(): DoubtfulInfo { return this._doubtfulInfo; }
	/** 所有的英雄列表 */
	get heros(): TSDictionary<number, HeroInfo> { return this._heros; }

}

enum HERO_TYPE {
	R = 1,
	SR = 2,
	SSR = 3,
	ALL = 4,
}
/** 角色状态 */
enum HERO_STATE {
	STAR,
	GOLD,
	ATTACK,
}