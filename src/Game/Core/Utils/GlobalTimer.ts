class GlobalTimer {
	public static setup(stage: egret.Stage): void {
		stage.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private static _daltaTime: number = 0;
	private static lastTime: number = 0;
	private static onEnterFrame(): void {
		var currentTime: number = egret.getTimer();
		this._daltaTime = (currentTime - this.lastTime)/16.666667;
		this.lastTime = currentTime;
	}


	public static get deltaTime(): number {
		return this._daltaTime;
	}
}