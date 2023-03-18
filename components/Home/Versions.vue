<script setup lang="ts">
import { useGetHomeInformation } from "~~/api/home";

const { data } = await useGetHomeInformation();

const arr = data?.value?.data?.list;
</script>

<template>
  <div :class="$style.swiper_area">
    <HomeSwiper />
    <!-- <HomeTopArea v-for="i in arr" :type="i.type" :name="i.name" :key="i.id" /> -->
  </div>
</template>

<style module lang="less">
.swiper_area {
  padding: 0 16px 16px;
  box-sizing: border-box;
}
</style>
