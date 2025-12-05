import { createDraftSafeSelector, createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
const authSelector = (state: RootState) => state.auth;

const getAuthData = createDraftSafeSelector(authSelector, (state) => ({
  session_id: state.session_id,
}));

export const getDataSessionSelector = createSelector(
  [getAuthData],
  (authData) => authData.session_id,
);

export const isAuthenticatedSelector = createSelector(
  [getAuthData],
  (authData) => Boolean(authData.session_id),
);
