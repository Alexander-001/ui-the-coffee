import { GetUserResponse } from "@/interfaces/user.interface";
import { request } from "@/utils/request";

export const getAllUsers = async () => {
  let data: GetUserResponse = { message: "", users: [] };
  let messageError: string = "";
  try {
    const response = await request("users", undefined, "GET", {});
    console.log(response);
  } catch (error) {
    data = { message: "", users: [] };
    messageError = "Hubo un error al obtener usuarios";
  }
  return { data, messageError };
};
