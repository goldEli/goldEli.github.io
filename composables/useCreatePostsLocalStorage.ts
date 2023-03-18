const useCreatePostsLocalStorage = () => {
  const localKeyContent = "create-posts-content";
  const localKeyTitle = "create-posts-title";
  const setLocalStorage = (t: string, c: string) => {
    localStorage.setItem(localKeyContent, c);
    localStorage.setItem(localKeyTitle, t);
  };
  const clearLocalStorage = () => {
    localStorage.setItem(localKeyContent, "");
    localStorage.setItem(localKeyTitle, "");
  };
  const getLocalStorage = () => {
    return {
      content: localStorage.getItem(localKeyContent) ?? "",
      title: localStorage.getItem(localKeyTitle) ?? "",
    };
  };

  return {
    setLocalStorage,
    clearLocalStorage,
    getLocalStorage,
  };
};
export default useCreatePostsLocalStorage;
