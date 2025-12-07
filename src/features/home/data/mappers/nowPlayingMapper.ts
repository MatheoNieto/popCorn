import {Film} from '@features/home/entities/film';
import {NowPlayingResponseApiDTO} from '../dto/response/nowPlayingResponseDTO';

export class NowPlayingMapper {
  static responseToEntity(
    dataFilms: NowPlayingResponseApiDTO['results'],
  ): Film[] {
    return dataFilms.map(itemFilm => ({
      id: itemFilm.id,
      original_title: itemFilm.original_title,
      genre_ids: itemFilm.genre_ids,
      overview: itemFilm.overview,
      popularity: itemFilm.popularity,
      poster_path: itemFilm.poster_path,
      release_date: itemFilm.release_date,
      title: itemFilm.title,
      vote_average: itemFilm.vote_average,
    }));
  }
}
