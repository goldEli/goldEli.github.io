<script setup lang="ts">
import { getLotteryList } from "~~/api/lottery";

const { t } = useTranslate();
useTitle(t("homepage"));
const list = ref<Model.Lottery.Info[]>([]);
onMounted(() => {
  const res = getLotteryList();
  res.then((data) => {
    list.value = data.value.list;
  });
});
</script>

<template>
  <VanButton :type="'primary'">Select</VanButton>
  <ul :class="$style.list">
    <li :class="$style.item" v-for="item in list" :key="item.lotteryDrawNum">
      <span>{{ item.lotteryDrawNum }}</span>
      <span>{{ item.lotteryDrawTime }}</span>
      <span>{{ item.lotteryDrawResult }}</span>
    </li>
  </ul>
</template>

<style module lang="less">
.list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  .item {
    color: gray;
    display: flex;

    gap: 8px;
  }
}
</style>
