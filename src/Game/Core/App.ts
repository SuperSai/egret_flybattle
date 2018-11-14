/**
 * App初始化类 -- 管理各种单例类
 * @author weiqiang.huang
 */
class App {
	/** 注册控制器管理类 */
	public static get RegisterManager(): RegisterManager {
		return RegisterManager.Instance();
	}
	/** 语言包管理类 */
	public static get LanguageManager(): LanguageManager {
		return LanguageManager.Instance();
	}
	/** Effect工具类 */
	public static get EffectUtils(): EffectUtils {
		return EffectUtils.Instance();
	}
	/** 声音管理类 */
	public static get SoundManager(): SoundManager {
		return SoundManager.Instance();
	}
	/** 通过工具类 */
	public static get CommonUtils(): CommonUtils {
		return CommonUtils.Instance();
	}
	/** 设备工具类 */
	public static get DeviceUtils(): DeviceUtils {
		return DeviceUtils.Instance();
	}
	/** 数学计算工具类 */
	public static get MathUtils(): MathUtils {
		return MathUtils.Instance();
	}
	/** 统一的计时器和帧刷管理类 */
	public static get TimerManager(): TimerManager {
		return TimerManager.Instance();
	}
	/** 调试工具 */
	public static get DebugUtils(): DebugUtils {
		return DebugUtils.Instance();
	}
	/** 震动类 */
	public static get ShockUtils(): ShakeUtils {
		return ShakeUtils.Instance();
	}
	/** 显示对象工具类 */
	public static get DisplayUtils(): DisplayUtils {
		return DisplayUtils.Instance();
	}
	/** manager初始化类 */
	public static get GameEnterManager(): GameEnterManager {
		return GameEnterManager.Instance();
	}
	/** 渲染纹理管理类 */
	public static get RenderTextureManager(): RenderTextureManager {
		return RenderTextureManager.Instance();
	}
	/** 分帧处理类 */
	public static get DelayOptManager(): DelayOptManager {
		return DelayOptManager.Instance();
	}
	/** 龙骨管理类 */
	public static get BoneManager(): BoneManager {
		return BoneManager.Instance();
	}
	/** 引擎扩展类 */
	public static get EgretExpandUtils(): ExpandUtils {
		return ExpandUtils.Instance();
	}
	/** 资源加载类 */
	public static get ResUtil(): ResUtil {
		return ResUtil.Instance();
	}
	/** Stage操作相关工具类 */
	public static get StageUtils(): StageUtils {
		return StageUtils.Instance();
	}
	/** 层级管理类 */
	public static get LayerManager(): LayerManager {
		return LayerManager.Instance();
	}
	/** 对象池 */
	public static get ObjectPool(): ObjectPool {
		return ObjectPool.Instance();
	}
	/** 对象工具类 */
	public static get ObjectUtils(): ObjectUtils {
		return ObjectUtils.Instance();
	}
	/** 资源对象池 */
	public static get ResourcePool(): ResourcePool {
		return ResourcePool.Instance();
	}
	/** 大Loading */
	public static get BigLoading(): BigLoading {
		return BigLoading.Instance();
	}
	/** 模块管理类 */
	public static get ControllerManager(): ControllerManager {
		return ControllerManager.Instance();
	}
	/** View管理类 */
	public static get ViewManager(): ViewManager {
		return ViewManager.Instance();
	}
	/** 通用Loading动画 */
	public static get SmallLoading(): SmallLoading {
		return SmallLoading.Instance();
	}
	/** 场景管理类 */
	public static get SceneManager(): SceneManager {
		return SceneManager.Instance();
	}
	/** 人物信息管理类 */
	public static get PlayerInfoManager(): PlayerInfoManager {
		return PlayerInfoManager.Instance();
	}
	/** 提示信息类 */
	public static get MessageManger(): MessageManger {
		return MessageManger.Instance();
	}
	/** 红点管理类 */
	public static get RedPointManager(): RedPointManager {
		return RedPointManager.Instance();
	}
	/** 外部资源路径管理类 */
	public static get PathManager(): PathManager {
		return PathManager.Instance();
	}
	/** 角色管理类 */
	public static get HerosManager(): HerosManager {
		return HerosManager.Instance();
	}
	/** 战斗BUFF管理类 */
	public static get BuffManager(): BuffManager {
		return BuffManager.Instance();
	}
	/** 角色技能管理类 */
	public static get HeroSkillManager(): HeroSkillManager {
		return HeroSkillManager.Instance();
	}
	/** 时间工具类 */
	public static get TimeUtil(): TimeUtil {
		return TimeUtil.Instance();
	}

	/** 初始化函数 */
	public static Init(): void {
		//开启调试
		App.DebugUtils.isOpen(ext.getIsDebug());
		App.DebugUtils.setThreshold(5);
		//扩展功能初始化
		App.EgretExpandUtils.init();
		//注册
		App.RegisterManager.init();
		//音乐音效处理
		App.SoundManager.setBgOn(true);
		App.SoundManager.setEffectOn(true);
	}
}