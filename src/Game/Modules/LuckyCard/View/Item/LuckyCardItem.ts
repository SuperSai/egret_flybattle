class LuckyCardItem extends BaseItem {

	private _controller: LuckyCardController;
	private _model: LuckyCardModel;
	private backImg: eui.Image;
	private iconImg: eui.Image;
	private txt_count: eui.Label;
	private listHead: eui.List;
	public cardGroup: eui.Group;
	private _isSelected: boolean = false;
	private _arrColl: eui.ArrayCollection;

	/** 唯一ID */
	public id: number = -1;
	public row: number = 0;
	public column: number = 0;


	public constructor() {
		super(SkinName.LuckyCardItemSkin);
		this.visible = false;
		this.scaleX = this.scaleY = 3;
	}

	public dataChanged() {
		super.dataChanged();
		let self = this;
		if (!self.data || (self.data instanceof LuckyCardController)) return;
		self.visible = true;
		self.scaleX = self.scaleY = 1;
		self.backImg.visible = false;
		self.updateItem(self.data);
	}

	public onAwake($data: any): void {
		super.onAwake($data);
		let self = this;
		self._controller = self.data;
		self._model = <LuckyCardModel>self._controller.getModel();
		if (!self._model) return;
		self.width = self._model.cardW;
		self.height = self._model.cardH;
		self.anchorOffsetX = self.width / 2;
		self.anchorOffsetY = self.height / 2;
		self.backImg.source = "luckyCard_icon_" + self._model.cardQuality;
		self._arrColl = new eui.ArrayCollection();
		self.listHead.itemRenderer = SmallHead;
		self.listHead.dataProvider = self._arrColl;
		self.addEvents();
	}

	private addEvents(): void {
		let self = this;
		self._controller.registerFunc(LuckyCardConst.LUCK_CARD_ITEM_HEAD, self.onUpdateHeadList, self);
	}

	private onUpdateHeadList(): void {
		let self = this;
		if (self._model.cardItemHeadIds && self._model.cardItemHeadIds.ContainsKey(self.id)) {
			self._arrColl.addItem(self._model.cardItemHeadIds.TryGetValue(self.id));
			self._arrColl.refresh();
		}
	}

	public updateItem(info: RewardInfo): void {
		let self = this;
		let itemVO: ItemVO = GlobleData.getData(GlobleData.ItemVO, info.itemId);
		let path: string = App.PathManager.ItemPath.replace("{0}", itemVO.icon);
		App.DisplayUtils.addAsyncBitmapToImage(path, self.iconImg);
		self.txt_count.text = info.num + "";
	}

	public set selectState(value: boolean) {
		let self = this;
		if (self._isSelected != value) {
			self._isSelected = value;
			if (value) {	// 选中状态
				self.backImg.visible = false;
			} else {	// 非选中状态
				self.backImg.visible = true;
			}
		}
	}
}