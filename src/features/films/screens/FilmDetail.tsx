import {Box} from '@shared/ui/components';
import React from 'react';
import FilmContainer from '../containers/FilmDetail';

const FilmDetailScreen = () => {
  return (
    <Box flex={1} backgroundColor="primary900">
      <FilmContainer />
    </Box>
  );
};

export default FilmDetailScreen;
