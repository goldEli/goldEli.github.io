<script setup lang="ts">
interface Props {
  data?: Model.Hero.HeroSkill;
}
const props = withDefaults(defineProps<Props>(), {});

const activeInfo = computed(() => {
  return [
    {
      title: t("activeSkills"),
      anger: props.data?.angerNeeds,
      des: props.data?.skillEffect,
    },
    {
      title: t("activeAwakeningSkills"),
      anger: props.data?.angerNeeds,
      des: props.data?.skillAwakening,
    },
  ];
});
const passiveInfo = computed(() => {
  return [
    {
      title: t("passiveSkills"),
      anger: props.data?.angerNeeds,
      des: props.data?.skillEffect,
    },
  ];
});

const info = computed(() =>
  props.data?.type === 0 ? activeInfo.value : passiveInfo.value
);

const { t } = useTranslate();
</script>

<template>
  <div :class="$style.box">
    <div :class="$style.title">{{ data?.name }}</div>
    <div :class="$style.inner_three" v-for="(item, index) in info">
      <div :class="$style.itemTitle">{{ item.title }}</div>
      <div :class="$style.angerText">
        {{ t("angerDemand") }}：{{ item.anger }}
      </div>
      <div :class="$style.des">
        {{ item.des }}
      </div>
    </div>
  </div>
</template>

<style module lang="less">
.box {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.inner_three {
  .itemTitle {
    height: 20px;
    font-size: 14px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: bold;
    color: var(--theme-neutral-n1-323233);
    line-height: 20px;
  }
  .angerText {
    height: 20px;
    font-size: 14px;
    font-family: PingFang SC-Regular, PingFang SC;
    font-weight: 400;
    color: var(--theme-neutral-n3-969799);
    line-height: 20px;
    margin: 4px 0 12px 0;
  }
  .des {
    font-size: 14px;
    font-family: PingFang SC-Regular, PingFang SC;
    font-weight: 400;
    color: var(--theme-neutral-n1-323233);
    line-height: 20px;
  }
}
.title {
  margin-top: 16p;
  height: 22px;
  font-size: 16px;
  font-weight: bold;
  color: var(--theme-main-753c06);
  line-height: 22px;
}
</style>
