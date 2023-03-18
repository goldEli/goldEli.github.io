// 加在更多

import { ComputedRef, Ref } from "nuxt/dist/app/compat/capi";

type Res = {
  list: any[];
  pageNation: Model.Global.Paging;
};

const useLoadMore = async <T extends Res>(
  url: string,
  params?: Ref<Object>
) => {
  const pageNumber = ref(1);
  const pageSize = ref(10);
  const list = ref<T["list"]>([]);
  const finished = ref(false);

  const p = computed(() => {
    return {
      ...params?.value,
      pageNumber: pageNumber.value,
      pageSize: pageSize.value,
    };
  });

  watch(
    () => params?.value,
    () => {
      pageNumber.value = 1;
    }
  );


  const res = await useRequest.get<T>(url, { params: p });

  watch(
    () => {
      return res.data.value?.data?.list;
    },
    (newData = []) => {
      if (newData.length === 0 || !newData) {
        finished.value = true;
        // 如果第一页没数据将原有数据置空
        if (pageNumber.value === 1) {
          list.value = [];
        }
        return;
      }

      finished.value = false;
      if (pageNumber.value === 1) {
        list.value = res.data.value?.data?.list;
        return;
      }
      list.value.push(...newData);
    },
    { immediate: true }
  );
  // watchEffect(() => {
  //   const newData = res.data.value?.data?.list ?? [];
  // });

  const onNext = () => {
    pageNumber.value = pageNumber.value + 1;
  };

  const onReset = () => {
    if (pageNumber.value === 1) {
      res.refresh();
      return;
    }
    pageNumber.value = 1;
  };

  return {
    onNext,
    onReset,
    finished,
    list,
    res,
  };
};

export default useLoadMore;
