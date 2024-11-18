import { UsernameService, UserResponse } from "@/interfaces/user.interface";
import { request } from "@/utils/request";

export const updateRoleDeleteAdmin = async (body: UsernameService) => {
  let data: UserResponse = {
    message: "",
    user: { id: 0, username: "", email: "", roles: [] },
  };
  let messageError: string = "";
  try {
    const response = await request("users/role-user", undefined, "PUT", body);
  } catch (error) {
    messageError = "Hubo un error al eliminar role admin.";
    data = { message: "", user: { id: 0, username: "", email: "", roles: [] } };
  }

  return { messageError, data };
};
