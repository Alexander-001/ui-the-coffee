import {
  AddressResponse,
  AddressService,
} from "@/interfaces/address.interface";
import { request } from "@/utils/request";

export const updateAddressById = async (
  bodyParams: AddressService,
  id: string
) => {
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
    const response = await request(
      `address/${id}`,
      undefined,
      "PUT",
      bodyParams
    );
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
    messageError = "Hubo un error al actualizar dirección";
  }
  return { data, messageError };
};
