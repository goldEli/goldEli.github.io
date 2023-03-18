declare namespace API.HotSearch {
  export namespace GetHotSearchList {
    export type Params = {
      pageSize?: number;
      pageNumber?: number;
    };
    export type Result = {
      list: { id: string; name: string }[];
    };
  }
  // updateHotSearch
  export namespace UpdateHotSearch {
    export type Params = {
      id: string;
    };
    export type Result = null;
  }
}
