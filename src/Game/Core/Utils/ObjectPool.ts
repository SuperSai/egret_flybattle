/**
 * 对象池
 */
class ObjectPool extends BaseClass {
    /**存储对象池的Object*/
    private readonly pool: Object;

    public constructor() {
        super();
        this.pool = {};
    }

    /**
     * 获取对象
     * @className 对象类名
     * @args 构造函数传参
     */
    public pop(className: string, ...args: any[]): any {
        if (this.pool[className] == null) {
            this.pool[className] = [];
        }
        let obj: any;
        const list: Array<any> = this.pool[className];
        if (list.length > 0) {
            return list.pop();
        } else {
            const clz: any = egret.getDefinitionByName(className);
            const argsLen: number = args.length;

            if (argsLen == 0) {
                obj = new clz();
            } else if (argsLen == 1) {
                obj = new clz(args[0]);
            } else if (argsLen == 2) {
                obj = new clz(args[0], args[1]);
            } else if (argsLen == 3) {
                obj = new clz(args[0], args[1], args[2]);
            } else if (argsLen == 4) {
                obj = new clz(args[0], args[1], args[2], args[3]);
            } else if (argsLen == 5) {
                obj = new clz(args[0], args[1], args[2], args[3], args[4]);
            }
            obj.className = className;
        }
        return obj;
    }

    /**
     * 回收对象
     * @obj 需要回收的对象
     */
    public push(obj: any): void {
        const className = obj.className;
        if (this.pool[className] == null) {
            console.log("回收对象的数组不存在", className);
            return;
        }
        if (obj["reset"]) {
            obj["reset"]();
        }
        this.pool[className].push(obj);
    }

    /**
     * 创建对象(用于将要大量使用前，预先创建，防止使用时大量创建卡顿)
     * @className 对象类定义
     * @num 创建数量
     * @args 构造函数传参
     */
    public create(className: string, num: number, ...args: any[]) {
        const list = [];
        for (let i = 0; i < num; i++) {
            list.push(this.pop(className, ...args));
        }
        for (let j = 0; j < num; j++) {

            this.push(list.pop());
        }
    }

    /**
     * 获取对象池对象数量
     * @className 对象类定义
     * @return 对象数量
     */
    public getLen(className: string): number {
        if (this.pool[className]) {
            return this.pool[className].length;
        }
        return 0;
    }

    /**
     * 清理对象
     * @className 对象类定义
     　　  * @funName 清理前执行指定函数
     */
    public clear(className: string, funName: string = null) {
        if (this.pool[className]) {
            funName && this.dealFun(className, funName);
            this.pool[className] = null;
            delete this.pool[className];
        }
    }

    /**
     * 对象池所有对象执行指定函数
     * @className 对象类定义
     * @funName 函数名
     */
    public dealFun(className: string, funName: string) {
        if (this.pool[className]) {
            const list: Array<any> = this.pool[className];
            const len = list.length;
            for (let i = 0; i < len; i++) {
                list[i][funName] && list[i][funName]();
            }
        }
    }
}