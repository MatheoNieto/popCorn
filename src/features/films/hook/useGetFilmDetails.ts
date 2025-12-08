import {Film} from '@shared/entities/film';
import {useQuery} from '@tanstack/react-query';
import {getFilmDetailsService} from '../services/getFilmDetail';

export const useGetFilmDetails = (filmId: Film['id'] | undefined) => {
  return useQuery({
    queryKey: ['GET_FILM_DETAILS', filmId],
    queryFn: () => getFilmDetailsService(filmId),
  });
};
