import { Ref } from "nuxt/dist/app/compat/capi";
import urls from "~~/constants/urls";

export const useHistory = (params: API.Mine.History.Params) => {
  const res = useRequest.get<API.Mine.History.Result>(urls.getPostsList, {
    params,
  });

  return res;
};

// GetUserLikesAndCreateStatistics
export const useGetUserLikesAndCreateStatistics = (
  params?: API.Mine.GetUserLikesAndCreateStatistics.Params
) => {
  const res = useRequest.get<API.Mine.GetUserLikesAndCreateStatistics.Result>(
    urls.getUserLikesAndCreateStatistics,
    {
      params,
    }
  );

  return res;
};

// getMessageCenterList
export const useGetMessageCenterList = (
  params: Ref<API.Mine.GetMessageCenterList.Params>
) => {
  const res = useLoadMore<API.Mine.GetMessageCenterList.Result>(
    urls.getMessageCenterList,
    params
  );

  return res;
};

// SetMessageRead

export const useSetMessageRead = (params: API.Mine.SetMessageRead.Params) => {
  const res = useRequest.put<API.Mine.SetMessageRead.Result>(
    urls.setMessageRead,
    {
      params,
    }
  );

  return res;
};

export const useGetUnreadNumber = (
  params?: API.Mine.GetUnreadNumber.Params
) => {
  const res = useRequest.get<API.Mine.GetUnreadNumber.Result>(
    urls.getUnreadNumber,
    {
      params,
    }
  );

  return res;
};

// GetUserInfo
export const useGetUserInfo = (params?: Ref<API.Mine.GetUserInfo.Params>) => {
  const res = useRequest.get<API.Mine.GetUserInfo.Result>(urls.getUserInfo, {
    params,
  });

  return res;
};

export const useGetMyPostsList = (
  params?: Ref<API.Mine.GetMyPostsList.Params>
) => {
  const res = useLoadMore<API.Mine.GetMyPostsList.Result>(
    urls.getMyPostsList,
    params
  );

  return res;
};

export const useGetMyViewList = (
  params?: Ref<API.Mine.GetMyViewList.Params>
) => {
  const res = useLoadMore<API.Mine.GetMyViewList.Result>(
    urls.getMyViewList,
    params
  );

  return res;
};
