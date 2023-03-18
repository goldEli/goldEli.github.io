<script setup lang="ts">
import { getHistory, clearHistory } from "@/utils/handleSearchHistory";
const { t } = useTranslate();
// const emit = withDefaults(defineEmits<emitProps>(), {});
const emit = defineEmits<{
  (e: "onSearch", val: string): void;
}>();

const list = ref<string[]>([]);

onMounted(() => {
  const history = getHistory();
  list.value = history;
});
const onClear = () => {
  list.value = [];
  clearHistory();
};
</script>

<template>
  <div v-if="list.length > 0" :class="$style.history">
    <div :class="$style.history_top">
      <span :class="$style.title">{{ t("searchHistory") }}</span>
      <IconFont
        @click.stop="onClear"
        :class="$style.post_content_operation_item_icon"
        type="delete"
      />
    </div>
    <div :class="$style.history_bottom">
      <div
        :class="$style.item_card"
        @click="emit('onSearch', item)"
        v-for="item in list"
      >
        {{ item }}
      </div>
    </div>
    <Gap />
  </div>
</template>

<style module lang="less">
.search {
  font-size: 14px;
  color: var(--theme-neutral-n4-bbbdbf);
}
.screen_item {
  margin-right: 8px;
  padding: 2px 8px;
  color: var(--theme-neutral-n8-FFFFFF);
  height: 20px;
  background: var(--theme-main-sub-gradient-fe5d5d);
  border-radius: 20px 20px 20px 20px;
  font-size: 12px;
  font-family: PingFang SC-Regular, PingFang SC;
}
.screen {
  padding: 16px 0;
}
.empty {
  height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.hot_search_wrap {
  gap: 12px;
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
}
.hot_search_wrap_item {
  width: calc(50% - 12px);
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.hot_search_text {
  font-size: 14px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: var(--theme-neutral-n2-646566);
  line-height: 20px;
}

.hot_search_num {
  padding: 7px;
  font-size: 14px;
  font-family: PingFang SC-Medium, PingFang SC;
  font-weight: 500;
  color: var(--theme-neutral-n4-bbbdbf);
}
.top_three {
  background: var(--theme-main-sub-gradient-fe5d5d);
  -webkit-background-clip: text;
  color: transparent;
}
.item_card {
  background: #f5f5f5;
  font-size: 13px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: #323233;
  line-height: 18px;
  padding: 3px 8px;
  border-radius: 4px 4px 4px 4px;
}
.history_bottom {
  padding: 16px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.title {
  font-size: 16px;
  font-family: PingFang SC-Medium, PingFang SC;
  font-weight: bold;
  color: #323233;
}
.post_content_operation_item_icon {
  width: 20px;
  height: 20px;
  // margin-right: 1px;
  color: var(--theme-neutral-n3-969799);
}
.history {
  box-sizing: border-box;
  // padding: 0 16px 16px 16px;
  padding-bottom: 16px;
  background-color: var(--theme-neutral-n8-FFFFFF);
}
.hot_search {
  box-sizing: border-box;
  padding: 0 16px 16px 16px;
  background-color: var(--theme-neutral-n8-FFFFFF);
}
.history_top {
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
