declare namespace API.Mine {
  export namespace History {
    export type Params = {
      id: string;
    };
    export type Result = {
      list: Model.Mine.History;
    };
  }
  export namespace GetUserLikesAndCreateStatistics {
    export type Params = {
      // id: string;
    };
    export type Result = {
      info: {
        id: string;
        userId: string;
        postsNums: number;
        likeNums: number;
      };
    };
  }
  export namespace GetMessageCenterList {
    export type Params = {
      // 类型 0 系统消息，1 点赞，2 评论，3@我的
      type: 0 | 1 | 2 | 3;
      pageSize?: number;
      pageNumber?: number;
    };
    export type Result = {
      list: Model.Message.Info[];
      pageNation: Model.Global.Paging;
    };
  }
  export namespace SetMessageRead {
    export type Params = {
      ids?: string[];
    };
    export type Result = null;
  }

  export namespace GetUnreadNumber {
    export type Params = {};
    export type Result = {
      info: {
        commentNums: number;
        likeNums: number;
        systemNums: number;
        toMeNums: number;
        systemMsgTime: string;
        systemMsgTitle: string;
      };
    };
  }
  // getUserInfo
  export namespace GetUserInfo {
    export type Params = {
      id: string;
    };
    export type Result = {
      info: Model.User.Info;
    };
  }
  // getMyPostsList
  export namespace GetMyPostsList {
    export type Params = {
      pageSize?: number;
      pageNumber?: number;
    };
    export type Result = {
      list: Model.Posts.Info[];
      pageNation: Model.Global.Paging;
    };
  }
  // getMyViewList
  export namespace GetMyViewList {
    export type Params = {
      pageSize?: number;
      pageNumber?: number;
    };
    export type Result = {
      list: Model.Posts.Info[];
      pageNation: Model.Global.Paging;
    };
  }
}
