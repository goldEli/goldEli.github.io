<script setup lang="ts">
import { Badge } from "vant";
interface Props {
  color: string;
  iconColor: string;
  type: string;
  tag: number;
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <Badge :offset="[-5, 5]" :content="props?.tag" :show-zero="false">
    <div :style="{ backgroundColor: props.color }" :class="$style.item">
      <IconFont
        :style="{ color: props.iconColor }"
        :class="$style.item_icon"
        :type="props.type"
      />
    </div>
  </Badge>
</template>

<style module lang="less">
.item {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
  border-radius: 48px 48px 48px 48px;
  margin-bottom: 8px;
}
.item_icon {
  width: 24px;
  height: 24px;
}
</style>
