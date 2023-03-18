<script setup lang="ts">
const { t } = useTranslate();
interface Props {
  title: string;
  data: { label: string; value?: string | number }[];
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div :class="$style.box">
    <div :class="$style.title">{{ title }}</div>
    <div :class="$style.des_wrap">
      <div v-for="item of data" :class="$style.des_wrap_item">
        <span :class="$style.label">{{ item.label }}:</span>
        <span :class="$style.value">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<style module lang="less">
.box {
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 32px;
}
.des_wrap {
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
}
.des_wrap_item {
  width: 160px;
  .label {
    height: 20px;
    font-size: 14px;
    font-family: PingFang SC-Regular, PingFang SC;
    font-weight: 400;
    color: var(--theme-neutral-n3-969799);
    line-height: 20px;
    margin-right: 5px;
  }
  .value {
    height: 20px;
    font-size: 14px;
    font-family: PingFang SC-Regular, PingFang SC;
    font-weight: 400;
    color: var(--theme-neutral-n2-646566);
    line-height: 20px;
  }
}
.title {
  height: 22px;
  font-size: 16px;
  font-weight: bold;
  color: #323233;
  line-height: 22px;
}
</style>
