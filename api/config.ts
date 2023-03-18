import urls from "~~/constants/urls";

export const useGetConfig = () => {
  const res = useRequest.get<API.Config.GetConfig.Result>(urls.getConfig, {});

  return res;
};
