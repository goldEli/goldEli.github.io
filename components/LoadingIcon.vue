<script setup lang="ts">
const { t } = useTranslate();
</script>

<template>
  <div :class="$style.wrap">
    <div :class="$style.container">
      <IconFont :class="$style.icon" type="commonloading" />
      {{ t("loading") }}...
    </div>
  </div>
</template>

<style module lang="less">
.wrap {
  text-align: center;
}
.container {
  font-size: 12px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: #646566;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  animation: rotation 3s linear infinite;
}

@keyframes rotation {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>
