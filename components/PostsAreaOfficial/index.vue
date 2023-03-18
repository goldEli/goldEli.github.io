<script setup lang="ts">
/**
 * 官方详情
 */
interface Props {
  data?: Model.Posts.Info;
}
const props = withDefaults(defineProps<Props>(), {});
const translationStore = useTranslationContentStore();
const title = ref("");
const content = ref("");

watchEffect(() => {
  if (props?.data?.id === void 0) {
    return;
  }
  // 判断是否存在
  const contentArr = translationStore.translateContent[props?.data?.id];
  if (contentArr) {
    // 调接口 返回数据
    // content.value =
    title.value = contentArr[0];
    content.value = contentArr[1];
  } else {
    title.value = props.data.postsSubVo.name;
    content.value = props.data.postsSubVo.content;
  }
});
const showVideo = computed(() => props?.data?.type === 1);
</script>
<template>
  <div :class="$style.container">
    <PostsAreaOfficialVideoArea v-if="showVideo" :src="data?.videoUrl" />

    <div :class="$style.title">{{ title }}</div>
    <UserInfoBar :showGM="data?.type !== 2" :data="data" :showActions="false" />
    <div :class="$style.htmlTemplate" v-html="content"></div>
    <PostsAreaOfficialBottom v-if="data" :data="data" />
  </div>
</template>
<style module lang="less">
.htmlTemplate {
  width: 100%;
  img {
    width: 100%;
  }
  a {
    color: blue;
    text-decoration: underline;
  }
}
.container {
  width: 100%;
  background: var(--theme-neutral-n8-FFFFFF);
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.title {
  font-size: 18px;
  font-weight: 400;
  color: var(--theme-neutral-n1-323233);
  line-height: 26px;
}
</style>
