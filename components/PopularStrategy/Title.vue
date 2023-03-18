<script setup lang="ts">
// import { useGetHotTopics } from "~~/api/topics";

const { t } = useTranslate();
useTitle(t("theGamingCommunity"));
const language = useGetLanguage();
// const res = useGetHotTopics();
const { jumpToCreateTopicPage } = useChooseTopicsStore();
</script>

<template>
  <div :class="$style.event_area">
    <div :class="$style.title">
      <span>{{ t("hotGuide") }}</span>
      <IconFont :class="$style.post_content_operation_item_icon" type="fire" />
    </div>

    <NuxtLink :to="`/${language}/event-list`" :class="$style.more_event">
      <span>{{ t("moreTopics") }}</span>
      <IconFont :class="$style.more_event_icon" type="right" />
    </NuxtLink>
  </div>

  <!-- <div @click="jumpToCreateTopicPage" :class="$style.create_post">
    <IconFont :class="$style.create_post_icon" type="add-plus" />
  </div> -->
</template>

<style module lang="less">
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
  width: 56px;
  height: 56px;
  background: var(--theme-main-gradient-dcb795);
  box-shadow: 0px -4px 8px 0px rgba(117, 60, 6, 0.1),
    0px 4px 8px 0px rgba(117, 60, 6, 0.1);
  border-radius: 48px 48px 48px 48px;
  opacity: 1;
}

.event_area {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px;
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
