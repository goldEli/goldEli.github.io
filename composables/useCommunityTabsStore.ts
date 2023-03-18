import { defineStore } from "pinia";
import { getHotTopics } from "~~/api/topics";

type Id = Model.Column.CommunityItem["id"];
const useCommunityTabsStore = defineStore("tabCommunityStore", () => {
  const { t } = useTranslate();
  // const columnListRes = useApi().useColumn.useColumnList();
  // const res = useGetHotTopics();
  const tabList = ref<Model.Column.CommunityItem[]>([
    {
      id: "communityHall",
      name: t("communityHall"),
      type: "communityHall",
    },
    {
      id: "essence",
      name: t("essence"),
      type: "essence",
    },
  ]);

  onMounted(async () => {
    const res = await getHotTopics();
    const list = res.data?.list;
    if (list?.length && list.length > 0) {
      const newList = list.map((item) => {
        return {
          id: item.subVo.topicTagId,
          name: item.subVo.name,
          type: "topics" as any,
        };
      });
      tabList.value.push(...newList);
    }
  });

  // watch(
  //   () => res.data.value?.data?.list,
  //   (list) => {
  //     if (list?.length && list.length > 0) {
  //       const newList = list.map((item) => {
  //         return {
  //           id: item.subVo.topicTagId,
  //           name: item.subVo.name,
  //           type: "topics" as any,
  //         };
  //       });
  //       tabList.value.push(...newList);
  //     }
  //   }
  // );

  const tabActiveKey = ref<Id>("communityHall");

  const tabActiveInfo = computed(() => {
    const current = tabList.value?.find(
      (item) => item.id === tabActiveKey.value
    );
    return current;
  });
  const onChangeTabActiveKey = (id: Id) => {
    tabActiveKey.value = id;
  };
  // const success = computed(() => {
  //   return !!tabActiveInfo.value;
  // });

  return {
    tabActiveKey,
    onChangeTabActiveKey,
    tabList,
    tabActiveInfo,
    // success,
  };
});
export default useCommunityTabsStore;
