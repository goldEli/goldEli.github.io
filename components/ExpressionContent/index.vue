<script setup lang="ts">
import { Popup } from "vant";
const { t } = useTranslate();
const show = ref(false);
const emit = defineEmits<{
  (e: "onClick", val: string): void;
}>();
const showPopup = () => {
  show.value = true;
};

const list = ref([
  "😝",
  "😜",
  "🤪",
  "🤨",
  "🧐",
  "😛",
  "😋",
  "😚",
  "😙",
  "😗",
  "😉",
  "😌",
  "😍",
  "🥰",
  "😘",
  "🙃",
  "🙂",
  "😇",
  // "☺️",
  // "☺️",
  "😅",
  "😂",
  "🤣",
  "🤓",
  "😎",
  "🤩",
  "🥳",
  "😢",
  "😭",
  "😤",
  "😠",
  "😡",
  "🤬",
  "😳",
  "😱",
  "😨",
  "😰",
  "🤔",
  "🤫",
  "🙄",
  "😮‍💨",
  "🤢",
  "😷",
  "🤧",
  "🤕",
  "👏",
  "👍",
  "👌",
]);
</script>

<template>
  <IconFont
    :class="$style.area_wrap_icon"
    type="expression-01"
    @click="showPopup"
  />
  <Popup
    v-model:show="show"
    position="bottom"
    :style="{ padding: '24px 38px' }"
    closeable
    teleport="body"
  >
    <div :class="$style.list">
      <div
        :class="$style.icon_item"
        v-for="item in list"
        :key="item"
        @click="emit('onClick', item)"
      >
        {{ item }}
      </div>
    </div>
  </Popup>
</template>

<style module lang="less">
.area_wrap_icon {
  width: 24px;
  height: 24px;
}
.icon_item {
  width: 48px;
  height: 48px;
}
.list {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}
</style>
