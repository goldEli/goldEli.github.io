import { MaybeRef } from "@vueuse/core";
import { Ref } from "nuxt/dist/app/compat/capi";
import urls from "~~/constants/urls";

export const doTranslate = (params: API.Translate.DoTranslate.Params) => {
  const res = request.put<API.Translate.DoTranslate.Result>(urls.doTranslate, {
    params,
  });

  return res;
};
