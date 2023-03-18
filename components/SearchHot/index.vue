<script setup lang="ts">
import { useGetHotSearchList, useUpdateHotSearch } from "~~/api/hotSearch";
const { t } = useTranslate();

const emit = defineEmits<{
  (e: "onSearch", val: string): void;
}>();
const res = await useGetHotSearchList();
</script>

<template>
  <div :class="$style.hot_search">
    <span :class="$style.title">{{ t("hotSearch") }}</span>

    <div :class="$style.hot_search_wrap">
      <div
        @click="
          () => {
            emit('onSearch', item.name);
            useUpdateHotSearch({ id: item.id });
          }
        "
        :class="$style.hot_search_wrap_item"
        :key="item.id"
        v-for="(item, index) in res.data.value?.data?.list"
        span="12"
      >
        <span
          :class="[$style.hot_search_num, { [$style.top_three]: index <= 2 }]"
          >{{ index + 1 }}</span
        >
        <span :class="$style.hot_search_text">{{ item.name }}</span>
      </div>
    </div>
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
  background-color: var(--theme-neutral-n4-bbbdbf);
  font-size: 13px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: #323233;
  line-height: 18px;
  padding: 3px 8px;
  border-radius: 4px 4px 4px 4px;
}
.history_bottom {
  padding: 16px 0;
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
  width: 15px;
  height: 17px;
  margin-right: 1px;
  color: var(--theme-neutral-n3-969799);
}
.history,
.hot_search {
  box-sizing: border-box;
  padding: 16px;
  background-color: var(--theme-neutral-n8-FFFFFF);
}
.history_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
