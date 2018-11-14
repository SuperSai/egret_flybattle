class Skill extends BaseItem {

	private skillImg: eui.Image;
	private txt_level: eui.Label;

	private _skillId: number;
	private _vo: HeroSkillVO;

	public constructor() {
		super(SkinName.SkillSkin);
	}

	public dataChanged() {
		super.dataChanged();
		let self = this;
		self._skillId = self.data;
		self._vo = GlobleData.getData(GlobleData.HeroSkillVO, self._skillId);
		if (!self._vo) return;
		self.txt_level.text = App.LanguageManager.getLanguageText("RoleView.txt.02", self._vo.level);
		let path: string = App.PathManager.HeroSkillPath.replace("{0}", self._vo.icon);
		App.DisplayUtils.addAsyncBitmapToImage(path, self.skillImg);
	}
}