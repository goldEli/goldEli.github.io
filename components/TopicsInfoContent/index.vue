<script setup lang="ts">
import { useGetTopicsInfo } from "~~/api/topics";
import Info from "./Info.vue";
const { t } = useTranslate();

const route = useRoute();
const params = computed(() => {
  return {
    id: route.params.id as string,
  };
});
const res = useGetTopicsInfo(params);

const postsList = computed(() => postsListRes.list.value);

type Keys = API.Posts.GetPostsList.Params["orderField"];
const tabsInfo: { key: Keys; label: string }[] = [
  {
    key: "likesNumber",
    label: t("recommend"),
  },
  {
    key: "createTime",
    label: t("latest"),
  },
];
const tabsActiveKey = ref<Keys>("likesNumber");

const tabsStore = useTabsStore();
const postsListParams = computed<API.Posts.GetPostsList.Params>(() => {
  return {
    topicId: route.params.id as string,
    orderField: tabsActiveKey.value,
    isOfficial: 0,
  };
});
const postsListRes = await useApi().usePosts.useGetPostsList(postsListParams);

const onTabsActiveKey = (key: Keys) => {
  tabsActiveKey.value = key;
};

const loading = ref(false);
const onRefresh = () => {
  postsListRes.onReset();
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};
</script>

<template>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <div :class="$style.container">
      <Info :data="res.data.value?.data?.info" />
      <div :class="$style.gap"></div>
      <div :class="$style.box">
        <div :class="$style.actionArea">
          <div
            v-for="item in tabsInfo"
            @click="onTabsActiveKey(item.key)"
            :class="[
              $style.item,
              { [$style.active]: item.key === tabsActiveKey },
            ]"
          >
            {{ item.label }}
          </div>
        </div>
        <van-list
          :finished-text="t('noMore')"
          :finished="postsListRes.finished.value"
          @load="postsListRes.onNext"
          v-model:loading="postsListRes.res.pending.value"
        >
          <Posts :key="i.id" v-for="i of postsList" :posts="i" />
        </van-list>
      </div>
    </div>
  </van-pull-refresh>
</template>

<style module lang="less">
.container {
  background: var(--theme-neutral-n8-F8F9FA);
  width: 100%;
}
.gap {
  height: 8px;
}
.box {
  width: 100%;
  box-sizing: border-box;
  // background: var(--theme-neutral-n8-FFFFFF);
}
.actionArea {
  display: flex;
  gap: 8px;
  padding: 16px;
  border: 1px solid #f8f9fa;
  background-color: var(--theme-neutral-n8-FFFFFF);
  .item {
    border-radius: 20px;
    padding: 2px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    color: var(--theme-neutral-n2-646566);
    background: var(--theme-neutral-n8-FFFFFF);
  }
  & > .active {
    color: var(--theme-neutral-n8-FFFFFF);
    background: var(--theme-main-sub-gradient-fe5d5d);
  }
}
</style>
