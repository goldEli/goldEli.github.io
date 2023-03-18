declare namespace Model.Hero {
  interface HeroTroopSkill {
    // 英雄sub id
    heroSubId: number;
    // 主键id
    id: string;
    //带兵技能名称
    name: string;
    //数值内容
    number: string;
  }
  interface HeroSkill {
    // 怒气需求
    angerNeeds: string;
    // 英雄sub id
    heroSubId: string;

    id: string;
    // 技能名称
    name: string;
    // 技能效果（觉醒）
    skillAwakening: string;
    //技能图标（觉醒）
    skillAwakeningIcon: string;
    // 技能效果（未觉醒）
    skillEffect: string;
    //技能图标（未觉醒）
    skillEffectIcon: string;
    // 技能类型 0 主动 1 被动
    type: 0 | 1;
  }
  type InfoAbbr = Pick<Info, "id" | "name" | "avatar" | "arms" | "quality">;
  interface Info {
    // 初始怒气
    angerInit: number;
    // 怒气恢复 0 快速 1 普通 2 慢速
    angerRecovery: 0 | 1 | 2;
    angerRecoveryName: string;
    // 兵种类型 0 保镖 1 杀手 2 抢手 3 飞车党
    arms: 0 | 1 | 2;
    // 兵种类型-名称
    armsName: string;
    // 攻击距离
    attackDistance: number;
    // 攻击频率
    attackFrequency: string;
    // 英雄头像
    avatar: string;
    // 背景介绍
    bgIntroduce: string;
    // 增益属性 0 攻城 1 机动 2 征收 3 制暴 4 驻防
    buff: 0 | 1 | 2 | 3 | 4;
    // 增益属性-名称
    buffName: string;
    // 初始战力值
    combatPowerValue: number;
    // 拥护者数量
    fansNumber: number;
    // 技能说明
    heroSkillList: Optional<HeroSkill>[];
    // 带兵技能->所率领杀手行军速度
    heroTroopSkillList: Optional<HeroTroopSkill>[];
    id: string;
    //英雄名称
    name: string;
    //英雄外号
    nickname: string;
    //角色定位 0 辅助 1 输出 2 坦克 3 治疗
    position: 0 | 1 | 2 | 3;
    //角色定位-名称
    positionName: string;
    //角色海报
    poster: string;
    //英雄品质 0 传说 1 史诗 2 精良
    quality: number;
    //	英雄品质-名称
    qualityName: string;
    //部队容量
    troopCapacity: number;
  }
}
