class CommonController extends BaseController {

	public constructor() {
		super();
		let self = this;
		self.initRegisterView();
		self.addEvents();
	}

	/** 注册界面才可以打开界面 */
	private initRegisterView(): void {
		let self = this;
		App.ViewManager.register(ViewConst.RewardAlert, new RewardAlert(self, LayerManager.GAME_UI_LAYER));
		App.ViewManager.register(ViewConst.PromptAlert, new PromptAlert(self, LayerManager.GAME_UI_LAYER));
	}

	private addEvents(): void {
		let self = this;
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.STC_REWARD_LIST), self.onRewardListHandler, self);
	}

	/** 奖励展示列表 */
	private onRewardListHandler(evt: egret.Event): void {
		let self = this;
		let msg: protocol.ItemResMsgList = protocol.ItemResMsgList.decode(evt.data);
		if (msg.itemList && msg.itemList.length > 0) {
			let rewardList: ItemInfo[] = [];
			for (let i: number = 0, len: number = msg.itemList.length; i < len; i++) {
				let info: ItemInfo = App.ObjectPool.pop("ItemInfo");
				App.ObjectUtils.copyValue2(info, msg.itemList[i]);
				rewardList.push(info);
			}
			App.ViewManager.open(ViewConst.RewardAlert, rewardList, REWARD_ITEM_TYPE.ITEM);
		}
	}
}

/** 奖励框的类型 */
enum REWARD_ITEM_TYPE {
	ITEM,
	CARD,
}