import {
  Notify,
  Button,
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem,
  NavBar,
  DropdownMenu,
  DropdownItem,
  Image as VanImage,
  ConfigProvider,
  Col as VanCol,
  Row as VanRow,
  Empty,
  List,
  Tab,
  Tabs,
  ActionSheet,
  PullRefresh,
  Toast,
  Loading,
  Skeleton,
  SkeletonTitle,
  SkeletonImage,
  SkeletonAvatar,
  SkeletonParagraph,
} from "vant";
import "vant/lib/index.css";

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp
    .use(Notify)
    .use(DropdownMenu)
    .use(DropdownItem)
    .use(Button)
    .use(Swipe)
    .use(SwipeItem)
    .use(Tabbar)
    .use(TabbarItem)
    .use(NavBar)
    .use(VanImage)
    .use(ConfigProvider)
    .use(VanCol)
    .use(VanRow)
    .use(Empty)
    .use(List)
    .use(Tab)
    .use(Tabs)
    .use(ActionSheet)
    .use(Toast)
    .use(Loading)
    .use(PullRefresh);
  vueApp.use(Skeleton);
  vueApp.use(SkeletonTitle);
  vueApp.use(SkeletonImage);
  vueApp.use(SkeletonAvatar);
  vueApp.use(SkeletonParagraph);
});
