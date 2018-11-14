class EntityTypeCom {
	public componentName:string  = ComponentTypes.EntityType;
	public type:number = 0;

	public onRemoved(): void {
        this.type = 0;
    }

    public static canAdd(vo: any): boolean {
        return true;
    }
}