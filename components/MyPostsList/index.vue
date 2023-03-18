<script setup lang="ts">
import { showConfirmDialog, showSuccessToast } from "vant";
import { useGetMyPostsList } from "~~/api/mine";
import { useDeletePosts } from "~~/api/posts";
const { t } = useTranslate();

const postsListRes = await useGetMyPostsList();

const postsList = computed(() => postsListRes.list.value);

const loading = ref(false);
const onRefresh = () => {
  postsListRes.onReset();
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};
const onDel = (id: string, idx: number) => {
  showConfirmDialog({
    title: t("prompt"),
    message: t("confirmDelete"),
  }).then(async () => {
    const res = await useDeletePosts({ ids: [id] });
    if (res.data.value?.code === 200) {
      postsList.value.splice(idx, 1);
      showSuccessToast(t("deletedSuccessfully"));
    }
  });
};
</script>

<template>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <div :class="$style.swiper_area">
      <van-list
        :finished-text="t('noMore')"
        :finished="postsListRes.finished.value"
        @load="postsListRes.onNext"
        v-model:loading="postsListRes.res.pending.value"
      >
        <Posts
          :show-del-icon="true"
          @on-del="(id) => onDel(id, idx)"
          :key="i.id"
          v-for="(i, idx) of postsList"
          :posts="i"
        />
      </van-list>
    </div>
  </van-pull-refresh>
</template>

<style module lang="less">
.swiper_area {
  padding: 0 16px 16px;
  box-sizing: border-box;
}
</style>
