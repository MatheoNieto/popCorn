import {combineReducers} from 'redux';
import type {PayloadAction} from '@reduxjs/toolkit';

import {authReducer} from '@features/auth/store';
import {watchListReducer} from '@features/watchList/store';

const combinedRootReducer = combineReducers({
  auth: authReducer,
  watchList: watchListReducer,
});

function rootReducer(state: any, action: PayloadAction) {
  return combinedRootReducer(state, action);
}

export default rootReducer;
