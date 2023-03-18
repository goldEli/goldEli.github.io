declare namespace API.Hero {
  export namespace GetHeroList {
    export type Params = {};
    export type Result = {
      list: {
        id: string;
        name: string;
        list: Model.Hero.InfoAbbr[];
      }[];
    };
  }
  export namespace GetHeroInfo {
    export type Params = {
      // id
      id: string;
    };
    export type Result = {
      info: Model.Hero.Info;
    };
  }
}
