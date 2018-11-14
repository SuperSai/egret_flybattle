class RedPoint extends BaseItem {

	private _redPointInfo: RedPointInfo;
	private _key: number;
	public constructor() {
		super(SkinName.RedPointSkin);
	}

	public onAwake($data: any): void {
		super.onAwake($data);
		let self = this;
		self._key = $data;
		self._redPointInfo = App.RedPointManager.getRedPointData(self._key);
		self.visible = self._redPointInfo.isVisible;
		if (self._redPointInfo.eventType != "") {
			RedPointEventManager.getInstance.addEvent(self._redPointInfo.eventType, self.updateViewData, self);
		}
	}

	private updateViewData(evt: egret.Event): void {
		let self = this;
		if (typeof (evt.data) == "boolean" && self.visible != evt.data) {
			self.visible = evt.data;
			self._redPointInfo.isVisible = self.visible;
			App.RedPointManager.updateRedPoint(self._key, self._redPointInfo);
		}
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		if (self._redPointInfo && self._redPointInfo.eventType != "") {
			RedPointEventManager.getInstance.removeEvent(self._redPointInfo.eventType, self.updateViewData, self);
		}
	}
}