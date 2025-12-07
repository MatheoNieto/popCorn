import {Film, ResponseFilms} from '@shared/entities/film';

export type FilterWatchList = Partial<{
  language: string;
  page: number;
  session_id: string;
  sort_by: 'created_at.asc' | 'created_at.desc';
}>;

export type ResponseWatchList = ResponseFilms<Film>;
