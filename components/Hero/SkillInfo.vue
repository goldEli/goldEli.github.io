<script setup lang="ts">
interface Props {
  data: Model.Hero.HeroSkill;
  active: boolean;
}
const props = withDefaults(defineProps<Props>(), {});

const src = computed(() => {
  return props.data.type === 0
    ? props.data.skillAwakeningIcon
    : props.data.skillEffectIcon;
});
</script>

<template>
  <div :class="[$style.skill_item, { [$style.skill_item_active]: active }]">
    <ImageLoading radius="4px" :class="$style.skill_item_img" :src="src" />
    <IconFont
      v-if="active"
      :class="$style.skill_item_active_icon"
      type="triangle"
    />
  </div>
</template>

<style module lang="less">
.skill_item_active_icon {
  width: 16px;
  height: 16px;
  position: absolute;
  transform: translate(-50%, 0%);
  left: 50%;
  bottom: -20px;
  color: var(--theme-main-753c06);
}
.skill_item_img {
  width: 40px;
  height: 40px;
}
.skill_item {
  position: relative;
  width: 40px;
  height: 40px;
  border: 1px solid;
  // border-image: var(--theme-main-gradient-dcb795) 1 1;
  border-color: #dcb795;
  border-radius: 4px;
  // clip-path: inset(0px round 4px);
}
.skill_item_active {
  border: 1px solid var(--theme-main-753c06);
  border-radius: 4px;
}
</style>
