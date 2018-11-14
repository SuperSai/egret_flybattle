class MonsterVO {
    private _assetScale: number[];
    get assetScale(): number[] {
        return this._assetScale;
    }

    set assetScale(value) {
        this._assetScale = App.ObjectUtils.splitToNumber(value);
    }


    get assetType(): number[] {
        return this._assetType;
    }

    set assetType(value) {
        this._assetType = App.ObjectUtils.splitToNumber(value);
    }
    private _assetType: number[];

    get assetname(): string[] {
        return this._assetname;
    }

    set assetname(value) {
        this._assetname = String(value).split(",");
    }
    private _assetname: string[];

    private _assetOffset: egret.Point[];
    public get assetOffset(): egret.Point[] {
        return this._assetOffset;
    }
    public set assetOffset(value) {
        this._assetOffset = App.ObjectUtils.splitToPoints(value);
    }

    public phaseCondition: number;
    public phaseArgs: number;
    private _nextPhase: number[];
    public get nextPhase(): number[] {
        return this._nextPhase;
    }
    public set nextPhase(value) {
        this._nextPhase = App.ObjectUtils.splitToNumber(value);
    }

    public type: number;
    public bornType: number;
    public bombAni: string;

    public speed: number;
    public accSpeed: number;

    public moveType: number;
    public dieSound: number;
    public dropID: number;
    public dropCount: number;


    private _moveArgs1: number[];
    public get moveArgs1(): number[] {
        return this._moveArgs1;
    }
    public set moveArgs1(value) {
        this._moveArgs1 = App.ObjectUtils.splitToNumber(value);
    }

    private _moveBounce: egret.Rectangle;
    public get moveBounce(): egret.Rectangle {
        return this._moveBounce;
    }
    public set moveBounce(value) {
        this._moveBounce = App.ObjectUtils.converToRectangle(value);
    }

    public targetType: number;
    public hp: number;
    public damage: number;
    private _bounce: egret.Rectangle;

    public set bounce(value) {
        this._bounce = App.ObjectUtils.converToRectangle(value);

    }
    public get bounce(): egret.Rectangle {
        return this._bounce;
    }

    public _bullets: number[];
    public set bullet(value) {
        if (String(value) == "0") return;
        this._bullets = App.ObjectUtils.splitToNumber(value);
    }

    public get bullet(): number[] {
        return this._bullets;
    }

    public _bulletGaps: number[];
    public set bulletGaps(value) {
        this._bulletGaps = App.ObjectUtils.splitToNumber(value);
    }

    public get bulletGaps(): number[] {
        return this._bulletGaps;
    }
    /** 无敌 */
    private _invincible: boolean;
    get invincible(): boolean {
        return this._invincible;
    }

    set invincible(value) {
        this._invincible = App.ObjectUtils.getBooleanByInt(value);
    }
}