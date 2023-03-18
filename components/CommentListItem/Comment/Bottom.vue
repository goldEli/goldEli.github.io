<script setup lang="ts">
import { ReplyInfo } from "~~/composables/useCommentsStore";

interface Props {
  data: Model.Comments.Comment;
}
const props = withDefaults(defineProps<Props>(), {});
const { onReply } = useCommentsStore();
const { t } = useTranslate();
const time = computed(() => {
  return props.data.createTime;
});

// const id = computed(() => {
//   // 回复一级评论
//   if (props.data.parentId === "0") {
//     return props.data.id;
//   }
//   // 回复二级评论
//   return props.data.parentId;
// });
const type = computed(() => {
  // 回复一级评论
  if (props.data.parentId === "0") {
    return 1;
  }
  // 回复二级评论
  return 2;
});
const replyInfo = computed<ReplyInfo>(() => {
  return {
    postsId: props.data.postsId,
    commentId: props.data.id,
    // 评论类型：0帖子，1评论，2@评论
    type: type.value,
    name: props.data.createrName,
    // replyUserName: props.data.createrName,
  };
});
</script>
<template>
  <div :class="$style.bottom">
    <div :class="$style.left">
      <span :class="$style.time"> {{ time }} </span>
      <span @click="onReply(replyInfo)" :class="$style.replayBtn">{{
        t("reply")
      }}</span>
    </div>
    <IconLikeWithNum
      :postsId="data.postsId"
      :commentId="data.id"
      :isLike="data.isLike === 1"
      :total="data.likesNumber"
    />
  </div>
</template>
<style module lang="less">
.bottom {
  display: flex;
  justify-content: space-between;
  height: 16px;
  align-items: center;
  .left {
    display: flex;
    gap: 16px;
    align-items: center;
    .time {
      font-size: 12px;
      font-weight: 400;
      color: var(--theme-neutral-n4-bbbdbf);
    }
    .replayBtn {
      font-size: 12px;
      font-weight: 500;
      color: var(--theme-main-753c06);
    }
  }
}
</style>
