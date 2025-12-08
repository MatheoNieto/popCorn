import {endPoints} from '@shared/constants/endpoints';
import consumerApi from '@shared/services/api';
import {Film} from '@shared/entities/film';
import {FilmDetailResponseApiDTO} from '../data/dto/response/filmDetailResponseDTO';
import {FilmDetail} from '../entities/filmDetail';
import {FilmsMapper} from '../data/mapper/filmsMapper';

export const getFilmDetailsService = async (
  filmId: Film['id'] | undefined,
): Promise<FilmDetail> => {
  try {
    if (!filmId) {
      return Promise.reject('Film id is required.');
    }

    const response = await consumerApi.get<FilmDetailResponseApiDTO>(
      endPoints.films.detail(filmId),
    );

    const dataFilmsMapped = FilmsMapper.responseToEntity(response.data);
    return Promise.resolve(dataFilmsMapped);
  } catch (err) {
    return Promise.reject(err);
  }
};
