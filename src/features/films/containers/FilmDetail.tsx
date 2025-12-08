import {Box, Text} from '@shared/ui/components';
import React from 'react';
import {useGetFilmDetails} from '../hook/useGetFilmDetails';
import {RouteProp, useRoute} from '@react-navigation/native';
import {FilmsParamsList} from '../navigation/types';
import {FilmRoutes} from '../navigation/routes';
import {CardHeaderTitleFilm, HeaderFilmDetails} from '../components';
import BaseSpinner from '@shared/ui/components/BaseSpinner';

const FilmContainer = () => {
  const route = useRoute<RouteProp<FilmsParamsList, FilmRoutes.FILM_DETAILS>>();
  const {data: dataFilm, refetch} = useGetFilmDetails(route.params?.filmId);

  React.useEffect(() => {
    const delay = setTimeout(() => {
      refetch();
    }, 300);

    return () => {
      clearTimeout(delay);
    };
  }, [route.params?.filmId]);

  if (!dataFilm) {
    return (
      <Box p="m">
        <BaseSpinner />
      </Box>
    );
  }

  return (
    <Box>
      <HeaderFilmDetails />
      <CardHeaderTitleFilm film={dataFilm} />
      <Box p="m">
        <Text textAlign="center">{dataFilm.overview}</Text>
      </Box>
    </Box>
  );
};

export default FilmContainer;
