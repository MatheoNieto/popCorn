import { endPoints } from "@shared/constants/endpoints";
import consumerApi from "@shared/services/api";
import { GuestSessionResponseApiDTO } from "../data/dto/response/guestSessionResponseDTO";
import { LoginMapper } from "../data/mappers/loginMapper";
import { Login } from "../entities/login";

export const getGuestAuthentication = async (): Promise<Login> => {
  try {
    const response = await consumerApi.get<GuestSessionResponseApiDTO>(
      endPoints.auth.guestSession,
    );
    console.log("response ===>", JSON.stringify(response.data));
    return LoginMapper.responseToEntity(response.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
