export type FilterFilms = Partial<{
  language: string;
  page: number;
  // ISO-3166-1 code
  region: string;
}>;
