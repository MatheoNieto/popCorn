import {createReducer} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {persistConfigWatchList} from '@store/config';
import {watchListActions} from './actions';
import {Film} from '@shared/entities/film';

type WATCH_LIST_STATE_TYPE = {
  films: Film[];
};

const INITIAL_STATE: WATCH_LIST_STATE_TYPE = {
  films: [],
};

const watchListReducer = createReducer(INITIAL_STATE, builder => {
  builder.addCase(watchListActions.saveFilms, (state, action) => {
    const {dataFilms} = action.payload;
    state.films = dataFilms;
  });
});

const persistWatchListReducer = persistReducer<WatchListState>(
  persistConfigWatchList,
  watchListReducer,
);

export type WatchListState = ReturnType<typeof watchListReducer>;
export default persistWatchListReducer;
