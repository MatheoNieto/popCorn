import {createDraftSafeSelector, createSelector} from '@reduxjs/toolkit';
import {RootState} from '@store/index';
const watchListSelector = (state: RootState) => state.watchList;

const getWatchListData = createDraftSafeSelector(watchListSelector, state => ({
  films: state.films,
}));

export const getFilmsWatchList = createSelector(
  [getWatchListData],
  watchListData => watchListData.films,
);
