declare namespace API.Topics {
  export namespace GetHotTopics {
    export type Params = {
      // 栏目id
      // columnManagementId: string;
    };
    export type Result = {
      list: Model.Topics.Info[];
    };
  }
  export namespace GetTopicsInfo {
    export type Params = {
      id: string;
    };
    export type Result = {
      info: Model.Topics.Info;
    };
  }

  export namespace GetTopicsList {
    export type Params = {
      name?: string;
      pageSize?: number;
      pageNumber?: number;
    };
    export type Result = {
      list: Model.Topics.Info[];
      pageNation: Model.Global.Paging;
    };
  }
  export namespace GetTopicsListAll {
    export type Params = {};
    export type Result = {
      list: Model.Topics.Info[];
    };
  }
}
