<script setup lang="ts">
import { useGetPostsCarouselList } from "~~/api/posts";

const tabsStore = useTabsStore();
const params = computed(() => {
  return {
    columnManagementId: tabsStore.tabActiveKey ?? "",
  };
});
const res = await useGetPostsCarouselList(params);

const { goToPostsDetails } = useGoToPostsDetails();

// 展示轮播
const swiperData = computed(() => {
  return res.data.value?.data?.list;
});
</script>

<template>
  <LoadingPage :hide="!res.pending.value" :type="'img'">
    <div v-if="!!swiperData?.length" :class="$style.swiper_wrap">
      <van-swipe
        :class="$style.swipe_example"
        :autoplay="3000"
        indicator-color="white"
      >
        <van-swipe-item v-for="item in swiperData" :key="item.id">
          <ImageLoading
            @click="goToPostsDetails(item.postsId)"
            :class="$style.swiper_image"
            :src="item.carouselPicture"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
  </LoadingPage>
</template>

<style module lang="less">
.swiper_wrap {
  width: 100%;
  background-color: white;
  margin-bottom: 8px;
  margin-top: 10px;
  box-sizing: border-box;
  padding: 0 16px 8px;
}
.swipe_example {
  height: 160px;
}
.swiper_image {
  width: 343px;
  height: 160px;
  border-radius: 4px 4px 4px 4px;
}
</style>
