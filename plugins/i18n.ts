import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import zhHK from "../locales/zh-HK.json";
import zh from "../locales/zh.json";
import vi from "../locales/vi-VN.json";
import th from "../locales/en_TH.json";
import pt from "../locales/pt-PT.json";
import id from "../locales/en_ID.json";

type Keys = typeof zh;
const i18n = createI18n<[Keys], Language>({
  legacy: false,
  globalInjection: true,
  locale: "zh",
  fallbackLocale: "zh",
  messages: { en, zh, "zh-HK": zhHK, id, th, pt, vi },
});
export const i18nGlobal = i18n;
export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(i18n);
});
