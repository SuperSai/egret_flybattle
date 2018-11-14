class DamageCom {
	public componentName:string  = ComponentTypes.Damage;
	public damage:number = 0;

	public onRemoved(): void {
        this.damage = 0;
    }

    public static canAdd(vo: any): boolean {
        return vo.damage > 0;
        
    }
}