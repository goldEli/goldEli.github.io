<script setup lang="ts">
import { useSetMessageRead } from "~~/api/mine";

const { t } = useTranslate();

interface Props {
  data: Model.Message.Info;
}
const props = withDefaults(defineProps<Props>(), {});
// 赞了你的帖子还是评论 来切换展示
const showLikeYourPosts = ref(true);
const { goToPostsDetails } = useGoToPostsDetails();
const onRead = () => {
  goToPostsDetails(props.data.postsId);
  useSetMessageRead({
    ids: [props.data.id],
  });
};

watchEffect(() => {
  if (props.data.messageType === 0) {
    showLikeYourPosts.value = true;
    return;
  }
  showLikeYourPosts.value = false;
});
</script>
<template>
  <div :class="$style.container" @click.stop="onRead">
    <MyLikesListItemHeader :data="data" />
    <div v-if="showLikeYourPosts" :class="$style.text">
      {{ t("likedYourPost") }}
    </div>
    <div v-else :class="$style.text">{{ t("likedYourComment") }}</div>
    <MyLikesListPostsInfo :data="data" />
  </div>
</template>
<style module lang="less">
.container {
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
  background: var(--theme-neutral-n8-FFFFFF);
}
.text {
  font-size: 16px;
  font-weight: 500;
  color: var(--theme-neutral-n1-323233);
  padding: 16px 0 8px 0;
}
</style>
