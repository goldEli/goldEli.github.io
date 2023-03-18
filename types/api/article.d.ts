declare namespace API.Article {
  export namespace HotArticle {
    export type Params = {
      userId: string;
    };
    export type Result = {
      list: Model.Article.HotArticle[];
    };
  }
}
