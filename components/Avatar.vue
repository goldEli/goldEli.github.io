<script setup lang="ts">
interface Props {
  size?: "big" | "small";
  src: string;
  showRedDot?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  size: "big",
  showRedDot: false,
});
</script>
<template>
  <div
    :class="[
      $style.container,
      { [$style.big]: props.size === 'big' },
      { [$style.small]: props.size !== 'big' },
    ]"
  >
    <ImageLoading
      :class="[
        { [$style.big]: props.size === 'big' },
        { [$style.small]: props.size !== 'big' },
      ]"
      radius="50%"
      :src="props.src"
    />
    <div v-if="props.showRedDot" :class="$style.dotBox">
      <div :class="$style.dot"></div>
    </div>
  </div>
</template>
<style module lang="less">
.container {
  position: relative;
}
.big {
  width: 32px;
  height: 32px;
}
.small {
  width: 24px;
  height: 24px;
}
.dotBox {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  top: 0px;
  background-color: var(--theme-neutral-n8-FFFFFF);
  box-sizing: border-box;
  padding: 2px;
}
.dot {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--theme-function-danger-FF5C5E);
}
</style>
