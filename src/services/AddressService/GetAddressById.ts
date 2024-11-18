import { AddressResponse } from "@/interfaces/address.interface";
import { request } from "@/utils/request";

export const getAddressById = async (id: string) => {
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
    const response = await request(`address/${id}`, undefined, "GET", {});
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
    messageError = "Hubo un error al obtener dirección";
  }
  return { data, messageError };
};
