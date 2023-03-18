// 加在更多

import { ComputedRef, Ref } from "nuxt/dist/app/compat/capi";

type Res = {
  list: any[];
  pageNation: Model.Global.Paging;
};

const useLoadMoreNoImmediate = async <T extends Res>(
  url: string,
  params: Ref<Object>
) => {
  const pageNumber = ref(0);
  const pageSize = ref(5);
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

  const res = await useRequest.get<T>(url, { params: p, immediate: false });

  watch(
    () => {
      return res.data.value?.data?.list;
    },
    (newData = []) => {
      if (newData.length === 0 || !newData) {
        finished.value = true;
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
    // setTimeout(() => {
    //   res.execute();
    // });
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

export default useLoadMoreNoImmediate;
