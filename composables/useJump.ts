type Push = ReturnType<typeof useRouter>["push"];
type PushParam = Parameters<Push>[0];

const useJump = () => {
  const language = useGetLanguage();
  const router = useRouter();
  const onJump = (url: string, query = {}) => {
    const newUrl = `/${language.value}${url}`;

    router.push({
      path: newUrl,
      query,
    });
  };
  return {
    onJump,
  };
};

export default useJump;
