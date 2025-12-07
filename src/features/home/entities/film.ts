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

export type FilterFilms = Partial<{
  language: string;
  page: number;
  // ISO-3166-1 code
  region: string;
}>;

export type ResponseFilms<T> = {
  films: T[];
  currentPage: number;
  totalPages: number;
  hasMore: boolean;
};
