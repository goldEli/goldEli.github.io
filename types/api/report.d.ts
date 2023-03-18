declare namespace API.Report {
  export namespace DoReport {
    export type Params = {
      // 评论id
      commentId?: string;
      // 帖子
      postsId?: string;
      // 举报内容/理由id集合
      reasonIdList: number[];
      // 内容属性 0 帖子 1 评论
      type: 0 | 1;
    };
    export type Result = null;
  }
}
