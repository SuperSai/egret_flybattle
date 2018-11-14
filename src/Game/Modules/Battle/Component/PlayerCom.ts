class PlayerCom implements IComponent {
    public componentName: string = ComponentTypes.Player;
    public playerType: number = 0;
    public heroInfo: HeroInfo = null;

    public onRemoved(): void {
        this.heroInfo = null;
    }

    public static canAdd(vo: any): boolean {
        return true;
    }
}