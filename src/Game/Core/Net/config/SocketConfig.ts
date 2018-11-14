class SocketConfig {
	/** 是否是Debug模式 */
	public static DEBUG: boolean;
	/** IP地址 */
	public static IP: string = "";
	/** 端口号 */
	public static PORT: number;
	/** 头的最大长度 */
	public static HANDLER_MAX: number = 50;
	/** 加密的KEY */
	public static KEY: Array<number> = [0xae, 0xbf, 0x56, 0x78, 0xab, 0xcd, 0xef, 0xf1]

}