import { ComputedRef, Ref } from "nuxt/dist/app/compat/capi";
import urls from "~~/constants/urls";

export const useGetHotTopics = () => {
  // const tabsStore = useTabsStore();
  // const params = computed(() => {
  //   return {
  //     type: tabsStore.tabActiveKey,
  //   };
  // });
  const res = useRequest.get<API.Topics.GetHotTopics.Result>(
    urls.getHotTopics,
    {
      // params,
    }
  );

  return res;
};

export const getHotTopics = () => {
  // const tabsStore = useTabsStore();
  // const params = computed(() => {
  //   return {
  //     type: tabsStore.tabActiveKey,
  //   };
  // });
  const res = request.get<API.Topics.GetHotTopics.Result>(
    urls.getHotTopics,
    {
      // params,
    }
  );

  return res;
};

export const useGetTopicsInfo = (
  params: Ref<API.Topics.GetTopicsInfo.Params>
) => {
  const res = useRequest.get<API.Topics.GetTopicsInfo.Result>(
    urls.getTopicsInfo,
    {
      params,
    }
  );

  return res;
};

export const useGetTopicsList = (
  params: Ref<API.Topics.GetTopicsList.Params>
) => {
  const res = useLoadMore<API.Topics.GetTopicsList.Result>(
    urls.getTopicsList,
    params
  );

  return res;
};

export const useGetTopicsListAll = () => {
  const res = useRequest.get<API.Topics.GetTopicsListAll.Result>(
    urls.getTopicsListAll,
    {}
  );

  return res;
};
