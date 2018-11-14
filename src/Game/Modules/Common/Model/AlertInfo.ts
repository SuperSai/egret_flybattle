class AlertInfo {
	public constructor() {
	}
	/** 标题 默认：提示*/
	public title: string = App.LanguageManager.getLanguageText("tip");
	/** 内容 */
	public des: string = "";
	/** 确认后的回调方法 */
	public sureCallback: Function;
	/** 本次登陆不再提示 true：不再提示 */
	public isTip: boolean = false;

}