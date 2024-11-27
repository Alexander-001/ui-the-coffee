import { UserResponse } from "@/interfaces/user.interface";
import { manageSessionError } from "@/utils/Common";
import { request } from "@/utils/request";

export const confirmationEmail = async () => {
  let data: UserResponse = { message: "", user: null, errorSession: false };
  try {
    const response = await request(
      "users/confirmation-email",
      undefined,
      "POST",
      {}
    );
    data.user = response.user || null;
    data.message = response.message || "";
  } catch (error: any) {
    const { message, errorSession } = manageSessionError(
      error,
      "Confirmación de email"
    );
    data = { message, user: null, errorSession };
  }

  return { data };
};
