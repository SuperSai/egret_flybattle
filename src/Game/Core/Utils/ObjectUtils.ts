class ObjectUtils extends BaseClass {
    public constructor() {
        super();
    }

    public BASETYPES = ["boolean", "number", "string", "null"];
    public BIGNUMBERKEY = ["baseCost", "baseAttack", "baseLife"];

    /**
     * 拷贝数据
     * @param obj            需要赋值的对象
     * @param value            拥有数据的对象
     */
    public copyValue(obj: Object, value: Object): void {
        for (let key in value) {
            const attrValue = value[key];
            const attrType: string = egret.getQualifiedClassName(attrValue);
            const baseType: boolean = this.isBaseType(value[key]);
            if (baseType) {
                obj[key] = value[key];
            }
            else {
                this.copyValue(obj[key], value[key]);
            }
        }
    }

    /**
     * 拷贝数据
     * @param obj            需要赋值的对象
     * @param value            拥有数据的对象
     */
    public copyValue2(obj: Object, value: Object): void {
        if (value == null) return;
        for (let key in obj) {
            if (key == "__class__") continue;
            if (key == "__types__") continue;
            const attrValue = value[key];
            if (attrValue != undefined) {
                obj[key] = value[key];
            }
        }
    }

    /** 数据列表拷贝 */
    public copyListToAnyInfo(values1: any[], className: string): any[] {
        if (!values1 || values1.length < 1) return null;
        let newList: any[] = [];
        values1.forEach((value: any, index: number) => {
            let obj: any = App.ObjectPool.pop(className);
            this.copyValue2(obj, value);
            newList.push(obj);
        });
        return newList;
    }

    /**
     * 判断对象是否为基础类型
     * @param obj            对象
     * @return                true为基础类型，false为复杂类型
     */
    public isBaseType(obj: Object): boolean {
        const type: string = egret.getQualifiedClassName(obj);
        const index: number = this.BASETYPES.indexOf(type);
        return index != -1;
    }

    public removeFromArray(target: any, array: any[]): any[] {
        let index = array.indexOf(target);
        if (index >= 0) array.splice(index, 1);
        return array;
    }

    public getRandomFromIn(array: number[]): number {
        if (array == null || array.length < 1) {
            return 0;
        }
        let random: number = array[0] + Math.random() * (array[1] - array[0]);
        return Math.floor(random);
    }

    public getRandomStr(str: string, strSplit: string = "#"): string {
        let arr: string[] = str.split(strSplit);
        return this.getRandomItem(arr);
    }

    public getRandomItem(array: any[]): any {
        if (array == null || array.length < 1) {
            return null;
        }
        let random: number = Math.random() * array.length;
        let index: number = Math.floor(random);
        return array[index];
    }

    public getBooleanByInt(value: any): boolean {
        return value == 0 ? false : true;
    }

    public shuffle(arr: any[]): void {
        let len: number = arr.length;
        let i: number = len;
        while (i--) {
            let ran: number = Math.floor(Math.random() * len);
            if (i != ran) {
                let tem: any = arr[i];
                arr[i] = arr[ran];
                arr[ran] = tem;
            }
        }
    }

    public splitToNumber(value, sprelator: string = ","): number[] {
        let result: number[] = [];
        let sArray: string[] = value.split(sprelator);
        for (let i: number = 0; i < sArray.length; i++) {
            result.push(Number(sArray[i]));
        }
        return result;
    }

    public splitToString(value, sprelator: string = ","): string[] {
        let result: string[] = [];
        let sArray: string[] = value.split(sprelator);
        for (let i: number = 0; i < sArray.length; i++) {
            result.push(sArray[i]);
        }
        return result;
    }

    public splitToPoints(value): egret.Point[] {
        let result: egret.Point[] = [];
        let strValue: string = String(value);
        if (strValue == "0") return result;
        let pointStr: string[] = strValue.split("|");
        for (let i: number = 0; i < pointStr.length; i++) {
            let points: string[] = pointStr[i].split(",");
            result.push(new egret.Point(parseFloat(points[0]), parseFloat(points[1])))
        }
        return result;
    }

    public splitToStar(value: number): number[] {
        let self = this;
        let stars: number[] = [];
        if (value > 0) {
            for (let i: number = 0; i < value; i++) {
                stars.push(i);
            }
        }
        return stars;
    }

    public converToPoint(value: any, separater: string = ","): egret.Point {
        if (value == null) return null;
        let sValue: string[] = String(value).split(separater);
        return new egret.Point(parseFloat(sValue[0]), parseFloat(sValue[1]));
    }

    public converToRectangle(value: any): egret.Rectangle {
        if (value == null) return null;
        let values: string[] = value.toString().split(",");
        return new egret.Rectangle(parseFloat(values[0]), parseFloat(values[1])
            , parseFloat(values[2]), parseFloat(values[3]));
    }

    public endWith(value: string, ends: string): boolean {
        return value.lastIndexOf(ends) == value.length - ends.length;
    }

    public removeAllArrayItem(array: any[]) {
        for (let i: number = 0; i < array.length; i++) {
            array.pop();
            i--;
        }
    }

    public replaceItemToArray(array: any[], inde: number, item: any) {
        array.splice(inde, 1, item);
    }

    public createAssetByType(url: string, type: number): egret.DisplayObject {
        let display: egret.DisplayObject;
        switch (type) {
            case AssetType.BulletBitmap:
                display = App.ResourcePool.pop(url, ResourcePool.BITMAP);
                break;
            case AssetType.BoneAnimation:
            case AssetType.RoleAnimation:
                display = App.ResourcePool.pop(url, ResourcePool.SKE);
                break;
            case AssetType.UI_Asset:
                display = App.ObjectPool.pop(url);
                break;
        }
        return display;
    }

    public pushAllWithArray(displays: any[]): void {
        let item = displays.shift();
        while (item) {
            if (item instanceof BoneAnimation) {
                App.ResourcePool.push(item);
            } else if (item instanceof egret.Bitmap) {
                App.ResourcePool.push(item);
            } else {
                App.ObjectPool.push(item);
                App.DisplayUtils.removeFromParent(item);
            }
            item = displays.shift();
        }
    }

    public setWingLayer(parent: egret.DisplayObjectContainer): void {
        if (!parent.$children || parent.$children.length < 1) return;
        let wings = parent.$children.filter((ele: egret.DisplayObject, index: number) => {
            return (ele instanceof BoneAnimation && ele.name.indexOf("wing") != -1);
        });
        if (!wings && wings.length < 1) return;
        parent.setChildIndex(wings[0], parent.numChildren - 1);
    }

    public pointIsInArea(rect: egret.Rectangle, x: number, y: number): boolean {
        return rect.contains(x, y);
    }
}