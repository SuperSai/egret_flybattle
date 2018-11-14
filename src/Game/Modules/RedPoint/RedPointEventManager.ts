class RedPointEventManager extends egret.EventDispatcher {

	public constructor() {
		super();
	}
	/** 监听事件 */
	public addEvent(type: any, fun: Function, content: any, useCapture: boolean = false): void {
		if (this.hasEventListener(type)) {
			this.removeEventListener(type, fun, content, useCapture);
		}
		this.addEventListener(type, fun, content, useCapture);
	}
	/**
	 * 删除事件
	 * @param type
	 * @param fun
	 * @param content
	 * @param useCapture
	 */
	public removeEvent(type: any, fun: Function, content: any, useCapture: boolean = false): void {
		if (this.hasEventListener(type)) {
			this.removeEventListener(type, fun, content, useCapture);
		}
	}
	/**
	 * 事件派发
	 * @param type
	 * @param data
	 */
	public dispatchEventWithData(type: any, data: any) {
		this.dispatchEventWith(type, false, data);
	}

	private static _instance: RedPointEventManager;
	public static get getInstance(): RedPointEventManager {
		if (!RedPointEventManager._instance) {
			RedPointEventManager._instance = new RedPointEventManager();
		}
		return RedPointEventManager._instance;
	}
}