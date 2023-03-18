<script setup lang="ts">
/**
 * 视屏展示
 */

interface Props {
  src?: string;
}
const props = withDefaults(defineProps<Props>(), {});
</script>
<template>
  <iframe
    v-if="!!props.src"
    :class="$style.videoArea"
    :src="props.src"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</template>
<style module lang="less">
.videoArea {
  width: 100%;
  box-sizing: border-box;
  height: 173px;
  border-radius: 4px;
}
</style>
