export interface Film {
  id: number;
  original_title: string;
  genre_ids: number[];
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

export type ResponseFilms<T> = {
  films: T[];
  currentPage: number;
  totalPages: number;
  hasMore: boolean;
};
