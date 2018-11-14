class SocketEventDispatcher extends egret.EventDispatcher {
	public constructor() {
		super();
	}

	private static _instance: SocketEventDispatcher;
	public static get getInstance(): SocketEventDispatcher {
		if (SocketEventDispatcher._instance == null) {
			SocketEventDispatcher._instance = new SocketEventDispatcher();
		}
		return SocketEventDispatcher._instance;
	}
}