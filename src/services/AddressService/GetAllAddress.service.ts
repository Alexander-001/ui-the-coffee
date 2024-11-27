import { GetAddressResponse } from "@/interfaces/address.interface";
import { manageSessionError } from "@/utils/Common";
import { request } from "@/utils/request";

export const getAllAddress = async () => {
  let data: GetAddressResponse = {
    message: "",
    addresses: [],
    errorSession: false,
  };
  try {
    const response = await request("address", undefined, "GET", {});
    data.addresses = response.addresses || [];
    data.message = response.message || "";
  } catch (error: any) {
    const { message, errorSession } = manageSessionError(
      error,
      "Obtener direcciones"
    );
    data = { message, addresses: [], errorSession };
  }
  return { data };
};
