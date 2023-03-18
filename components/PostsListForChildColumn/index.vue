<script setup lang="ts">
import { useGetPostsListForChild } from "~~/api/posts";
interface Props {
  customTitle?: boolean;
  data: Model.Column.Item;
}
const props = withDefaults(defineProps<Props>(), {
  customTitle: false,
});

const params = computed<API.Posts.GetPostsListForChild.Params>(() => {
  return {
    columnManagementId: props.data.id,
  };
});

const res = await useGetPostsListForChild(params);

const list = computed(() => {
  return res.data.value?.data;
});
</script>

<template>
  <LoadingPage :hide="!res.pending.value">
    <div :class="$style.list">
      <div v-if="!customTitle" :class="$style.title">
        <span>{{ data.name }}</span>
      </div>
      <slot name="title"></slot>
      <div>
        <CardForSimple v-for="item of list" :data="item" :key="item.id" />
      </div>
    </div>
  </LoadingPage>
</template>

<style module lang="less">
.list {
  padding: 16px;
  box-sizing: border-box;
  background-color: var(--theme-neutral-n8-FFFFFF);
}
.swiper_wrap {
  width: 100%;
  background-color: white;
  margin-bottom: 8px;
  margin-top: 10px;
}
.swipe_example {
  // height: 160px;
}
.swiper_image {
  width: 343px;
  height: 160px;
  border-radius: 4px 4px 4px 4px;
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
.wrap {
  background-color: var(--theme-neutral-n8-FFFFFF);
  padding: 16px;
  margin-bottom: 8px;
}
.characters {
  margin: 12px 0 8px 0;
  display: flex;
  justify-content: space-between;
  & :nth-child(1) {
    height: 22px;
    font-size: 16px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: bold;
    color: var(--theme-neutral-n1-323233);
    line-height: 22px;
  }
  & :nth-child(2) {
    height: 16px;
    line-height: 16px;
    border-radius: 20px;
    font-size: 10px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: bold;
    color: var(--theme-neutral-n8-FFFFFF);
    padding: 2px 8px;
    background: var(--theme-main-sub-gradient-fe5d5d);
  }
}
.characters_time {
  height: 20px;
  font-size: 14px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: var(--theme-neutral-n2-646566);
  line-height: 20px;
}
:global(.van-swipe__indicators) {
  top: 140px;
}
</style>
