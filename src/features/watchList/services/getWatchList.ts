import {endPoints} from '@shared/constants/endpoints';
import consumerApi from '@shared/services/api';

import {nowPlayingFilms} from '@features/home/services/mocks/nowPlayingFilms';
import {FilterWatchList, ResponseWatchList} from '../entities/watchList';
import {WatchListResponseApiDTO} from '../data/dto/response/watchListResponseDTO';
import {Account} from '@shared/entities/account';
import {WatchListMapper} from '../data/mappers/watchListMapper';

export const getWatchListService = async (
  filters: FilterWatchList,
  accountId: Account['id'] | undefined,
): Promise<ResponseWatchList> => {
  try {
    if (!accountId) return Promise.reject('Account id is required.');

    const response = await consumerApi.get<WatchListResponseApiDTO>(
      endPoints.films.watchList(accountId),
      {
        params: filters,
      },
    );
    const canLoadMore = response.data.page < response.data.total_pages;
    const filmsMapped = WatchListMapper.responseToEntity(response.data.results);

    return Promise.resolve({
      films: filmsMapped,
      hasMore: canLoadMore,
      currentPage: response.data.page,
      totalPages: response.data.total_pages,
    });
  } catch (err) {
    const filmsMapped = WatchListMapper.responseToEntity(
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
