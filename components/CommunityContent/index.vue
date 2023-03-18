<script setup lang="ts">
import { storeToRefs } from "pinia";

const { t } = useTranslate();
useTitle(t("theGamingCommunity"));
const communityTabsStore = useCommunityTabsStore();
const { tabActiveInfo } = storeToRefs(communityTabsStore);
const params = computed<API.Posts.GetPostsList.Params>(() => {
  const base = {
    isOfficial: 0,
  } as API.Posts.GetPostsList.Params;
  if (tabActiveInfo.value?.type === "communityHall") {
    return {
      ...base,
    };
  }
  if (tabActiveInfo.value?.type === "essence") {
    return {
      isEssence: 1,
      ...base,
    };
  }
  return {
    topicId: tabActiveInfo.value?.id ?? "",
    ...base,
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
      <PopularStrategy />
      <van-list
        :finished-text="t('noMore')"
        :finished="postsListRes.finished.value"
        @load="postsListRes.onNext"
        v-model:loading="postsListRes.res.pending.value"
      >
        <div :key="i.id" v-for="i of postsList">
          <Posts :posts="i" />
          <Gap />
        </div>
      </van-list>
    </div>
  </van-pull-refresh>
</template>

<style module lang="less">
.swiper_area {
  box-sizing: border-box;
}
</style>
