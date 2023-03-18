<script setup lang="ts">
interface Props {
  src?: string;
  radius?: string;
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <VanImage
    class="image-loading"
    :radius="props.radius ?? '4px'"
    fit="cover"
    :src="props.src"
    alt=""
  >
    <template v-slot:loading>
      <div :class="$style.img_loading">
        <IconFont :class="$style.img_loading_icon" type="img-01" />
      </div>
    </template>
    <template v-slot:error>
      <div :class="$style.img_loading">
        <IconFont :class="$style.img_loading_icon" type="img-01" />
      </div>
    </template>
  </VanImage>
</template>

<style module lang="less">
.img_loading_icon {
  width: 32px;
  height: 32px;
  color: var(--theme-main-gradient-dcb795);
}
.img_loading {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--theme-main-sub-fffcf4);
}
</style>
