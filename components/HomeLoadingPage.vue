<script setup lang="ts">
interface Props {
  showNoData: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  showNoData: false,
});
</script>
<template>
  <VanSkeleton>
    <template #template>
      <div :class="$style.container">
        <van-skeleton-paragraph :class="$style.tabArea" />
        <div :class="$style.gap"></div>
        <van-skeleton-image :class="$style.img" />
        <div :class="$style.gap"></div>
        <van-skeleton-title />
        <van-skeleton-paragraph />
        <van-skeleton-paragraph />
        <van-skeleton-paragraph />
        <div :class="$style.gap"></div>
        <van-skeleton-title />
        <van-skeleton-paragraph />
        <van-skeleton-paragraph />
        <van-skeleton-paragraph />
        <div :class="$style.gap"></div>
        <van-skeleton-title />
        <van-skeleton-paragraph />
        <van-skeleton-paragraph />
        <van-skeleton-paragraph />
        <div :class="$style.gap"></div>
        <van-skeleton-title />
        <van-skeleton-paragraph />
        <van-skeleton-paragraph />
        <van-skeleton-paragraph />
      </div>
    </template>
  </VanSkeleton>
  <IconFont v-if="showNoData" :class="$style.icon" type="illustration" />
</template>
<style module lang="less">
.icon {
  width: 50px;
  height: 50px;
}
.img {
  height: 160px;
  width: 100%;
}
.gap {
  height: 16px;
}
.container {
  width: 100%;
  box-sizing: border-box;
}
.tabArea {
  height: 60px;
  box-sizing: border-box;
}
</style>
