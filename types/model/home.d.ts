declare namespace Model.Home {
  type Post = Model.Posts.Info;

  type Report = {
    id: string;
    text: string;
  };

  type TranslationContent = {
    id: string;
    title: string;
    description: string;
  };
  //置顶区展示内容
  type Stick = {
    id: string;
    type: string;
    name: string;
  };
}
