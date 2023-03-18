<script setup lang="ts">
import { storeToRefs } from "pinia";
import useNavigationBarStore from "~~/composables/useNavigationBarStore";

const { onJump } = useJump();
const navigationBarStore = useNavigationBarStore();
const { showTabBar, navigation, active } = storeToRefs(navigationBarStore);

function handleClick(url: string) {
  onJump(url);
}
</script>

<template>
  <van-tabbar
    :class="$style.wrap"
    v-if="showTabBar"
    inactive-color="#d5d6d9"
    v-model="active"
  >
    <van-tabbar-item
      v-for="i in navigation"
      :label="i.name"
      @click="handleClick(i.to)"
    >
      {{ i.name }}
      <template #icon>
        <IconFont
          v-if="i.id === active"
          :class="$style.icon"
          :type="i.activeIcon"
        />
        <IconFont v-else :class="$style.icon" :type="i.icon" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<style module lang="less">
.wrap {
  box-shadow: 0px -2px 4px 0px rgba(30, 82, 217, 0.05);
  :global(.van-tabbar-item--active) {
    background: var(--theme-main-gradient-dcb795);
    -webkit-background-clip: text;
    color: transparent;
  }
}

.icon {
  width: 26px;
  height: 26px;
}
</style>
