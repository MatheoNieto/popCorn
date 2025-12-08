import {FilmDetail} from '@features/films/entities/filmDetail';
import {FilmDetailResponseApiDTO} from '../dto/response/filmDetailResponseDTO';

export class FilmsMapper {
  static responseToEntity(dataDetail: FilmDetailResponseApiDTO): FilmDetail {
    const genresNames = dataDetail.genres.map(itemGenre => itemGenre.name);
    return {
      adult: dataDetail.adult,
      backdrop_path: dataDetail.backdrop_path,
      budget: dataDetail.budget,
      genres: genresNames,
      homepage: dataDetail.homepage,
      id: dataDetail.id,
      imdb_id: dataDetail.imdb_id,
      original_language: dataDetail.original_language,
      original_title: dataDetail.original_title,
      overview: dataDetail.overview,
      popularity: dataDetail.popularity,
      poster_path: dataDetail.poster_path,
      release_date: dataDetail.release_date,
      runtime: dataDetail.runtime,
      title: dataDetail.title,
      video: dataDetail.adult,
    };
  }
}
