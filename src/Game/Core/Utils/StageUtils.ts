/**
 * Stage相关工具类
 */
class StageUtils extends BaseClass {

    //UIStage单例
    private static _uiStage: eui.UILayer;
    private _stageRect: egret.Rectangle;

    public constructor() {
        super();
        let self = this;
        if (StageUtils._uiStage == null) {
            StageUtils._uiStage = new eui.UILayer();
            StageUtils._uiStage.percentHeight = 100;
            StageUtils._uiStage.percentWidth = 100;
            StageUtils._uiStage.touchEnabled = false;
            this.getStage().addChild(StageUtils._uiStage);
        }
        self._stageRect = new egret.Rectangle(0, 0, self.getWidth(), self.getHeight());
    }

    public stage: egret.Stage;
    public StageRect: egret.Rectangle;
    public setup(stage: egret.Stage) {
        this.stage = stage;
        this.stage.frameRate = 60;
        this.StageRect = new egret.Rectangle(0, 0, this.stage.stageWidth, stage.stageHeight);
    }

    public getStageRect(): egret.Rectangle {
        return this._stageRect;
    }

    /** 设置适配方式 */
    public setScaleMode(value: any): void {
        this.stage.scaleMode = value;
    }
    /** 设置帧频 */
    public setFrameRate(value: number): void {
        this.stage.frameRate = value;
    }

    public isInStage(x: number, y: number): boolean {
        return this.StageRect.contains(x, y);
    }

    /**
     * 获取游戏Stage对象
     * @returns {egret.MainContext}
     */
    public getStage(): egret.Stage {
        return egret.MainContext.instance.stage;
    }

    /**
     * 获取唯一UIStage
     * @returns {eui.UILayer}
     */
    public getUIStage(): eui.UILayer {
        return StageUtils._uiStage;
    }

    /**
     * 获取游戏的高度
     * @returns {number}
     */
    public getHeight(): number {
        return this.getStage().stageHeight;
    }

    /**
     * 获取游戏宽度
     * @returns {number}
     */
    public getWidth(): number {
        return this.getStage().stageWidth;
    }
}
