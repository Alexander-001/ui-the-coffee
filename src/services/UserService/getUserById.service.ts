import { UserResponse } from "@/interfaces/user.interface";
import { manageSessionError } from "@/utils/Common";
import { request } from "@/utils/request";

export const getUserByUsername = async (username: string) => {
  let data: UserResponse = { message: "", user: null, errorSession: false };
  try {
    const response = await request(`users/${username}`, undefined, "GET", {});
    data.user = response.user || null;
    data.message = response.message || "";
  } catch (error: any) {
    const { message, errorSession } = manageSessionError(
      error,
      "Obtener usuario"
    );
    data = { message, user: null, errorSession };
  }
  return { data };
};
