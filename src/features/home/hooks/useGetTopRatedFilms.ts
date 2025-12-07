import {useQuery} from '@tanstack/react-query';
import {getTopRatedFilms} from '../services/getTopRatedFilms';
import {FilterFilms} from '../entities/film';

export const useGetTopRatedFilms = (filter: FilterFilms) => {
  return useQuery({
    queryKey: ['GETTING_TOP_RATES_FILMS', filter],
    queryFn: () => getTopRatedFilms(filter),
  });
};
