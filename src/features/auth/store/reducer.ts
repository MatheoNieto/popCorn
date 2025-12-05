import { createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { authActions } from "./actions";
import { persistConfigAuth } from "@store/config";

type AUTH_STATE_TYPE = {
  session_id: string | undefined;
};

const INITIAL_STATE: AUTH_STATE_TYPE = {
  session_id: undefined,
};

const authReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(authActions.signInAsGuest, (state, action) => {
    const { dataSession } = action.payload;
    state.session_id = dataSession.session_id;
  });
});

const persistAuthReducer = persistReducer<AuthenticationState>(
  persistConfigAuth,
  authReducer,
);

export type AuthenticationState = ReturnType<typeof authReducer>;
export default persistAuthReducer;
