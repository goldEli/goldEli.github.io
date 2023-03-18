<script setup lang="ts">
interface Props {
  commentId?: API.Posts.PostsOrCommentLike.Params["commentId"];
  postsId: API.Posts.PostsOrCommentLike.Params["postsId"];
  total?: number;
  isLike?: boolean;
  size?: "big" | "small" | "plus";
  hideNumber?: boolean;
}
const params = computed(() => ({
  commentId: props?.commentId,
  postsId: props.postsId,
}));
const props = withDefaults(defineProps<Props>(), {
  isLike: true,
  size: "small",
});

const active = ref(true);
const total = ref(0);

watch(
  () => props.isLike,
  (value) => {
    active.value = value;
  },
  {
    immediate: true,
  }
);
watch(
  () => props.total,
  (value) => {
    total.value = value ?? 0;
  },
  {
    immediate: true,
  }
);

const height = computed(() => {
  if (props.size == "plus") {
    return "24px";
  }
  if (props.size === "big") {
    return "20px";
  }
  return "16px";
});
const fontSize = computed(() => {
  if (props.size == "plus") {
    return "13px";
  }
  if (props.size === "big") {
    return "14px";
  }
  return "12px";
});
const onLike = async () => {
  const res = await useApi().usePosts.usePostsOrCommentLike(params);
  if (res.data.value?.code === 200) {
    if (active.value) {
      total.value--;
    } else {
      total.value++;
    }
    active.value = !active.value;
  }
};
</script>
<template>
  <div :class="$style.box" :style="{ height: height }">
    <div
      :class="[$style.box]"
      class="like-btn-color"
      :style="{ height: height }"
      @click.stop="onLike"
    >
      <IconFont
        v-if="!active"
        type="like"
        :class="[
          $style.likeBtn,
          {
            [$style.likeBtn_active]: active,
          },
        ]"
        :style="{ height: size, width: height }"
      />
      <IconFont
        v-else
        :style="{ height: size, width: height }"
        :class="$style.likeBtnActive"
        type="like-s"
      />
    </div>
    <span
      v-if="!hideNumber"
      :class="[$style.likeNumber, { [$style.likeNumber_active]: active }]"
      :style="{ fontSize: fontSize, lineHeight: height }"
      >{{ formatNumber(total) }}</span
    >
  </div>
</template>
<style module lang="less">
@keyframes zan {
  0% {
    transform: scale(100%);
  }
  50% {
    transform: scale(150%);
  }
  100% {
    transform: scale(100%);
  }
}

.box {
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 2px;
  //   height: 16px;
}
.likeNumber {
  color: var(--theme-neutral-n3-969799);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  &_active {
    // background: var(--theme-main-sub-gradient-fe5d5d);
    // -webkit-background-clip: text;
    // color: transparent;
    color: #fe5d5d;
  }
}

:global(.like-btn-color) {
  color: var(--theme-neutral-n3-969799);
}
.likeBtnActive {
  animation-name: zan;
  animation-duration: 1s;
}
</style>
