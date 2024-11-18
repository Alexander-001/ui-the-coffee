import { UserResponse, UserService } from "@/interfaces/user.interface";
import { request, requestSetToken } from "@/utils/request";

export const updateUser = async (body: UserService, id: string) => {
  let data: UserResponse = {
    message: "",
    user: { id: 0, username: "", email: "", roles: [] },
  };
  requestSetToken(
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGV4YW5kZXJAY29ycmVvLmNvbSIsImF1dGhvcml0aWVzIjoiW3tcImF1dGhvcml0eVwiOlwiUk9MRV9BRE1JTlwifSx7XCJhdXRob3JpdHlcIjpcIlJPTEVfVVNFUlwifV0iLCJ1c2VybmFtZSI6ImFsZXhhbmRlckBjb3JyZW8uY29tIiwiZXhwIjoxNzMxOTYxMjQxLCJpYXQiOjE3MzE5NTc2NDF9.X09zNrPocCvxewncEIgl45XqAAgTKOQSEnkFnrHV11w"
  );
  let messageError: string = "";
  try {
    const response = await request(`users/${id}`, undefined, "PUT", body);
  } catch (error) {
    messageError = "Hubo un error al modificar usuario.";
    data = { message: "", user: { id: 0, username: "", email: "", roles: [] } };
  }

  return { messageError, data };
};
