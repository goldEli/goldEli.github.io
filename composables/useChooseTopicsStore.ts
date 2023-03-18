import { defineStore } from "pinia";

const useChooseTopicsStore = defineStore("TopicsStore", () => {
  const topicLists = ref<Model.Topics.Info[]>([]);
  const { onJump } = useJump();
  const { clearLocalStorage } = useCreatePostsLocalStorage();

  const change = (value: Model.Topics.Info) => {
    const isHas = topicLists.value.some((item) => item.id === value.id);
    if (isHas) {
      return;
    }

    topicLists.value.push(value);
  };

  const jumpToCreateTopicPage = () => {
    clearLocalStorage();
    onClearTopics();
    onJump("/create-event");
  };

  const onClearTopics = () => {
    topicLists.value = [];
  };
  const delTopic = (idx: number) => {
    topicLists.value.splice(idx, 1);
  };

  return { topicLists, change, jumpToCreateTopicPage, onClearTopics, delTopic };
});
export default useChooseTopicsStore;
