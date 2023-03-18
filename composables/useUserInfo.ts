import { MaybeComputedRef } from "@vueuse/core";
import { useGetUserInfo } from "~~/api/mine";

export const useUserInfo = async () => {
  // const userId = useLocalStorage("userId", "");
  // const params = computed(() => ({
  //   id: userId.value,
  // }));
  const userInfoRes = await useGetUserInfo();

  const userInfo = computed(() => {
    return userInfoRes.data.value?.data;
  });
  return {
    userInfo,
  };
};
