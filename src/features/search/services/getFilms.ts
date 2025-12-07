import {endPoints} from '@shared/constants/endpoints';
import consumerApi from '@shared/services/api';
import {FilterSearchFilms, ResponseSearchFilms} from '../entities/searchFilms';
import {SearchFilmsResponseApiDTO} from '../data/dto/response/searchFilmsResponseDTO';
import {SearchFilmMapper} from '../data/mappers/searchFilm';
import {nowPlayingFilms} from '@features/home/services/mocks/nowPlayingFilms';

export const getSearchFilmService = async (
  filters: FilterSearchFilms,
): Promise<ResponseSearchFilms> => {
  try {
    const response = await consumerApi.get<SearchFilmsResponseApiDTO>(
      endPoints.films.nowPlaying,
      {
        params: filters,
      },
    );
    const canLoadMore = response.data.page < response.data.total_pages;
    const filmsMapped = SearchFilmMapper.responseToEntity(
      response.data.results,
    );

    return Promise.resolve({
      films: filmsMapped,
      hasMore: canLoadMore,
      currentPage: response.data.page,
      totalPages: response.data.total_pages,
    });
  } catch (err) {
    const filmsMapped = SearchFilmMapper.responseToEntity(
      nowPlayingFilms.results,
    );
    return Promise.resolve({
      films: filmsMapped,
      hasMore: false,
      currentPage: 1,
      totalPages: 1,
    });
  }
};
