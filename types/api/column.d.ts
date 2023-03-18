// 栏目
declare namespace API.Column {
  export namespace GetColumnList {
    // export type Params = {
    //   // 0 首页 1 社区
    //   // type: 0 | 1;
    //   parentId;
    // };
    export type Params = Optional<Pick<Model.Column.Item, "parentId">> & {
      orderField?: "sort";
      orderType?: "asc" | "desc";
    };
    export type Result = {
      list: Model.Column.Item[];
    };
  }
}
