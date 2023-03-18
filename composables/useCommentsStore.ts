import { defineStore } from "pinia";
import { useI18n } from "vue-i18n";

type Keys = API.Comments.GetCommentsList.Params["sortLevel"];
export type ReplyInfo =
  | (Omit<API.Comments.SaveComment.Params, "content"> & {
      name?: string;
    })
  | null;

export const useCommentsStore = defineStore("commentsStore", () => {
  const activeKey = ref<Keys>(0);
  const replyInfo = ref<ReplyInfo>(null);
  const { t } = useTranslate();
  const tabsInfo = ref<{ key: Keys; label: string }[]>([
    {
      key: 0,
      label: useI18n().t("recommend"),
    },
    {
      key: 1,
      label: useI18n().t("latest"),
    },
  ]);

  const onSwitchActiveKey = (key: Keys) => {
    activeKey.value = key;
  };

  const onReply = (info: ReplyInfo) => {
    replyInfo.value = info;
    const node = document.querySelector(
      "#commentInputArea"
    ) as HTMLInputElement;
    if (node) {
      node.focus();
    }
  };

  const clearReplyInfo = () => {
    replyInfo.value = null;
  };

  return {
    activeKey,
    replyInfo,
    tabsInfo,
    onSwitchActiveKey,
    onReply,
    clearReplyInfo,
  };
});
