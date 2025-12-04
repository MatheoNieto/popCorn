import { StackPrivateBottomDefinitions } from "./types";
import { HomeStack } from "@features/home";

export const stackRoutes = {
  [StackPrivateBottomDefinitions.HOME_STACK]: {
    name: StackPrivateBottomDefinitions.HOME_STACK,
    component: HomeStack,
    label: "Home",
    icon: "home",
  },
};
