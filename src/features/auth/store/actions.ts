import {createAction} from '@reduxjs/toolkit';
import {Login} from '../entities/login';
import {Account} from '@shared/entities/account';

export const authActions = {
  signInAsGuest: createAction<{dataSession: (Login & Account) | undefined}>(
    'loginGuest/auth',
  ),
};
