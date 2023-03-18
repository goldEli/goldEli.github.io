<script setup lang="ts">
import { Ref } from "nuxt/dist/app/compat/capi";

const { t } = useTranslate();
const tabsStore = useTabsStore();

const columnsListParams = computed<API.Column.GetColumnList.Params>(() => {
  return {
    parentId: tabsStore.tabActiveKey,
  };
});

const columnListRes = useApi().useColumn.useColumnList(columnsListParams);
const params = computed<API.Posts.GetPostsList.Params>(() => {
  return {
    columnManagementId: tabsStore.tabActiveKey ?? "",
    isOfficial: 1,
  };
});
const postsListRes = await useApi().usePosts.useGetPostsList(params);

const postsList = computed(() => postsListRes.list.value);

const loading = ref(false);
const onRefresh = () => {
  postsListRes.onReset();
  setTimeout(() => {
    loading.value = false;
  }, 0);
};

type Keys = Model.Column.Item["style"];
const info = ref([
  {
    key: 4,
    path: `/novice-guide`,
  },
  {
    key: 4,
    path: `/novice-guide`,
  },
  {
    key: 2,
    path: `/hero-list`,
  },
  {
    key: 3,
    path: `/event-promotion`,
  },
]);
const path = function (item: Model.Column.Item) {
  const url = `${info.value.find((i) => i.key === item.style)?.path}` ?? "";
  return url;
};
</script>

<template>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <LoadingPage :hide="!columnListRes.pending.value">
      <div :class="$style.strategy_wrap_classified">
        <GlassCard
          v-for="(item, index) in columnListRes.data.value?.data?.list"
          :key="item.id"
          :data="item"
          :path="path(item)"
        />
      </div>
    </LoadingPage>
    <Gap />
    <div :class="$style.inner_wrap">
      <div :class="$style.title">
        <span>{{ t("hotGuide") }}</span>
        <IconFont
          :class="$style.post_content_operation_item_icon"
          type="fire"
        />
      </div>

      <van-list
        :finished-text="t('noMore')"
        :finished="postsListRes.finished.value"
        @load="postsListRes.onNext"
        v-model:loading="postsListRes.res.pending.value"
      >
        <CardForSimple :key="i.id" v-for="i of postsList" :data="i" />
      </van-list>
    </div>
  </van-pull-refresh>
</template>

<style module lang="less">
.post_content_operation_item_icon {
  width: 20px;
  height: 20px;
  margin-right: 1px;
}
.title {
  height: 22px;
  display: flex;
  align-items: center;
  span {
    font-size: 16px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: bold;
    color: var(--theme-neutral-n1-323233);
  }
}
.inner_wrap {
  margin-top: 8px;
  box-sizing: border-box;
  padding: 16px;
  background-color: var(--theme-neutral-n8-FFFFFF);
}
.strategy_wrap_classified {
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  gap: 8px;
  background: var(--theme-neutral-n8-FFFFFF);
}
</style>
