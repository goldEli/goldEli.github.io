<script setup lang="ts">
const props = defineProps<{
  post: Model.Posts.Info;
}>();
const { goToPostsDetailsCommentsArea } = useGoToPostsDetails();
</script>

<template>
  <div :class="$style.post_content_operation">
    <div :class="$style.post_content_operation_item">
      <IconFont
        :class="$style.post_content_operation_item_icon"
        type="eye-open"
      />
      <span> {{ formatNumber(props.post.viewsNumber) }}</span>
    </div>
    <div
      :class="[
        $style.post_content_operation_item,
        $style.post_content_operation_item_comment,
        {
          [$style.post_content_operation_item_active]:
            props.post.isComments === 1,
        },
      ]"
      @click.stop="goToPostsDetailsCommentsArea(post.id)"
    >
      <IconFont
        :class="$style.post_content_operation_item_icon"
        type="comment"
      />
      <span> {{ formatNumber(props.post.commentsNumber) }}</span>
    </div>
    <IconLikeWithNum
      :postsId="post.id"
      :isLike="post.isLike === 1"
      :total="post.likesNumber"
      :size="'big'"
    />
    <!-- <div
      @click.stop="easyLikeState = !easyLikeState"
      :class="[
        $style.post_content_operation_item,
        { [$style.post_content_operation_item_active]: !easyLikeState },
      ]"
    >
      <IconFont
        v-if="easyLikeState"
        :class="$style.post_content_operation_item_icon"
        type="like"
      />
      <span v-else :class="$style.post_content_operation_item_icon_active">
        <IconFont
          :class="$style.post_content_operation_item_icon_active"
          type="like-s"
        />
      </span>

      <span> {{ formatNumber(props.post.likesNumber) }}</span>
    </div> -->
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

.post_content_operation_item_icon {
  width: 20px;
  height: 20px;
  margin-right: 1px;
}
.post_content_operation_item_icon_active {
  width: 20px;
  height: 20px;
  margin-right: 1px;
  animation-name: zan;
  animation-duration: 1s;
}
.post_content_operation_item {
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 13px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: var(--theme-neutral-n4-bbbdbf);
  &_active {
    color: #feaa5d;
  }
}
.post_content_operation_item_comment {
  color: var(--theme-neutral-n3-969799);
}
.post_content_operation {
  margin-top: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
}
</style>
