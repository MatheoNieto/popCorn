import React from "react";
import { StackPrivateBottomDefinitions } from "./types";
import { stackRoutes } from "./routes";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useKeyboardVisibility } from "@shared/hooks/useKeyboardVisibility";
import { BottomTabNavigator } from "@shared/navigators";
import { Icon } from "@shared/ui/components";
import { palette } from "@shared/theme";

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
          tabBarStyle: {
            backgroundColor: palette.primary[900],
            borderTopColor: palette.iconActiveBottom,
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.6,
            shadowRadius: 0.5,
            elevation: 3,
            shadowColor: palette.iconActiveBottom,
          },
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: palette.iconActiveBottom,
          tabBarInactiveTintColor: palette.primary[100],
          tabBarIcon: ({ focused }) => {
            if (routeConfig?.icon) {
              const iconName = routeConfig.icon;
              return (
                <Icon
                  type="Ionicons"
                  name={iconName}
                  size={30}
                  color={
                    focused ? palette.iconActiveBottom : palette.primary[100]
                  }
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
