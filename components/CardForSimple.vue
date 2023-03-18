<script setup lang="ts">
interface Props {
  data?: Model.Posts.Info;
}
const props = withDefaults(defineProps<Props>(), {});
const { goToPostsDetails } = useGoToPostsDetails();
</script>

<template>
  <div
    v-if="!!data"
    :class="$style.wrap"
    @click.stop="data?.id && goToPostsDetails(data?.id)"
  >
    <div :class="$style.wrap_left">
      <div :class="$style.wrap_left_text">
        {{ data.postsSubVo.name }}
      </div>
      <div :class="$style.wrap_left_info">
        <span>{{ data.createTime }}</span>
        <div :class="$style.post_content_operation_item">
          <IconFont
            :class="$style.post_content_operation_item_icon"
            type="comment"
          />
          <span> {{ formatNumber(data.commentsNumber) }}</span>
        </div>
      </div>
    </div>
    <ImageLoading :class="$style.img_four" :src="data.picture" />
  </div>
</template>

<style module lang="less">
.img_four {
  width: 104px;
  height: 80px;
  border-radius: 4px;
}
.wrap_left_info {
  display: flex;
  align-items: center;
  span {
    font-size: 12px;
    font-family: PingFang SC-Regular, PingFang SC;
    font-weight: 400;
    color: #969799;
    line-height: 16px;
    margin-right: 25px;
  }
}
.wrap_left_text {
  font-size: 16px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: #323233;
  line-height: 22px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden; //溢出内容隐藏
  text-overflow: ellipsis; //文本溢出部分用省略号表示
  display: -webkit-box; //特别显示模式
  -webkit-line-clamp: 2; //行数
  line-clamp: 2;
  -webkit-box-orient: vertical; //盒子中内容竖直排列
}
.wrap_left {
  display: flex;
  flex-direction: column;
  width: 230px;
  justify-content: space-between;
}
.wrap {
  display: flex;
  justify-content: space-between;
  margin: 16px 0px 32px 0px;
}
.post_content_operation_item_icon {
  width: 20px;
  height: 20px;
  margin-right: 1px;
}
.post_content_operation_item {
  display: flex;
  gap: 2px;
  align-items: center;
  font-size: 13px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: #bbbdbf;
  &_active {
    color: #feaa5d;
  }
}
</style>
