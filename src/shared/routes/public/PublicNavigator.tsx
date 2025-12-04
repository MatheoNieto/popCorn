import { StackNavigator } from "@shared/navigators";
import React from "react";
import { routes as RoutesStack } from "./routes";
import { StackPublicDefinitions } from "./types";

const config = {
  routes: RoutesStack,
  initialRouteName: StackPublicDefinitions.BOTTOM_TAP_STACK,
};

export const StackNavigatorPublic = () => {
  const routes = Object.entries(config.routes).map(([name, value]) => ({
    ...value,
    name,
  }));

  return (
    <StackNavigator
      initialRouteName={config.initialRouteName}
      screenOptions={{ headerShown: false }}
      routes={routes}
    />
  );
};
