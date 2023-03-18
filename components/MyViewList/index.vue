<script setup lang="ts">
import { useGetMyPostsList, useGetMyViewList } from "~~/api/mine";
const { t } = useTranslate();

const postsListRes = await useGetMyViewList();

const postsList = computed(() => postsListRes.list.value);

const loading = ref(false);
const onRefresh = () => {
  postsListRes.onReset();
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};
</script>

<template>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <van-list
      :finished-text="t('noMore')"
      :finished="postsListRes.finished.value"
      @load="postsListRes.onNext"
      v-model:loading="postsListRes.res.pending.value"
    >
      <CardForSimple
        :key="i.id"
        v-for="(i, idx) of postsList"
        :data="i"
      />
    </van-list>
  </van-pull-refresh>
</template>

<style module lang="less"></style>
