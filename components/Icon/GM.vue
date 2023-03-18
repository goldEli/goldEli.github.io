<script setup lang="ts">
interface Props {
  show: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  show: true,
});
</script>
<template>
  <span v-if="props.show" :class="$style.container">GM</span>
</template>
<style module lang="less">
.container {
  background: var(--theme-main-gradient-dcb795);
  border-radius: 4px;
  color: var(--theme-main-753c06);
  font-weight: bold;
  box-sizing: border-box;
  display: flex;
  width: 32px;
  height: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
</style>
