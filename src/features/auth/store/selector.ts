import {createDraftSafeSelector, createSelector} from '@reduxjs/toolkit';
import {RootState} from '@store/index';
const authSelector = (state: RootState) => state.auth;

const getAuthData = createDraftSafeSelector(authSelector, state => state);

export const getDataSessionSelector = createSelector(
  [getAuthData],
  authData => authData.sessionId,
);

export const isAuthenticatedSelector = createSelector([getAuthData], authData =>
  Boolean(authData.sessionId),
);
export const getAccountId = createSelector(
  [getAuthData],
  authData => authData.accountDetails?.id,
);
