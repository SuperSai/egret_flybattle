class PathManager extends BaseClass {

	private _resourceUrl: string = "resource/";
	public get resourceUrl(): string {
		let self = this;
		return self._resourceUrl;
	}
	public set resourceUrl(value: string) {
		let self = this;
		self._resourceUrl = value;
	}

	public get ThemePath(): string {
		let self = this;
		return self._resourceUrl + "config/" + "default.thm.json";
	}

	public get SoundPath(): string {
		let self = this;
		return self._resourceUrl + "Common/sound/";
	}

	public get BulletPath(): string {
		let self = this;
		return self._resourceUrl + "Common/bullet/";
	}

	public get MapPath(): string {
		let self = this;
		return self._resourceUrl + "Common/map/";
	}

	public get ItemPath(): string {
		let self = this;
		return self._resourceUrl + "Common/item/{0}.png";
	}

	public get BossSilhouettePath(): string {
		let self = this;
		return self._resourceUrl + "Common/bossSilhouette/{0}.png";
	}

	public get HeroBigImgPath(): string {
		let self = this;
		return self._resourceUrl + "Common/heros/skin/{0}.png";
	}

	public get HeroSmallImgPath(): string {
		let self = this;
		return self._resourceUrl + "Common/heros/small/{0}.png";
	}

	public get HeroSkillPath(): string {
		let self = this;
		return self._resourceUrl + "Common/skill/{0}.jpg";
	}

	public get language_path(): string {
		let self = this;
		return self._resourceUrl + GameConfig.Language + "/config/language" + ".txt?v=" + Math.random();
	}

	public get GameCom_Path(): string {
		let self = this;
		return self._resourceUrl + "config/" + "game_com.res.json?v=" + Math.random();
	}

	public get ConfigUrls(): string[] {
		let self = this;
		return [
			//公共资源
			// self._resourceUrl + "config/" + "game_com.res.json?v=" + Math.random(),
			self._resourceUrl + "config/" + "game_animation.res.json?v=" + Math.random(),
			//对应国家的资源
			self._resourceUrl + GameConfig.Language + "/config/" + "default.res.json?v=" + Math.random(),
			self._resourceUrl + GameConfig.Language + "/config/" + "game_ui.res.json?v=" + Math.random(),
		];
	}
}