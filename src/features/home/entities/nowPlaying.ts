import {Film} from './film';

export type FilterNowPlaying = Partial<{
  language: string;
  page: number;
  // ISO-3166-1 code
  region: string;
}>;

export type ResponseNowPlaying = {
  films: Film[];
  currentPage: number;
  totalPages: number;
  hasMore: boolean;
};
