class RelativePosCom implements IComponent {
    public componentName: string = ComponentTypes.RelativePos;

    public relativeX:number = 0;
	public relativeY:number = 0;
	public relativeTarget:IEntity = null;

    public onRemoved(): void {
		this.relativeX = 0;
        this.relativeY = 0;
    }

    public onAdded(): void {
    }

	public static canAdd(vo: any): boolean {
        return true;
    }
}