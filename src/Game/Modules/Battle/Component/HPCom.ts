class HPCom {
    public componentName: string = ComponentTypes.HP;
    public hp: number = -1;
    public damageTemp: number = 0;
    public totalHp: number = 0;
    public invincible: boolean = false;

    public onRemoved(): void {
        this.hp = -1;
        this.damageTemp = 0;
        this.totalHp = 0;
        this.invincible = false;
    }

    public onAdded(): void {
        this.totalHp = this.hp;
    }

    public static canAdd(vo: any): boolean {
        return true;
    }
}