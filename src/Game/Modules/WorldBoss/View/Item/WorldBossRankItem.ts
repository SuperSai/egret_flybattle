class WorldBossRankItem extends BaseItem {

	private headImg: eui.Image;
	private maskImg: eui.Image;
	private rankImg: eui.Image;
	private txt_totalDamage: eui.Label;
	private txt_topDamage: eui.Label;
	private txt_rank: eui.Label;
	private _info: protocol.IFriendWorldBossRankMsg;

	public constructor() {
		super(SkinName.WorldBossRankItemSkin);
	}

	public dataChanged() {
		super.dataChanged();
		let self = this;
		self._info = self.data;
		if (self._info) {
			self.txt_totalDamage.text = App.LanguageManager.getLanguageText("worldBossView.txt.08", Number((self._info.totalHurtHp / WorldBossController.bossMaxHp * 100).toFixed(2)));
			self.txt_topDamage.text = App.LanguageManager.getLanguageText("worldBossView.txt.09", self._info.singleHurtHpMax);
			if (self._info.headPic != "") {
				self.headImg.mask = self.maskImg;
				self.headImg.source = self._info.headPic;
			}
		}
		if (self.itemIndex < 3) {
			self.txt_rank.visible = false;
			self.rankImg.visible = true;
			self.rankImg.source = "worldBoss_rank" + (self.itemIndex + 1);
		} else {
			self.txt_rank.visible = true;
			self.rankImg.visible = false;
			self.txt_rank.text = (self.itemIndex + 1) + "";
		}
	}
}