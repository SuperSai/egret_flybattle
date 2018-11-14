class SocketEvents extends egret.Event {

	public static DATA: string = "data";

	public static SOCKET_CONNECT: string = "socketConnect";
	/** socket连接成功 **/
	public static SOCKET_OPEN: string = "socket_open";
	/** socket错误 **/
	public static SOCKET_ERROR: string = "socket_error";
	/** socket 关闭 **/
	public static SOCKET_CLOSE: string = "SOCKET_close";
	/** socket 数据事件 **/
	public static SOCKET_DATA: string = "socket_data";
	/** socket 中断 **/
	public static SOCKET_CONNECT_STOP: string = "socket_connect_stop";
	/** socket 重连 **/
	public static SOCKET_RECONNECT_SUCCESS: string = "socket_reconnect_success";

	public constructor(type: string, bubbles: boolean = false, cancelable: boolean = false) {
		super(type, bubbles, cancelable);
	}

	private _pkg: PackageIn;

	public get pkg(): PackageIn {
		let self = this;
		return self._pkg;
	}
	/**
 	* 用于拼事件类型，使用协议号的16进制表示
 	* @param ...args 一级协议，二级协议号
 	* */
	public static format(...args): string {
		var strArr: Array<string> = [];
		for (var i: number = 0; i < args.length; i++) {
			strArr.push(args[i].toString(16));
		}
		return strArr.join("+");
	}
}