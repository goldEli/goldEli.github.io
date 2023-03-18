declare namespace Model.Column {
  interface Item {
    icon: string;
    // 主键id
    id: string;
    // 层级
    level: number;
    // 栏目名称
    name: string;
    // 上级id
    parentId: string;
    // 样式选择 0 轮播 1 子级 2 英雄 3 活动 4其他（待定）
    style: 0 | 1 | 2 | 3 | 4;
    // 0 首页 1 社区
    // type: 0 | 1;
    // children?: Item[];
    sort: number;
  }

  interface CommunityItem {
    // 主键id
    id: string;
    // 栏目名称
    name: string;
    // 'communityHall' 社区大厅 | 'essence' 精华内容  | 'topics' 话题
    type: "communityHall" | "essence" | "topics";
  }
}
