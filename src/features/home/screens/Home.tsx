import {Box, Text} from '@shared/ui/components';
import React from 'react';
import ListTopFilmsContainer from '../containers/ListTopFilms';
import FilmsTabsContainer from '../containers/FilmsTabs';

const HomeScreen = () => {
  return (
    <Box flex={1} backgroundColor="primary900">
      <ListTopFilmsContainer />
      <FilmsTabsContainer />
    </Box>
  );
};

export default HomeScreen;
