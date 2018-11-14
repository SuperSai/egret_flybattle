/**
 * 公共物品框
 */
class Items extends BaseItem {

	public selectImg: eui.Image;
	private iconImg: eui.Image;	// 物品图片
	private txt_count: eui.Label; // 数量

	private _info: ItemInfo;

	public constructor() {
		super(SkinName.ItemsSkin);
	}

	public dataChanged() {
		super.dataChanged();
		let self = this;
		self.selectImg.visible = false;
		self._info = self.data;
		if (self._info) {
			self.txt_count.text = self._info.num + "";
			let itemVO: ItemVO = GlobleData.getData(GlobleData.ItemVO, self._info.itemId);
			if (itemVO) {
				let path: string = App.PathManager.ItemPath.replace("{0}", itemVO.icon);
				App.DisplayUtils.addAsyncBitmapToImage(path, self.iconImg);
			}
		}
	}

	public get Info(): ItemInfo {
		return this._info;
	}

}