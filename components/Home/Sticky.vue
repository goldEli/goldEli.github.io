<script setup lang="ts">
interface Props {
  item: Model.Posts.Info;
}
const props = withDefaults(defineProps<Props>(), {});

const iconMap: { [key in Props["item"]["type"]]: string } = {
  0: "test-01",
  1: "video-01",
  2: "test-01",
};

const icon = computed(() => iconMap[props.item.type]);

const { goToPostsDetails } = useGoToPostsDetails();
</script>

<template>
  <div :class="$style.top_wrap">
    <div @click="goToPostsDetails(item.id)" :class="$style.top_item">
      <IconFont :class="$style.icon2" type="top-01" />
      <IconFont :type="icon" :class="$style.icon" />
      <div :class="$style.top_item_text">
        {{ item.postsSubVo.name }}
      </div>
    </div>
  </div>
</template>

<style module lang="less">
.top_wrap {
  background-color: white;
  padding: 0 16px;
  box-sizing: border-box;
}
.icon {
  width: 16px;
  height: 16px;
  color: #dcb795;
  margin-left: 6px;
  margin-right: 6px;
}
.icon2 {
  width: 16px;
  height: 16px;
}

.top_item {
  display: flex;
  align-items: center;
  height: 40px;
}
.top_item_text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 13px;
  height: 18px;
  color: #323233;
  line-height: 18px;
}
</style>
