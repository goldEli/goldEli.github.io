import { Ref } from "nuxt/dist/app/compat/capi";
import urls from "~~/constants/urls";

// export const usePosts = (params: API.Home.Posts.Params) => {
//   const res = useRequest.get<API.Home.Posts.Result>(urls.getPostsList, {
//     params,
//   });

//   return res;
// };

export const useGetHomeInformation = () => {
  const res = useRequest.get<API.Home.InformationResult.Result>(
    urls.getHomeInformation
  );

  return res;
};

export const useGetPostsTop = async (params: Ref<API.Home.GetPostsTop.Params>) => {
  const res = await useRequest.get<API.Home.GetPostsTop.Result>(urls.getPostsTop, {
    params,
  });

  return res;
};
