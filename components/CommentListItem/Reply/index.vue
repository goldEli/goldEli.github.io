<script setup lang="ts">
import Top from "../Comment/Top.vue";
import Middle from "./Middle.vue";
import Bottom from "../Comment/Bottom.vue";
interface Props {
  data: Model.Comments.Comment;
}
const props = withDefaults(defineProps<Props>(), {});
</script>
<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.contentLeft">
        <Avatar size="small" :src="data.createrAvatar" />
      </div>
      <div :class="$style.contentRight">
        <Top :data="data" />
        <Middle :data="data" />
        <Bottom :data="data" />
      </div>
    </div>
  </div>
</template>
<style module lang="less">
.container {
  margin-bottom: 12px;
  padding-left: 24px;
  box-sizing: border-box;
  width: 100%;
}
.content {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  gap: 12px;
}
.contentLeft {
}
.contentRight {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
