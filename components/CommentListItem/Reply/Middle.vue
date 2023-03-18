<script setup lang="ts">
interface Props {
  data: Model.Comments.Comment;
}
const props = withDefaults(defineProps<Props>(), {});
const { t } = useTranslate();
</script>
<template>
  <div :class="$style.middle">
    <!-- <span :class="$style.text">{{ `${t("noMore")}&nbsp;` }}</span> -->
    <span :class="$style.nameText">{{ data?.replyUserName }}</span>
    <span :class="$style.text" v-if="!!data?.replyUserName">:&nbsp;</span>
    <span :class="$style.text">
      {{ data.content }}
    </span>
  </div>
</template>
<style module lang="less">
.middle {
  line-height: 20px;
  font-size: 14px;
  font-weight: 400;
  .text {
    color: var(--theme-neutral-n1-323233);
  }
  .nameText {
    color: var(--theme-neutral-n3-969799);
  }
}
</style>
