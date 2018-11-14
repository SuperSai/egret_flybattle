import IAnimatable = dragonBones.IAnimatable;

class BoneManager extends BaseClass {

	public factory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;

	public constructor() { super(); }

	public test_showBone(resId: string) {
		let testBone: BoneAnimation = App.ResourcePool.pop(resId, ResourcePool.SKE);
		App.DisplayUtils.addToStageCenter(testBone, true);
		testBone.playTimes = 0;
		testBone.removeAtLastFrame = false;
		testBone.play();
	}

	public start(): void {
		App.StageUtils.stage.addEventListener(egret.Event.ENTER_FRAME, this.onUpdate, this);
	}

	public stop() {
		App.StageUtils.stage.removeEventListener(egret.Event.ENTER_FRAME, this.onUpdate, this);
	}

	private onUpdate(event: Event): void {
		this.factory.clock.advanceTime(-1);
	}

	public getArmature(path: string): dragonBones.Armature {
		if (this.factory.getDragonBonesData(path) == null) {
			let ske = this.getSkeData(path);
			let textureData = this.getTextureData(path);
			let texture = this.getTexture(path);
			this.factory.parseDragonBonesData(ske);
			this.factory.parseTextureAtlasData(textureData, texture);
		}
		return this.factory.buildArmature(path);
	}

	private getSkeData(path: string): any {
		return RES.getRes(path + BoneConfig.SKE_END_TAG);
	}
	private getTextureData(path: string): any {
		return RES.getRes(path + BoneConfig.TEXTUREDATA_END_TAG);
	}
	private getTexture(path: string): any {
		return RES.getRes(path + BoneConfig.TEXTURE_END_TAG);
	}
}