import { ComputedRef } from "nuxt/dist/app/compat/capi";
import { showToast } from "vant";
import urls from "~~/constants/urls";
import { i18nGlobal } from "~~/plugins/i18n";

export const useGetCommentChildNumber = async (
  params: API.Comments.GetCommentChildNumber.Params
) => {
  const res = await useRequest.get<API.Comments.GetCommentChildNumber.Result>(
    urls.getCommentChildNumber,
    {
      params,
    }
  );

  return res;
};

export const useComments = (
  params: ComputedRef<API.Comments.GetCommentsList.Params>
) => {
  const res = useLoadMore<API.Comments.GetCommentsList.Result>(
    urls.getCommentList,
    params
  );

  return res;
};

export const useReplyComments = (
  params: ComputedRef<API.Comments.GetCommentsList.Params>
) => {
  const res = useLoadMoreNoImmediate<API.Comments.GetCommentsList.Result>(
    urls.getCommentList,
    params
  );

  return res;
};

export const useSaveComment = async (
  params: API.Comments.SaveComment.Params
) => {
  const res = await useRequest.put<API.Comments.SaveComment.Result>(
    urls.saveComment,
    {
      params,
    }
  );

  if (res.data.value?.code === 200) {
    showToast(i18nGlobal.global.t("submitSuccessfully"));
  }

  return res;
};
