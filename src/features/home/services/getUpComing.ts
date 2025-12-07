import {endPoints} from '@shared/constants/endpoints';
import consumerApi from '@shared/services/api';
import {ResponseNowPlaying} from '../entities/nowPlaying';
import {nowPlayingFilms} from './mocks/nowPlayingFilms';
import {FilterFilms} from '../entities/film';
import {UpComingResponseApiDTO} from '../data/dto/response/upComingResponseDTO';
import {UpComingMapper} from '../data/mappers/upComingMappert';

export const getUpComingService = async (
  filters: FilterFilms,
): Promise<ResponseNowPlaying> => {
  try {
    const response = await consumerApi.get<UpComingResponseApiDTO>(
      endPoints.films.upComing,
      {
        params: filters,
      },
    );
    const canLoadMore = response.data.page < response.data.total_pages;
    const filmsMapped = UpComingMapper.responseToEntity(response.data.results);

    return Promise.resolve({
      films: filmsMapped,
      hasMore: canLoadMore,
      currentPage: response.data.page,
      totalPages: response.data.total_pages,
    });
  } catch (err) {
    const filmsMapped = UpComingMapper.responseToEntity(
      nowPlayingFilms.results,
    );

    return Promise.resolve({
      films: filmsMapped,
      hasMore: true,
      currentPage: 1,
      totalPages: 3,
    });
  }
};
