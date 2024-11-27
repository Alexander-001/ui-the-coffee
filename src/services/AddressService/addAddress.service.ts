import {
  AddressResponse,
  AddressService,
} from "@/interfaces/address.interface";
import { manageSessionError } from "@/utils/Common";
import { request } from "@/utils/request";

export const addAddress = async (bodyParams: AddressService) => {
  let data: AddressResponse = {
    message: "",
    address: null,
    errorSession: false,
  };
  try {
    const response = await request("address", undefined, "POST", bodyParams);
    data.address = response.address || null;
    data.message = response.message || "";
  } catch (error: any) {
    const { message, errorSession } = manageSessionError(
      error,
      "Agregar dirección"
    );
    data = { message, address: null, errorSession };
  }
  return { data };
};
