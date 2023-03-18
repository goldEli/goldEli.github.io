declare namespace Model.Topics {
  interface Info {
    id: string;
    picture: string;
    heatValue: number;
    type: number;
    subVo: {
      // 话题描述	string
      description: string;
      // 主键id
      id: string;
      // 话题名称(H5使用)
      name: string;
      // 话题主表id
      topicTagId: string;
    };
  }
}
