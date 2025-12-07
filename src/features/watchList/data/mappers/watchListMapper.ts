import {Film} from '@shared/entities/film';
import {WatchListResponseApiDTO} from '../dto/response/watchListResponseDTO';

export class WatchListMapper {
  static responseToEntity(
    dataFilms: WatchListResponseApiDTO['results'],
  ): Film[] {
    return dataFilms.map(itemFilm => ({
      id: itemFilm.id,
      original_title: itemFilm.original_title,
      genre_ids: itemFilm.genre_ids,
      overview: itemFilm.overview,
      popularity: itemFilm.popularity,
      poster_path: itemFilm.poster_path || '',
      release_date: itemFilm.release_date,
      title: itemFilm.title,
      vote_average: itemFilm.vote_average,
    }));
  }
}
