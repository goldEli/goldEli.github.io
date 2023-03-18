import { defineStore } from "pinia";

export  const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    isScreenChecked: false,
    isBigScreen: false,
    title: "",
  }),
  actions: {
    checkScreen() {
      if (!this.isScreenChecked) {
        this.isScreenChecked = true;
      }
    },
    changeTitle(title: string) {
      this.title = title;
    },
  },
});

