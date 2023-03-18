import { Ref } from "nuxt/dist/app/compat/capi";
import urls from "~~/constants/urls";

export const useDoReport = (params: API.Report.DoReport.Params) => {
  const res = useRequest.put<API.Report.DoReport.Result>(urls.doReport, {
    params,
  });

  return res;
};
