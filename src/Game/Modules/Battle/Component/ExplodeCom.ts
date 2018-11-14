class ExplodeCom implements IComponent {
    public componentName: string = ComponentTypes.Explode;
    public bombAni: string = "";
    public boneAni: BoneAnimation;
    public explode: boolean = false;
    public dieSound: number = 0;

    public onRemoved(): void {
        this.explode = false;
        this.bombAni = "";
        this.boneAni = null;
        this.dieSound = 0;
    }

    public static canAdd(vo: any): boolean {
        return vo.bombAni != "";
        
    }
}