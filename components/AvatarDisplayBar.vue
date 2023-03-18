<script setup lang="ts">
const props = defineProps<{
  post: Model.Posts.Info;
}>();
</script>

<template>
  <LoadingPage :type="'title'" :hide="!!post.createrName">
    <div :class="$style.content_wrap_info">
      <ImageLoading
        radius="50%"
        :class="$style.img_four"
        :src="props.post.userAvatar"
      />
      <div :class="$style.content_wrap_bottom">
        <div :class="$style.userName">
          <span :class="$style.content_wrap_bottom_name">{{
            props.post.createrName
          }}</span>
          <IconGM :show="post.type !== 2" />
        </div>
        <div :class="$style.content_wrap_bottom_time">
          {{ props.post.createTime }}
        </div>
      </div>
    </div>
  </LoadingPage>
</template>

<style module lang="less">
.userName {
  display: flex;
  gap: 8px;
  align-items: center;
}
.content_wrap_bottom_name {
  height: 20px;
  font-size: 14px;
  font-family: PingFang SC-Medium, PingFang SC;
  font-weight: bold;
  color: #323233;
  line-height: 20px;
}
.content_wrap_bottom_tag {
  font-size: 12px;
  background: var(--theme-main-gradient-dcb795);
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
  color: var(--theme-main-753c06);
  font-weight: bold;
  box-sizing: border-box;
  padding: 0 6px;
  margin-left: 12px;
}
.content_wrap_bottom_time {
  height: 16px;
  font-size: 12px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: var(--theme-neutral-n4-bbbdbf);
  line-height: 16px;
}
.content_wrap_bottom {
  display: flex;
  flex-direction: column;
  // gap: 6px;
  margin-left: 12px;
  justify-content: flex-start;
  gap: 6px;
}
.content_wrap_info {
  height: 40px;
  display: inline-flex;
  align-items: center;
}
.img_four {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
</style>
