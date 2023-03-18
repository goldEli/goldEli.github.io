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
    <div :class="$style.swiper_area">
      <HomeSwiper />
      <HomeTopArea />
      <van-list
        :finished-text="t('noMore')"
        :finished="postsListRes.finished.value"
        @load="postsListRes.onNext"
        v-model:loading="postsListRes.res.pending.value"
      >
        <Posts :key="i.id" v-for="i of postsList" :posts="i" />
      </van-list>
    </div>
  </van-pull-refresh>
</template>

<style module lang="less">
.swiper_area {
  padding: 0 0 16px;
  box-sizing: border-box;
  background: #f8f9fa;
}
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
