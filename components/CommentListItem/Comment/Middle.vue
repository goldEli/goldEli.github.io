<script setup lang="ts">
interface Props {
  data: Model.Comments.Comment;
}
const props = withDefaults(defineProps<Props>(), {});
const content = ref("");
const translationContent = useTranslationContentStore();

watchEffect(() => {
  content.value = props.data.content;
});

watchEffect(() => {
  // 判断是否存在
  const arr = translationContent.translateContent[props.data.id];
  const str = arr?.[0]
  if (str) {
    // 调接口 返回数据
    content.value = str;
  } else {
    content.value = props.data.content
  }
});
</script>
<template>
  <div :class="$style.middle">
    {{ content }}
  </div>
</template>
<style module lang="less">
.middle {
  font-size: 14px;
  font-weight: 400;
  color: var(--theme-neutral-n1-323233);
  line-height: 20px;
}
</style>
