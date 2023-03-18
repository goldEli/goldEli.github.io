<script setup lang="ts">
import { useSetMessageRead } from "~~/api/mine";

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

const props = withDefaults(defineProps<Props>(), {});
</script>
<template>
  <div :class="$style.container" @click.stop="onRead">
    <MyLikesListItemHeader :show-time="false" :data="data" />
    <!-- <div :class="$style.text">
      <span :class="$style.replayText">回复你:&nbsp;</span
      ><span>{{ data.content }}</span>
    </div> -->
    <!-- <MyLikesListPostsInfo :data="data" /> -->
    <div :class="$style.messageBox">
      <div :class="$style.postsContent">
        <div :class="$style.textBox">
          <div :class="$style.title">
            {{ data.postsName }}
          </div>
          <!-- <div :class="$style.content">
            {{ data.postsName }}
          </div> -->
        </div>
        <ImageLoading
          v-if="!!data.postsLogo"
          :class="$style.img"
          :src="data.postsLogo"
        />
      </div>
      <div :class="$style.time">{{ data.createTime }}</div>
    </div>
  </div>
</template>
<style module lang="less">
.container {
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
  background: var(--theme-neutral-n8-FFFFFF);
  display: flex;
  flex-direction: column;
  gap: 16px;
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
.messageBox {
  display: flex;
  flex-direction: column;
  // gap: 8px;
  .postsContent {
    display: flex;

    justify-content: space-between;
    .textBox {
      display: flex;
      flex-direction: column;
      gap: 8px;
      .title {
        font-size: 16px;
        font-weight: 400;
        color: var(--theme-neutral-n1-323233);
        width: 221px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .content {
        font-size: 14px;
        font-weight: 400;
        color: var(--theme-neutral-n3-969799);
        width: 221px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .img {
      width: 104px;
      height: 64px;
      border-radius: 5px;
    }
  }
  .time {
    font-size: 12px;
    font-weight: 400;
    color: var(--theme-neutral-n3-969799);
  }
}
</style>
