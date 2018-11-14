class DisplayCom implements IComponent {

    public componentName: string = ComponentTypes.Display;
    private _displays: egret.DisplayObject[] = [];
    public anchor: egret.Point = null;
    public addToBottom: boolean = false;
    public assetType: number[] = null;
    public assetScale: number[] = null;
    public assetname: string[] = null;
    public assetOffset: egret.Point[] = null;
    public additionalRotation: number = 0;

    get displays(): egret.DisplayObject[] {
        return this._displays;
    }
    //displayItem
    public addDisplay(display: egret.DisplayObject | string, index: number, type: number, vo: any = null) {
        if (display == null) return;
        if (display instanceof egret.DisplayObject) {
            this.displays.splice(index, 0, display);
            if (vo) App.ObjectUtils.copyValue2(this.displays, vo);
        } else {
            if (display == "") return;
            let obj: egret.DisplayObject = App.ObjectUtils.createAssetByType(display, type);
            if (vo) App.ObjectUtils.copyValue2(obj, vo);
            this.displays.splice(index, 0, obj);
        }
    }

    public hasDisplay(name: string): boolean {
        if (this._displays && this._displays.length > 0) {
            for (let i: number = 0, len: number = this._displays.length; i < len; i++) {
                if (this._displays[i] && this._displays[i].name == name) {
                    return true;
                }
            }
        }
        return false;
    }

    public getDisplayBoneByName(name: string): egret.DisplayObject {
        if (this._displays && this._displays.length > 0) {
            for (let i: number = 0, len: number = this._displays.length; i < len; i++) {
                if (this._displays[i] && this._displays[i].name == name) {
                    return this._displays[i];
                }
            }
        }
        return null;
    }

    public removeDisplay(display: egret.DisplayObject): number {
        let index: number = this.displays.indexOf(display);
        this.displays.splice(index, 1);
        App.DisplayUtils.removeFromParent(display);
        return index;
    }

    public playAnimationOnce(animation: string) {
        if (animation == "") return;
        for (let i: number = 0; i < this.displays.length; i++) {
            if (this.displays[i] instanceof BoneAnimation) {
                let bone: BoneAnimation = this.displays[i] as BoneAnimation;
                if (bone.hasAnimation(animation)) {
                    bone.playAnimationOnce(animation);
                }
            }
        }
    }

    public getDisplayByName(name: string): any {
        let index: number = this.assetname.indexOf(name);
        return this.displays[index];
    }

    public onRemoved(): void {
        App.ObjectUtils.pushAllWithArray(this._displays);
        this.assetname = null;
        this.assetType = null;
        this.assetScale = null;
        this.assetOffset = null;
        this.anchor = null;
        this.addToBottom = false;
        this.additionalRotation = 0;
    }

    public onAdded(): void {
        this.getDisplaysWithUrl();
    }

    public static canAdd(vo: any): boolean {
        return true;
    }

    private setupDisplayItem(display: egret.DisplayObject, type: number, index: number): void {
        if (display == null) return;
        switch (type) {
            case AssetType.BoneAnimation:
            case AssetType.RoleAnimation:
                let bone: BoneAnimation = display as BoneAnimation;
                bone.toWaitAnimation = type == AssetType.RoleAnimation;
                bone.play();
                break;
            case AssetType.BulletBitmap:
                display.anchorOffsetX = this.anchor.x;
                display.anchorOffsetY = this.anchor.y;
                this.additionalRotation = 90;
                break;

        }
        if (this.assetScale[index]) {
            display.scaleY = display.scaleX = this.assetScale[index];
        }
    }

    private getDisplaysWithUrl() {
        let self = this;
        let display: egret.DisplayObject;
        if (this.assetname == null) return;
        for (let i: number = 0; i < this.assetname.length; i++) {
            if (this.assetname[i] == "" || this.assetname[i] == "0") continue;
            display = App.ObjectUtils.createAssetByType(this.assetname[i], this.assetType[i]);
            this.displays.push(display);
            this.setupDisplayItem(display, this.assetType[i], i);
        }
    }
}