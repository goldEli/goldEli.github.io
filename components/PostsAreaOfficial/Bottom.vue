<script setup lang="ts">
const { t } = useTranslate();
interface Props {
  data: Model.Posts.Info;
}
const props = withDefaults(defineProps<Props>(), {});
</script>
<template>
  <div :class="$style.bottom">
    <IconLikeWithNum
      :postsId="data.id"
      :total="data?.likesNumber"
      :isLike="data?.isLike === 1"
      :size="'big'"
    />
    <span :class="$style.tips">{{ t("giveALike") }}~</span>
  </div>
</template>
<style module lang="less">
.bottom {
  height: 18px;
  display: flex;
  gap: 12px;
  .tips {
    font-size: 13px;
    font-weight: 400;
    color: var(--theme-neutral-n3-969799);
  }
}
</style>
