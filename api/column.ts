// 栏目 GetColumnList

// import { Ref } from "nuxt/dist/app/compat/capi";
// import useNavigationBarStore from "~~/composables/useNavigationBarStore";
import { MaybeRef } from "@vueuse/core";
import { Ref } from "nuxt/dist/app/compat/capi";
import urls from "~~/constants/urls";

export const useColumnList = (
  params?: MaybeRef<API.Column.GetColumnList.Params>
) => {
  // const navigationBarStore = useNavigationBarStore();
  const p = computed<API.Column.GetColumnList.Params>(() => {
    return {
      // orderField: "sort",
      // orderType: "desc",
      ...params?.value,
    };
  });
  const res = useRequest.get<API.Column.GetColumnList.Result>(
    urls.getColumnList,
    { params: p }
  );

  return res;
};
