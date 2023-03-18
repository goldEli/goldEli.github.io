declare namespace Model.Message {
  interface Info {
    // 评论id
    commentId: string;
    // 回复内容（评论、@）
    content: string;
    // 创建时间
    createTime: string;
    //主键id
    id: string;
    // 消息类型(赞)： 0帖子，1评论
    messageType: 0 | 1;
    // 帖子id
    postsId: string;
    // 帖子封面图
    postsLogo: string;
    //帖子名称
    postsName: string;
    // 状态：0未读，1已读
    status: 0 | 1;
    // 类型 0 系统消息，1 点赞，2 评论，3@我的
    type: 0 | 1 | 2;
    // 用户头像
    userAvatar: string;
    // 用户id
    userId: string;
    // 用户名称
    userName: string;
  }
}
