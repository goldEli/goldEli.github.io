<script setup lang="ts">
import { useGetHotTopics } from "~~/api/topics";

const { t } = useTranslate();
useTitle(t("theGamingCommunity"));
const res = await useGetHotTopics();
const communityTabsStore = useCommunityTabsStore();
const visible = computed(() => {
  return communityTabsStore.tabActiveInfo?.type === "communityHall";
});
const { onJump } = useJump();
const list = computed(() => res.data.value?.data?.list);
</script>

<template>
  <LoadingPage :hide="!res.pending.value">
    <div :class="$style.box" v-if="!!list?.length && visible">
      <PopularStrategyTitle />

      <div :class="$style.swiperBox">
        <van-swipe
          :show-indicators="false"
          :class="$style['my-swipe']"
          :loop="false"
          :width="246"
        >
          <van-swipe-item
            :class="$style['van-swipe-item']"
            v-for="item in list"
          >
            <div
              :class="$style.swiper_item"
              @click="onJump(`/information-topics/${item.id}`)"
            >
              <ImageLoading :class="$style.swiper_img" :src="item.picture" />
              <span :class="$style.swiper_right_top">{{ t("topic") }}</span>
              <div :class="$style.swiper_bottom">
                <IconFont :class="$style.swiper_right_top_icon" type="fire" />
                <span :class="$style.swiper_right_top_text">
                  {{ item.subVo.name }}
                </span>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <Gap v-if="!!list?.length && visible" />
  </LoadingPage>
</template>

<style module lang="less">
.box {
  // padding: 16px 16px 0 16px;
  padding-top: 16px;
}
.swiperBox {
  width: 100%;
  box-sizing: border-box;
  padding-left: 16px;
}
// .create_post_icon {
//   width: 24px;
//   height: 24px;
//   color: var(--theme-main-753c06);
//   opacity: 1;
// }
.create_post {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  position: fixed;
  right: 16px;
  bottom: 100px;
  // width: 56px;
  // height: 56px;
  // background: var(--theme-main-gradient-dcb795);
  // box-shadow: 0px -4px 8px 0px rgba(117, 60, 6, 0.1),
  //   0px 4px 8px 0px rgba(117, 60, 6, 0.1);
  // border-radius: 48px 48px 48px 48px;
  // opacity: 1;
}
.swiper_bottom {
  width: 230px;
  box-sizing: border-box;
  padding: 0px 8px;
  height: 28px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 8px;
  align-items: center;
}
.swiper_right_top_text {
  height: 16px;
  font-size: 12px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: var(--theme-neutral-n8-FFFFFF);
  line-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 200px;
}
.swiper_right_top_icon {
  width: 12px;
  height: 12px;
}
.swiper_right_top {
  text-align: center;
  position: absolute;
  left: 14px;
  top: 10px;
  font-size: 12px;
  padding: 2px 6px;
  width: 36px;
  height: 20px;
  line-height: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px 4px 4px 4px;
  color: var(--theme-neutral-n8-FFFFFF);
}
.my-swipe {
  margin: 16px 0;
}

.swiper_item {
  height: 130px;
  padding-right: 16px;
}
.swiper_img {
  width: 230px;
  height: 130px;
  // margin-right: 16px;
}
.wrap {
  box-sizing: border-box;
  padding: 16px;
}
.event_area {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.more_event_icon {
  margin-left: 4px;
  width: 16px;
  height: 16px;
  color: var(--theme-neutral-n3-969799);
}
.more_event {
  span {
    height: 20px;
    font-size: 14px;
    font-family: PingFang SC-Regular, PingFang SC;
    font-weight: 400;
    color: var(--theme-neutral-n3-969799);
    line-height: 20px;
  }
}
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
</style>
