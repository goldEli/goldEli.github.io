declare namespace API.Comments {
  export namespace GetCommentChildNumber {
    export type Params = {
      commentId: string;
    };
    export type Result = {
      info: number;
    };
  }
  export namespace GetCommentsList {
    export type Params = {
      // 0：推荐，1：最新；
      sortLevel?: 0 | 1;
      // 帖子内容id
      postsId: string;
      pageSize?: number;
      pageNumber?: number;
      parentId?: string;
    };
    export type Result = {
      list: Model.Comments.CommentList;
      pageNation: Model.Global.Paging;
    };
  }

  export namespace SaveComment {
    export type Params = {
      postsId: string;
      commentId?: string;
      content: string;
      // 评论类型：0帖子，1评论，2@评论
      type: 0 | 1 | 2;
    };
    export type Result = null;
  }
}
