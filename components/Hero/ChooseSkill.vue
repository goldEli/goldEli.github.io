<script setup lang="ts">
import SkillInfo from "./SkillInfo.vue";
interface Props {
  data: Model.Hero.HeroSkill[];
}
const props = withDefaults(defineProps<Props>(), {});
const { t } = useTranslate();
const currentId = ref("");

const emit = defineEmits(["choose"]);

watch(
  props.data,
  (val) => {
    currentId.value = val[0].id;
  },
  {
    immediate: true,
  }
);
const onChoose = (i: string) => {
  currentId.value = i;
};
</script>

<template>
  <div :class="$style.title">{{ t("skillsIntroduction") }}</div>
  <div :class="$style.skill">
    <SkillInfo
      v-for="item of data"
      :data="item"
      :active="currentId === item.id"
      @click="onChoose(item.id)"
    />
  </div>
  <HeroIntroductionToSkills
    :data="data.find((item) => item.id === currentId)"
  />
</template>

<style module lang="less">
.skill {
  margin-top: 16px;
  margin-bottom: 32px;
  height: 60px;
  display: flex;
  gap: 28px;
  overflow-x: auto;
  overflow-y: hidden;
}
.title {
  margin-top: 16px;
  height: 22px;
  font-size: 16px;
  font-weight: bold;
  color: #323233;
  line-height: 22px;
}
</style>
