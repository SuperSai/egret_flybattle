class SoundCom implements IComponent {

	public componentName: string = ComponentTypes.Sound;

	public startSound: number = 0;
	public dieSound: number = 0;

	public onRemoved(): void {
		if (this.dieSound != 0) App.SoundManager.playEffect(this.dieSound);
		this.startSound = 0;
		this.dieSound = 0;
	}

	public onAdded(): void {
		if (this.startSound != 0) App.SoundManager.playEffect(this.startSound);
	}

	public static canAdd(vo: any): boolean {
		return true;
	}
}