/**
 * 角色技能管理类
 */
class HeroSkillManager extends BaseClass {

    /** 是否有蘑菇爆发 -- 蘑菇效果持续时间增加 */
    public isHaveMushroomTime: boolean = false;
    /** 蘑菇效果持续时间增加 */
    public mushroomTime: number = 0;
    /** 磁力爆发 -- 增加磁力道具持续时间*/
    public isHaveSnapeTime: boolean = false;
    /** 增加磁力道具持续时间 */
    public snapeTime: number = 0;
    /** 是否拥有磁力范围增加技能 */
    public isHaveSnapeRange: boolean = false;
    /** 磁力范围增加 */
    public snapeRange: number = 0;
    /** 杂兵杀手 -- 对杂兵造成的伤害增加 */
    public isHaveMonsterDamager: boolean = false;
    /** 对杂兵造成的伤害增加 */
    public monsterDamager: number = 0;
    /** 花之力 -- 冲锋花和万寿菊效果持续时间增加*/
    public isHaveFlowersSkill: boolean = false;
    /** 冲锋花和万寿菊效果持续时间增加 */
    public flowersNumber: number = 0;
    /** 金币分裂 -- 怪物有概率掉落额外一枚金币 */
    public isHaveDropGold: boolean = false;
    /** 怪物有概率掉落额外一枚金币 */
    public dropGoldNumber: number = 0;
    /** 是否拥有命运技能 */
    public isHaveImmuneSkill: boolean = false;
    /** 命运触发概率 */
    public immuneNumber: number = 0;

    public handlerHeroSkill(entity: IEntity): void {
        let self = this;
        let playerCom: PlayerCom = entity.getComponent(ComponentTypes.Player);
        if (playerCom && playerCom.heroInfo) {
            let skillList: number[] = App.HerosManager.getSkillListByStar(playerCom.heroInfo.configId, playerCom.heroInfo.star).skillIdList;
            if (skillList && skillList.length > 0) {
                for (let i: number = 0, len: number = skillList.length; i < len; i++) {
                    let skillVO: HeroSkillVO = GlobleData.getData(GlobleData.HeroSkillVO, skillList[i]);
                    switch (skillVO.skillType) {
                        case SKILL_TYPE.BULLET_UP://子弹等级
                            self.bulletLevelUp(entity, skillVO.param);
                            break;
                        case SKILL_TYPE.ADD_DAMAGE://冠军 -- 自身伤害增加
                            self.selfDamageAscension(entity, skillVO.param);
                            break;
                        case SKILL_TYPE.CAPTAIN://协同 -- 队长攻击力增加
                            self.captainDamageAscension(skillVO.param);
                            break;
                        case SKILL_TYPE.COMMAND://指挥 -- 队员攻击力增加 
                            self.teamMemberDamageAscension(skillVO.param);
                            break;
                        case SKILL_TYPE.BULLET_SPEED://速射 -- 子弹发射速度增加
                            playerCom.heroInfo.bulletAccSpeed = skillVO.param / 100;
                            break;
                        case SKILL_TYPE.BULLET_DOUBLE_DAMAGE://双重射击 -- 双倍伤害
                            playerCom.heroInfo.isHaveBulletDouble = true;
                            playerCom.heroInfo.bulletDoubleNum = skillVO.param;
                            break;
                        case SKILL_TYPE.MUSHROOM://蘑菇爆发 -- 蘑菇效果持续时间增加
                            self.isHaveMushroomTime = true;
                            self.mushroomTime += skillVO.param;
                            break;
                        case SKILL_TYPE.MAGNETIC_TIME://磁力爆发 -- 增加磁力道具持续时间
                            self.isHaveSnapeTime = true;
                            self.snapeTime += skillVO.param;
                            break;
                        case SKILL_TYPE.MAGNETIC://磁力 -- 增加40道具收集半径（初始为80）
                            self.isHaveSnapeRange = true;
                            self.snapeRange += skillVO.param;
                            break;
                        case SKILL_TYPE.BOSS_DAMAGE://首领杀手 -- 对首领造成的伤害增加
                            self.bossDamageAscension(entity, skillVO.param);
                            break;
                        case SKILL_TYPE.MONSTER_DAMAGE://杂兵杀手 -- 对杂兵造成的伤害增加
                            self.monsterDamageAscension(entity, skillVO.param);
                            break;
                        case SKILL_TYPE.DROP_GEM://宝石 -- 怪物掉落宝石概率
                            self.addGemDropProbability(skillVO.param);
                            break;
                        case SKILL_TYPE.PROP_BUFF_ADD://道具增加 -- 道具BUFF发现概率
                            self.addPropBuffProbability(skillVO.param);
                            break;
                        case SKILL_TYPE.FLOWERS://花之力 -- 冲锋花和万寿菊效果持续时间增加
                            self.isHaveFlowersSkill = true;
                            self.flowersNumber += skillVO.param;
                            break;
                        case SKILL_TYPE.DROP_GOLD://金币分裂 -- 怪物有概率掉落额外一枚金币
                            self.isHaveDropGold = true;
                            self.dropGoldNumber += skillVO.param;
                            break;
                        case SKILL_TYPE.TAKE_CHARGE://冲锋花 -- 发现冲锋花的概率
                            self.addTakeChargeDropProbability(skillVO.param);
                            break;
                        case SKILL_TYPE.DAMAGE_IMMUNE://命运 -- 受到攻击时有概率免疫本次伤害
                            self.isHaveImmuneSkill = true;
                            self.immuneNumber += skillVO.param;
                            break;
                        case SKILL_TYPE.MAGNETS://精灵 -- 每X秒丢出一个磁铁
                            playerCom.heroInfo.heroSkillVO = skillVO;
                            break;
                        case SKILL_TYPE.MARIGOLD://万寿菊 -- 有概率丢出一朵万寿菊，拾取后队长伤害提高，持续一段时间
                            playerCom.heroInfo.heroSkillVO = skillVO;
                            break;
                    }
                }
            }
        }
    }

    /** 子弹等级 */
    private bulletLevelUp(entity: IEntity, addLevel: number): void {
        let self = this;
        let playerCom: PlayerCom = entity.getComponent(ComponentTypes.Player);
        //子弹等级增加
        playerCom.heroInfo.level += addLevel;
        //根据最新的等级去查找子弹技能模板ID
        let bulletVO: BulletVO = App.HerosManager.getBulletSkillId(playerCom.heroInfo.heroVO.type, playerCom.heroInfo.level);
        playerCom.heroInfo.bulletVO = bulletVO;
        playerCom.heroInfo.bulletsSkill = App.HerosManager.getHeroBullets(playerCom.heroInfo.components, bulletVO.bullets);
        let skillGroupCom: BulletGroupCom = entity.getComponent(ComponentTypes.BulletGroup);
        if (skillGroupCom) {
            skillGroupCom.bullet = App.ObjectUtils.splitToNumber(bulletVO.id + "");
        }
    }

    /** 冠军 -- 自身伤害增加 */
    private selfDamageAscension(entity: IEntity, damage: number): void {
        let self = this;
        let damageCom: DamageCom = entity.getComponent(ComponentTypes.Damage);
        damageCom.damage = damageCom.damage + (damageCom.damage * (damage / 100));
    }

    /** 队长攻击力增加 */
    private captainDamageAscension(damage: number): void {
        let self = this;
        let damageCom: DamageCom = BattleManager.Instance.battleModel.captain.getComponent(ComponentTypes.Damage);
        damageCom.damage = damageCom.damage + (damageCom.damage * (damage / 100));
    }

    /** 队员攻击力增加 */
    private teamMemberDamageAscension(damage: number): void {
        let self = this;
        if (App.HerosManager.doubtfulInfo.leftPlayer != -1) {
            let damageCom: DamageCom = BattleManager.Instance.battleModel.leftPlayers.getComponent(ComponentTypes.Damage);
            damageCom.damage = damageCom.damage + (damageCom.damage * (damage / 100));
        }
        if (App.HerosManager.doubtfulInfo.rightPlayer != -1) {
            let damageCom: DamageCom = BattleManager.Instance.battleModel.rightPlayers.getComponent(ComponentTypes.Damage);
            damageCom.damage = damageCom.damage + (damageCom.damage * (damage / 100));
        }
    }

    /** 首领杀手 -- 对首领造成的伤害增加 */
    private bossDamageAscension(entity: IEntity, damage: number): void {
        let self = this;
        let playerCom: PlayerCom = entity.getComponent(ComponentTypes.Player);
        let damageCom: DamageCom = entity.getComponent(ComponentTypes.Damage);
        playerCom.heroInfo.bulletVO.isHaveBossDamageAscension = true;
        playerCom.heroInfo.bulletVO.damageAscension = (damageCom.damage * (damage / 100));
    }

    /** 杂兵杀手 -- 对杂兵造成的伤害增加 */
    private monsterDamageAscension(entity: IEntity, damage: number): void {
        let self = this;
        self.isHaveMonsterDamager = true;
        let damageCom: DamageCom = entity.getComponent(ComponentTypes.Damage);
        self.monsterDamager += (damageCom.damage * (damage / 100));
    }

    /** 增加宝石掉落概率的 */
    private addGemDropProbability(dropGemNumber: number): void {
        let self = this;
        if (!PropDropLogic.Instance.propDropList || PropDropLogic.Instance.propDropList.length < 1) return;
        for (let i: number = 0, len: number = PropDropLogic.Instance.propDropList.length; i < len; i++) {
            let item: AwardVO = PropDropLogic.Instance.propDropList[i];
            switch (item.itemId) {
                case ITEM_TYPE.RED_CRYSTAL:
                case ITEM_TYPE.PURPLE_CRYSTAL:
                case ITEM_TYPE.BLUE_CRYSTAL:
                    item.probability += item.probability + (item.probability * (dropGemNumber / 100));
                    break;
            }
        }
    }

    /** 增加道具BUFF掉落概率 */
    private addPropBuffProbability(dropPropBuffNumber: number): void {
        let self = this;
        if (!PropDropLogic.Instance.propDropList || PropDropLogic.Instance.propDropList.length < 1) return;
        for (let i: number = 0, len: number = PropDropLogic.Instance.propDropList.length; i < len; i++) {
            let item: AwardVO = PropDropLogic.Instance.propDropList[i];
            switch (item.itemId) {
                case ITEM_TYPE.CLOVER:
                case ITEM_TYPE.MUSHROOM:
                case ITEM_TYPE.MAGNET:
                case ITEM_TYPE.SPRINT:
                case ITEM_TYPE.MARIGOLD:
                    item.probability += item.probability + (item.probability * (dropPropBuffNumber / 100));
                    break;
            }
        }
    }

    /** 冲锋花 -- 发现冲锋花的概率 */
    private addTakeChargeDropProbability(value: number): void {
        let self = this;
        if (!PropDropLogic.Instance.propDropList || PropDropLogic.Instance.propDropList.length < 1) return;
        for (let i: number = 0, len: number = PropDropLogic.Instance.propDropList.length; i < len; i++) {
            let item: AwardVO = PropDropLogic.Instance.propDropList[i];
            if (item.itemId == ITEM_TYPE.SPRINT) {
                item.probability += item.probability + (item.probability * (value / 100));
                break;
            }
        }
    }

    /** 是否额外再掉落一个金币 */
    public isExtraDropGold(): boolean {
        let self = this;
        let ran: number = 100 * Math.random();
        return self.dropGoldNumber >= ran;
    }

    /** 是否免疫伤害 */
    public isImmuneDamager(): boolean {
        let self = this;
        let ran: number = 100 * Math.random();
        return self.immuneNumber >= ran;
    }

    public skillReset(): void {
        let self = this;
        self.isHaveMushroomTime = false;
        self.mushroomTime = 0;
        self.isHaveSnapeTime = false;
        self.snapeTime = 0;
        self.isHaveSnapeRange = false;
        self.snapeRange = 0;
        self.isHaveMonsterDamager = false;
        self.monsterDamager = 0;
        self.isHaveFlowersSkill = false;
        self.flowersNumber = 0;
        self.isHaveDropGold = false;
        self.dropGoldNumber = 0;
        self.isHaveImmuneSkill = false;
        self.immuneNumber = 0;
    }
}

enum SKILL_TYPE {
    /** 关卡内金币获取量增加N% */
    ADD_GOLD = 1,
    /** 每N秒丢出一个磁铁（吸引金币和道具） */
    MAGNETS,
    /** 作为主机出站时，死亡时有N%概率复活（每场战斗限1次） */
    REBIRTH,
    /** 子弹有N%概率冰冻敌人 */
    FROZEN,
    /** 对首领造成的伤害增加N% */
    BOSS_DAMAGE,
    /** 初始有概率子弹等级+N */
    BULLET_UP,
    /** 自身伤害增加N% */
    ADD_DAMAGE,
    /** 怪物有N%概率掉落额外一枚金币 */
    DROP_GOLD,
    /** 子弹发射速度增加N% */
    BULLET_SPEED,
    /** 子弹有N%概率造成双倍伤害 */
    BULLET_DOUBLE_DAMAGE,
    /** 花之力 冲锋花和万寿菊效果持续时间增加% */
    FLOWERS,
    /** 对杂兵造成的伤害增加N% */
    MONSTER_DAMAGE,
    /** 受到攻击时有N%概率免疫本次伤害 */
    DAMAGE_IMMUNE,
    /** 怪物掉落宝石概率+N% */
    DROP_GEM,
    /** 攻击自动导航攻击敌人，子弹造成N%伤害 */
    AUTO_ATTACK,
    /** 降低敌人20%速度，持续N秒 */
    SLOW_DOWN,
    /** 对被冰冻的敌人造成的伤害+N% */
    FROZEN_KILLER,
    /** 蘑菇效果持续时间增加N% */
    MUSHROOM,
    /** 增加N%的道具BUFF发现概率 */
    PROP_BUFF_ADD,
    /** 增加20道具收集半径（初始为80） */
    MAGNETIC,
    /** 增加磁力道具持续时间20% */
    MAGNETIC_TIME,
    /** 子弹有50%概率穿透敌人 */
    THROUGH,
    /** 发现冲锋花的概率+8% */
    TAKE_CHARGE,
    /** 攻击分裂成三股，每股35%伤害 */
    SPLIT,
    /** 队长攻击力增加20% */
    CAPTAIN,
    /** 队员攻击力增加15% */
    COMMAND,
    /** 战斗中有概率丢出一朵万寿菊，拾取后队长伤害提高35% */
    MARIGOLD,
}