class Command
{
	protected _isFinished:Boolean;
	
	public  Command()
	{
		this._isFinished = false;
	}
	
	public  connect(action:Command):Boolean
	{
		return false;
	}
	
	public  canReplace(action:Command):Boolean
	{
		return false;
	}
	
	public  get isFinished():Boolean
	{
		return this._isFinished;
	}
	
	protected _isPrepare:Boolean;
	public  prepare():void
	{
		if(this._isPrepare) return;
		this._isPrepare = true;
	}
			
	public execute():void
	{
		this.executeAtOnce();
		this._isFinished = true;
	}
	
	public executeAtOnce():void
	{
		this.prepare();
		this._isFinished = true;
	}
	
	public cancel():void
	{
	}
	
}