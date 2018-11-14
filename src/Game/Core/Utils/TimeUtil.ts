/**
 * Created 2017/9/4.
 */
class TimeUtil extends BaseClass {

    /**
     * 时间毫秒转成小时
     * @param sec
     * @returns {number}
     * @constructor
     */
    public S2H(times: number, symbol: string = ":", isH: boolean = true): string {
        if (times < 0) return;
        let h: string = Math.floor(times / 1000 / 60 / 60).toString();
        let m: string = Math.floor(times % (1000 * 3600) / (1000 * 60)).toString();
        let s: string = Math.floor((times % (1000 * 60)) / 1000).toString();
        if (Number(h) < 10) {
            h = "0" + h;
        }
        if (Number(m) < 10) {
            m = "0" + m;
        }
        if (Number(s) < 10) {
            s = "0" + s;
        }
        if (isH) {
            var restult = h + symbol + m + symbol + s;
        } else {
            var restult = m + symbol + s;
        }

        return restult;
    }

    public getBossTime(times: number): string {
        if (times < 0) return;
        let h: string = Math.floor(times / 1000 / 60 / 60).toString();
        let m: string = Math.floor(times % (1000 * 3600) / (1000 * 60)).toString();
        let s: string = Math.floor((times % (1000 * 60)) / 1000).toString();

        if (Number(h) > 0) {
            return h + "h";
        }
        else if (Number(m) > 0) {
            return m + "m";
        }
        else if (Number(s) > 0) {
            return s + "s";
        }
        return "0";
    }

    /**
     * 获取字符串格式化数据
     * @param str
     */
    public fornatStr(str: string): any {
        let arr: string[] = str.split("|");
        let obj: any = {};
        if (arr && arr.length) {
            for (var i = 0; i < arr.length; i++) {
                let data = this.fornatStr1(arr[i]);
                let itemObj: any = {
                    "id": data[0],
                    "itemtType": data[1],
                    "num": data[2]
                };
                obj[data[0]] = itemObj;
            }
        }
        return obj;
    }

    private fornatStr1(str: string, symbol: string = "#"): any {
        let arr: string[] = str.split(symbol);
        return arr;
    }

    private _initializeSTime: number = 0;//初始化服务器时间
    private _initializeCTime: number = 0;//初始化客户端时间
    private _firstSTime: number = 0;//服务器登录时间
    private _isLogin: boolean = false;


    /**
     * 获取当前服务器时间
     * @returns {number}
     */
    public getCurServerTime(): number {
        let time: number = this._initializeSTime + Math.floor((new Date().getTime()) / 1000) - this._initializeCTime;
        return time;
    }

    /**
     * 获取结束时间
     * @returns {number}
     */
    public getEndTime(cdTime: number): number {
        return this._firstSTime + cdTime;
    }

    /**
     * 获取cd时间
     * @returns {number}
     */
    public getCDTime(time: number): number {
        let endTime: number = this.getEndTime(time);
        let nowTime: number = this.getCurServerTime();
        if (nowTime >= endTime) {
            return 0;
        }
        return endTime - nowTime;
    }

    public getCDTimes(endTime: number): number {
        let curTimes: number = this.getCurServerTime();
        if (endTime <= curTimes) {
            return 0;
        }
        let result: number = endTime - curTimes;
        return result;
    }

    /**
     * 同步时间
     * @param {number} sTime 服务器时间
     * @param {number} cTime 客户端时间
     */
    public synctime(sTime: number, cTime: number): void {
        this._initializeCTime = cTime;
        this._initializeSTime = sTime;
        if (!this._isLogin) {
            this._firstSTime = sTime;
            this._isLogin = true;
        }
    }

    /**
     * 时间戳long转成number 返回秒数
     * @param longTypeDate
     */
    public fornateTimestamp(longTypeDate): number {
        var datetimeType = "";
        var date = new Date();
        date.setTime(longTypeDate);
        let num: number = date.getTime();
        num = Math.floor(num / 1000);
        return num;
    }
}

module utils.timer {
    export function datetimeFormat(longTypeDate) {
        var datetimeType = "";
        var date = new Date();
        date.setTime(longTypeDate);
        datetimeType += date.getFullYear();   //年  
        datetimeType += "-" + getMonth(date); //月   
        datetimeType += "-" + getDay(date);   //日  
        datetimeType += "  " + getHours(date);   //时  
        datetimeType += ":" + getMinutes(date);      //分
        datetimeType += ":" + getSeconds(date);      //分
        return datetimeType;
    }

    export function getYYMMDD(longTypeDate): number {
        var datetimeType = "";
        var date = new Date();
        date.setTime(longTypeDate);
        datetimeType += date.getFullYear();   //年  
        datetimeType += getMonth(date); //月   
        datetimeType += getDay(date);   //日
        return parseInt(datetimeType);
    }

    export function MMDDFormat(longTypeDate) {
        var datetimeType = "";
        var date = new Date();
        date.setTime(longTypeDate);
        datetimeType += getMonth(date) + "月"; //月   
        datetimeType += getDay(date) + "日";   //日
        return datetimeType;
    }

    export function getHHMMSS(longTypeDate): number {
        var datetimeType = "";
        var date = new Date();
        date.setTime(longTypeDate);
        datetimeType += getHours(date);   //时  
        datetimeType += getMinutes(date);      //分
        datetimeType += getSeconds(date);      //分
        return parseInt(datetimeType);
    }
    export function HHMMFormat(longTypeDate) {
        var datetimeType = "";
        var date = new Date();
        date.setTime(longTypeDate);
        datetimeType += getHours(date); //时   
        datetimeType += ":" + getMinutes(date);   //分
        return datetimeType;
    }
    //返回 01-12 的月份值   
    function getMonth(date) {
        var month = "";
        month = date.getMonth() + 1; //getMonth()得到的月份是0-11  
        if (parseInt(month) < 10) {
            month = "0" + month;
        }
        return month;
    }
    //返回01-30的日期  
    function getDay(date) {
        var day = "";
        day = date.getDate();
        if (parseInt(day) < 10) {
            day = "0" + day;
        }
        return day;
    }
    //返回小时
    function getHours(date) {
        var hours = "";
        hours = date.getHours();
        if (parseInt(hours) < 10) {
            hours = "0" + hours;
        }
        return hours;
    }
    //返回分
    function getMinutes(date) {
        var minute = "";
        minute = date.getMinutes();
        if (parseInt(minute) < 10) {
            minute = "0" + minute;
        }
        return minute;
    }
    //返回秒
    function getSeconds(date) {
        var second = "";
        second = date.getSeconds();
        if (parseInt(second) < 10) {
            second = "0" + second;
        }
        return second;
    }
}