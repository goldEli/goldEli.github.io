import { defineStore } from "pinia";
import { useI18n } from "vue-i18n";

const useNavigationBarStore = defineStore("navigationBarStore", () => {
  const navigation = ref([
    {
      id: 0,
      icon: "home-nor",
      activeIcon: "home-sel",
      to: "/home",
      name: useI18n().t("homepage"),
    },
    {
      id: 1,
      icon: "community-nor",
      activeIcon: "community-sel",
      to: "/community",
      name: useI18n().t("community"),
    },
    {
      id: 2,
      icon: "mine-nor",
      activeIcon: "mine-sel",
      to: "/mine",
      name: useI18n().t("my"),
    },
  ]);

  const showTabBarPaths = ["/home", "/community", "/mine"];
  const route = useRoute();
  const active = ref(0);
  const showTabBar = ref(true);

  const onShowTabBar = (path: string) => {
    if (showTabBarPaths.some((item) => path.includes(item))) {
      showTabBar.value = true;
      return;
    }
    showTabBar.value = false;
  };

  const onActive = (path: string) => {
    if (showTabBarPaths.some((item) => path.includes(item))) {
      // 当前路由id
      const id =
        navigation.value.find((item) => path.includes(item.to))?.id ?? 0;
      active.value = id;
    }
  };

  return { active, showTabBar, navigation, onShowTabBar, onActive };
});
export default useNavigationBarStore;
