import {Box} from '@shared/ui/components';
import React from 'react';
import SearchFilmsContainer from '../containers/SearchFilms';

const SearchScreen = () => {
  return (
    <Box flex={1} backgroundColor="primary900">
      <SearchFilmsContainer />
    </Box>
  );
};

export default SearchScreen;
