declare namespace Model.Posts {
  interface Info {
    id: string;
    // 栏目导航id
    columnManagementId: string;
    // 标题名称
    name: string;
    // 发帖类型 0 图文帖，1 视频帖，2 用户帖
    type: 0 | 1 | 2;
    picture?: string;
    viewsNumber: number;
    // 评论量
    commentsNumber: number;
    // likesNumber
    likesNumber: number;
    isLike: 0 | 1;
    isComments: 0 | 1;
    // 帖子
    content: string;
    // isOfficial   0用户 1官方
    // isOfficial: 0 | 1;
    createrId: string;
    // 	创建时间
    createTime: string;
    // 用户头像
    userAvatar: string;
    // 创建人名字
    createrName: string;
    // 视频地址
    videoUrl: string;
    // 帖文图片列表
    userPictureList: string[];
    // 话题列表
    tagVoList: {
      // 主键id
      id: string;
      // 帖子id
      postsId: string;
      // 话题/标签 id
      topicTagId: string;
      // 话题/标签 名称
      topicTagName: string;
      // 话题/标签 类型 0 话题 1 标签
      topicTagType: 0 | 1;
    }[];
    postsSubVo: {
      // 正文内容
      content: string;
      // 标题
      name: string;
      // 贴文管理id
      postId: string;
    };
  }
  interface Card {
    title: string;
    time: string;
    comment: string;
    img: string;
  }
}
