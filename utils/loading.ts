import { showLoadingToast } from "vant";
import { ToastWrapperInstance } from "vant/lib/toast/types";
import { i18nGlobal } from "~~/plugins/i18n";

let toast: ToastWrapperInstance;
export function showLoading() {
  toast = showLoadingToast({
    message: i18nGlobal.global.t("loading"),
    duration: 0,
  });
}

export function hideLoading() {
  toast.close();
}
