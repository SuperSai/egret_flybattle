
class MessageManger extends BaseClass {

    private _textDisplayDic: TSDictionary<string, any> = new TSDictionary<string, any>();
    private _maxNum: number = 5;

    private _creatOneTextDisplay(): eui.Label {
        let label: eui.Label = new eui.Label();
        label.textColor = 0xFFFFFF;
        label.stroke = 3;
        label.strokeColor = 0x401303;
        label.size = 40;
        label.fontFamily = "黑体";
        label.horizontalCenter = 0;
        label.verticalCenter = 0;
        label.touchEnabled = false;
        label.width = App.StageUtils.stage.stageWidth;
        label.wordWrap = true;
        label.textAlign = "center";
        label.y = App.StageUtils.stage.stageHeight / 2;
        return label;
    }

    public showText(message: string): void {
        let display: eui.Label = this.getOne(message);
        display.text = message;
        let messageObject: any = { display: display, isplaying: true };
        this._textDisplayDic.Add(message, messageObject);
        App.LayerManager.addToLayer(display, LayerManager.GAME_POP_LAYER);
        display.alpha = 1;
        egret.Tween.get(display).to({ verticalCenter: -100 }, 1500).call(() => {
            egret.Tween.removeTweens(display);
            display.parent && display.parent.removeChild(display);
            display.alpha = 1;
            display.verticalCenter = 0;
            this.onAnimationComplete(message);
        })
    }

    private startAnimation(message: string, label: eui.Label): void {
        App.LayerManager.addToLayer(label, LayerManager.GAME_POP_LAYER);
        label.alpha = 1;
        egret.Tween.get(label).to({ verticalCenter: -100 }, 1500).call(() => {
            egret.Tween.removeTweens(label);
            label.parent && label.parent.removeChild(label);
            label.alpha = 1;
            label.verticalCenter = 0;
            delete label.$children;
            this.onAnimationComplete(message);
        })
    }

    public onAnimationComplete(message: string): void {
        let item: any = this._textDisplayDic.TryGetValue(message);
        if (item) {
            item.isplaying = false;
            this._textDisplayDic.Remove(message);
        }
    }

    public removeTips(): void {
        let self = this;
        for (let i: number = 0; i < self._textDisplayDic.GetLenght(); i++) {
            let data: any = self._textDisplayDic.getValueByIndex(i);
            data.display.parent && data.display.parent.removeChild(data.display);
            data.display.alpha = 1;
            data.display.verticalCenter = 0;
            delete data.display.$children;
        }
        self._textDisplayDic.clear();
    }

    private getOne(msg: string): eui.Label {
        return this._creatOneTextDisplay();
    }
}
