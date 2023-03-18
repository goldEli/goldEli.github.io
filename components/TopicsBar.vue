<script setup lang="ts">
/**
 * 话题栏
 * 需求：话题不能换行，如果换行，保持一行加省略号
 */
type Topics = Model.Posts.Info["tagVoList"];
const boxRef = ref<HTMLElement | null>(null);
const omitRef = ref<HTMLElement | null>(null);
interface Props {
  topics: Topics;
}
const props = withDefaults(defineProps<Props>(), {});
const maxHeight = ref(0);
const showOmit = ref(true);
const list = ref<Topics>([]);
const visible = ref(false);

async function removeListItem() {
  list.value.pop();
  // await nextTick();
}

watchEffect(() => {
  list.value = [...props.topics];
});

watchEffect(() => {
  if (!list.value.length) {
    visible.value = false;
  }
});

/**
 * 通过高度判断，如果是两行，则删除一个，直到保持一行
 */
function handle() {
  const offsetHeight = boxRef.value?.offsetHeight ?? 0;
  if (offsetHeight === 0) {
    return;
  }
  if (offsetHeight === maxHeight.value) {
    // 如果一行放下，则隐藏省略号
    if (list.value.length === props.topics.length) {
      showOmit.value = false;
    }
    // 显示话题栏
    visible.value = true;
    return;
  }
  removeListItem();
}

watch(maxHeight, (value) => {
  handle();
});

onMounted(() => {
  maxHeight.value = omitRef.value?.offsetHeight ?? 0;
});
onUpdated(() => {
  handle();
});
</script>

<template>
  <div
    ref="boxRef"
    :class="[
      $style.box,
      {
        [$style.opacityZero]: !visible,
      },
    ]"
  >
    <span v-for="i of list" :class="$style.item" :key="i.id">
      {{ `#${i.topicTagName}` }}
    </span>
    <span v-if="showOmit" ref="omitRef" :class="$style.item"> ... </span>
  </div>
</template>

<style module lang="less">
.opacityZero {
  opacity: 0;
}
.box {
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  overflow: hidden;
}
.item {
  height: 24px;
  // line-height: 24px;
  font-size: 13px;
  font-weight: 400;
  color: var(--theme-neutral-n1-323233);
  padding: 3px 8px;
  background-color: var(--theme-neutral-n9-EDF3FF);
  border-radius: 4px;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 296px;
}
</style>
