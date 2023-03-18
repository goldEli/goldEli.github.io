import { computed, Ref } from "vue";
import { useGetConfig } from "~~/api/config";

import { defineStore } from "pinia";

export const useHeroClassifyStore = defineStore("heroClassifyStore", () => {
  const res = useGetConfig();

  const heroTypeActiveList = ref<number[]>([]);
  const heroQualityActiveList = ref<number[]>([]);

  const heroTypeList = computed(() => res.data.value?.data?.heroType.list);
  const heroQualityList = computed(
    () => res.data.value?.data?.heroQuality.list
  );

  const titleHeroType = computed(() => {
    return res.data.value?.data?.heroType.name;
  });
  const titleHeroQuality = computed(() => {
    return res.data.value?.data?.heroQuality.name;
  });

  const onActive = (code: number, data: Ref<number[]>) => {
    if (data.value?.includes(code)) {
      data.value = data.value.filter((item) => item !== code);
      return;
    }
    data.value.push(code);
  };

  const onChange = (code: number, type: "type" | "quality") => {
    if (type === "quality") {
      onActive(code, heroQualityActiveList);
      return;
    }
    onActive(code, heroTypeActiveList);
  };

  return {
    onChange,
    titleHeroType,
    titleHeroQuality,
    heroTypeList,
    heroQualityList,
    heroTypeActiveList,
    heroQualityActiveList,
  };
});
