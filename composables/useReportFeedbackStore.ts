import { defineStore } from "pinia";

type TParams = Omit<API.Report.DoReport.Params, "reasonIdList">;
export const useReportFeedbackStore = defineStore("reportStore", () => {
  const visible = ref(false);
  const params = ref<null | TParams>(null);
  const open = (p: TParams) => {
    visible.value = true;
    params.value = p;
  };
  const close = () => {
    visible.value = false;
    params.value = null;
  };
  return {
    visible,
    params,
    open,
    close,
  };
});
