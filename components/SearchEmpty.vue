<script setup lang="ts">
interface Props {
  searchName: string;
  noData: boolean;
}
const { t } = useTranslate();
const props = withDefaults(defineProps<Props>(), {});
</script>
<template>
  <div v-if="noData && !!searchName" :class="$style.iconBox">
    <IconFont type="illustration" :class="$style.icon" />
    <span :class="$style.description">{{
      `${t("none")}“${searchName}”${t("searchResult")}`
    }}</span>
  </div>
  <slot v-else />
</template>
<style module lang="less">
.description {
  font-size: 14px;
  font-weight: 400;
  color: var(--theme-neutral-n3-969799);
}
.iconBox {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.icon {
  width: 300px;
  height: 300px;
}
.img {
  width: 100%;
  height: 200px;
}
.gap {
  height: 16px;
}
</style>
