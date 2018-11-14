/** 
 * 积分组件
 */
class IntegralCom {
	public componentName: string = ComponentTypes.Integral;
	public integral: number = 0;
	public type: number = 0;
	public id: number = 0;

	public onRemoved(): void {
		this.integral = 0;
		this.type = 0;
		this.id = 0;
	}

	public static canAdd(vo: any): boolean {
		return true;
	}
}