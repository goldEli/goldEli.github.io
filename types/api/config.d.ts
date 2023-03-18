declare namespace API.Config {
  type ListItem = {
    code: number;
    msg: string;
  };
  type ConfigItem = {
    name: string;
    list: ListItem[];
  };
  export namespace GetConfig {
    export type Params = {};
    export type Result = {
      heroQuality: ConfigItem;
      heroBuff: ConfigItem;
      heroType: ConfigItem;
      heroPosition: ConfigItem;
      heroAngerRecovery: ConfigItem;
      reportReason: ConfigItem;
    };
  }
}
