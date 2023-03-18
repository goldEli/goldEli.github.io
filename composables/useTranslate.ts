/**
 * 国际化hook
 */
import { useI18n } from "vue-i18n";
import en from "../locales/en.json";
import zhHK from "../locales/zh-HK.json";
import zh from "../locales/zh.json";
import vi from "../locales/vi-VN.json";
import th from "../locales/en_TH.json";
import pt from "../locales/pt-PT.json";
import id from "../locales/en_ID.json";
// define message schema for Vue component
type MessageSchema = typeof zh;

// define number format schema for Vue component
type NumberSchema = {
  // currency: {
  //   style: "currency";
  //   currencyDisplay: "symbol";
  //   currency: string;
  // };
};

const useTranslate = () => {
  const i18n = useI18n<
    {
      message: MessageSchema;
      number: NumberSchema;
    },
    Language
  >({
    inheritLocale: true,
    messages: { en, zh, "zh-HK": zhHK, id, th, pt, vi },
    // numberFormats: {
    //   zh: {},
    // },
  });
  const language = useGetLanguage();
  i18n.locale.value = language.value;
  const { t, n } = i18n;
  return { t, n };
};

export default useTranslate;
