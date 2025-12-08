import {useInfiniteQuery} from '@tanstack/react-query';
import {FilterWatchList} from '../entities/watchList';
import {getWatchListService} from '../services/getWatchList';
import {useAppDispatch, useAppSelector} from '@shared/hooks/useStore';
import {getAccountId} from '@features/auth/store/selector';
import React from 'react';
import {watchListActions} from '../store';

export const useGetWatchList = (filters: FilterWatchList) => {
  const dispatch = useAppDispatch();
  const accountId = useAppSelector(getAccountId);

  const query = useInfiniteQuery({
    queryKey: ['WATCH_LIST_FILMS', filters],
    queryFn: async ({pageParam = 1}) => {
      return getWatchListService(
        {
          ...filters,
          page: pageParam,
        },
        accountId,
      );
    },
    getNextPageParam: lastPage => {
      return lastPage.hasMore ? lastPage.currentPage + 1 : undefined;
    },
    initialPageParam: 1,
  });

  const films = query.data?.pages.flatMap(page => page.films) ?? [];

  React.useEffect(() => {
    dispatch(
      watchListActions.saveFilms({
        dataFilms: films,
      }),
    );
  }, [films]);

  return {
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    films,
    hasMore: query.hasNextPage,
    onLoadNextPage: query.fetchNextPage,
    isFetchingNextPage: query.isFetchingNextPage,
    refetch: query.refetch,
  };
};
