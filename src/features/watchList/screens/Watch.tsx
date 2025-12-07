import {Box} from '@shared/ui/components';
import React from 'react';
import ListWatchListFilmsContainer from '../containers/ListWatchListFilms';

const WatchScreen = () => {
  return (
    <Box flex={1} backgroundColor="primary900">
      <ListWatchListFilmsContainer />
    </Box>
  );
};

export default WatchScreen;
