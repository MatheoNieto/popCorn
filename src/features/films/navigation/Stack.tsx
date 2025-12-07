import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderBox, Icon, IconButton} from '@shared/ui/components';
import {FilmRoutes} from './routes';
import {FilmDetailScreen} from '../screens';
import {FilmsParamsList} from './types';

const FilmsStack = () => {
  const {Navigator, Screen} = createStackNavigator<FilmsParamsList>();
  return (
    <Navigator initialRouteName={FilmRoutes.FILM_DETAILS}>
      <Screen
        name={FilmRoutes.FILM_DETAILS}
        component={FilmDetailScreen}
        options={{
          header: () => (
            <HeaderBox
              rightIcon={
                <IconButton
                  onPress={() => null}
                  icon={
                    <Icon
                      type="Ionicons"
                      name="bookmark"
                      size={24}
                      color="white"
                    />
                  }
                />
              }
              title="Detail"
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default FilmsStack;
