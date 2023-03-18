import { defineStore } from "pinia";
import { doTranslate } from "~~/api/translate";

const getTranslation = async (content: string) => {
  // const config = useRuntimeConfig(); // 3.0正式版环境变量要从useRuntimeConfig里的public拿
  const lan = useGetLanguage();

  const params = {
    sourceLang: "123",
    targetLang: lan.value,
    content,
  };

  const res = await doTranslate(params);
  return res.data?.content ?? "";
};

export const useTranslationContentStore = defineStore(
  "translationContentStore",
  () => {
    // 所有需要翻译的id
    const translateContent = ref<{
      [key in string]: string[];
    }>({});

    const onChange = async (id: string, content?: string[]) => {
      // 如果存在就移除
      const isHas = !!translateContent.value[id];

      if (isHas) {
        delete translateContent.value[id];
        return;
      }
      if (content) {
        const promises = content.map((item) => {
          return getTranslation(item);
        });
        Promise.all(promises).then((values) => {
          if (!!values.length) {
            translateContent.value[id] = values ?? [];
          }
        });
      }
    };

    return { onChange, translateContent };
  }
);
