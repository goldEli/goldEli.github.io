import { AsyncData } from "nuxt/dist/app/composables";
import { hash } from "ohash";
import { showNotify } from "vant";
import { useStorage } from "@vueuse/core";

// 后端返回的数据类型
export interface ResOptions<T> {
  data?: T;
  code?: 200;
  message?: string;
}

type Options = Parameters<typeof $fetch>[1];

/**
 * api请求封装
 * @param { String } url 请求地址
 * @param { Object } options useFtech第二个参数
 */
const http = <T>(url: string, options?: Options) => {
  const config = useRuntimeConfig(); // 3.0正式版环境变量要从useRuntimeConfig里的public拿
  const reqUrl = (config.public.VITE_APP_BASE_URL ?? "") + url; // 你的接口地址
  const { params, headers = {} } = options || {};
  const lan = useGetLanguage();

  const token = useStorage("token", "");

  // 可以设置默认headers例如
  const customHeaders: HeadersInit = {
    token: token.value as string,
    lan: lan.value,
    "Content-Type": "application/json",
    ...headers,
  };

  if (options?.params && options?.method === "get") {
    options.params = handleParams(options?.params);
  }

  if (options && options?.method != "get" && options?.params) {
    options.body = options?.params;
    delete options.params;
  }

  const res = $fetch<ResOptions<T>>(reqUrl, {
    ...options,
    headers: customHeaders ?? {},
  });
  res.then((val) => {
    if (val.code !== 200) {
      showNotify({
        type: "danger",
        message: val.message,
      });
    }
  });

  return res;
};

const useRequest = {
  get<T>(url: string, options?: Options) {
    return http<T>(url, { ...options, method: "get" });
  },

  post<T>(url: string, options?: Options) {
    return http<T>(url, { ...options, method: "post" });
  },

  put<T>(url: string, options?: Options) {
    return http<T>(url, { ...options, method: "put" });
  },

  delete<T>(url: string, options?: Options) {
    return http<T>(url, { ...options, method: "delete" });
  },
};

export default useRequest;
