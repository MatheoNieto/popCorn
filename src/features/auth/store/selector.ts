import {createDraftSafeSelector, createSelector} from '@reduxjs/toolkit';
import {RootState} from '@store/index';
const authSelector = (state: RootState) => state.auth;

const getAuthData = createDraftSafeSelector(authSelector, state => ({
  sessionId: state.sessionId,
  accountId: state.accountDetails?.id,
}));

export const isAuthenticatedSelector = createSelector([getAuthData], authData =>
  Boolean(authData.sessionId),
);

export const getAccountId = createSelector(
  [getAuthData],
  authData => authData.accountId,
);

export const getSessionId = createSelector(
  [getAuthData],
  authData => authData.sessionId,
);
