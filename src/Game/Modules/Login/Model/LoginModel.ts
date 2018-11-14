class LoginModel extends BaseModel {

    public userInfo: any;
    public newServer: any;
    public myLatelyServer: any;
    public myServerList: any[];
    /**所有的服务器列表 */
    public allServerList: any[];
    /**登陆界面展示的服务器 */
    public showServer: any;
    /**1是新玩家，  0是老玩家 */
    public isNew: number = 0;

    public constructor($controller: BaseController) {
        super($controller);
    }
}
