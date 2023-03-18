
declare namespace API.Lottery {
  export namespace GetLotteryList {
    export type Params = {
    };
    export type Result = {
        value: {
            list: Model.Lottery.Info[]
        }
    };
  }
}
