class CommandQueue
{
	private _queue:Array<Command>;

	public constructor() {
		this._queue = new Array();
	}
	
	public add(command:Command):void
	{
		for(var i:number = 0; i < this._queue.length; i ++)
		{
			var c:Command = this._queue[i];
			if(c.connect(command))
			{
				return;
			}
			else if(c.canReplace(command))
			{
				command.prepare();
				this._queue[i] = command;
				return;
			}
		}
		this._queue.push(command);
		if(this._queue.length == 1)
		{
			command.prepare();
		}
	}
	
	public execute():void
	{
		if(this._queue.length > 0)
		{
			var c:Command = this._queue[0];
			if(!c.isFinished)
			{
				c.execute();
			}else
			{
				this._queue.shift();
				if(this._queue.length > 0)
					this._queue[0].prepare();
			}
		}
	}
	
	public traceAllRemainAction():void
	{
		for(let i:number = 0;i<this._queue.length;i++)
		{
			let actionClassName:String = egret.getQualifiedClassName(this._queue[i]);
			Log.trace("【Command】"+actionClassName);
		}
	}
	
	public get actionCount():number
	{
		return this._queue.length;
	}
	
	public executeAtOnce():void
	{
		for(let i:number = 0;i<this._queue.length;i++)
		{
			this._queue[i].executeAtOnce();
		}
	}
	
	public clear():void
	{
		for(let i:number = 0;i<this._queue.length;i++)
		{
			this._queue[i].cancel();
		}
		this._queue = [];
	}

}