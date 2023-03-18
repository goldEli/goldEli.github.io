<script setup lang="ts">
interface Props {
  hide?: boolean;
  type?: "tabs" | "img" | "info" | "title";
}
const props = withDefaults(defineProps<Props>(), {
  hide: false,
  type: "info",
});
// const slots = useSlots();
</script>
<template>
  <div :class="$style.container" v-if="!hide">
    <div :class="$style.gap"></div>
    <div v-if="type === 'info'">
      <van-skeleton-title />
      <van-skeleton-paragraph />
      <van-skeleton-paragraph />
      <van-skeleton-paragraph />
    </div>
    <div v-if="type === 'tabs'">
      <van-skeleton-paragraph />
    </div>
    <div v-if="type === 'title'">
      <van-skeleton-title />
    </div>
    <div v-if="type === 'img'">
      <van-skeleton-image :class="$style.img" />
    </div>
    <div :class="$style.gap"></div>
  </div>
  <slot v-else />
</template>
<style module lang="less">
.iconBox {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.icon {
  width: 300px;
  height: 300px;
}
.img {
  width: 100%;
  height: 200px;
}
.gap {
  height: 16px;
}
.container {
  width: 100%;
  box-sizing: border-box;
}
</style>
