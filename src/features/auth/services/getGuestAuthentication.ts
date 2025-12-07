import {endPoints} from '@shared/constants/endpoints';
import consumerApi from '@shared/services/api';
import {GuestSessionResponseApiDTO} from '../data/dto/response/guestSessionResponseDTO';
import {LoginMapper} from '../data/mappers/loginMapper';
import {Login} from '../entities/login';
import {AccountResponseApiDTO} from '../data/dto/response/accountResponseDTO';
import {AccountMapper} from '../data/mappers/accountMapper';

export const getGuestAuthenticationService = async (): Promise<Login> => {
  try {
    const response = await consumerApi.get<GuestSessionResponseApiDTO>(
      endPoints.auth.guestSession,
    );

    const responseAccount = await consumerApi.get<AccountResponseApiDTO>(
      endPoints.account.details(response.data.guest_session_id),
    );

    return Promise.resolve({
      ...AccountMapper.responseToEntity(responseAccount.data),
      ...LoginMapper.responseToEntity(response.data),
    });
  } catch (err) {
    return Promise.reject(err);
  }
};
