import {endPoints} from '@shared/constants/endpoints';
import consumerApi from '@shared/services/api';
import {NowPlayingResponseApiDTO} from '../data/dto/response/nowPlayingResponseDTO';
import {FilterNowPlaying, ResponseNowPlaying} from '../entities/nowPlaying';
import {NowPlayingMapper} from '../data/mappers/nowPlayingMapper';
import {nowPlayingFilms} from './mocks/nowPlayingFilms';

export const getNowPlayingService = async (
  filters: FilterNowPlaying,
): Promise<ResponseNowPlaying> => {
  try {
    const response = await consumerApi.get<NowPlayingResponseApiDTO>(
      endPoints.films.nowPlaying,
      {
        params: filters,
      },
    );
    const canLoadMore = response.data.page < response.data.total_pages;
    const filmsMapped = NowPlayingMapper.responseToEntity(
      response.data.results,
    );

    return Promise.resolve({
      films: filmsMapped,
      hasMore: canLoadMore,
      currentPage: response.data.page,
      totalPages: response.data.total_pages,
    });
  } catch (err) {
    const filmsMapped = NowPlayingMapper.responseToEntity(
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
