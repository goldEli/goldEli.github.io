import { MaybeRef } from "@vueuse/core";
import { ComputedRef, Ref } from "nuxt/dist/app/compat/capi";
import urls from "~~/constants/urls";

export const useGetPostsList = (params: Ref<API.Posts.GetPostsList.Params>) => {
  const res = useLoadMore<API.Posts.GetPostsList.Result>(
    urls.getPostsList,
    params
  );

  return res;
};

// 获取详情 GetPostsInfo
export const useGetPostsInfo = (params: Ref<API.Posts.GetPostsInfo.Params>) => {
  const res = useRequest.get<API.Posts.GetPostsInfo.Result>(urls.getPostsInfo, {
    params,
  });

  return res;
};
//
export const useGetPostsListForChild = (
  params: Ref<API.Posts.GetPostsListForChild.Params>
) => {
  const res = useRequest.get<API.Posts.GetPostsListForChild.Result>(
    urls.getPostsListForChild,
    {
      params,
    }
  );

  return res;
};

// 帖子 或者 评论点赞 PostsOrCommentLike
export const usePostsOrCommentLike = (
  params: Ref<API.Posts.PostsOrCommentLike.Params>
) => {
  const res = useRequest.put<API.Posts.PostsOrCommentLike.Result>(
    urls.postsOrCommentLike,
    {
      params,
    }
  );

  return res;
};

// 创建帖子
export const useCreatePosts = (params: API.Posts.CreatePosts.Params) => {
  const res = useRequest.put<API.Posts.CreatePosts.Result>(urls.createPosts, {
    params,
  });

  return res;
};

export const usePreUpload = (params: API.Posts.PreUpload.Params) => {
  const res = useRequest.post<API.Posts.PreUpload.Result>(urls.preUpload, {
    params,
  });

  return res;
};

// SetAcl
export const useSetAcl = (params: API.Posts.SetAcl.Params) => {
  const res = useRequest.post<API.Posts.SetAcl.Result>(urls.setAcl, {
    params,
  });

  return res;
};
// getPostsCarouselList
export const useGetPostsCarouselList = (
  params: Ref<API.Posts.GetPostsCarouselList.Params>
) => {
  const res = useRequest.get<API.Posts.GetPostsCarouselList.Result>(
    urls.getPostsCarouselList,
    {
      params,
    }
  );

  return res;
};

export const useDeletePosts = (params: API.Posts.DeletePosts.Params) => {
  const res = useRequest.delete<API.Posts.DeletePosts.Result>(
    urls.deletePosts,
    {
      params,
    }
  );

  return res;
};
