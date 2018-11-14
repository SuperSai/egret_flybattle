class BulletCellVO {
    get anchor(): egret.Point {
        return this._anchor;
    }

    set anchor(value) {
        this._anchor = App.ObjectUtils.converToPoint(value);
    }

    get assetname(): string[] {
        return this._assetname;
    }

    set assetname(value) {
        this._assetname = String(value).split(",");
        for (let i: number = 0; i < this._assetname.length; i++) {
            if (App.ObjectUtils.endWith(this._assetname[i], "png")) this._assetname[i] = App.PathManager.BulletPath + value;
        }
    }

    private _assetname: string[];

    get edgeTypes(): number[] {
        return this._edgeTypes;
    }

    set edgeTypes(value) {
        this._edgeTypes = App.ObjectUtils.splitToNumber(value);
    }
    private _edgeTypes: number[];

    get assetType(): number[] {
        return this._assetType;
    }

    set assetType(value) {
        this._assetType = App.ObjectUtils.splitToNumber(value);
    }
    private _assetType: number[];

    private _assetScale: number[];
    get assetScale(): number[] {
        return this._assetScale;
    }

    set assetScale(value) {
        this._assetScale = App.ObjectUtils.splitToNumber(value);
    }

    public bombAni: string;
    public damage: number;
    public targetType: number;
    public dieSound: number;
    public startSound: number;
    private _bounce: egret.Rectangle;
    public set bounce(value) {
        this._bounce = App.ObjectUtils.converToRectangle(value);

    }

    public get bounce(): egret.Rectangle {
        return this._bounce;
    }

    public guideMissile: number = 0;


    private _snapToAngle: boolean;
    public set snapToAngle(value: boolean) {
        this._snapToAngle = Number(value) == 1;
    }

    public get snapToAngle(): boolean {
        return this._snapToAngle;
    }

    private _anchor: egret.Point;

    public duration: number;

    public angle: number;

    public angleSpeed: number;

    public accAngleSpeed: number;

    public speed: number;

    public rota: number;

    public accSpeed: number;

    public rotaSpeed: number;

    public accRotaSpeed: number;

    private _nextPhase: number[];
    public get nextPhase(): number[] {
        return this._nextPhase;
    }

    public set nextPhase(value) {
        this._nextPhase = App.ObjectUtils.splitToNumber(value);
    }

    public phaseCondition: number;
    public phaseArgs: number;
}