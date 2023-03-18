<script setup lang="ts">
interface Props {
  data?: Model.Topics.Info;
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div :class="$style.container">
    <ImageLoading :class="$style.img" :src="data?.picture" />
    <div :class="$style.dec_wrap">
      <div :class="$style.title">
        {{ data?.subVo?.name }}
      </div>
      <div :class="$style.content">
        {{ data?.subVo?.description }}
      </div>
    </div>
  </div>
</template>

<style module lang="less">
.container {
  background: var(--theme-neutral-n8-FFFFFF);
  width: 100%;
}
.img {
  width: 100%;
  height: 175px;
}
.dec_wrap {
  box-sizing: border-box;
  padding: 16px;
}
.title {
  font-size: 16px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: var(--theme-neutral-n1-323233);
  line-height: 22px;
}
.content {
  margin-top: 8px;
  font-size: 14px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: var(--theme-neutral-n3-969799);
  line-height: 20px;
}
.screen_item {
  margin-right: 8px;
  padding: 2px 8px;

  height: 20px;
  background: var(--theme-main-sub-gradient-fe5d5d);
  border-radius: 20px 20px 20px 20px;
  font-size: 12px;
  font-family: PingFang SC-Regular, PingFang SC;
  color: var(--theme-neutral-n8-FFFFFF);
}
// .screen {
//   padding: 16px;
// }
</style>
