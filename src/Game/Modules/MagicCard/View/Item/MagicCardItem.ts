class MagicCardItem extends BaseItem {

	public heroImg: eui.Image;
	public lightImg: eui.Image;
	public quaImg: eui.Image;
	public txt_name: eui.Label;
	public rect: eui.Rect;
	public cardIndex: number = -1;
	private _model: MagicCardModel;
	private _itemInfo: AwardVO;
	private _heroVO: HeroVO;

	public constructor() {
		super(SkinName.MagicCardItemSkin);
	}

	public childrenCreated() {
		super.childrenCreated();
		let self = this;
		switch (self.cardIndex) {
			case 0:
				self.setRectAlpha(0.4);
				break;
			case 1:
				self.setRectAlpha(0.2);
				break;
			case 2:
				self.setRectAlpha(0);
				self.lightImg.visible = true;
				break;
			case 3:
				self.setRectAlpha(0.2);
				break;
			case 4:
				self.setRectAlpha(0.4);
				break;
		}
	}

	public onAwake($data: any): void {
		super.onAwake($data);
		let self = this;
		self._model = $data;
		self._itemInfo = self._model.rewardList[self.cardIndex];
		self.updateItemData(self._itemInfo);
	}

	public updateItemData(info: AwardVO): void {
		let self = this;
		self._heroVO = GlobleData.getData(GlobleData.HeroVO, info.itemId);
		self.txt_name.text = self._heroVO.name;
		self.quaImg.source = "com_qua_" + self._heroVO.quality;
		let path: string = App.PathManager.HeroBigImgPath.replace("{0}", self._heroVO.bigIcon);
		App.DisplayUtils.addAsyncBitmapToImage(path, self.heroImg);
	}

	/** 滚动 */
	public cardRoll(duration: number): void {
		let self = this;
		switch (self.cardIndex) {
			case 0:
				if (self.parent) self.parent.setChildIndex(self, self.parent.numChildren - 5);
				egret.Tween.get(self).to({ horizontalCenter: 238, scaleX: 0.6, scaleY: 0.6 }, duration).call(() => {
					self.cardIndex = 4;
				});
				self.setRectAlpha(0.4);
				if (self._model.rewardList.length > self._model.rewardIndex) {
					self._itemInfo = self._model.rewardList[self._model.rewardIndex];
					self.updateItemData(self._itemInfo);
					self._model.rewardIndex++;
					if (self._model.rewardIndex >= self._model.rewardList.length) {
						self._model.rewardIndex = 0;
					}
				}
				break;
			case 1:
				if (self.parent) self.parent.setChildIndex(self, self.parent.numChildren - 4);
				egret.Tween.get(self).to({ horizontalCenter: -238, scaleX: 0.6, scaleY: 0.6 }, duration).call(() => {
					self.cardIndex = 0;
				});
				self.setRectAlpha(0.4);
				break;
			case 2:
				if (self.parent) self.parent.setChildIndex(self, self.parent.numChildren - 2);
				egret.Tween.get(self).to({ horizontalCenter: -148, scaleX: 0.8, scaleY: 0.8 }, duration).call(() => {
					self.cardIndex = 1;
				});
				self.setRectAlpha(0.2);
				break;
			case 3:
				if (self.parent) self.parent.setChildIndex(self, self.parent.numChildren);
				egret.Tween.get(self).to({ horizontalCenter: 0, scaleX: 1, scaleY: 1 }, duration).call(() => {
					App.ControllerManager.applyFunc(ControllerConst.MagicCard, MagicCardConst.CARD_ROLL_ITEM, self._itemInfo, self);
					self.setRectAlpha(0);
					self.cardIndex = 2;
				});
				break;
			case 4:
				if (self.parent) self.parent.setChildIndex(self, self.parent.numChildren - 3);
				egret.Tween.get(self).to({ horizontalCenter: 148, scaleX: 0.8, scaleY: 0.8 }, duration).call(() => {
					self.cardIndex = 3;
				});
				self.setRectAlpha(0.2);
				break;
		}
	}

	/** 设置遮罩透明度 */
	private setRectAlpha(value: number): void {
		let self = this;
		self.rect.alpha = value;
	}
}