export const useTitle = (title: string) => {
  const { changeTitle } = useGlobalStore();

  changeTitle(title);
};
