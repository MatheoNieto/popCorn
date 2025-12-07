import {createReducer} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {authActions} from './actions';
import {persistConfigAuth} from '@store/config';
import {Account} from '@shared/entities/account';

type AUTH_STATE_TYPE = {
  sessionId: string | undefined;
  accountDetails: Account | undefined;
};

const INITIAL_STATE: AUTH_STATE_TYPE = {
  sessionId: undefined,
  accountDetails: undefined,
};

const authReducer = createReducer(INITIAL_STATE, builder => {
  builder.addCase(authActions.signInAsGuest, (state, action) => {
    const {dataSession} = action.payload;
    if (!dataSession) return;
    state.sessionId = dataSession.session_id;
    state.accountDetails = {
      include_adult: dataSession.include_adult,
      name: dataSession.name,
      username: dataSession.username,
      id: dataSession.id,
    };
  });
});

const persistAuthReducer = persistReducer<AuthenticationState>(
  persistConfigAuth,
  authReducer,
);

export type AuthenticationState = ReturnType<typeof authReducer>;
export default persistAuthReducer;
