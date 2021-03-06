/**
 * 背景音乐类
 */
class SoundBG extends BaseSound {
    private _currBg: string;
    private _currSound: egret.Sound;
    private _currSoundChannel: egret.SoundChannel;
    private _volume: number;

    /**
     * 构造函数
     */
    public constructor() {
        super();
        this._currBg = "";
    }

    /**
     * 停止当前音乐
     */
    public stop(): void {
        if (this._currSoundChannel) {
            this._currSoundChannel.stop();
        }
        this._currSoundChannel = null;
        this._currSound = null;
        this._currBg = "";
    }

    /**
     * 播放某个音乐
     */
    public play(effectName: number): void {
        let vo: SoundVO = GlobleData.getData(GlobleData.SoundVO, effectName);
        if (!vo || this._currBg == (App.PathManager.SoundPath + vo.file)) return;
        this.stop();
        this._currBg = App.PathManager.SoundPath + vo.file;
        var sound: egret.Sound = this.getSound(vo);
        if (sound) {
            this.playSound(sound);
        }
    }

    /**
     * 播放
     */
    private playSound(sound: egret.Sound): void {
        this._currSound = sound;
        this._currSoundChannel = this._currSound.play();
        this._currSoundChannel.volume = this._volume;
    }

    /**
     * 设置音量
     */
    public setVolume(volume: number): void {
        this._volume = volume;
        if (this._currSoundChannel) {
            this._currSoundChannel.volume = this._volume;
        }
    }

    /**
     * 资源加载完成后处理播放
     */
    public loadedPlay(key: string): void {
        if (this._currBg == key) {
            this.playSound(RES.getRes(key));
        }
    }

    /**
     * 检测一个文件是否要清除
     */
    public checkCanClear(key: string): boolean {
        return this._currBg != key;
    }
}