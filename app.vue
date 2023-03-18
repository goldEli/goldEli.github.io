<script setup lang="ts">
import "@/assets/style/variable.css";
import "@/utils/listenKeyboard";
// import { useStorage } from "@vueuse/core";
// import { showToast } from "vant";
// const globalStore = useGlobalStore();
// const store = useReportFeedbackStore();
// const route = useRoute();
// const navigationBarStore = useNavigationBarStore();
// const loading = ref(false);
// // const errorMessage = ref("");
// const token = useStorage("token", "");
// // const userInfo = await useUserInfo();

// watch(
//   () => route.path,
//   (value) => {
//     navigationBarStore.onShowTabBar(value);
//     navigationBarStore.onActive(value);
//   },
//   {
//     immediate: true,
//   }
// );

// onMounted(() => {
//   if (!route.query.token) {
//     return;
//   }
//   token.value = route.query.token as string;
// });

// watchEffect(() => {
//   if (!!token.value) {
//     loading.value = false;
//     return;
//   }
//   loading.value = true;
// });
</script>

<template>
  <!-- <HomeLoadingPage v-if="loading" /> -->

  <NuxtPage />
</template>
<style lang="less">
.global_wrap {
  padding: 45px 0;
  // background-color: var(--theme-neutral-n3-969799);
}

@font-face {
  font-family: myFirstFont;
  font-display: swap;
  src: url("/assets/SourceHanSerifCN-Regular.eot.otf");
}
a,
div,
span,
p,
ul,
li {
  -webkit-touch-callout: none;
  user-select: none;
}
#app {
  font-family: myFirstFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  border: 0;
}

body {
  padding: 0;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
  overflow-x: hidden;
  font-family: PingFang SC-Medium, PingFang SC;
}

a {
  color: inherit;
  text-decoration: none;
}

ul,
ol,
li,
div,
p {
  padding: 0;
  margin: 0;
  list-style: none;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>
