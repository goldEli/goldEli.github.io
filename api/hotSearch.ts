import { Ref } from "nuxt/dist/app/compat/capi";
import urls from "~~/constants/urls";

export const useGetHotSearchList = () => {
  const res = useRequest.get<API.HotSearch.GetHotSearchList.Result>(
    urls.getHotSearchList,
    {}
  );

  return res;
};

// UpdateHotSearch
export const useUpdateHotSearch = (
  params: API.HotSearch.UpdateHotSearch.Params
) => {
  const res = useRequest.put<API.HotSearch.UpdateHotSearch.Result>(
    urls.updateHotSearch(params.id),
    {}
  );

  return res;
};
