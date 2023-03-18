declare namespace API.Translate {
  export namespace DoTranslate {
    export type Params = {
      sourceLang: string;
      targetLang: Language;
      content: string;
    };
    export type Result = {
      code: 0;
      content: string;
    };
  }
}
