class BulletVO {
    public type: number = 0;
    public nextPhase: number = 0;
    public time: number = 0;
    public startSound: number = 0;
    public buffSkill: number = 0;
    public id: number = 0;
    public level: number = 0;
    /** 首领杀手 */
    public isHaveBossDamageAscension: boolean = false;
    /** 对BOSS伤害增加 */
    public damageAscension: number = 0;

    private _animation: string = "";
    public get animation(): string {
        return this._animation;
    }

    public set animation(value: string) {
        if (value == "0") return;
        this._animation = value;
    }

    public animationDelay: number;
    public animationInterval: number;

    private _stopMoveWhileSkill: boolean;
    public set stopMoveWhileSkill(value: boolean) {
        this._stopMoveWhileSkill = Number(value) == 1;
    }

    public get stopMoveWhileSkill(): boolean {
        return this._stopMoveWhileSkill;
    }

    private _bullets: number[];
    public set bullets(value) {
        if (value instanceof Array) {
            this._bullets = value;
        } else {
            this._bullets = App.ObjectUtils.splitToNumber(value);
        }
    }

    public get bullets(): number[] {
        return this._bullets;
    }

    private _delay: number[];
    public set delay(value) {
        if (value instanceof Array) {
            this._delay = value;
        } else {
            this._delay = App.ObjectUtils.splitToNumber(value);
        }
    }

    public get delay(): number[] {
        return this._delay;
    }

    private _interval: number[];
    public set interval(value) {
        if (value instanceof Array) {
            this._interval = value;
        } else {
            this._interval = App.ObjectUtils.splitToNumber(value);
        }
    }

    public get interval(): number[] {
        return this._interval;
    }

    private _startPos: egret.Point[];
    public set startPos(value) {
        if (value instanceof Array) {
            this._startPos = value;
        } else {
            this._startPos = App.ObjectUtils.splitToPoints(value);
        }
    }

    public get startPos(): egret.Point[] {
        return this._startPos;
    }

    private _addtionalPos: egret.Point[];
    public set addtionalPos(value) {
        if (value instanceof Array) {
            this._addtionalPos = value;
        } else {
            this._addtionalPos = App.ObjectUtils.splitToPoints(value);
        }
    }

    public get addtionalPos(): egret.Point[] {
        return this._addtionalPos;
    }

    private _startAngle: number[];
    public set startAngle(value) {
        if (value instanceof Array) {
            this._startAngle = value;
        } else {
            this._startAngle = App.ObjectUtils.splitToNumber(value);
        }
    }

    public get startAngle(): number[] {
        return this._startAngle;
    }

    private _addtionalAngle: number[];
    public set addtionalAngle(value) {
        if (value instanceof Array) {
            this._addtionalAngle = value;
        } else {
            this._addtionalAngle = App.ObjectUtils.splitToNumber(value);
        }
    }

    public get addtionalAngle(): number[] {
        return this._addtionalAngle;
    }

    private _startRotation: number[];
    public set startRotation(value) {
        if (value instanceof Array) {
            this._startRotation = value;
        } else {
            this._startRotation = App.ObjectUtils.splitToNumber(value);
        }
    }

    public get startRotation(): number[] {
        return this._startRotation;
    }

    private _addtionalRotation: number[];
    public set addtionalRotation(value) {
        if (value instanceof Array) {
            this._addtionalRotation = value;
        } else {
            this._addtionalRotation = App.ObjectUtils.splitToNumber(value);
        }
    }

    public get addtionalRotation(): number[] {
        return this._addtionalRotation;
    }
}