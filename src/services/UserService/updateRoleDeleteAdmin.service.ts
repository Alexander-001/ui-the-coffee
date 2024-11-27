import { UsernameService, UserResponse } from "@/interfaces/user.interface";
import { manageSessionError } from "@/utils/Common";
import { request } from "@/utils/request";

export const updateRoleDeleteAdmin = async (body: UsernameService) => {
  let data: UserResponse = {
    message: "",
    user: null,
    errorSession: false,
  };
  try {
    const response = await request("users/role-user", undefined, "PUT", body);
    data.message = response.message || "";
    data.user = response.user || null;
  } catch (error: any) {
    const { message, errorSession } = manageSessionError(
      error,
      "Eliminar role Administrador"
    );
    data = { message, user: null, errorSession };
  }

  return { data };
};
