<script setup lang="ts">
const commentsStore = useCommentsStore();
const { t } = useTranslate();
</script>
<template>
  <div id="commentAreaTitle" :class="$style.container">
    <div :class="$style.header">
      <div :class="$style.title">{{ t("allComments") }}</div>
      <div :class="$style.actionArea">
        <div
          v-for="item in commentsStore.tabsInfo"
          @click="commentsStore.onSwitchActiveKey(item.key)"
          :class="[
            $style.item,
            { [$style.active]: item.key === commentsStore.activeKey },
          ]"
        >
          {{ item.label }}
        </div>
      </div>
    </div>
  </div>
</template>
<style module lang="less">
.header {
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  .title {
    font-size: 16px;
    font-weight: 500;
    color: var(--theme-neutral-n1-323233);
    line-height: 22px;
  }
  .actionArea {
    display: flex;
    gap: 8px;
    .item {
      border-radius: 20px;
      padding: 2px 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      font-weight: 400;
      color: var(--theme-neutral-n2-646566);
      background: var(--theme-neutral-n8-FFFFFF);
    }
    & > .active {
      color: var(--theme-neutral-n8-FFFFFF);
      background: var(--theme-main-sub-gradient-fe5d5d);
    }
  }
}
</style>
