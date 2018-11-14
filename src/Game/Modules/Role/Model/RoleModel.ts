class RoleModel extends BaseModel {

	/** 是否提示出售警告 true：本次登陆不再提示 */
	public roleSellTip: boolean = false;

	public constructor($controller: BaseController) {
		super($controller)
	}
}