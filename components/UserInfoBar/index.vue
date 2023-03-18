<script setup lang="ts">
interface Props {
  showActions?: boolean;
  data?: Model.Posts.Info;
}
const props = withDefaults(defineProps<Props>(), {
  showActions: true,
});
const reportStore = useReportFeedbackStore();
</script>
<template>
  <div :class="$style.userInfoBar">
    <div :class="$style.left">
      <Avatar size="big" :src="data?.userAvatar ?? ''" />
    </div>
    <div :class="$style.right">
      <div :class="$style.top">
        <div :class="$style.titleArea">
          <span>{{ data?.createrName }}</span>
          <IconGM v-if="data?.type !== 2" />
        </div>
        <div :class="$style.actionArea" v-if="props.showActions">
          <Translation
            :id="data?.id ?? ''"
            :content="[
              data?.postsSubVo.name ?? '',
              data?.postsSubVo.content ?? '',
            ]"
          >
            <IconReport
              @click.stop="
                reportStore.open({
                  type: 0,
                  postsId: data?.id,
                })
              "
            />
          </Translation>
        </div>
      </div>
      <span :class="$style.time">{{ data?.createTime }}</span>
    </div>
  </div>
</template>
<style module lang="less">
.userInfoBar {
  display: flex;
  gap: 8px;
}
.title {
  font-size: 18px;
  font-weight: 400;
  color: var(--theme-neutral-n1-323233);
  line-height: 26px;
}
.left {
}
.right {
  flex: 1;
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
  .time {
    font-size: 12px;
    font-weight: 400;
    color: var(--theme-neutral-n4-bbbdbf);
  }
}
</style>
