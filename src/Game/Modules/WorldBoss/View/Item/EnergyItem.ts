/**
 * 能量
 */
class EnergyItem extends BaseItem {

	private iconImg: eui.Image;

	public constructor() {
		super(SkinName.EnergyItemSkin);
	}

	public setState(value: boolean): void {
		let self = this;
		if (value) {
			self.iconImg.source = "worldBoss_json.worldBoss_tili2";
		} else {
			self.iconImg.source = "worldBoss_json.worldBoss_tili1";
		}
	}
}