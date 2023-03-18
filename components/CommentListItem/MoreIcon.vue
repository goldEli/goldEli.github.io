<script setup lang="ts">
interface Props {
  total: number;
  currentShowTotal: number;
  loading: boolean;
  showPackUpIcon: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  // loading: false,
});
const emits = defineEmits<{
  (e: "onShowMore"): void;
  (e: "onShowFirstPage"): void;
  (e: "onPackUp"): void;
}>();
const { t } = useTranslate();
const show = computed(() => props.total > 0);
const showAllCountBtn = computed(
  () => props.total > 0 && !props.showPackUpIcon
);
const showMoreBtn = computed(
  () =>
    props.total > props.currentShowTotal &&
    !props.loading &&
    props.showPackUpIcon
);
</script>
<template>
  <div :class="$style.moreIcon" v-if="show">
    <div
      @click.stop="emits('onShowFirstPage')"
      :class="$style.item"
      v-if="showAllCountBtn"
    >
      <span :class="$style.text">{{ t("expandReplies", total) }}</span>
      <IconFont :class="$style.iconDown" type="down" />
    </div>
    <div
      @click.stop="emits('onShowMore')"
      :class="$style.item"
      v-if="showMoreBtn"
    >
      <span :class="$style.text">{{ t("expandMoreReplies") }}</span>
      <IconFont :class="$style.iconDown" type="down" />
    </div>
    <div @click="emits('onPackUp')" :class="$style.item" v-if="showPackUpIcon">
      <span :class="$style.text">{{ t("packUp ") }}</span>
      <IconFont :class="$style.iconDown" type="up" />
    </div>
    <LoadingIcon v-if="loading && showPackUpIcon" />
  </div>
</template>
<style module lang="less">
.item {
  display: flex;
  gap: 8px;
  align-items: center;
}
.moreIcon {
  color: var(--theme-neutral-n2-646566);
  height: 16px;
  display: flex;
  gap: 24px;
  padding-left: 60px;
  box-sizing: border-box;
  align-items: center;
  .text {
    font-size: 12px;
    font-weight: 400;
  }
  .iconDown {
    width: 11px;
    height: 11px;
  }
}
</style>
