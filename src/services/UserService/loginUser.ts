import { LoginInputs, LoginResponse } from "@/interfaces/user.interface";
import { request } from "@/utils/request";

export const loginUser = async (body: LoginInputs) => {
  let data: LoginResponse = { message: "", token: "", username: "" };
  let messageError: string = "";
  try {
    const response = await request("login", undefined, "POST", body);
  } catch (error) {
    data = { message: "", token: "", username: "" };
    messageError = "Hubo un error al iniciar sesión";
  }
  return { data, messageError };
};
