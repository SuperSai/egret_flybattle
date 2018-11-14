class LoginController extends BaseController {
	//本模块的数据存储
	private _loginModel: LoginModel;
	private _loginView: LoginView;
	private _request: egret.HttpRequest;
	private _serverRequest: egret.HttpRequest;

	public constructor() {
		super();
		this.init();
	}

	private init(): void {
		let self = this;
		//初始化Model
		self._loginModel = new LoginModel(self);
		//初始化UI界面
		self._loginView = new LoginView(self, LayerManager.GAME_UI_LAYER);
		App.ViewManager.register(ViewConst.Login, self._loginView);
		//注册登陆消息
		self.registerMessage();
		self.initRegisterView();
	}

	/** 注册消息 */
	private registerMessage(): void {
		let self = this;
		SocketManager.Instance.addEventListener(SocketEvents.SOCKET_CONNECT, self.onSendServerLogin, self);
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.STC_LOGIN_SUCCESS), self.onLoginSuccess, self);
		SocketManager.Instance.addEventListener(SocketEvents.format(PackageInTypeVo.STC_LANDFALL), self.onLandFall, self);
	}

	private removeEvents(): void {
		let self = this;
		SocketManager.Instance.removeEventListener(SocketEvents.SOCKET_CONNECT, self.onSendServerLogin, self);
		SocketManager.Instance.removeEventListener(SocketEvents.format(PackageInTypeVo.STC_LOGIN_SUCCESS), self.onLoginSuccess, self);
		SocketManager.Instance.removeEventListener(SocketEvents.format(PackageInTypeVo.STC_LANDFALL), self.onLandFall, self);
	}

	/** 注册界面才可以打开界面 */
	private initRegisterView(): void {
		let self = this;
		App.ViewManager.register(ViewConst.ServerView, new ServerView(self, LayerManager.GAME_UI_LAYER));
	}

	public getServerInfo(): void {
		let self = this;
		self._serverRequest = new egret.HttpRequest();
		self._serverRequest.withCredentials = false;
		self._serverRequest.responseType = egret.HttpResponseType.TEXT;
		self._serverRequest.addEventListener(egret.Event.COMPLETE, self.onServerListComplete, self);
		let url: string = "";
		switch (ext.getPlatform()) {
			case "dev":
				url = ext.getServerListUrl() + App.PlayerInfoManager.Info.userName;
				self._serverRequest.open(url, egret.HttpMethod.GET);
				self._serverRequest.send();
				break;
			default:
				url = ext.getServerListUrl() + App.PlayerInfoManager.Info.userName;
				self._serverRequest.open(url, egret.HttpMethod.GET);
				self._serverRequest.send();
				break;
		}
	}

	private onServerListComplete(evt: egret.Event): void {
		let self = this;
		let request: egret.HttpRequest = evt.currentTarget as egret.HttpRequest;
		self._loginModel.allServerList = JSON.parse(request.response);
		self.setShowServer();
		if (ext.getPlatform() == "dev") {
			self.applyFunc(LoginConst.SERVERLIST_MSG);
		} else {
			App.ViewManager.open(ViewConst.Login);
		}
	}

	public setShowServer(): void {
		let self = this;
		self.initServerInfo();
		if (self._loginModel.myLatelyServer) {
			self._loginModel.showServer = self._loginModel.myLatelyServer;
		} else if (self._loginModel.newServer) {
			self._loginModel.showServer = self._loginModel.newServer;
		} else {
			self._loginModel.showServer = self._loginModel.allServerList[0];
		}
	}

	private initServerInfo(): void {
		let self = this;
		self._loginModel.myServerList = [];
		let max: number = 0;
		let maxServerId: number = 0;
		self._loginModel.allServerList.sort((a: any, b: any) => { return b.serverId - a.serverId; })
		for (let i: number = 0; i < self._loginModel.allServerList.length; i++) {
			if (self._loginModel.allServerList[i].loginTime) {
				self._loginModel.myServerList.push(self._loginModel.allServerList[i]);
				if (self._loginModel.allServerList[i].loginTime > max) {
					max = self._loginModel.allServerList[i].loginTime;
					self._loginModel.myLatelyServer = self._loginModel.allServerList[i];
				}
			}
			if (self._loginModel.allServerList[i].serverId > maxServerId) {
				maxServerId = self._loginModel.allServerList[i].serverId;
				self._loginModel.newServer = self._loginModel.allServerList[i];
			}
		}
		self._loginModel.myServerList.sort((a: any, b: any) => { return b.loginTime - a.loginTime; })
	}


	/** 登陆游戏获取玩家信息 */
	public loginGame(): void {
		let self = this;
		self._request = new egret.HttpRequest();
		self._request.withCredentials = false;
		self._request.responseType = egret.HttpResponseType.TEXT;
		let url: string = "";
		let data: any = ""
		let ip: string = egret.getOption("ip");
		let port: string = egret.getOption("port");
		ext.setCenterUrl(self.getRequestUrl(self._loginModel.showServer.ssl, self._loginModel.showServer.host, self._loginModel.showServer.httpPort, ""));
		if (ip && ip != "" && port && port != "") {
			url = "http://" + ip + ":" + port + "/ClickHeroes/game/1/1?json={'userName':'" + App.PlayerInfoManager.Info.nickName + "'}";
			self._request.open(url, egret.HttpMethod.GET);
			self._request.send();
		}
		else {
			switch (ext.getPlatform()) {
				case "dev":
					url = self.getRequestUrl(self._loginModel.showServer.ssl, self._loginModel.showServer.host, self._loginModel.showServer.httpPort, "1/1") + "?json={'userName':'" + App.PlayerInfoManager.Info.userName + "'}";
					self._request.open(url, egret.HttpMethod.GET);
					self._request.send();
					break;
				default:
					// url = "http://quanwang.7road.net:6006/FlyBattle/game/1/1?json={'userName':'" + PlayerInfoManager.getInstance.userName + "'}";
					url = "https://quanwang.7road.net:443/FlyBattle/game/1/1?json={'userName':'" + App.PlayerInfoManager.Info.userName + "'}";
					// url = "https://gs002.puzzleandheroes.com:8001/FlyBattle/game/1/1?json={'userName':'" + PlayerInfoManager.getInstance.userName + "'}";
					// url = "http://192.168.31.164:6001/FlyBattle/game/1/1?json={'userName':'" + PlayerInfoManager.getInstance.userName + "'}";
					// url = "http://192.168.31.118:6001/FlyBattle/game/1/1?json={'userName':'" + PlayerInfoManager.getInstance.userName + "'}";
					self._request.open(url, egret.HttpMethod.GET);
					self._request.send();
					break;
			}
		}
		self._request.addEventListener(egret.Event.COMPLETE, self.onGetComplete, self);
	}

	/** HTTP加载完成 */
	private onGetComplete(evt: egret.Event): void {
		let self = this;
		let request: egret.HttpRequest = evt.currentTarget as egret.HttpRequest;
		let data: any = JSON.parse(request.response);
		App.PlayerInfoManager.Info.playerId = data.content.playerId;
		if (data.content.ssl) {
			SocketConfig.IP = "wss://" + data.content.host;
		}
		else {
			SocketConfig.IP = "ws://" + data.content.host;
		}
		SocketManager.Instance.setup(SocketConfig.IP, data.content.port);
	}

	/** 登陆成功进入主城 */
	private onLoginSuccess(evt: egret.Event): void {
		let self = this;
		self.removeEvents();
		App.SceneManager.clear();
		App.SceneManager.runScene(SceneConst.HALL);
	}

	/** 异地登陆 */
	private onLandFall(): void {
		let info: AlertInfo = new AlertInfo();
		info.des = App.LanguageManager.getLanguageText("refreshLabel");
		info.sureCallback = () => {
			location.reload();
			info = null;
		};
		App.ViewManager.open(ViewConst.PromptAlert, info);
	}

	/** Socket连接成功后给服务器发送登陆协议 */
	public onSendServerLogin(): void {
		SocketManager.Instance.out.sendServerLogin();
	}

	public getRequestUrl(ssl: boolean, url: string, port: number, param: string): string {
		let result: string;
		if (ssl) {
			result = "https://" + url + ":" + port + ext.getGamePre() + param;
		} else {
			result = "http://" + url + ":" + port + ext.getGamePre() + param;
		}
		return result;
	}

}