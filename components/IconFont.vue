<script setup lang="ts">
const props = defineProps({
  type: String,
  size: Number,
  color: String,
});
</script>

<template>
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    :class="$style.icon_park_icon"
  >
    <use :href="`#${props.type}`"></use>
  </svg>
</template>

<style module>
.icon_park_icon {
  display: inline-block;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
</style>
