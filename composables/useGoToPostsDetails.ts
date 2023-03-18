const useGoToPostsDetails = () => {
  const router = useRouter();
  const routesPath = useRoutesPath();
  const goToPostsDetails = (id: string) => {
    router.push({
      path: `${routesPath.value.postsDetails}`,
      query: {
        id,
      },
    });
  };
  const goToPostsDetailsCommentsArea = (id: string) => {
    router.push(
      `${routesPath.value.postsDetails}?id=${id}#commentAreaTitle`
      // query: {
      //   id,
      // },
    );
  };
  return {
    goToPostsDetails,
    goToPostsDetailsCommentsArea,
  };
};

export default useGoToPostsDetails;
