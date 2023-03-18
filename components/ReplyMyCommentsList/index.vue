<script setup lang="ts">
// 我的获赞列表
import { useGetMessageCenterList } from "~~/api/mine";
const { t } = useTranslate();

const params = ref<API.Mine.GetMessageCenterList.Params>({
  type: 3,
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
        <div v-for="(item, idx) in res.list.value">
          <ReplyMyCommentsListItem :data="item" :key="item.id" />
          <Gap v-if="idx + 1 !== res.list.value.length" />
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<style module lang="less">
.container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: var(--theme-neutral-n8-FFFFFF);
}
</style>
