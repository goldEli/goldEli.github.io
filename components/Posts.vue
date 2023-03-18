<script setup lang="ts">
const emit = defineEmits<{
  (e: "onDel", val: string): void;
}>();
const props = defineProps<{
  posts: Model.Posts.Info;
  showDelIcon?: boolean;
}>();
const reportStore = useReportFeedbackStore();

const { goToPostsDetails } = useGoToPostsDetails();

const showVideos = computed(() => !!props.posts.videoUrl);
const isOfficial = computed(() => props.posts.type !== 2);
</script>

<template>
  <div :class="$style.content_wrap" @click="goToPostsDetails(posts.id)">
    <div :class="$style.content_wrap_first">
      <AvatarDisplayBar :post="posts" />
      <Translation
        v-if="!isOfficial"
        :content="[props.posts.postsSubVo.name, props.posts.postsSubVo.content]"
        :id="posts.id"
      >
        <IconFont
          v-if="showDelIcon"
          @click.stop="emit('onDel', posts.id)"
          type="del-01"
          :class="$style.icon"
        />
        <IconFont
          v-else
          @click.stop="reportStore.open({ type: 0, postsId: posts.id })"
          type="report-01"
          :class="$style.icon"
        />
      </Translation>
    </div>

    <PostsAreaOfficialVideoArea v-if="showVideos" :src="posts.videoUrl" />
    <ContentPictureDisplayBar v-if="!showVideos" :post="props.posts" />
    <TopicsBar :topics="props.posts.tagVoList" />
    <CommentActionBar :post="props.posts" />
  </div>
</template>

<style module lang="less">
.icon {
  width: 20px;
  height: 20px;
}
.content_wrap_first {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.content_wrap {
  margin-bottom: 8px;
  background-color: white;
  box-sizing: border-box;
  padding: 16px;
}
</style>
