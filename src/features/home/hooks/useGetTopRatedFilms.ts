import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {getTopRatedFilmsService} from '../services/getTopRatedFilms';
import {FilterFilms} from '../entities/film';

export const useGetTopRatedFilms = (filter: Omit<FilterFilms, 'page'>) => {
  const dataHook = useQuery({
    queryKey: ['GETTING_TOP_RATES_FILMS_INITIAL', filter],
    queryFn: () => getTopRatedFilmsService(filter),
  });

  const films = dataHook.data?.films;
  return {
    ...dataHook,
    data: films,
  };
};

export const useGetFilmsTopsRated = (filters: FilterFilms = {}) => {
  const query = useInfiniteQuery({
    queryKey: ['GETTING_TOP_RATES_FILMS', filters],
    queryFn: async ({pageParam = 1}) => {
      return getTopRatedFilmsService({
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
