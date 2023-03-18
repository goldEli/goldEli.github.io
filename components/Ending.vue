<script setup lang="ts">
const { t } = useTranslate();
</script>

<template>
  <div :class="$style.wrap">—— {{ t("inTheEnd") }}~ ——</div>
</template>

<style module lang="less">
.wrap {
  font-size: 14px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: #ebedf0;
  line-height: 20px;
  text-align: center;
}
</style>
