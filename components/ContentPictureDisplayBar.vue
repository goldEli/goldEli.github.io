<script setup lang="ts">
import { showImagePreview } from "vant";

interface Props {
  post?: Model.Posts.Info;
  fullDescription?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  fullDescription: false,
});
const translationStore = useTranslationContentStore();
const title = ref("");
const description = ref("");
const pictureList = ref<string[]>([]);

watchEffect(() => {
  // 官帖图文贴
  if (props.post?.type === 0) {
    pictureList.value = [props.post.picture ?? ""];
  }
  // 用户贴
  if (props.post?.type === 2) {
    pictureList.value = props.post.userPictureList;
  }
});

watchEffect(() => {
  title.value = props.post?.postsSubVo.name ?? "";
  description.value = props.post?.postsSubVo.content ?? "";
});

watchEffect(() => {
  if (props?.post?.id === void 0) {
    return;
  }
  // 判断是否存在
  const content = translationStore.translateContent[props.post.id];
  if (content) {
    // 调接口 返回数据
    // content.value =
    title.value = content[0];
    description.value = content[1];
  } else {
    title.value = props.post.postsSubVo.name;
    description.value = props.post.postsSubVo.content;
  }
});
const onPreviewImage = (images: string[], startPosition: number) => {
  showImagePreview({
    images,
    startPosition,
  });
};
</script>

<template>
  <div :class="$style.content_info_title">
    {{ title }}
  </div>
  <div :class="$style.descriptionBox">
    <div
      v-html="description"
      :class="[{ [$style.briefDescription]: !fullDescription }]"
    />
  </div>
  <!-- {{ description }} -->
  <!-- </div> -->
  <div v-if="pictureList.length === 1" :class="$style.image_area">
    <ImageLoading
      @click.stop="onPreviewImage(pictureList, idx)"
      v-for="(i, idx) of pictureList"
      fit="cover"
      :src="i"
      alt=""
    />
  </div>
  <div v-if="pictureList.length > 1" :class="$style.image_area_more">
    <ImageLoading
      @click.stop="onPreviewImage(pictureList, idx)"
      v-for="(i, idx) of pictureList"
      fit="cover"
      :src="i"
      alt=""
    />
  </div>
</template>

<style module lang="less">
.image_area_more {
  margin-top: 8px;
  display: flex;
  gap: 2px;
  flex-wrap: wrap;
  img {
    width: 113px;
    height: 113px;
    background: #d9d9d9;
    border-radius: 4px 4px 4px 4px;
    opacity: 1;
  }
}
.image_area {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  margin-top: 8px;
  height: 193px;
  img {
    width: 100%;
    height: 193px;
    background: #d9d9d9;
    border-radius: 4px 4px 4px 4px;
    opacity: 1;
  }
}
.descriptionBox {
  a {
    // list-style: unset;
    color: blue;
    text-decoration: underline;
  }
  font-size: 14px;
  font-weight: 400;
  color: #969799;
  line-height: 20px;
  img {
    width: 100%;
    display: none;
  }
}
.briefDescription {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden; //溢出内容隐藏
  text-overflow: ellipsis; //文本溢出部分用省略号表示
  display: -webkit-box; //特别显示模式
  -webkit-line-clamp: 2; //行数
  line-clamp: 2;
  -webkit-box-orient: vertical; //盒子中内容竖直排列
}
.fullDescription {
}
.content_info_title {
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 16px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: #323233;
  line-height: 22px;
}
</style>
