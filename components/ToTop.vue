<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from "vue";

// import useGlobalStore from '@/stores/global'

const data = reactive({
  visible: false,
});
let timeout: NodeJS.Timeout;
const checkVisible = () => {
  timeout ? clearTimeout(timeout) : null;

  data.visible = true;

  timeout = setTimeout(() => {
    data.visible = false;
  }, 2000);
};

onMounted(() => window.addEventListener("scroll", checkVisible));
onUnmounted(() => window.removeEventListener("scroll", checkVisible));

const goTop = () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

// const globalStore = useGlobalStore()
</script>

<template>
  <div v-show="data.visible" @click="goTop" :class="$style.wrap">
    <IconFont :class="$style.wrap_icon" type="up-page" />
  </div>
</template>

<style module lang="less">
.wrap_icon {
  width: 24px;
  height: 24px;
  color: #763d07;
}
.wrap {
  width: 32px;
  height: 56px;
  background: linear-gradient(121deg, #dcb795 0%, #f6d188 100%);
  border-radius: 8px 0px 0px 8px;
  opacity: 1;
  position: fixed;
  z-index: 9990;
  bottom: 50%;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
