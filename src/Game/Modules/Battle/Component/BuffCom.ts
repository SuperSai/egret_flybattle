class BuffCom {
	public componentName: string = ComponentTypes.Buff;

	public id: number = -1;
	public target: number = -1;
	public buffVO: BuffVO = null;
	public perform: boolean = false;

	public onRemoved(): void {
		this.id = -1;
		this.target = -1;
		this.buffVO = null;
		this.perform = false;
	}

	public onAdded(): void {
		this.buffVO = GlobleData.getData(GlobleData.BuffVO, this.id);
		if (!this.buffVO) {
			Log.trace("找不到BufffID：" + this.id);
			return;
		}
		App.SoundManager.playEffect(this.buffVO.startSound);
	}

	public static canAdd(vo: any): boolean {
		return true;
	}
}