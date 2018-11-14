/**
 * 玩家信息
 */
class PlayerInfo {
	/** 游戏唯一ID */
	public openId: number = 0;
	/** 角色唯一ID */
	public playerId: number = 0;
	/** 用户名 */
	public userName: string = "";
	/** 昵称 */
	public nickName: string = "";
	/** 头像URL */
	public headPic: string = "";
	/** 关卡ID */
	public missionId: number = 0;
	/** 微信场景值 */
	public wxScene: number = 0;
	public wxUserInfo: any;
	public wxUnionData: any = {};
	public hgameInfo: any = {};
	public shareData: string = "";
}