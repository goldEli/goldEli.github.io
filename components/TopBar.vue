<script setup lang="ts">
import { showSearchPaths, showNothingPaths } from "@/constants/topBar";

const language = useGetLanguage();
const global = useGlobalStore();
const route = useRoute();
const router = useRouter();
const showSearch = ref(false);
const showGoBack = ref(false);

watchEffect(() => {
  showSearch.value = false;
  showGoBack.value = false;
  // 显示搜索按钮
  if (showSearchPaths.some((item) => route.path.includes(item))) {
    showSearch.value = true;
    return;
  }
  // 什么都不显示
  if (showNothingPaths.some((item) => route.path.includes(item))) {
    return;
  }
  // 默认都显示返回按钮
  showGoBack.value = true;
});

const goBack = () => {
  router.back();
};
</script>

<template>
  <van-nav-bar fixed :title="global.title">
    <template v-if="showSearch" #left>
      <NuxtLink :to="`/${language}/search`">
        <IconFont :class="$style.icon_size" type="search" />
      </NuxtLink>
    </template>

    <template v-if="showGoBack" #left>
      <IconFont @click="goBack" :class="$style.icon_size" type="left" />
    </template>

    <template #right>
      <IconFont :class="$style.icon_size" type="close-03-84c34o3f" />
    </template>
  </van-nav-bar>
</template>

<style module lang="less">
.van-hairline--bottom:after {
  border: none;
}
[class*="van-hairline"]:after {
  border: none;
}
.icon_size {
  width: 24px;
  height: 24px;
}
</style>
