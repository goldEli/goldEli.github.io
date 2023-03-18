<script setup lang="ts">
import { useComments } from "~~/api/comments";

const store = useCommentsStore();
const { t } = useTranslate();
const { $listen } = useNuxtApp();
const { query } = useRoute();
const id = query.id as string;
const params = computed(() => ({ postsId: id, sortLevel: store.activeKey }));

const res = await useComments(params);

$listen("comments:refreshList", () => {
  res.onReset();
});
</script>
<template>
  <div :class="$style.container">
    <van-list
      :finished-text="t('noMore')"
      :finished="res.finished.value"
      @load="res.onNext"
      v-model:loading="res.res.pending.value"
    >
      <CommentListItem v-for="item in res.list.value" :data="item" />
    </van-list>
  </div>
</template>
<style module lang="less">
.container {
}
</style>
