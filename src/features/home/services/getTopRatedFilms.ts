import {endPoints} from '@shared/constants/endpoints';
import consumerApi from '@shared/services/api';
import {MoviesResponseApiDTO} from '../data/dto/response/topRatedFilmsResponseDTO';
import {FilterFilms} from '../entities/film';
import {TopRatedMapper} from '../data/mappers/topRatedMapper';
import {mockFilmsResponse} from './mocks/topRateFilms';
import {ResponseTopRated} from '../entities/topRated';

export const getTopRatedFilmsService = async (
  filters: FilterFilms,
): Promise<ResponseTopRated> => {
  try {
    const response = await consumerApi.get<MoviesResponseApiDTO>(
      endPoints.films.topRated,
      {
        params: filters,
      },
    );

    const dataFilmsMapped = TopRatedMapper.responseToEntity(
      response.data.results,
    );
    const canLoadMore = response.data.page < response.data.total_pages;

    return Promise.resolve({
      films: dataFilmsMapped,
      hasMore: canLoadMore,
      currentPage: response.data.page,
      totalPages: response.data.total_pages,
    });
  } catch (err) {
    const dataFilmsMapped = TopRatedMapper.responseToEntity(
      mockFilmsResponse.results,
    );
    return Promise.resolve({
      films: dataFilmsMapped,
      hasMore: true,
      currentPage: 1,
      totalPages: 2,
    });
  }
};
