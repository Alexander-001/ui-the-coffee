import {
  AddressResponse,
  AddressService,
} from "@/interfaces/address.interface";
import { request } from "@/utils/request";

export const addAddress = async (bodyParams: AddressService) => {
  let data: AddressResponse = {
    message: "",
    address: {
      id: 0,
      name: "",
      description: "",
      latitude: 0,
      longitude: 0,
      image: "",
    },
  };
  let messageError: string = "";
  try {
    const response = await request("address", undefined, "POST", bodyParams);
    data = response;
  } catch (error) {
    data = {
      message: "",
      address: {
        id: 0,
        name: "",
        description: "",
        latitude: 0,
        longitude: 0,
        image: "",
      },
    };
    messageError = "Hubo un error al agregar dirección";
  }
  return { data, messageError };
};
