class HeroRankItem extends BaseItem {

	private txt_fontRank: eui.BitmapLabel;
	private txt_name: eui.Label;
	private txt_topDamage: eui.Label;
	private txt_rank: eui.Label;
	private headImg: eui.Image;
	private maskImg: eui.Image;
	private arrowImg: eui.Image;
	private bg1: eui.Image;
	private bg2: eui.Image;
	private _info: protocol.IFriendWorldBossRankMsg;

	public constructor() {
		super(SkinName.HeroRankItemSkin);
	}

	public dataChanged() {
		super.dataChanged();
		let self = this;
		self._info = self.data;
		if (self._info) {
			self.bg1.visible = self._info.playerId != App.PlayerInfoManager.Info.playerId;
			self.bg2.visible = self._info.playerId == App.PlayerInfoManager.Info.playerId;
			self.txt_name.text = self._info.nickName;
			self.txt_topDamage.text = App.LanguageManager.getLanguageText("worldBossView.txt.09", self._info.singleHurtHpMax);
			if (self._info.headPic != "") {
				self.headImg.mask = self.maskImg;
				self.headImg.source = self._info.headPic;
			}
			if (self.itemIndex < 3) {
				self.txt_rank.visible = false;
				self.txt_fontRank.visible = true;
				self.txt_fontRank.text = (self.itemIndex + 1) + "";
			} else {
				self.txt_rank.visible = true;
				self.txt_fontRank.visible = false;
				self.txt_rank.text = (self.itemIndex + 1) + "";
			}
			self.arrowImg.visible = WorldBossController.rankArrowState != HERO_ARROW_STATE.DEFAULT;
			switch (WorldBossController.rankArrowState) {
				case HERO_ARROW_STATE.UP:
					self.arrowImg.source = "heroRank_xhangsheng";
					break;
				case HERO_ARROW_STATE.DOWN:
					self.arrowImg.source = "heroRank_xiajiang";
					break;
			}
		}
	}
}
