import {endPoints} from '@shared/constants/endpoints';
import consumerApi from '@shared/services/api';
import {FilterTopRated} from '../entities/topRated';
import {MoviesResponseApiDTO} from '../data/dto/response/topRatedFilmsResponseDTO';
import {Film} from '../entities/film';
import {TopRatedMapper} from '../data/mappers/topRatedMapper';
import {mockFilmsResponse} from './mocks/topRateFilms';
import {arraySorter} from '@shared/services/arraySorter';

export const getTopRatedFilms = async (
  filters: FilterTopRated,
): Promise<Film[]> => {
  try {
    const response = await consumerApi.get<MoviesResponseApiDTO>(
      endPoints.films.topRated,
      {
        params: filters,
      },
    );

    console.log('==response=>', JSON.stringify(response.data));

    const dataFilmsMapped = TopRatedMapper.responseToEntity(
      response.data.results,
    );

    return Promise.resolve(
      arraySorter.sortObjectsDesc<Film>(dataFilmsMapped, 'popularity'),
    );
  } catch (err) {
    const dataFilmsMapped = TopRatedMapper.responseToEntity(
      mockFilmsResponse.results,
    );
    return Promise.resolve(
      arraySorter.sortObjectsDesc<Film>(dataFilmsMapped, 'popularity'),
    );
  }
};
