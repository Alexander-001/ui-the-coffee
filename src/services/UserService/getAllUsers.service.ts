import { GetUserResponse } from "@/interfaces/user.interface";
import { manageSessionError } from "@/utils/Common";
import { request } from "@/utils/request";

export const getAllUsers = async () => {
  let data: GetUserResponse = { message: "", users: [], errorSession: false };
  try {
    const response = await request("users", undefined, "GET", {});
    data.users = response.users || null;
    data.message = response.message || "";
  } catch (error: any) {
    const { message, errorSession } = manageSessionError(
      error,
      "Obtener usuarios"
    );
    data = { message, users: [], errorSession };
  }
  return { data };
};
