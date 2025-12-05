import { Login } from "@features/auth/entities/login";
import { GuestSessionResponseApiDTO } from "../dto/response/guestSessionResponseDTO";

export class LoginMapper {
  static responseToEntity(dataLogin: GuestSessionResponseApiDTO): Login {
    return {
      session_id: dataLogin.guest_session_id,
    };
  }
}
