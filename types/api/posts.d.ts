declare namespace API.Posts {
  export namespace GetPostsList {
    export type Params = {
      // 栏目id
      columnManagementId?: string;
      // 话题id
      topicId?: string;
      // 用户贴0 官帖 1
      isOfficial: 0 | 1;
      name?: string;
      // likesNumber 1createTime
      orderField?: "likesNumber" | "createTime";
      pageSize?: number;
      pageNumber?: number;
    };
    export type Result = {
      list: Model.Posts.Info[];
      pageNation: Model.Global.Paging;
    };
  }
  export namespace GetPostsListForChild {
    export type Params = {
      // 栏目id
      columnManagementId?: string;
    };
    export type Result = Model.Posts.Info[];
  }
  export namespace GetPostsInfo {
    export type Params = {
      postsId: string;
    };
    export type Result = {
      info: Model.Posts.Info;
    };
  }

  export namespace PostsOrCommentLike {
    export type Params = {
      commentId?: string;
      postsId: string;
    };
    export type Result = null;
  }
  //
  export namespace CreatePosts {
    export type Params = {
      // columnManagementId: string;
      content: string;
      name: string;
      postsUserPictureAddDtoList: {
        userPicture: string;
      }[];
      topicTagAddDtoList: Pick<
        Model.Topics.Info["subVo"],
        "topicTagId" | "topicTagType"
      >[];
    };
    export type Result = null;
  }

  export namespace PreUpload {
    export type Params = {
      fileName: string;
    };
    export type Result = {
      // 图片地址
      imageUrl: string;
      key: string;
      // 用于上传的地址
      url: string;
    };
  }
  //setAcl
  export namespace SetAcl {
    export type Params = {
      key: string;
    };
    export type Result = null;
  }
  export namespace DeletePosts {
    export type Params = {
      ids: string[];
    };
    export type Result = null;
  }

  export namespace GetPostsCarouselList {
    export type Params = {
      columnManagementId: string;
    };
    export type Result = {
      list: {
        // 活动结束时间
        activityEndTime: string;
        // 活动开始时间
        activityStartTime: string;
        // 轮播图片
        carouselPicture: string;
        // 栏目导航id
        columnManagementId: string;
        // 主键id
        id: string;
        // 	贴文id	integer(int64)	integer(int64)
        postsId: string;
        // 贴文名称
        postsName: string;
      }[];
    };
  }
}
