import profile from "./package.json";
import path from "path";

import { loadEnv } from "vite";
const npm_lifecycle_script = process.env.npm_lifecycle_script as string;
const mode: { [key in string]: string } = {
  "nuxt dev": "dev",
  "nuxt build": "prod",
};
const envData = loadEnv(mode[npm_lifecycle_script], process.cwd()); // 获取.env文件中的配置
console.log({ envData, npm_lifecycle_script });
// process.env = { ...process.env, ...envData };

export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    // apiTest: "runtimeConfig/apiTest", // 仅在服务端可获取
    // apiSecret: "",
    public: envData,
  },
  build: {
    transpile: ["dayjs"],
  },
  modules: ["@pinia/nuxt", "@vueuse/nuxt"],
  // nitro: {
  //   devProxy: {
  //     "/gm": {
  //       target: "http://rom-bbs.dev.staryuntech.com:8443",
  //       changeOrigin: true,
  //       prependPath: true,
  //       // rewrite: (path) => path.replace(/^\/gm/, ""),
  //     },
  //   },
  // },
  vite: {
    mode: process.env.NODE_ENV,
    envDir: "./environments/",
    envPrefix: "__",
    define: {
      _VERSION_: JSON.stringify(profile.version),
    },
    // server: {
    //   proxy: {
    //     "/gm": {
    //       target: "http://rom-bbs.dev.staryuntech.com:8443",
    //       changeOrigin: true,
    //       // rewrite: (path) => path.replace(/^\/gm/, ""),
    //     },
    //   },
    // },
  },
  postcss: {
    plugins: {
      "postcss-px-to-viewport-8-plugin": {
        unitToConvert: "px",
        viewportWidth: 375,
        unitPrecision: 6,
      },
    },
  },
  app: {
    baseURL: "/",
    head: {
      script: [
        {
          src: "https://lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_22690_62.9c11474708d2a3db140364bf790484ba.js",

          type: "text/javascript",
        },
      ],
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
      ],
    },
  },
});
