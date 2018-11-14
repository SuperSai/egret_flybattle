/**
 * 翅膀组件
 */
class WingCom implements IComponent {
    public componentName: string = ComponentTypes.Wing;

    public wing: string = "";
    public onRemoved(): void {
        this.wing = "";
    }

    public static canAdd(vo: any): boolean {
        return vo.wing != "";
    }
}