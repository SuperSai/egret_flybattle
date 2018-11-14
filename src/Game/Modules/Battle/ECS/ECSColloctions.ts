class Systems {
    static MoveSystem: MoveSystem = new MoveSystem();
    static CheckCollisionSystem: CheckCollisionSystem = new CheckCollisionSystem();
    static HandleCollisionSystem: HandleCollisionSystem = new HandleCollisionSystem();
    static RenderSystem: RenderSystem = new RenderSystem();
    static AngleSystem: AngleSystem = new AngleSystem();
    static ExpireSystem: CheckInViewAreaSystem = new CheckInViewAreaSystem();
    static PlayerInputSystem: PlayerInputSystem = new PlayerInputSystem();
    static RotationSystem: RotationSystem = new RotationSystem();
    static SpeedSystem: SpeedSystem = new SpeedSystem();
    static MoveTargetSystem: MoveTargetSystem = new MoveTargetSystem();
    static MoveAISystem: MoveAISystem = new MoveAISystem();
    static ExplodeSystem: ExplodeSystem = new ExplodeSystem();
    static SkillGroupSystem: BulletGroupSystem = new BulletGroupSystem();
    static SkillSystem: BulletSystem = new BulletSystem();
    static SpawEntitySystem: SpawEntitySystem = new SpawEntitySystem();
    static BackgoundSystem: BackgoundSystem = new BackgoundSystem();
    static TakeDamageSystem: TakeDamageSystem = new TakeDamageSystem();
    static PhaseSystem: PhaseSystem = new PhaseSystem();
    static GuideSystem: GuideSystem = new GuideSystem();
    static RelativePosSystem: RelativePosSystem = new RelativePosSystem();
    static UpdateHpSystem: UpdateHpSystem = new UpdateHpSystem();
    static ReflectSystem: ReflectSystem = new ReflectSystem();
    static PropDropSystem: PropDropSystem = new PropDropSystem();
    static BuffSystem: BuffSystem = new BuffSystem();
    static SnapeSystem: SnapeSystem = new SnapeSystem();
    static SprintSystem: SprintSystem = new SprintSystem();

    static AllSystems: ISystem[] = [];
    static setup() {
        //这里的顺序是很重要的。。。要注意
        Systems.AllSystems.push(Systems.BackgoundSystem);
        Systems.AllSystems.push(Systems.SpawEntitySystem);

        Systems.AllSystems.push(Systems.PlayerInputSystem);
        Systems.AllSystems.push(Systems.MoveAISystem);
        Systems.AllSystems.push(Systems.GuideSystem);

        Systems.AllSystems.push(Systems.PhaseSystem);

        Systems.AllSystems.push(Systems.SkillGroupSystem);
        Systems.AllSystems.push(Systems.SkillSystem);

        Systems.AllSystems.push(Systems.SpeedSystem);
        Systems.AllSystems.push(Systems.AngleSystem);
        Systems.AllSystems.push(Systems.RotationSystem);

        Systems.AllSystems.push(Systems.MoveTargetSystem);
        Systems.AllSystems.push(Systems.MoveSystem);
        Systems.AllSystems.push(Systems.RelativePosSystem);
        Systems.AllSystems.push(Systems.ReflectSystem);

        Systems.AllSystems.push(Systems.CheckCollisionSystem);
        Systems.AllSystems.push(Systems.HandleCollisionSystem);
        Systems.AllSystems.push(Systems.TakeDamageSystem);
        Systems.AllSystems.push(Systems.UpdateHpSystem);
        Systems.AllSystems.push(Systems.PropDropSystem);
        Systems.AllSystems.push(Systems.BuffSystem);
        Systems.AllSystems.push(Systems.SnapeSystem);
        Systems.AllSystems.push(Systems.SprintSystem);

        Systems.AllSystems.push(Systems.ExpireSystem);
        Systems.AllSystems.push(Systems.ExplodeSystem);
        Systems.AllSystems.push(Systems.RenderSystem);
        Systems.PlayerInputSystem.initialize();
    }
}

class ComponentTypes {
    static Position: string = "PositionCom";
    static Angle: string = "AngleCom";
    static Speed: string = "SpeedCom";
    static Display: string = "DisplayCom";
    static Die: string = "DieCom";
    static Level: string = "LevelCom";
    static Rotation: string = "RotationCom";
    static NextPhase: string = "NextPhaseCom";
    static Expire: string = "ExpireCom";
    static Guide: string = "GuideCom";
    static Bounce: string = "BounceCom";
    static Explode: string = "ExplodeCom";
    static MoveAI: string = "MoveAICom";
    static MoveTarget: string = "MoveTargetCom";
    static Player: string = "PlayerCom";
    static Camp: string = "CampCom";
    static HP: string = "HPCom";
    static Damage: string = "DamageCom";
    static EntityType: string = "EntityTypeCom";
    static Bullet: string = "BulletCom";
    static BulletGroup: string = "BulletGroupCom";
    static Backgound: string = "BackgoundCom";
    static RelativePos: string = "RelativePosCom";
    static Wing: string = "WingCom";
    static Reflect: string = "ReflectCom";
    static Buff: string = "BuffCom";
    static Prop: string = "PropCom";
    static Integral: string = "IntegralCom";
    static Sound: string = "SoundCom";
    static Snape: string = "SnapeCom";
    static Sprint: string = "SprintCom";
}

class EntityTemplates {
    static BulletEntityTemplate: BulletEntityTemplate = new BulletEntityTemplate();
    static MonsterEntityTemplate: MonsterEntityTemplate = new MonsterEntityTemplate();
    static PlayerCraftEntityTemplate: PlayerCraftEntityTemplate = new PlayerCraftEntityTemplate();
    static LevelEntityTemplate: LevelEntityTemplate = new LevelEntityTemplate();
    static BackgounEntityTemplate: BackgounEntityTemplate = new BackgounEntityTemplate();
    static PropEntityTemplate: PropEntityTemplate = new PropEntityTemplate();

    public static getTemplateByType(type: number): IEntityTemplate {
        switch (type) {
            case EntityTypes.Entity_Player:
                return EntityTemplates.PlayerCraftEntityTemplate;
            case EntityTypes.Entity_Monster:
            case EntityTypes.Entity_Boss:
                return EntityTemplates.MonsterEntityTemplate;
            case EntityTypes.Entity_Bullt:
                return EntityTemplates.BulletEntityTemplate;
            case EntityTypes.Entity_Spawner:
                return EntityTemplates.LevelEntityTemplate;
            case EntityTypes.Entity_Backgound:
                return EntityTemplates.BackgounEntityTemplate;
            case EntityTypes.Entity_Prop:
                return EntityTemplates.PropEntityTemplate;
        }
    }

    public static getDataByEntityType(type: number, id: number): any {
        let vo: any;
        switch (type) {
            case EntityTypes.Entity_Bullt:
                vo = GlobleData.getData(GlobleData.BulletCellVO, id);
                break;
            case EntityTypes.Entity_Player:
            case EntityTypes.Entity_Monster:
            case EntityTypes.Entity_Boss:
                vo = GlobleData.getData(GlobleData.MonsterVO, id);
                break;
            case EntityTypes.Entity_Spawner:
                vo = GlobleData.getData(GlobleData.LevelVO, id);
                break;
            case EntityTypes.Entity_Backgound:
                vo = GlobleData.getData(GlobleData.LevelVO, id);
                break;
            case EntityTypes.Entity_Prop:
                vo = GlobleData.getData(GlobleData.PropVO, id);
                break;
        }
        return vo;
    }
}

class EntityTypes {
    public static Entity_Player: number = 0;
    public static Entity_Monster: number = 1;
    public static Entity_Bullt: number = 2;
    public static Entity_Boss: number = 3;
    public static Entity_Spawner: number = 4;
    public static Entity_Backgound: number = 5;
    public static Entity_Prop: number = 6;
}

class CampTypes {
    public static Camp_Self: number = 0;
    public static Camp_Enemy: number = 1;
}

class TargetTypes {
    public static NONE: number = -1;
    public static AllEntitys: number = 0;
    public static Monsters: number = 1;
    public static Players: number = 2;
    public static Enemys: number = 3;
    public static Allys: number = 4;
    public static Prop: number = 5;
}

class BornType {
    public static No_Entry: number = 0;
    public static BossEntry: number = 1;
}

class PhaseConditionType {
    public static HPPercent: number = 1;
    public static TimePass: number = 2;
    public static PlayerHPPercent: number = 3;
    public static ArrivePosition: number = 4;
}

class GuideType {
    public static NoGuide: number = 0;
    public static GuideXY: number = 1;
    public static GuideX: number = 2;
    public static GuideY: number = 3;
    public static Bounce: number = 4;
}

class MoveAIType {
    public static NO_AIMove: number = 0;
    public static RandomMove: number = 1;
    public static DownMove: number = 2;
    public static MoveLeftRight: number = 3;
    public static MoveTopBottom: number = 4;
    public static MoveToPlayer: number = 5;
    public static RadomToBottom: number = 6;
    public static RadomToTop: number = 7;
    public static RadomToBottomAndToTop: number = 8;
}

class AssetType {
    public static NO_Asset: number = 0;
    public static BulletBitmap: number = 1;
    public static BoneAnimation: number = 2;
    public static RoleAnimation: number = 3;
    public static UI_Asset: number = 4;
}

class ReflectEdgeType {
    public static No_Reflect: number = 0;
    public static Left: number = 1;
    public static Right: number = 2;
    public static Top: number = 3;
    public static Bottom: number = 4;
    public static Monster: number = 5;
}
/** 移动的状态 */
class MoveState {
    /** 默认 */
    public static Default: number = 0;
    /** 抛物 */
    public static Parabolic: number = 1;
}

enum BUFF_TYPE {
    /** 怪物掉落BUFF */
    BUFF_TYPE_1 = 103,
    /** 角色掉落BUFF */
    BUFF_TYPE_2 = 104,
}

enum BUFF_TARGET {
    PLAYER = 0,
    MONSTER = 1,
}

enum BUFF_ID {
    /** 四叶草 */
    BUFF_1 = 103001,
    /** 蘑菇 */
    BUFF_2 = 103002,
    /** 磁铁 */
    BUFF_3 = 103003,
    /** 冲刺 */
    BUFF_4 = 103004,
    /** 万寿菊 */
    BUFF_5 = 103005,
}


