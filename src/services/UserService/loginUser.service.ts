import { LoginInputs, LoginResponse } from "@/interfaces/user.interface";
import { manageSessionError } from "@/utils/Common";
import { request } from "@/utils/request";

export const loginUser = async (body: LoginInputs) => {
  let data: LoginResponse = {
    message: "",
    token: "",
    username: "",
    errorSession: false,
  };
  try {
    const response: LoginResponse = await request(
      "login",
      undefined,
      "POST",
      body
    );
    data.message = response.message || "";
    data.token = response.token || "";
    data.username = response.username || "";
  } catch (error: any) {
    const { message, errorSession } = manageSessionError(
      error,
      "Inicio de sesión"
    );
    data = { message, token: "", username: "", errorSession };
  }
  return { data };
};
