<script setup lang="ts">
import { showSuccessToast, showToast } from "vant";
import { useGetConfig } from "~~/api/config";
import { useDoReport } from "~~/api/report";

const { t } = useTranslate();

const reportStore = useReportFeedbackStore();

const res = await useGetConfig();
const arr = computed(() => res.data.value?.data?.reportReason.list);
const checkedList = ref<number[]>([]);

const checkFn = (code: number) => {
  const isHas = checkedList.value.includes(code);
  if (isHas) {
    checkedList.value = checkedList.value.filter((i) => i != code);
    return;
  }
  if (checkedList.value.length >= 3) {
    showToast(t("ChooseUpToThree"));
    return;
  }
  checkedList.value.push(code);
};

const isActiveFn = (code: number) => {
  return checkedList.value.includes(code);
};
const onCancel = () => {
  reportStore.close();
  checkedList.value = [];
};
const onOk = async () => {
  if (reportStore.params === null) {
    return;
  }
  const p = {
    reasonIdList: checkedList.value,
    ...reportStore.params,
  };
  const res = await useDoReport(p);
  if (res.data.value?.code === 200) {
    showSuccessToast(t("submitSuccessfully"));
    onCancel();
  }
};
</script>

<template>
  <van-action-sheet
    @cancel="onCancel"
    :show="reportStore.visible"
    :title="t('reportAndFeedback')"
  >
    <div :class="$style.content">
      <div :class="$style.title">
        {{ res.data.value?.data?.reportReason.name }}
      </div>
      <div :class="$style.wrap">
        <div
          v-for="(i, idx) of arr"
          :class="[$style.wrap_item, { [$style.active]: isActiveFn(i.code) }]"
          @click="checkFn(i.code)"
        >
          {{ i.msg }}
        </div>
      </div>
      <button
        :disabled="!(checkedList.length >= 1)"
        :class="{
          [$style.confirm]: true,
          [$style.confirm_confirm]: checkedList.length >= 1,
        }"
        @click="onOk"
      >
        {{ t("submit") }}
      </button>
    </div>
  </van-action-sheet>
</template>

<style module lang="less">
.confirm {
  border: none;
  margin-top: 12px;
  font-weight: bold;
  line-height: 48px;
  text-align: center;
  color: var(--theme-main-753c06);
  font-size: 16px;
  width: 343px;
  background: var(--theme-main-gradient-dcb795);
  border-radius: 4px 4px 4px 4px;
  opacity: 0.5;
}
.confirm_confirm {
  opacity: 1;
}
.wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding-bottom: 28px;
}

.wrap_item {
  padding: 7px 12px;
  box-sizing: border-box;
  color: var(--theme-neutral-n1-323233);
  font-size: 13px;
  background: var(--theme-neutral-n7-f5f6f7);
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
}
.active {
  background: var(--theme-main-gradient-dcb795);
  color: var(--theme-main-753c06);
}
.content {
  padding: 16px;
}
.title {
  margin-bottom: 12px;
  height: 22px;
  font-size: 16px;
  font-family: PingFang SC-Medium, PingFang SC;
  font-weight: bold;
  color: var(--theme-neutral-n1-323233);
  line-height: 22px;
}
:global(.van-action-sheet__header) {
  margin-top: 8px;
}
:global(.van-action-sheet__close) {
  margin-top: 8px;
}
</style>
