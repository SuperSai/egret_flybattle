class RenderSystem implements ISystem {
    public name: string = "RenderSystem";
    public excute(entity: IEntity): void {
        let displayCom: DisplayCom = entity.getComponent(ComponentTypes.Display);
        let position: PositionCom = entity.getComponent(ComponentTypes.Position);
        let rotation: RotationCom = entity.getComponent(ComponentTypes.Rotation);

        if (position) {
            for (let i: number = 0; i < displayCom.displays.length; i++) {
                let display: egret.DisplayObject = displayCom.displays[i];
                if (!display) continue;
                let offsetX: number = 0;
                let offsetY: number = 0;
                if (displayCom.assetOffset && displayCom.assetOffset[i]) {
                    offsetX = displayCom.assetOffset[i].x;
                    offsetY = displayCom.assetOffset[i].y;
                }
                display.x = position.point.x + offsetX;
                display.y = position.point.y + offsetY;
                if (rotation) {
                    display.rotation = rotation.rota + displayCom.additionalRotation;
                }
                if (display.stage == null) {
                    if (displayCom.addToBottom) {
                        World.Instance.addChildAt(display, 0);
                    } else {
                        World.Instance.addChildAt(display, i + 1);
                    }
                }
            }
        }
    }


    public getNeededComponents() {
        return [ComponentTypes.Display, ComponentTypes.Position];
    }
}