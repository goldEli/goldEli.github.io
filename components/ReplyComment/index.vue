<script setup lang="ts">
import { storeToRefs } from "pinia";
import { showSuccessToast } from "vant";
import { useSaveComment } from "~~/api/comments";
interface Props {
  data?: Model.Posts.Info;
}
const props = withDefaults(defineProps<Props>(), {});

/**
 * 回复消息栏
 */
// 键盘弹出展示 textarea 输入框
const showTextarea = ref(false);
const { t } = useTranslate();

const inputEl = ref<HTMLInputElement>();
const textareaEl = ref<HTMLTextAreaElement>();
const comment = ref("");
const canSubmit = computed(() => !!comment.value);
const route = useRoute();
const commentsStore = useCommentsStore();
const { replyInfo } = storeToRefs(commentsStore);
const { clearReplyInfo } = commentsStore;
const { $event } = useNuxtApp();

const onFocusInput = async () => {
  showTextarea.value = true;
  setTimeout(() => {
    textareaEl.value?.focus();
  }, 100);
};

// 失去焦点 保存
const onBlurTextarea = async () => {
  await nextTick();
  setTimeout(() => {
    showTextarea.value = false;
  }, 0);
};
const placeholder = computed(() => {
  if (replyInfo.value?.name) {
    return `@${replyInfo.value.name}`;
  }
  return t("saySomething");
});
const onSubmit = async () => {
  if (!canSubmit.value) {
    return;
  }
  // 评论帖子
  if (replyInfo.value === null) {
    await useSaveComment({
      content: comment.value,
      postsId: route.query.id as string,
      type: 0,
    });
    // 刷新评论列表
    $event("comments:refreshList", {});
  } else {
    // 评论评论
    await useSaveComment({
      content: comment.value,
      postsId: replyInfo.value?.postsId,
      commentId: replyInfo.value?.commentId,
      type: replyInfo.value?.type,
    });

    // notify refresh list

    // 刷新回复评论列表
    $event("comments:refreshReplyList", {
      commentId: replyInfo.value?.commentId ?? "",
    });
  }
  comment.value = "";
  clearReplyInfo();
};
</script>
<template>
  <div v-show="!showTextarea" :class="$style.inputArea">
    <input
      ref="inputEl"
      id="commentInputArea"
      :class="$style.input"
      :placeholder="t('saySomething')"
      @focus="onFocusInput"
    />
    <div :class="$style.actionArea">
      <a href="#commentAreaTitle">
        <IconFont :class="$style.icon" type="comment" />
      </a>
      <!-- <IconFont :class="$style.icon" type="like" /> -->
      <IconLikeWithNum
        :postsId="data?.id ?? ''"
        :total="data?.likesNumber"
        :isLike="data?.isLike === 1"
        :size="'plus'"
        :hideNumber="true"
      />
    </div>
  </div>
  <div v-show="showTextarea" :class="$style.textareaArea">
    <div :class="$style.textareaAreaInner">
      <textarea
        ref="textareaEl"
        @blur="onBlurTextarea"
        :class="$style.textarea"
        :placeholder="placeholder"
        v-model="comment"
      />
    </div>
    <button
      @click.stop="onSubmit"
      :class="[
        $style.submitBtn,
        {
          [$style.submitBtnActive]: canSubmit,
        },
      ]"
    >
      {{ t("send") }}
    </button>
  </div>
</template>
<style module lang="less">
.submitBtn {
  border: none;
  position: absolute;

  bottom: 24px;
  right: 24px;
  // margin-top: 12px;
  font-weight: bold;
  color: var(--theme-main-753c06);
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 32px;
  background: var(--theme-main-gradient-dcb795);
  border-radius: 4px 4px 4px 4px;
  opacity: 0.5;
}
.submitBtnActive {
  opacity: 1;
}
.inputArea {
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  background: var(--theme-neutral-n8-FFFFFF);
  box-shadow: 0px -2px 4px 0px rgba(30, 82, 217, 0.05);
  padding: 7px 16px;
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  gap: 26px;
  .input {
    width: 255px;
    height: 36px;
    box-sizing: border-box;
    padding: 8px;
    background: var(--theme-neutral-n8-F8F9FA);
    font-size: 14px;
    font-weight: 400;
    color: var(--theme-neutral-n4-bbbdbf);
    border-radius: 4px;
    border: none;
    &::placeholder {
      /* Most modern browsers support this now. */
      color: var(--theme-neutral-n4-bbbdbf);
    }
  }
  .actionArea {
    display: flex;
    gap: 20px;
  }

  .icon {
    width: 24px;
    height: 24px;
    color: var(--theme-neutral-n3-969799);
  }
}
.textareaArea {
  position: relative;
  height: 120px;
  box-sizing: border-box;
  width: 100%;
  height: 128px;
  background-color: var(--theme-neutral-n8-FFFFFF);

  // margin: 0 16px;
  // padding: 16px 0 32px 0;
  padding: 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  .textareaAreaInner {
    width: 100%;
    height: 100%;
    background-color: var(--theme-neutral-n8-F8F9FA);
  }
  .textarea {
    background-color: var(--theme-neutral-n8-F8F9FA);
    box-sizing: border-box;
    padding: 10px;
    // height: 100%;
    height: 50px;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    color: var(--theme-neutral-n1-323233);
    line-height: 20px;
    border: none;
    &::placeholder {
      /* Most modern browsers support this now. */
      color: var(--theme-neutral-n4-bbbdbf);
    }
  }
}
</style>
