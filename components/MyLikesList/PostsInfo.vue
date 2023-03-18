<script setup lang="ts">
interface Props {
  data: Model.Message.Info;
}


const props = withDefaults(defineProps<Props>(), {});
</script>
<template>
  <div :class="$style.container">
    <div v-if="props.data.messageType === 1" :class="$style.yourCommentArea">
      <!-- <span :class="$style.name"> {{ props.comment?.name }}:&nbsp; </span> -->
      <span :class="$style.comment">
        {{ data?.content }}
      </span>
    </div>
    <div v-else :class="$style.postsInfo">
      <div :class="$style.title">
        {{ data.postsName }}
      </div>
      <ImageLoading
        v-if="!!data.postsLogo"
        :class="$style.img"
        :src="data.postsLogo"
      />
    </div>
  </div>
</template>
<style module lang="less">
.container {
  background: var(--theme-neutral-n8-F8F9FA);
  border-radius: 4px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.postsInfo {
  display: flex;
  gap: 8px;
}
.title {
  font-size: 16px;
  font-weight: 400;
  color: var(--theme-neutral-n1-323233);
  flex: 1;
}
.img {
  width: 104px;
  border-radius: 5px;
}
.yourCommentArea {
  font-size: 16px;
  font-weight: 400;
}
.name {
  color: var(--theme-main-753c06);
}
.comment {
  color: var(--theme-neutral-n1-323233);
}
</style>
