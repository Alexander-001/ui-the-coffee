import { UserEmailResponse, UserService } from "@/interfaces/user.interface";
import { manageSessionError } from "@/utils/Common";
import { request } from "@/utils/request";

export const registerUser = async (body: UserService) => {
  let data: UserEmailResponse = {
    message: "",
    successRegister: false,
    errorSession: false,
  };
  try {
    const response = await request("users/register", undefined, "POST", body);
    data.message = response.message || "";
    data.successRegister = response.successRegister || "";
  } catch (error: any) {
    const { message, errorSession } = manageSessionError(
      error,
      "Registrar usuario"
    );
    data = { message, successRegister: false, errorSession };
  }
  return { data };
};
