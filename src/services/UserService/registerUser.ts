import { UserResponse, UserService } from "@/interfaces/user.interface";
import { request } from "@/utils/request";

export const registerUser = async (body: UserService) => {
  let data: UserResponse = {
    message: "",
    user: { id: 0, username: "", email: "", roles: [] },
  };
  let messageError: string = "";
  try {
    const response = await request("users/register", undefined, "POST", body);
  } catch (error) {
    messageError = "Hubo un error al registrar usuario.";
    data = { message: "", user: { id: 0, username: "", email: "", roles: [] } };
  }

  return { messageError, data };
};
