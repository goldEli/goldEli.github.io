import p from "@/constants/routesPath";
const useRoutesPath = () => {
  const lan = useGetLanguage();
  const paths = { ...p };
  let key: keyof typeof paths;
  for (key in paths) {
    paths[key] = `/${lan.value}${paths[key]}`;
  }
  const routePath = computed(() => {
    return paths;
  });
  return routePath;
};

export default useRoutesPath;
