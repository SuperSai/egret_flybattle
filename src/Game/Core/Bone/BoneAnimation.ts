class BoneAnimation extends egret.Sprite {

    private _skeName: string;
    private _complete: Function;
    private _completeTarget: any;
    private _isLoadComplete: boolean = false;
    private _isInPool: boolean = false;
    private _timeScale: number = 1;
    private _positionOffset: egret.Point;
    private _direction: number = 1;


    public static LOAD_COMPLETE: string = "boneLoadComplete";
    public static LOOP_COMPLETE: string = "boneLoopComplete";
    public static FRAME_EVENT: string = "frameEvent";
    public static traceID: string = "tx_01";

    public currentAnimationName: string = "";
    public isPauseAtLastFrame: boolean = false;
    public removeAtLastFrame: boolean = true;
    public removeWhenRemoveFromStage: boolean = true;
    public playTimes: number = 1;
    public detectFrameEvent: boolean = false;
    public startframeIndex: number = 0;
    public isAnimationOnceComplete: boolean = false;
    public toWaitAnimation: boolean = false;
    public waitAnimationName: string = "fig";
    //播放一次然后停住 1
    //播放一次后直接移除 -1
    //无线播放 0


    public constructor(skeName: string) {
        super();
        this._skeName = skeName;
        if (this._skeName == BoneAnimation.traceID) Log.trace("LoadBone constructor {0}", BoneAnimation.traceID);
    }

    public play(complete: Function = null, thisObject: any = null): void {
        if (this._skeName == BoneAnimation.traceID) Log.trace("LoadBone play {0}", BoneAnimation.traceID);
        this._complete = complete;
        this._completeTarget = thisObject;
        this.addEventListener(BoneAnimation.LOAD_COMPLETE, this.playNow, this);
        if (this._isLoadComplete) this.playNow();
    }

    public playAnimationOnce(name: string): void {
        this.isAnimationOnceComplete = false;
        this.currentAnimationName = name;
        this.playTimes = 1;
        this.play();
        this.addEventListener(BoneAnimation.LOOP_COMPLETE, this.onPlayOnceComplete, this);
    }

    private onPlayOnceComplete(): void {
        this.isAnimationOnceComplete = true;
        this.removeEventListener(BoneAnimation.LOOP_COMPLETE, this.onPlayOnceComplete, this);
        if (this.toWaitAnimation) {
            this.currentAnimationName = this.waitAnimationName;
            this.playTimes = 0;
            this.play();
        }
    }

    public stop(animation: string): void {
        if (this.armature == null) return;
        this.armature.animation.stop(animation);
    }

    private playNow(): void {
        if (this._skeName == BoneAnimation.traceID) Log.trace("LoadBone playNow {0}", BoneAnimation.traceID);
        if (this._isInPool) Log.trace("{0} current is in pool must be not play", this._skeName);
        this.removeEventListener(BoneAnimation.LOAD_COMPLETE, this.playNow, this);
        if (this.currentAnimationName == "") this.currentAnimationName = this.getRandomAnimationName();
        App.BoneManager.factory.clock.add(this.armature);
        this.armature.animation.gotoAndPlayByFrame(this.currentAnimationName, this.startframeIndex, this.playTimes);
        this.armature.eventDispatcher.addDBEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.playComplete, this);
        if (this.detectFrameEvent) this.armature.eventDispatcher.addDBEventListener(dragonBones.EventObject.FRAME_EVENT, this.onFrameEventFired, this);
        if (this.removeWhenRemoveFromStage) this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onBoneRemove, this);
    }

    public load() {
        if (this._skeName == BoneAnimation.traceID) Log.trace("LoadBone load start {0}", BoneAnimation.traceID);
        App.ResUtil.loadGroup(this._skeName, this.loadComplete, this, App.ResUtil.PRIORITY_H);
    }

    private onFrameEventFired(event: egret.Event): void {
        //要去实现
        this.dispatchEvent(new egret.Event(BoneAnimation.FRAME_EVENT, true, true, event.data));
    }

    private loadComplete(): void {
        if (this._skeName == BoneAnimation.traceID) Log.trace("LoadBone loadComplete start {0}", BoneAnimation.traceID);
        this.armature = App.BoneManager.getArmature(this._skeName);
        this._isLoadComplete = true;
        this.addChild(this.armature.display);
        this.initBone();
        this.dispatchEvent(new egret.Event(BoneAnimation.LOAD_COMPLETE, true, true, this));
        if (this._skeName == BoneAnimation.traceID) Log.trace("LoadBone loadComplete createComplete {0}", BoneAnimation.traceID);
    }
    /*
    * 为对象池的引用添加一些预设
    * */
    public resetForPool() {
        if (this._skeName == BoneAnimation.traceID) Log.trace("LoadBone resetForPool {0}", BoneAnimation.traceID);
        this._isInPool = true;
        if (!this._isLoadComplete) return;
        this.armature.animation.stop();
        this.armature.animation.timeScale = this._timeScale = 1;
        this.armature.display.scaleX = this._direction = 1;
        App.BoneManager.factory.clock.remove(this.armature);
        App.DisplayUtils.resetDisplay(this);
        App.DisplayUtils.resetDisplay(this.armature.display);
    }

    private playComplete() {
        if (this._skeName == BoneAnimation.traceID) Log.trace("LoadBone playComplete {0}", BoneAnimation.traceID);
        this.armature.eventDispatcher.removeDBEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.playComplete, this);
        if (this.isPauseAtLastFrame) {
            this.armature.animation.stop(this.currentAnimationName);
        }
        if (this.removeAtLastFrame) {
            this.onBoneRemove();
        }
        if (this._complete != null && this._completeTarget != null) {
            this._complete.call(this._completeTarget);
        }
        this.dispatchEvent(new egret.Event(BoneAnimation.LOOP_COMPLETE, true, true, this));
    }

    private onBoneRemove() {
        // 有时候会出现没有播放完成就remove的情况，所以这里还要再remove一次事件；
        if (this._skeName == BoneAnimation.traceID) Log.trace("LoadBone onBoneRemove {0}", BoneAnimation.traceID);
        this.armature.eventDispatcher.removeDBEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.playComplete, this);
        this.armature.eventDispatcher.removeDBEventListener(dragonBones.EventObject.FRAME_EVENT, this.onFrameEventFired, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onBoneRemove, this);
        if (!App.ResourcePool.hasItem(this)) {
            App.ResourcePool.push(this);
        }
    }

    public initBone(): void {
        if (this._skeName == BoneAnimation.traceID) Log.trace("LoadBone initBone {0}", BoneAnimation.traceID);
        this._isInPool = false;
        if (this._isLoadComplete) this.armature.animation.timeScale = this._timeScale;
        if (this._isLoadComplete) this.armature.display.scaleX = this._direction;
        this.positionOffset = this.positionOffset;

    }

    public armature: dragonBones.Armature;  //人物骨架

    public get skeName(): string {
        return this._skeName;
    }

    public get isLoadComplete(): boolean {
        return this._isLoadComplete;
    }

    public set timeScale(value: number) {
        this._timeScale = value;
        if (this._isLoadComplete) this.armature.animation.timeScale = this._timeScale;
    }

    public get timeScale(): number {
        return this._timeScale;
    }

    public get direction(): number {
        return this._direction;
    }

    public set direction(value: number) {
        this._direction = value;
        if (this._isLoadComplete) this.armature.display.scaleX = value;
    }

    public set positionOffset(value: egret.Point) {
        this._positionOffset = value;
        if (this.armature == null || this._positionOffset == null) return;
        this.armature.display.x = this._positionOffset.x;
        this.armature.display.y = this._positionOffset.y;
    }

    public get positionOffset(): egret.Point {
        return this._positionOffset;
    }

    public get allAnimationNames(): string[] {
        return this.armature.animation.animationNames;
    }

    public hasAnimation(name: string): boolean {
        return this.armature == null ? false : this.armature.animation.hasAnimation(name);
    }

    public getFrameCountByName(name: string): number {
        let animation: dragonBones.AnimationData = this.armature.animation.animations[name];
        return animation.frameCount;
    }

    public getRandomAnimationName(): string {
        if (this.allAnimationNames.length == 1) return this.allAnimationNames[0];
        return App.ObjectUtils.getRandomItem(this.allAnimationNames);
    }

    public dispose(): void {
        if (this._skeName == BoneAnimation.traceID) Log.trace("LoadBone dispose {0}", BoneAnimation.traceID);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onBoneRemove, this);
        if (this.armature) {
            this.armature.eventDispatcher.removeDBEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.playComplete, this);
            this.armature.eventDispatcher.removeDBEventListener(dragonBones.EventObject.FRAME_EVENT, this.onFrameEventFired, this);
            dragonBones.WorldClock.clock.remove(this.armature);
            this.armature.dispose();
            this.armature = null;
        }
        this._skeName = null;
        this._complete = null;
        this._completeTarget = null;
        this._positionOffset = null;
        this.currentAnimationName = null;
        this.isPauseAtLastFrame = null;
        this.removeAtLastFrame = null;
    }
}