<script setup lang="ts">
  const { t } = useTranslate();
const tabsStore = useTabsStore();

const params = computed<API.Posts.GetPostsList.Params>(() => {
  return {
    columnManagementId: tabsStore.tabActiveKey ?? "",
    isOfficial: 1,
  };
});
const postsListRes = await useApi().usePosts.useGetPostsList(params);

const postsList = computed(() => postsListRes.list.value);
</script>

<template>
  <van-list
    :finished-text="t('noMore')"
    :finished="postsListRes.finished.value"
    @load="postsListRes.onNext"
    v-model:loading="postsListRes.res.pending.value"
  >
    <Posts :key="i.id" v-for="i of postsList" :posts="i" />
  </van-list>
</template>

<style module lang="less">
.icon {
  width: 20px;
  height: 20px;
}
.content_wrap_first {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.content_wrap {
  margin-top: 8px;
  background-color: white;
  box-sizing: border-box;
  padding: 16px 0px;
}
</style>
