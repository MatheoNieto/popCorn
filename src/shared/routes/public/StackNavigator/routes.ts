import {FilmStack, FilmRoutes} from '@features/films';
import {StackPublicDefinitions} from './types';

import {StackNavigationProp} from '@react-navigation/stack';

export const routes = {
  [StackPublicDefinitions.FILM_STACK]: {
    name: StackPublicDefinitions.FILM_STACK,
    component: FilmStack,
  },
};

export type StackPublicDefinitionsParamsList = {
  [StackPublicDefinitions.FILM_STACK]: {
    screen?: FilmRoutes;
    params?: any;
  };
};

export type StackPublicDefinitionsProps =
  StackNavigationProp<StackPublicDefinitionsParamsList>;
