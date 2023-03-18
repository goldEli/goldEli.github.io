<script setup lang="ts">
import { useSetMessageRead } from "~~/api/mine";

const { t } = useTranslate();
interface Props {
  data: Model.Message.Info;
}
const { goToPostsDetails } = useGoToPostsDetails();
const onRead = () => {
  goToPostsDetails(props.data.postsId);
  useSetMessageRead({
    ids: [props.data.id],
  });
};
const isCommentPost = ref(false);
watchEffect(() => {
  if (props.data.messageType === 0) {
    isCommentPost.value = true;
    return;
  }
  isCommentPost.value = false;
});

const props = withDefaults(defineProps<Props>(), {});
</script>
<template>
  <div :class="$style.container" @click.stop="onRead">
    <MyLikesListItemHeader :data="data" />
    <div :class="$style.text">
      <span v-if="!isCommentPost" :class="$style.replayText">{{ `${t("reply")}` }}</span
      ><span v-if="!isCommentPost" :class="$style.replayName">
        &nbsp;{{ data.userName }}:&nbsp;</span
      ><span>{{ data.content }}</span>
    </div>
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
.replayText {
  font-weight: 400;
  color: var(--theme-neutral-n3-969799);
}
.replayName {
  font-weight: 400;
  color: var(--theme-main-753c06);
}
</style>
