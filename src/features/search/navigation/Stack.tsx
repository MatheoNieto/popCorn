import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderBox, Icon, IconButton} from '@shared/ui/components';
import {SearchScreen} from '../screens';
import {SearchParamsList} from './types';
import {SearchRoutes} from './routes';

const SearchStack = () => {
  const {Navigator, Screen} = createStackNavigator<SearchParamsList>();
  return (
    <Navigator initialRouteName={SearchRoutes.SEARCH}>
      <Screen
        name={SearchRoutes.SEARCH}
        component={SearchScreen}
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
                      color="white"
                    />
                  }
                />
              }
              rightIcon={
                <IconButton
                  onPress={() => null}
                  icon={
                    <Icon
                      type="Ionicons"
                      name="alert-circle-outline"
                      size={25}
                      color="white"
                    />
                  }
                />
              }
              title="Search"
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default SearchStack;
