import { defineStore } from "pinia";

type Id = Model.Column.Item["id"];
const useTabsStore = defineStore("tabStore", () => {
  const tabActiveKey = ref<Id>();
  const columnListRes = useApi().useColumn.useColumnList();
  const tabList = computed(() => {
    return columnListRes?.data?.value?.data?.list;
  });

  const tabActiveInfo = computed(() => {
    const current = columnListRes?.data?.value?.data?.list?.find(
      (item) => item.id === tabActiveKey.value
    );
    return current;
  });
  const onChangeTabActiveKey = (id: Id) => {
    tabActiveKey.value = id;
  };
  const success = computed(() => {
    return !!tabActiveInfo.value;
  });

  watchEffect(() => {
    const first = tabList.value?.[0];
    if (first) {
      setTimeout(() => {
        onChangeTabActiveKey(first.id);
      }, 0);
    }
  });

  return {
    tabActiveKey,
    onChangeTabActiveKey,
    tabList,
    tabActiveInfo,
    success,
  };
});
export default useTabsStore;
