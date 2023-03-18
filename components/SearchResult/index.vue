<script setup lang="ts">
const { t } = useTranslate();
interface Props {
  searchName: string;
}
const props = withDefaults(defineProps<Props>(), {});
type Key = API.Posts.GetPostsList.Params["isOfficial"];
const tabsInfo: {
  key: Key;
  name: string;
}[] = [
  {
    key: 1,
    name: t("popularConsultation"),
  },
  {
    key: 0,
    name: t("communityPost"),
  },
];
const tabsActiveKey = ref<Key>(tabsInfo[0].key);
const onTabsActiveKey = (key: Key) => {
  tabsActiveKey.value = key;
};
const params = computed<API.Posts.GetPostsList.Params>(() => {
  return {
    isOfficial: tabsActiveKey.value,
    name: props.searchName,
  };
});
const postsListRes = await useApi().usePosts.useGetPostsList(params);

const postsList = computed(() => postsListRes.list.value);
const noData = computed(() => postsList.value.length === 0);
</script>

<template>
  <div :class="$style.history">
    <span :class="$style.title">{{ t("searchResult") }}</span>
    <div :class="$style.screen">
      <span
        :class="[
          $style.screen_item,
          {
            [$style.screen_item_active]: item.key === tabsActiveKey,
          },
        ]"
        @click="onTabsActiveKey(item.key)"
        v-for="item in tabsInfo"
        :key="item.key"
        >{{ item.name }}</span
      >
    </div>
    <SearchEmpty :search-name="searchName" :no-data="noData">
      <div :class="$style.screen_list">
        <van-list
          :finished-text="t('noMore')"
          :finished="postsListRes.finished.value"
          @load="postsListRes.onNext"
          v-model:loading="postsListRes.res.pending.value"
        >
          <CardForSimpleHighLight
            :key="i.id"
            v-for="i of postsList"
            :data="i"
            :search-name="searchName"
          />
        </van-list>
      </div>
    </SearchEmpty>
  </div>
</template>

<style module lang="less">
.screen_item {
  margin-right: 8px;
  padding: 2px 8px;
  height: 20px;
  border-radius: 20px 20px 20px 20px;
  font-size: 12px;
  font-family: PingFang SC-Regular, PingFang SC;
}
.screen_item_active {
  background: var(--theme-main-sub-gradient-fe5d5d);
  color: var(--theme-neutral-n8-FFFFFF);
}
.screen {
  padding: 16px 0;
  color: var(--theme-neutral-n2-646566);
}
.empty {
  height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.item_card {
  background-color: var(--theme-neutral-n4-bbbdbf);
  font-size: 13px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: #323233;
  line-height: 18px;
  padding: 3px 8px;
  border-radius: 4px 4px 4px 4px;
}
.history_bottom {
  padding: 16px 0;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.title {
  font-size: 16px;
  font-family: PingFang SC-Medium, PingFang SC;
  font-weight: bold;
  color: #323233;
}
.post_content_operation_item_icon {
  width: 15px;
  height: 17px;
  margin-right: 1px;
  color: var(--theme-neutral-n3-969799);
}
.history,
.hot_search {
  box-sizing: border-box;
  padding: 16px;
  background-color: var(--theme-neutral-n8-FFFFFF);
}
.history_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
