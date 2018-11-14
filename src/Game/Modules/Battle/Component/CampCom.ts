class CampCom implements IComponent {
	public componentName:string  = ComponentTypes.Camp;
	public camp:number = -1;

	public onRemoved(): void {
        this.camp = -1;
    }

    public static canAdd(vo: any): boolean {
        return true;
    }
}