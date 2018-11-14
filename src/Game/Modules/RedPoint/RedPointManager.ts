/**
 * 红点管理类
 */
class RedPointManager extends BaseClass {

	private _redPointDic: TSDictionary<number, RedPointInfo>;

	public setup(): void {
		let self = this;
		self._redPointDic = new TSDictionary<number, RedPointInfo>();
	}

	/** 初始化数据 */
	public initData(): void {
		// RedPointManager.getInstance.initRedPointInfo(RED_POINT_TYPE.MAIL, RedPointEventsType.UPDATE_MAIL, MailManager.getInstance.MailRedPointState);
	}

	/** 初始化红点数据 */
	private initRedPointInfo(key: number, eventType: string, isVisible: boolean = false): RedPointInfo {
		let self = this;
		let info: RedPointInfo = new RedPointInfo();
		info.eventType = eventType;
		info.isVisible = isVisible;
		self.updateRedPoint(key, info);
		return info;
	}

	/** 更新红点数据 */
	public updateRedPoint(key, info: RedPointInfo): void {
		let self = this;
		if (self._redPointDic.ContainsKey(key)) {
			self._redPointDic.SetDicValue(key, info);
		}
		else {
			self._redPointDic.Add(key, info);
		}
	}

	/** 获取红点数据 */
	public getRedPointData(key: number): RedPointInfo {
		let self = this;
		if (self._redPointDic.ContainsKey(key)) {
			return self._redPointDic.TryGetValue(key);
		}
		return new RedPointInfo();
	}

	/** 派发红点事件 */
	public dispatchRedEvent(eventType: string, key: number, isVisible: boolean): void {
		let self = this;
		let info = self.getRedPointData(key);
		info.isVisible = isVisible;
		self.updateRedPoint(key, info);
		RedPointEventManager.getInstance.dispatchEventWithData(eventType, isVisible);
	}
}

enum RED_POINT_TYPE {
	/** 邮件 */
	MAIL = 1,
	/** 商店 */
	SHOP = 2,
}