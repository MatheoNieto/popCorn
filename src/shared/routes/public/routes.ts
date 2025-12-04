import { StackBottomNavigatorPrivate } from "./BottomTabNavigator/BottomTabNavigator";
import { StackPrivateDefinitions } from "./types";

export const routes = {
  [StackPrivateDefinitions.BOTTOM_TAP_STACK]: {
    name: StackPrivateDefinitions.BOTTOM_TAP_STACK,
    component: StackBottomNavigatorPrivate,
  },
};
