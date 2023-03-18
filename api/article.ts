export const getHot = async (params: API.Article.HotArticle.Params) => {
  const res = useRequest.get<API.Article.HotArticle.Result>("/app/v1", {
    params,
  });
  return res;
};
