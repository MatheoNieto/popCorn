import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeRoutes } from "./routes";
import { HomeParamsList } from "./types";
import { HomeScreen } from "../screens";
import { HeaderBox } from "@shared/ui/components";

const HomeStack = () => {
  const { Navigator, Screen } = createStackNavigator<HomeParamsList>();
  return (
    <Navigator initialRouteName={HomeRoutes.HOME}>
      <Screen
        name={HomeRoutes.HOME}
        component={HomeScreen}
        options={{
          header: () => <HeaderBox title="What do you want to watch?" />,
        }}
      />
    </Navigator>
  );
};

export default HomeStack;
