import { UsernameService, UserResponse } from "@/interfaces/user.interface";
import { request } from "@/utils/request";

export const updateRoleToAdmin = async (body: UsernameService) => {
  let data: UserResponse = {
    message: "",
    user: { id: 0, username: "", email: "", roles: [] },
  };
  let messageError: string = "";
  try {
    const response = await request("users/role-admin", undefined, "PUT", body);
  } catch (error) {
    messageError = "Hubo un error al agregar role admin.";
    data = { message: "", user: { id: 0, username: "", email: "", roles: [] } };
  }

  return { messageError, data };
};
