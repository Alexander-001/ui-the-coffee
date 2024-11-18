import { GetAddressResponse } from "@/interfaces/address.interface";
import { request } from "@/utils/request";

export const getAllAddress = async () => {
  let data: GetAddressResponse = { message: "", addresses: [] };
  let messageError: string = "";
  try {
    const response = await request("address", undefined, "GET", {});
    data = response;
  } catch (error) {
    data = { message: "", addresses: [] };
    messageError = "Hubo un error al obtener direcciones";
  }
  return { data, messageError };
};
