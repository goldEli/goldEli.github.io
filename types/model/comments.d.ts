declare namespace Model.Comments {
  // interface ReplyComment {
  //   id: string;
  //   replyName: string;
  //   content: string;
  //   time: string;
  // }
  type ReplyList = Comment[];
  interface Comment {
    // 头像
    createrAvatar: string;
    // 评论内容
    content: string;
    // 创建时间
    createTime: string;
    // 创建人id
    createrId: string;
    // 创建人名字
    createrName: string;
    // 主键id
    id: string;
    // 点赞量
    likesNumber: number;
    // 上级
    parentId: string;
    // 帖子id
    postsId: string;
    // 回复@的用户id
    replyUserId: string;
    // 回复@的用户名字
    replyUserName: string;
    // 编辑时间
    updateTime: string;
    // 编辑人id
    updaterId: string;
    // 编辑人名字
    updaterName: string;
    // 0用户 1官方
    isOfficial: 0 | 1;
    // 是否点赞
    isLike: 0 | 1;
    // 回复列表
    replyList: ReplyList;
    // 子评论条数
    childNumber: number;
  }
  type CommentList = Comment[];
}
