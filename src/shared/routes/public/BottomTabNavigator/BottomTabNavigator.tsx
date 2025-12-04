import React from "react";
import { StackPrivateBottomDefinitions } from "./types";
import { stackRoutes } from "./routes";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useKeyboardVisibility } from "@shared/hooks/useKeyboardVisibility";
import { BottomTabNavigator } from "@shared/navigators";
import { Icon } from "@shared/ui/components";

const config = {
  routes: stackRoutes,
  initialRouteName: StackPrivateBottomDefinitions.HOME_STACK,
};

type Props = {
  navigation: any;
  route: any;
};

export const StackBottomNavigatorPrivate: React.FC<Props> = ({
  navigation,
  route,
}) => {
  const routes = Object.entries(config.routes).map(([name, value]) => ({
    ...value,
    name,
  }));

  useKeyboardVisibility({
    onKeyboardDidShow: () => {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    },
    onKeyboardDidHide: () => {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    },
  });

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "WEBAPP_STACK") {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    }
  }, [navigation, route]);

  return (
    <BottomTabNavigator
      initialRouteName={config.initialRouteName}
      screenOptions={({ route }) => {
        const routeConfig = routes.find((r) => r.name === route.name);
        return {
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
          tabBarIcon: ({ focused }) => {
            if (routeConfig?.icon) {
              const iconName = routeConfig.icon;
              return (
                <Icon
                  type="Ionicons"
                  name={iconName}
                  size={30}
                  color={focused ? "primary" : "black"}
                />
              );
            }
            return null;
          },
          tabBarLabel: routeConfig?.label || route.name,
        };
      }}
      routes={routes}
    />
  );
};
