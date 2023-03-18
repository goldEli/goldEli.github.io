<script setup lang="ts">
import Comment from "./Comment/index.vue";
import Reply from "./Reply/index.vue";
import MoreIcon from "./MoreIcon.vue";
import {
  useGetCommentChildNumber,
  useReplyComments,
} from "~~/api/comments";
interface Props {
  data: Model.Comments.Comment;
}
const props = withDefaults(defineProps<Props>(), {});
const { $listen } = useNuxtApp();
const { query } = useRoute();
const id = query.id as string;
const params = computed(() => ({
  postsId: id,
  parentId: props.data.id,
  pageSize: 5,
}));
const showPackUpIcon = ref(false);

const res = await useReplyComments(params);
const replayList = computed(() => {
  return res.list.value;
});
const total = ref(0);
watch(
  () => props.data.childNumber,
  (num) => {
    total.value = num;
  },
  { immediate: true }
);
const onShowFirstPage = () => {
  res.onReset();
  showPackUpIcon.value = true;
};
const onShowMore = () => {
  res.onNext();
  showPackUpIcon.value = true;
};
const showMoreIcon = computed(() => {
  return total.value > 0;
});
const refreshChildrenNumber = async () => {
  const res = await useGetCommentChildNumber({ commentId: props.data.id });
  if (res.data.value?.data?.info) {
    total.value = res.data.value?.data?.info;
  }
};
$listen("comments:refreshReplyList", (event) => {
  if (
    event.commentId === props.data.id ||
    replayList.value.some((item) => item.id === event.commentId)
  ) {
    res.onReset();
    refreshChildrenNumber();
    showPackUpIcon.value = true;
  }
});
</script>
<template>
  <div :class="$style.container">
    <Comment :data="data" />
    <Reply
      v-if="showPackUpIcon"
      v-for="item in replayList"
      :data="item"
    />
    <MoreIcon
      @on-show-first-page="onShowFirstPage"
      @on-show-more="onShowMore"
      @on-pack-up="() => (showPackUpIcon = !showPackUpIcon)"
      v-if="showMoreIcon"
      :total="total"
      :current-show-total="replayList.length"
      :loading="res.res.pending.value"
      :show-pack-up-icon="showPackUpIcon"
    />
  </div>
</template>
<style module lang="less">
.container {
  width: 100%;
  margin-bottom: 24px;
}
</style>
