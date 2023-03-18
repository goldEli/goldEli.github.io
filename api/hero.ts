import { Ref } from "nuxt/dist/app/compat/capi";
import urls from "~~/constants/urls";

export const useGetHeroList = () => {
  const res = useRequest.get<API.Hero.GetHeroList.Result>(urls.getHeroList, {});

  return res;
};

export const useGetHeroInfo = (params: Ref<API.Hero.GetHeroInfo.Params>) => {
  const res = useRequest.get<API.Hero.GetHeroInfo.Result>(urls.getHeroInfo, {
    params,
  });

  return res;
};
