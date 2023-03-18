<script setup lang="ts">
// 系统消息列表列表
import { useGetMessageCenterList } from "~~/api/mine";
const { t } = useTranslate();

const params = ref<API.Mine.GetMessageCenterList.Params>({
  type: 0,
});
const res = await useGetMessageCenterList(params);

const loading = ref(false);
const onRefresh = () => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};
</script>
<template>
  <div :class="$style.container">
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <van-list
        :finished-text="t('noMore')"
        :finished="res.finished.value"
        @load="res.onNext"
        v-model:loading="res.res.pending.value"
      >
        <SystemNotificationListItem
          v-for="item in res.list.value"
          :data="item"
          :key="item.id"
        />
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<style module lang="less">
.container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: var(--theme-neutral-n8-F8F9FA);
}
</style>
