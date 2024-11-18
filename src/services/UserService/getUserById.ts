import { UserResponse } from "@/interfaces/user.interface";
import { request } from "@/utils/request";

export const getUserById = async (id: string) => {
  let data: UserResponse = {
    message: "",
    user: { id: 0, username: "", email: "", roles: [] },
  };
  let messageError: string = "";
  try {
    const response = await request(`users/${id}`, undefined, "GET", {});
    console.log(response);
  } catch (error) {
    data = {
      message: "",
      user: { id: 0, username: "", email: "", roles: [] },
    };
    messageError = "Hubo un error al obtener usuario";
  }
  return { data, messageError };
};
