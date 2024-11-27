import { UserResponse, UserService } from "@/interfaces/user.interface";
import { manageSessionError } from "@/utils/Common";
import { request } from "@/utils/request";

export const registerAdmin = async (body: UserService) => {
  let data: UserResponse = {
    message: "",
    user: null,
    errorSession: false,
  };
  try {
    const response = await request("users", undefined, "POST", body);
    data.message = response.message || "";
    data.user = response.user || null;
  } catch (error: any) {
    const { message, errorSession } = manageSessionError(
      error,
      "Registrar administrador"
    );
    data = { message, user: null, errorSession };
  }
  return { data };
};
