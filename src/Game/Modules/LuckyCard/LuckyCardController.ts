class LuckyCardController extends BaseController {

	private _luckModel: LuckyCardModel;

	public constructor() {
		super();
		let self = this;
		self._luckModel = new LuckyCardModel(self);

		self.addEvent();
		self.initRegisterView();
	}

	private addEvent(): void {
		let self = this;
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.STC_LUCK_CARD_LIST), self.onLuckCardList, self);
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.STC_LUCK_CARD_ITEM), self.onOpenLuckCardItem, self);
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.STC_LUCK_CARD_DATA), self.onLuckCardData, self);
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.STC_LUCK_CARD_HEAD), self.onCardPlayerHead, self);
	}

	/** 注册界面才可以打开界面 */
	private initRegisterView(): void {
		let self = this;
		App.ViewManager.register(ViewConst.LuckyCardView, new LuckyCardView(self, LayerManager.GAME_UI_LAYER));
	}

	/** 奖励池物品 */
	private onLuckCardList(evt: egret.Event): void {
		let self = this;
		let msg: protocol.OpenCardItemListMsg = protocol.OpenCardItemListMsg.decode(evt.data);
		if (!self._luckModel.rewardList) {
			self._luckModel.rewardList = new TSDictionary<number, RewardInfo>();
		} else {
			self._luckModel.rewardList.clear();
		}
		for (let i: number = 0, len: number = msg.list.length; i < len; i++) {
			let item: protocol.ICardItemMsg = msg.list[i];
			let info: RewardInfo = App.ObjectPool.pop("RewardInfo");
			App.ObjectUtils.copyValue2(info, item);
			self._luckModel.rewardList.Add(item.index, info);
		}
		if (msg.open) {
			self._luckModel.cardQuality = msg.quality;
			App.ViewManager.open(ViewConst.LuckyCardView);
		}
	}

	/** 抽奖翻牌Item */
	private onOpenLuckCardItem(evt: egret.Event): void {
		let self = this;
		let msg: protocol.OpenCardMsg = protocol.OpenCardMsg.decode(evt.data);
		self._luckModel.openCardCount = msg.openCardNum;
		/** !=-1的意思是说当前是在翻牌中，如果是-1就说明只是更新翻牌次数 */
		if (msg.index != -1) {
			self.applyFunc(LuckyCardConst.GET_CARD_ITEM, msg);
		} else {
			self.applyFunc(LuckyCardConst.UPDATE_CARD_OPEN_COUNT, msg.openCardNum);
		}
	}

	/** 幸运翻牌消耗数据 */
	private onLuckCardData(evt: egret.Event): void {
		let self = this;
		let msg: protocol.OpenCardNumMsg = protocol.OpenCardNumMsg.decode(evt.data);
		self._luckModel.openCardTrophy = msg.openCardDiamond;
		self._luckModel.openCardTrophyNum = msg.openCardDiamondNum;
		self._luckModel.openCardAdNum = msg.openCardAdNum;
		self._luckModel.openCardCount = msg.openCardNum;
		self.applyFunc(LuckyCardConst.SHOW_BUY_COUNT);
	}

	/** 幸运抽卡头像信息 */
	private onCardPlayerHead(evt: egret.Event): void {
		let self = this;
		let msg: protocol.OpenCardHeadPicMsg = protocol.OpenCardHeadPicMsg.decode(evt.data);
		if (!self._luckModel.cardItemHeadIds) {
			self._luckModel.cardItemHeadIds = new TSDictionary<number, protocol.IOpenCardHeadPicMsg>();
		} else {
			self._luckModel.cardItemHeadIds.clear();
		}
		let indexList: string[] = msg.indexList.split("#");
		if (indexList && indexList.length > 0) {
			for (let i: number = 0, len: number = indexList.length; i < len; i++) {
				self._luckModel.cardItemHeadIds.Add(indexList[i], msg);
			}
		}
		self.applyFunc(LuckyCardConst.LUCK_CARD_ITEM_HEAD);
	}

	/** 创建卡牌Item */
	public createCrad(cardsPanel: egret.Sprite, row: number, column: number, id: number = -1): LuckyCardItem {
		let self = this;
		let card: LuckyCardItem = new LuckyCardItem();
		card.data = null;
		card.visible = false;
		card.scaleX = card.scaleY = 3;
		card.row = row;
		card.column = column;
		card.id = id;
		self._luckModel.cardsList[row][column] = card;
		cardsPanel.addChild(card);
		return card;
	}

	/** 获取格子的X位置 */
	public getCradPosX(cloumn: number) {
		let self = this;
		let harfWidth: number = self._luckModel.cardW / 2;
		let x = cloumn * (self._luckModel.cardW + self._luckModel.columnSpace) + harfWidth;
		return x;
	}

	/** 获取格子的Y位置 */
	public getCradPosY(row: number) {
		let self = this;
		let harfHeight: number = self._luckModel.cardH / 2;
		let y = row * (self._luckModel.cardH + self._luckModel.rowSpace) + harfHeight;
		return y;
	}

	public cleanCardsArray() {
		let self = this;
		self._luckModel.cardsList = [];
		for (let i = 0; i < self._luckModel.row; i++) {
			self._luckModel.cardsList.push([]);
			for (let j = 0; j < self._luckModel.column; j++) {
				self._luckModel.cardsList[i].push(null);
			}
		}
	}

	public getTouchCard(x: number, y: number): LuckyCardItem {
		let self = this;
		for (let k in self._luckModel.cardsList) {
			let itemLineArr = self._luckModel.cardsList[k];
			for (let j in itemLineArr) {
				let item: LuckyCardItem = itemLineArr[j];
				if (item) {
					let flag = item.hitTestPoint(x, y);
					if (flag) {
						return item;
					}
				}
			}
		}
		return null;
	}
}