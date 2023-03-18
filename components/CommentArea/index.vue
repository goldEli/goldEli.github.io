<script setup lang="ts">
import Header from "./Header.vue";
interface Props {
  data?: Model.Posts.Info;
}
const props = withDefaults(defineProps<Props>(), {});
</script>
<template>
  <div :class="$style.container">
    <Header />
    <CommentList />
    <ReplyComment :data="data"/>
  </div>
</template>
<style module lang="less">
.container {
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  background: var(--theme-neutral-n8-FFFFFF);
}
</style>
