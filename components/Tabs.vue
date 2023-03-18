<script setup lang="ts">
const tabsStore = useTabsStore();
const contentDom = ref<HTMLElement>();
const boxDom = ref<HTMLElement>();

const onChange = async (id: string, index: number) => {
  tabsStore.onChangeTabActiveKey(id);
};
</script>

<template>
  <LoadingPage :hide="tabsStore.success" :type="'img'">
    <div ref="boxDom" :class="$style.tabs">
      <div ref="contentDom" :class="$style.tabsContent">
        <div
          v-for="(item, index) in tabsStore.tabList"
          :key="item?.id"
          :class="[
            $style.tab_item,
            {
              [$style.tab_item_active]: tabsStore.tabActiveKey === item.id,
            },
          ]"
          @click="onChange(item.id, index)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </LoadingPage>
</template>

<style module lang="less">
.tabs {
  box-sizing: border-box;
  padding: 0 16px 8px 16px;
  box-sizing: border-box;
  height: 36px;
  overflow-x: auto;
  overflow-y: hidden;
  position: sticky;
  top: 46px;
  z-index: 1000;
  background: var(--theme-neutral-n8-F8F9FA);
}
.tabsContent {
  // width: 100%;
  height: 36px;
  display: flex;
  gap: 36px;
  align-items: center;
  // position: absolute;
  // top: 0px;
  // left: 16px;
}
.tab_item {
  flex-shrink: 0;
  height: 20px;
  font-size: 14px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: var(--theme-neutral-n1-323233);
  line-height: 20px;
}

.tab_item_active {
  height: 36px;
  font-size: 17px;
  font-family: PingFang SC-Medium, PingFang SC;
  font-weight: bold;
  color: var(--theme-neutral-n1-323233);
  line-height: 30px;
  position: relative;
}
.tab_item_active::after {
  content: "";
  width: 20px;
  height: 4px;
  background: var(--theme-main-gradient-dcb795);
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 0%);
}
</style>
