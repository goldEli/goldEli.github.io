<script setup lang="ts">
import { Search as VanSearch, showToast } from "vant";
import { setHistory } from "@/utils/handleSearchHistory";
// import "@vant/touch-emulator";
const { t } = useTranslate();
useTitle(t("search"));

const showSearchResult = ref(true);
const inputValue = ref("");
const searchValue = ref("");

const onSearch = () => {
  searchValue.value = inputValue.value;
  if (!!inputValue.value) {
    setHistory(inputValue.value);
    showSearchResult.value = false;
    return;
  }
  // 如果清空搜索内容，切换到搜索历史
  showSearchResult.value = true;
};
const onInputValue = (str: string) => {
  inputValue.value = str;
  onSearch();
};
const onClear = () => {
  onInputValue("");
};
</script>

<template>
  <van-search
    shape="round"
    v-model="inputValue"
    show-action
    :placeholder="t('searchFor')"
    @search="onSearch"
    @clear="onClear"
  >
    <template #action>
      <div
        :class="[
          $style.searchBtn,
          {
            [$style.searchBtnActive]: !!inputValue,
          },
        ]"
        @click="onSearch"
      >
        {{ t("search") }}
      </div>
    </template>
    <template #left-icon>
      <div :class="$style.searchIconBox">
        <IconFont :class="$style.searchIcon" type="search" />
      </div>
    </template>
  </van-search>
  <template v-if="showSearchResult">
    <SearchHistory @on-search="onInputValue" />
    <SearchHot @on-search="onInputValue" />
  </template>

  <template v-else>
    <SearchResult :search-name="searchValue" />
  </template>
</template>

<style module lang="less">
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
:global(.van-search) {
  padding-top: 16px;
  padding-bottom: 16px;
}
:global(.van-field__control::placeholder) {
  font-size: 14px;
  font-weight: 400;
  // color: var(--theme-neutral-n2-646566);
}
.searchIconBox {
  // width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchIcon {
  width: 20px;
  height: 20px;
  // color: var(--theme-neutral-n2-646566);
}
.searchBtn {
  padding: 0 8px;
  font-size: 14px;
  font-weight: 400;
  color: var(--theme-neutral-n4-bbbdbf);
}

.searchBtnActive {
  color: #323233;
}
</style>
