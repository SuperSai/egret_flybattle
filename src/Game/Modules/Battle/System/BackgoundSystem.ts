class BackgoundSystem implements ISystem {
	public name:string = "BackgoundSystem";

    public excute(entity:IEntity) {
		let displayCom:DisplayCom = entity.getComponent(ComponentTypes.Display);
		let backgoundCom:BackgoundCom = entity.getComponent(ComponentTypes.Backgound);

		for (let i: number = 0; i < backgoundCom.rowCount; i++) {
            const bgBmp: egret.Bitmap = backgoundCom.bitmaps[i];
            if(bgBmp == null)return;
            bgBmp.y += BattleConfig.BackgoundSpeed;
            if (bgBmp.y > World.Instance.worldRect.height) {
                bgBmp.y = backgoundCom.bitmaps[0].y - BattleConfig.BackgoundHeight;
                backgoundCom.bitmaps.pop();
                backgoundCom.bitmaps.unshift(bgBmp);
            }
        }
        displayCom.addDisplay(backgoundCom.displayContainer,0,AssetType.UI_Asset);
	}

	public getNeededComponents(): string[] {
        return [ComponentTypes.Display,ComponentTypes.Backgound];
    }
}