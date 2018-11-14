/**
 * 幸运翻牌主界面
 */
class LuckyCardView extends BaseView {

	private btn_open: eui.Group;
	private cardList: eui.Group;
	private btn_trophy: eui.Group;
	private btn_adv: eui.Group;
	private scroller: eui.Scroller;
	private btn_close: eui.Button;
	private txt_openCard: eui.Label;
	private txt_trophy: eui.Label;
	private txt_des: eui.Label;
	private txt_openCardNum: eui.Label;
	private _cardsPanel: egret.Sprite;
	private _model: LuckyCardModel;
	private _luckController: LuckyCardController;
	/** 是否可以开始翻开卡牌 */
	private _isStartCards: boolean = false;
	/** 是否可以点击卡牌 */
	private _isClickCard: boolean = false;
	private _index: number = 1;
	private _cardShowIndex: number = 0;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.skinName = SkinName.LuckyCardViewSkin;
		this.setResources(["luckyCard"]);
	}

	public initUI(): void {
		super.initUI();
		let self = this;
		self.btn_adv.touchEnabled = ext.getIsAD();
		if (ext.getIsAD()) {
			self.btn_adv.filters = null;
		} else {
			App.DisplayUtils.setFilters(self.btn_adv);
		}
	}

	public initData(): void {
		super.initData();
		let self = this;
		self._model = <LuckyCardModel>self.controller.getModel();
		self._luckController = <LuckyCardController>self.controller;
		self.reset();
		self.initCardsPanel();
		self.initCards();
		self.updateOpenCardCount(false);
	}

	private initCardsPanel() {
		let self = this;
		if (self._cardsPanel) {
			App.DisplayUtils.removeAllChildren(self._cardsPanel);
		}
		self._cardsPanel = App.ObjectPool.pop("egret.Sprite");
		self._cardsPanel.width = self._model.column * self._model.cardW + (self._model.column - 1) * self._model.columnSpace;
		self._cardsPanel.height = self._model.row * self._model.cardH + (self._model.row - 1) * self._model.rowSpace;
		self._cardsPanel.anchorOffsetX = self._cardsPanel.width / 2;
		self._cardsPanel.anchorOffsetY = self._cardsPanel.height;
		self._cardsPanel.x = App.StageUtils.getWidth() / 2;
		self._cardsPanel.y = App.StageUtils.getHeight() / 2 + 130;

		let rect = new eui.Rect(self._cardsPanel.width, self._cardsPanel.height, 0x0000ff);
		rect.alpha = 0;
		self._cardsPanel.addChild(rect);

		self._cardsPanel.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickCardItem, self);
		self.addChild(self._cardsPanel);
	}

	/** 初始化卡牌 */
	private initCards(): void {
		let self = this;
		self._luckController.cleanCardsArray();
		self._isStartCards = false;
		self._index = 1;
		self._cardShowIndex = 0;;
		for (let i: number = 0; i < self._model.row; i++) {
			for (let j = 0; j < self._model.column; j++) {
				let rewardItem: RewardInfo = self._model.rewardList.getValueByIndex((self._index - 1));
				let card: LuckyCardItem = self._luckController.createCrad(this._cardsPanel, i, j, rewardItem.index);
				card.onAwake(self._luckController);
				card.updateItem(rewardItem);
				card.selectState = true;
				card.x = self._luckController.getCradPosX(j);
				card.y = self._luckController.getCradPosY(i);
				egret.Tween.get(card).to({ visible: true }, 50 * self._index).to({ scaleX: 1, scaleY: 1 }, 70).call(() => {
					egret.Tween.removeTweens(card);
					self._cardShowIndex++;
					if ((self._model.row * self._model.column) <= self._cardShowIndex) {
						self._isStartCards = true;
					}
				})
				self._index++;
			}
		}
	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.btn_open.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onLotteryCards, self);
		self.btn_adv.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onLookAdv, self);
		self.btn_trophy.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onBuyLotteryCount, self);
		self.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onCloseHandler, self);
		self.setBtnEffect(["btn_open", "btn_adv", "btn_trophy", "btn_close"]);
		self.registerFunc(LuckyCardConst.GET_CARD_ITEM, self.onOpenCardItem, self);
		self.registerFunc(LuckyCardConst.UPDATE_CARD_OPEN_COUNT, self.onUpdateOpenCardCount, self);
		self.registerFunc(LuckyCardConst.SHOW_BUY_COUNT, self.onShowBuyCardCountView, self);
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_open.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onLotteryCards, self);
		self.btn_adv.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onLookAdv, self);
		self.btn_trophy.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onBuyLotteryCount, self);
		self.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onCloseHandler, self);
		self._cardsPanel.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onClickCardItem, self);
	}

	private onLotteryCards(): void {
		let self = this;
		if (self._isStartCards && self._model.openCardCount > 0) {
			self._isStartCards = false;
			self.shuffleCards();
		}
	}

	/** 洗牌 */
	private shuffleCards(): void {
		let self = this;
		self.txt_openCard.visible = true;
		self.btn_open.visible = self.btn_trophy.visible = self.btn_adv.visible = false;
		self.updateOpenCardCount(false);
		self._index = 1;
		self._cardShowIndex = 0;
		for (let i: number = 0; i < self._model.row; i++) {
			for (let j = 0; j < self._model.column; j++) {
				let card: LuckyCardItem = self._model.cardsList[i][j];
				if (card) {
					egret.Tween.get(card).to({ scaleX: 0.1 }, 150).call(() => {
						card.selectState = false;
					}).wait(20).to({ scaleX: 1 }, 150).wait(100).to({ x: self._cardsPanel.width / 2, y: self._cardsPanel.height / 2 }, 400)
						.wait(self._index * 100).to({ x: self._luckController.getCradPosX(j), y: self._luckController.getCradPosY(i) }, 70, egret.Ease.quartOut).call(() => {
							egret.Tween.removeTweens(card);
							self._cardShowIndex++;
							if ((self._model.row * self._model.column) <= (self._cardShowIndex + self._model.rewardGetList.length)) {
								self._isClickCard = true;
							}
						})
				}
				self._index++;
			}
		}
	}

	/** 更新可翻牌的次数 */
	private onUpdateOpenCardCount(openCardNum: number): void {
		let self = this;
		self._model.openCardCount = openCardNum;
		self.updateOpenCardCount(false);
	}

	/** 点击要翻牌的卡牌 */
	private onClickCardItem(evt: egret.TouchEvent): void {
		let self = this;
		if (!self._isClickCard || self._model.openCardCount <= 0) return;
		SocketManager.Instance.out.sendLuckCardOpen(evt.stageX, evt.stageY);
	}

	/** 打开我翻开的卡牌 */
	private onOpenCardItem(msg: protocol.OpenCardMsg): void {
		let self = this;
		let card: LuckyCardItem = self._luckController.getTouchCard(msg.x, msg.y);
		if (card) {
			let rewardInfo: RewardInfo = self._model.rewardList.TryGetValue(msg.index);
			card.updateItem(rewardInfo);
			self._model.rewardGetList.push(rewardInfo);
			self._model.cardsList[card.row][card.column] = null;
			self._model.rewardList.Remove(msg.index);
			let rewardLen: number = self._model.rewardGetList.length;
			let space: number = rewardLen < 5 ? (rewardLen - 1) * self._model.cardW + (rewardLen - 1) * 35 : 4 * self._model.cardW;
			egret.Tween.get(card).to({ scaleX: 0.1 }, 150).call(() => {
				card.selectState = true;
				card.parent.setChildIndex(card, card.parent.numChildren - 1);
			}).wait(20).to({ scaleX: 1 }, 150).wait(500).to({ scaleX: 1.3, scaleY: 1.3 }, 150).
				wait(100).to({ x: self.scroller.x + space, y: self.scroller.y - (self._model.cardH / 2), scaleX: 1, scaleY: 1 }, 300).
				call(() => {
					self._model.openCardCount = msg.openCardNum;
					self.updateOpenCardCount(true);
					egret.Tween.removeTweens(card);
					self.cardList.addChild(card);
				});
		}
	}

	/** 翻牌次数没了之后就显示购买次数界面 */
	private onShowBuyCardCountView(): void {
		let self = this;
		if (self._model.openCardCount > 0) {
			self.txt_des.text = App.LanguageManager.getLanguageText("luckCardView.txt.01");
			self.shuffleCards();
		} else {
			self.updateBuyLotteryCardView();
			for (let i: number = 0; i < self._model.row; i++) {
				for (let j = 0; j < self._model.column; j++) {
					let card: LuckyCardItem = self._model.cardsList[i][j];
					if (!card) continue;
					egret.Tween.get(card).to({ scaleX: 0.1 }, 150).call(() => {
						card.selectState = true;
					}).wait(20).to({ scaleX: 1 }, 150).call(() => {
						egret.Tween.removeTweens(card);
					})
				}
			}
		}

	}

	/** 更新还剩翻牌次数 */
	private updateOpenCardCount(isCheck: boolean): void {
		let self = this;
		self.txt_openCardNum.text = App.LanguageManager.getLanguageText("luckCardView.txt.04", self._model.openCardCount);
		self.txt_openCard.text = App.LanguageManager.getLanguageText("luckCardView.txt.03", self._model.openCardCount);
		if (self._model.openCardCount <= 0 && isCheck) {
			SocketManager.Instance.out.sendLuckCardDataCheck();
		} else if (!isCheck && self._model.openCardCount <= 0) {
			self.updateBuyLotteryCardView();
		}
	}

	private updateBuyLotteryCardView(): void {
		let self = this;
		self._isClickCard = self.txt_openCard.visible = self.btn_open.visible = false;
		self.txt_des.text = App.LanguageManager.getLanguageText("luckCardView.txt.02");
		self.btn_trophy.visible = self.btn_adv.visible = true;
		self.txt_trophy.text = self._model.openCardTrophy + "";
	}

	/** 观看广告获得免费次数 */
	private onLookAdv(): void {
		let self = this;
	}

	/** 花费钻石购买次数 */
	private onBuyLotteryCount(): void {
		let self = this;
		if (App.PlayerInfoManager.getCurrencyNum(ITEM_TYPE.TROPHY) < self._model.openCardTrophy) {
			return App.MessageManger.showText(App.LanguageManager.getLanguageText("luckCardView.txt.05"));
		}
		self._isStartCards = true;
		SocketManager.Instance.out.sendLuckCardBuyCount();
	}

	private reset(): void {
		let self = this;
		self.btn_open.visible = true;
		self.txt_openCard.visible = self.btn_trophy.visible = self.btn_adv.visible = self._isStartCards = self._isClickCard = false;
		self.txt_des.text = App.LanguageManager.getLanguageText("luckCardView.txt.01");
		if (self.cardList) self.cardList.removeChildren();
		App.ObjectUtils.removeAllArrayItem(self._model.rewardGetList);
	}

	private onCloseHandler(): void {
		App.ViewManager.close(ViewConst.LuckyCardView);
	}

	public close(...param: any[]): void {
		super.close(param);
		let self = this;
		if (self._model.rewardGetList && self._model.rewardGetList.length > 0) {
			App.ViewManager.open(ViewConst.RewardAlert, self._model.rewardGetList, REWARD_ITEM_TYPE.CARD);
		}
	}
}