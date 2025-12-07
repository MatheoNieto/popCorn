import {endPoints} from '@shared/constants/endpoints';
import consumerApi from '@shared/services/api';
import {NowPlayingResponseApiDTO} from '../data/dto/response/nowPlayingResponseDTO';
import {FilterNowPlaying, ResponseNowPlaying} from '../entities/nowPlaying';
import {NowPlayingMapper} from '../data/mappers/nowPlayingMapper';

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
    return Promise.reject(err);
  }
};
