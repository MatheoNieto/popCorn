import {StackBottomNavigatorPrivate} from './BottomTabNavigator/BottomTabNavigator';
import {StackNavigatorPublicIn} from './StackNavigator/StackNavigator';
import {StackPublicDefinitions} from './types';

export const routes = {
  [StackPublicDefinitions.BOTTOM_TAP_STACK]: {
    name: StackPublicDefinitions.BOTTOM_TAP_STACK,
    component: StackBottomNavigatorPrivate,
  },
  [StackPublicDefinitions.PUBLIC_STACK]: {
    name: StackPublicDefinitions.PUBLIC_STACK,
    component: StackNavigatorPublicIn,
  },
};
