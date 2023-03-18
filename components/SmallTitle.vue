<script setup lang="ts">
const { t } = useTranslate();
interface Props {
  title?: string;
}
const props = withDefaults(defineProps<Props>(), {
  title: "set your title",
});
</script>

<template>
  <div :class="$style.wrap">
    <IconFont :class="$style.post_content_operation_item_icon" type="new" />
    <span :class="$style.text">{{ title }}</span>
  </div>
</template>

<style module lang="less">
.wrap {
  display: flex;
  align-items: center;
  // padding: 0 16px;
}
.text {
  height: 22px;
  font-size: 16px;
  font-family: PingFang SC-Medium, PingFang SC;
  font-weight: bold;
  color: #323233;
  line-height: 22px;
}
.post_content_operation_item_icon {
  width: 20px;
  height: 20px;
  margin-right: 1px;
}
</style>
