import {AccountResponseApiDTO} from '../dto/response/accountResponseDTO';
import {Account} from '@shared/entities/account';

export class AccountMapper {
  static responseToEntity(dataAccount: AccountResponseApiDTO): Account {
    return {
      id: dataAccount.id,
      name: dataAccount.name,
      include_adult: dataAccount.include_adult,
      username: dataAccount.username,
    };
  }
}
