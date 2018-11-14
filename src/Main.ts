//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {

    protected createChildren(): void {
        super.createChildren();
        let self = this;
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        self.initData();
        ext.loadServerConfig(() => {
            self.initPlatform();
        })
    }

    /** 初始化数据 */
    private initData(): void {
        let self = this;
        //允许支持跨域加载图片
        egret.ImageLoader.crossOrigin = "anonymous";
        App.StageUtils.setup(self.stage);
        App.LayerManager.setup(self.stage);
        GlobalTimer.setup(self.stage);
        if (GameConfig.systemType() == "windows") {
            this.stage.orientation = egret.OrientationMode.AUTO;
            App.StageUtils.setScaleMode(egret.StageScaleMode.SHOW_ALL);
        }
        else {
            this.stage.orientation = egret.OrientationMode.PORTRAIT;
            App.StageUtils.setScaleMode(egret.StageScaleMode.SHOW_ALL);
        }
    }

    private initPlatform() {
        let self = this;
        App.PathManager.resourceUrl = ext.getResourceUrl();
        switch (ext.getPlatform()) {
            case "dev":
                self.runGame();
                break;
            default:
                self.runGame();
                break;
        }
    }

    /** 开始运行游戏 */
    private async runGame() {
        await this.loadResource();
        this.createGameScene();
    }

    /** 加载资源 */
    private async loadResource() {
        try {
            await this.loadGameComConfig();
            await RES.loadGroup("loading");
            let loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await this.loadConfigs();
            await this.loadTheme();
            await this.loadPreloadResource(loadingView);
            loadingView.removeChildren();
            this.stage.removeChild(loadingView);
            loadingView = null;
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadGameComConfig() {
        return new Promise((resolve, reject) => {
            App.ResUtil.addConfig(App.PathManager.GameCom_Path, App.PathManager.resourceUrl);
            App.ResUtil.loadConfig(() => {
                resolve();
            }, this);
        })
    }

    /** 加载配置文件 */
    private async loadConfigs() {
        return new Promise((resolve, reject) => {
            let configs: Array<string> = App.PathManager.ConfigUrls;
            for (let i: number = 0; i < configs.length; i++) {
                App.ResUtil.addConfig(configs[i], App.PathManager.resourceUrl);
            }
            App.ResUtil.loadConfig(() => {
                resolve();
            }, this);
        })
    }

    /** 加载前期资源 */
    private loadPreloadResource(loadingView: any) {
        return new Promise((resolve, reject) => {
            App.ResUtil.loadGroup(["preload"], () => {
                resolve();
            }, this, 0, loadingView);
        })
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme(App.PathManager.ThemePath, this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                GlobleData.Instance.setup();
                RES.getResByUrl(App.PathManager.language_path, (data: string, url: string) => {
                    App.LanguageManager.setup(data);
                    resolve();
                }, this, RES.ResourceItem.TYPE_TEXT);
            }, this);
        })
    }

    /** 创建场景界面 */
    protected createGameScene(): void {
        let self = this;
        App.Init();
        App.SceneManager.runScene(SceneConst.LOGIN);
    }
}
