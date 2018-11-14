class RoleAnimation extends egret.Sprite {

	private _boneAnimation: BoneAnimation;

	private _isAnimationOnceComplete: boolean;
	public get isAnimationOnceComplete(): boolean {
		return this._isAnimationOnceComplete;
	}

	public get boneAnimation(): BoneAnimation {
		return this._boneAnimation;
	}

	public set boneAnimation(value: BoneAnimation) {
		let self = this;
		self._boneAnimation = value;
	}

	public toWaitAnimation: boolean = true;

	public constructor(skename) {
		super();
		let self = this;
		self._boneAnimation = App.ResourcePool.pop(skename, ResourcePool.SKE);
		self._boneAnimation.removeAtLastFrame = false;
		self._boneAnimation.isPauseAtLastFrame = false;
		self._boneAnimation.currentAnimationName = AnimationTypes.WAIT;
		self._boneAnimation.playTimes = 0;
		self._boneAnimation.play();
		self.addChild(self._boneAnimation);
	}

	public playAnimationOnce(name: string): void {
		let self = this;
		self._isAnimationOnceComplete = false;
		self._boneAnimation.currentAnimationName = name;
		self._boneAnimation.playTimes = 1;
		self._boneAnimation.play();
		self._boneAnimation.addEventListener(BoneAnimation.LOOP_COMPLETE, self.onPlayActionComplete, self);
	}

	private onPlayActionComplete(): void {
		let self = this;
		self._isAnimationOnceComplete = true;
		self._boneAnimation.removeEventListener(BoneAnimation.LOOP_COMPLETE, self.onPlayActionComplete, self);
		if (this.toWaitAnimation) {
			self._boneAnimation.currentAnimationName = AnimationTypes.WAIT;
			self._boneAnimation.playTimes = 0;
			self._boneAnimation.play();
		}
	}

	public reset():void
	{
		App.ResourcePool.push(this._boneAnimation);
		this._boneAnimation = null;
		this.toWaitAnimation = true;
	}

	public dispose():void
	{

	}
}