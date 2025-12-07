import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderBox, Icon, IconButton } from "@shared/ui/components";
import { WatchParamsList } from "./types";
import { WatchRoutes } from "./routes";
import { WatchScreen } from "../screens";

const WatchStack = () => {
  const { Navigator, Screen } = createStackNavigator<WatchParamsList>();
  return (
    <Navigator initialRouteName={WatchRoutes.WATCH}>
      <Screen
        name={WatchRoutes.WATCH}
        component={WatchScreen}
        options={{
          header: () => (
            <HeaderBox
              leftIcon={
                <IconButton
                  onPress={() => null}
                  icon={
                    <Icon
                      type="FontAwesome5"
                      name="chevron-left"
                      size={24}
                      color="black"
                    />
                  }
                />
              }
              title="Watch list"
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default WatchStack;
