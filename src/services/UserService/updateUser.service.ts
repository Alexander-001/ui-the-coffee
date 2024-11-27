import { UserResponse, UserService } from "@/interfaces/user.interface";
import { manageSessionError } from "@/utils/Common";
import { request } from "@/utils/request";

export const updateUser = async (body: UserService, id: string) => {
  let data: UserResponse = {
    message: "",
    user: null,
    errorSession: false,
  };
  try {
    const response = await request(`users/${id}`, undefined, "PUT", body);
    data.message = response.message || "";
    data.user = response.user || null;
  } catch (error: any) {
    const { message, errorSession } = manageSessionError(
      error,
      "Agregar role Administrador"
    );
    data = { message, user: null, errorSession };
  }

  return { data };
};
