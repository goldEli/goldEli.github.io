<script setup lang="ts">
/**
 * 玩家详情
 */
interface Props {
  data?: Model.Posts.Info;
}
const props = withDefaults(defineProps<Props>(), {});
</script>
<template>
  <div :class="$style.container">
    <UserInfoBar :data="data" />
    <ContentPictureDisplayBar :full-description="true" :post="data" />
    <TopicsBar :topics="data?.tagVoList ?? []" />
    <PostsAreaOfficialBottom v-if="data" :data="data" />
  </div>
</template>
<style module lang="less">
.container {
  width: 100%;
  background: var(--theme-neutral-n8-FFFFFF);
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
