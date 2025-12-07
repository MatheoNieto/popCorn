import React from 'react';
import {routes as stackRoutes} from './routes';
import {StackPublicDefinitions} from './types';
import {StackNavigator} from '@shared/navigators';

const config = {
  routes: stackRoutes,
  initialRouteName: StackPublicDefinitions.FILM_STACK,
};

export const StackNavigatorPublicIn = () => {
  const routes = Object.entries(config.routes).map(([name, value]) => ({
    ...value,
    name,
  }));

  return (
    <StackNavigator
      initialRouteName={config.initialRouteName}
      screenOptions={{headerShown: false}}
      routes={routes}
    />
  );
};
