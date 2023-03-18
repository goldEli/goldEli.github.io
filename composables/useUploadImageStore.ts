import { MaybeComputedRef } from "@vueuse/core";
import { useGetUserInfo } from "~~/api/mine";
import { UploaderFileListItem } from "vant";

// export const useUploadImageStore = async () => {
//   const imageList = ref<UploaderFileListItem[]>([]);
//   const onClear = () => {
//     imageList.value = [];
//   };
//   return {
//     imageList,
//     onClear,
//   };
// };

import { defineStore } from "pinia";

const useUploadImageStore = defineStore("uploadImageStore", () => {
  const imageList = ref<UploaderFileListItem[]>([]);
  const onClear = () => {
    imageList.value = [];
  };
  return {
    imageList,
    onClear,
  };
});
export default useUploadImageStore;
