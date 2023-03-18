<script setup lang="ts">
interface Props {
  data: Model.Comments.Comment;
}
const props = withDefaults(defineProps<Props>(), {});
const reportStore = useReportFeedbackStore();
</script>
<template>
  <div :class="$style.top">
    <div :class="$style.titleArea">
      <span>{{ data.createrName }}</span>
      <IconGM v-if="data.isOfficial === 1" />
    </div>
    <div :class="$style.actionArea">
      <Translation :id="data.id" :content="[data.content]">
        <IconReport
          @click.stop="
            reportStore.open({
              type: 1,
              commentId: data.id,
              postsId: data.postsId,
            })
          "
        />
      </Translation>
    </div>
  </div>
</template>
<style module lang="less">
.top {
  display: flex;
  justify-content: space-between;
  .titleArea {
    display: flex;
    gap: 12px;
    height: 20px;
    align-items: center;
    overflow: hidden;
    flex: 1;
    line-height: 20px;
  }
  .actionArea {
    display: flex;
    align-items: center;
    height: 20px;
    gap: 17px;
    overflow: hidden;
  }
}
</style>
