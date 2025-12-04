import { StackBottomNavigatorPrivate } from "./BottomTabNavigator/BottomTabNavigator";
import { StackPublicDefinitions } from "./types";

export const routes = {
  [StackPublicDefinitions.BOTTOM_TAP_STACK]: {
    name: StackPublicDefinitions.BOTTOM_TAP_STACK,
    component: StackBottomNavigatorPrivate,
  },
};
