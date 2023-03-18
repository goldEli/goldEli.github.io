<script setup lang="ts">
interface Props {
  data: Model.Message.Info;
  showTime?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  showTime: true,
});
</script>
<template>
  <div :class="$style.container">
    <Avatar :show-red-dot="data.status === 0" :src="data.userAvatar" />
    <span :class="$style.name">{{ data.userName }}</span>
    <span v-if="showTime" :class="$style.time">{{ data.createTime }}</span>
  </div>
</template>
<style module lang="less">
.container {
  box-sizing: border-box;
  width: 100%;
  gap: 12px;
  display: grid;
  grid-template-columns: 32px auto auto;
  align-items: center;
}
.name {
  font-size: 14px;
  font-weight: 500;
  color: var(--theme-neutral-n1-323233);
}
.time {
  font-size: 12px;
  font-weight: 400;
  color: var(--theme-neutral-n4-bbbdbf);
  justify-self: end;
}
</style>
