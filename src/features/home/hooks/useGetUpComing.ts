import {useInfiniteQuery} from '@tanstack/react-query';
import {FilterFilms} from '../entities/film';
import {getUpComingService} from '../services/getUpComing';

export const useGetUpComing = (filters: FilterFilms = {}) => {
  const query = useInfiniteQuery({
    queryKey: ['GET_UP_COMING_FILMS', filters],
    queryFn: async ({pageParam = 1}) => {
      return getUpComingService({
        ...filters,
        page: pageParam,
      });
    },
    getNextPageParam: lastPage => {
      return lastPage.hasMore ? lastPage.currentPage + 1 : undefined;
    },
    initialPageParam: 1,
  });

  const films = query.data?.pages.flatMap(page => page.films) ?? [];

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
