<script setup lang="ts">
const { t } = useTranslate();
interface Props {
  id: string;
  content: string[];
}
const original = ref(true);
const props = withDefaults(defineProps<Props>(), {});
const translationStore = useTranslationContentStore();
const text = computed(() => (original.value ? t("translate") : t("origin")));
const doTranslate = () => {
  translationStore.onChange(props.id, props.content);
};

watchEffect(() => {
  const isHas = !!translationStore.translateContent[props.id];
  if (isHas) {
    original.value = false;
    return;
  }
  original.value = true;
});
</script>

<template>
  <div @click.stop="doTranslate" :class="$style.wrap">
    <IconFont type="translation" :class="$style.icon" />
    <span :class="$style.text">{{ text }}</span>
    <slot />
  </div>
</template>

<style module lang="less">
.wrap {
  display: flex;
  align-items: center;
}
.icon {
  width: 16px;
  height: 16px;
  color: var(--theme-main-753c06);
  margin-right: 4px;
}
.text {
  margin-right: 18px;
  height: 20px;
  font-size: 14px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  line-height: 20px;
  color: var(--theme-main-753c06);
}
</style>
