export const useGetLanguage = () => {
  const route = useRoute();

  const lan = computed(() => route.params.language as Language) 

  return lan
};
