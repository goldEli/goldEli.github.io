declare namespace Model.MessageCenter {
  type Posts = Pick<Model.Posts.Info, "id" | "picture" | "name">;
  interface MyLikeListItem {
    id: string;
    user: Model.User.Info;
    yourComment?: string;
    postsInfo: Posts;
    isRead: boolean;
    time: string;
  }
  interface MyCommentListItem {
    id: string;
    user: Model.User.Info;
    yourComment: string;
    // 回复的评论
    comment?: string;
    postsInfo: Posts;
    isRead: boolean;
    time: string;
  }
  interface ReplyMyCommentListItem {
    id: string;
    user: Model.User.Info;
    yourComment: string;
    // 回复你的评论
    comment: string;
    postsInfo: Posts;
    isRead: boolean;
    time: string;
  }
}
