import {createAction} from '@reduxjs/toolkit';
import {Film} from '@shared/entities/film';

export const watchListActions = {
  saveFilms: createAction<{dataFilms: Film[]}>('save/films/watchList'),
};
