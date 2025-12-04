import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeRoutes } from "./routes";
import { HomeParamsList } from "./types";
import { HomeScreen } from "../screens";
import { HeaderBox, IconButton } from "@shared/ui/components";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const HomeStack = () => {
  const { Navigator, Screen } = createStackNavigator<HomeParamsList>();
  return (
    <Navigator initialRouteName={HomeRoutes.HOME}>
      <Screen
        name={HomeRoutes.HOME}
        component={HomeScreen}
        options={{
          header: () => (
            <HeaderBox
              leftIcon={
                <IconButton
                  onPress={() => null}
                  icon={
                    <FontAwesome6 name="chevron-left" size={24} color="black" />
                  }
                />
              }
              title="Home"
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default HomeStack;
