import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { RouteProp, ParamListBase } from "@react-navigation/native";
import { palette } from "@shared/theme";
import React from "react";
import { ViewStyle } from "react-native";

type Route = {
  name: string;
  component: React.ComponentType<any>;
  options?:
    | BottomTabNavigationOptions
    | ((props: {
        route: RouteProp<ParamListBase>;
        navigation: any;
      }) => BottomTabNavigationOptions);
};

type Props = {
  initialRouteName?: string;
  routes?: Route[];
  screenOptions?:
    | BottomTabNavigationOptions
    | ((props: {
        route: RouteProp<ParamListBase>;
        navigation: any;
      }) => BottomTabNavigationOptions);
  tabBar?: (props: any) => React.ReactNode;
};

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator: React.FC<Props> = ({
  initialRouteName,
  routes,
  screenOptions,
  tabBar,
}) => {
  const mergedScreenOptions = React.useMemo(() => {
    if (tabBar) {
      if (typeof screenOptions === "function") {
        return (props: {
          route: RouteProp<ParamListBase>;
          navigation: any;
        }) => ({
          ...screenOptions(props),
          tabBarStyle: {
            backgroundColor: palette.primary[900],
          },
          tabBar,
        });
      }
      return {
        ...((screenOptions as BottomTabNavigationOptions) || {}),
        tabBar,
      };
    }
    return screenOptions;
  }, [screenOptions, tabBar]);

  return (
    <BottomTab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={mergedScreenOptions}
    >
      {routes?.map((route) => (
        <BottomTab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </BottomTab.Navigator>
  );
};
