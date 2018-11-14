class BulletGroupCom implements IComponent {
    public componentName: string = ComponentTypes.BulletGroup;
    public bullet: number[] = [];
    public bulletGaps: number[] = [];
    public useSkillTimeflag: number = -9999999;
    public nextSkillIndex: number = 0;

    public onRemoved(): void {
        this.bullet = [];
        this.bulletGaps = [];
        this.useSkillTimeflag = -9999999;
        this.nextSkillIndex = 0;
    }

    public static canAdd(vo: any): boolean {
        if (vo.bullet == null) return false;
        return vo.bullet.length != 0;

    }
}