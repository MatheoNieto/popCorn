import {useInfiniteQuery} from '@tanstack/react-query';
import {getSearchFilmService} from '../services/getFilms';
import {FilterSearchFilms} from '../entities/searchFilms';

export const useGetSearchFilms = (filters: FilterSearchFilms) => {
  const query = useInfiniteQuery({
    queryKey: ['SEARCHING_FILMS', filters],
    queryFn: async ({pageParam = 1}) => {
      return getSearchFilmService({
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
