/**
 * 大厅场景层
 */
class HallScene extends BaseScene {
	public constructor() {
		super();
	}

	/**
	* 进入Scene调用
	*/
	public onEnter(): void {
		super.onEnter();
		App.ControllerManager.applyFunc(ControllerConst.Hall, HallConst.HALL_INIT);
		//播放背景音乐
		// App.SoundManager.playBg("sound_bg");
	}

	/**
	 * 退出Scene调用
	 */
	public onExit(): void {
		super.onExit();
	}
}