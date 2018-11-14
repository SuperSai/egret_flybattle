/**
 * 反射组件
 */
class ReflectCom implements IComponent {
    public componentName: string = ComponentTypes.Reflect;
    /** 反射的边缘类型数组 */
    public edgeTypes: number[] = null;
    public reflectSkill: number = 0;

    public onRemoved(): void {
        this.reflectSkill = 0;
        this.edgeTypes = null;
    }

    public static canAdd(vo: any): boolean {
        return vo.edgeTypes[0] != 0;
    }
}