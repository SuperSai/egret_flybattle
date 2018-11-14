/**
 * 音效类
 */
class SoundEffects extends BaseSound {
	private _volume: number;

    /**
     * 构造函数
     */
	public constructor() {
		super();
	}

    /**
     * 播放一个音效
     */
	public play(effectId: number): void {
		let vo: SoundVO = GlobleData.getData(GlobleData.SoundVO, effectId);
		if (!vo) return;
		let sound: egret.Sound = this.getSound(vo);
		if (sound) {
			this.playSound(sound);
		}
	}

    /**
     * 播放
     */
	private playSound(sound: egret.Sound): void {
		let channel: egret.SoundChannel = sound.play(0, 1);
		channel.volume = this._volume;
	}

    /**
     * 设置音量
     */
	public setVolume(volume: number): void {
		this._volume = volume;
	}


    /**
     * 资源加载完成后处理播放
     */
	public loadedPlay(key: string): void {
		this.playSound(RES.getRes(key));
	}
}