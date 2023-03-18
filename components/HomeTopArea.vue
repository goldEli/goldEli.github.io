<script setup lang="ts">
import { useGetPostsTop } from "~~/api/home";

const tabsStore = useTabsStore();
const params = computed(() => ({
  columnManagementId: tabsStore.tabActiveKey || "",
}));
const res = await useGetPostsTop(params);
const list = computed(() => res.data.value?.data?.list);
</script>

<template>
  <LoadingPage :hide="!res.pending.value">
    <HomeSticky v-for="item in list" :key="item.id" :item="item" />
    <Gap v-if="!!list?.length" />
  </LoadingPage>
</template>

<style module lang="less"></style>
