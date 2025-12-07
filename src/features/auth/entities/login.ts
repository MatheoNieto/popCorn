import {Account} from '@shared/entities/account';

export type Login = Account & {
  session_id: string;
};
