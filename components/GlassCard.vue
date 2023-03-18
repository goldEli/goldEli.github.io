<script setup lang="ts">
interface Props {
  data: Model.Column.Item;
  path: string;
}
const props = withDefaults(defineProps<Props>(), {});

const { onJump } = useJump();
</script>

<template>
  <div
    :class="$style.ground_glass_picture"
    @click.stop="onJump(path, { id: data.id, name: data.name })"
  >
    <ImageLoading :class="$style.img_four" :src="data.icon" />
    <div :class="$style.ground_glass_picture_text">{{ data.name }}</div>
  </div>
</template>

<style module lang="less">
.img_four {
  width: 80px;
  height: 80px;
  border-radius: 4px;
}
.ground_glass_picture {
  position: relative;
}
.ground_glass_picture_text {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 4px;
  left: 0px;
  width: 100%;
  height: 28px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 0px 0px 4px 4px;
  backdrop-filter: blur(3px);
  font-size: 12px;
  font-family: PingFang SC-Medium, PingFang SC;
  font-weight: bold;
  color: #ffffff;
}
</style>
