import { StackPrivateBottomDefinitions } from "./types";
import { HomeStack } from "@features/home";
import { SearchStack } from "@features/search";

export const stackRoutes = {
  [StackPrivateBottomDefinitions.HOME_STACK]: {
    name: StackPrivateBottomDefinitions.HOME_STACK,
    component: HomeStack,
    label: "Home",
    icon: "home",
  },
  [StackPrivateBottomDefinitions.SEARCH_STACK]: {
    name: StackPrivateBottomDefinitions.SEARCH_STACK,
    component: SearchStack,
    label: "Search",
    icon: "search",
  },
};
