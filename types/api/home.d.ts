declare namespace API.Home {
  export namespace Posts {
    export type Params = {
      userId: string;
    };
    export type Result = {
      list: Model.Mine.History;
    };
  }

  export namespace InformationResult {
    export type Result = {
      list: Model.Home.Stick[];
    };
  }
  export namespace GetPostsTop {
    export type Params = {
      columnManagementId: string;
    };
    export type Result = {
      list: Model.Posts.Info[];
    };
  }
}
