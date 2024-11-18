import { AddressResponse } from "@/interfaces/address.interface";
import { request } from "@/utils/request";

export const deleteAddressById = async (id: string) => {
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
    const response = await request(`address/${id}`, undefined, "DELETE", {});
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
    messageError = "Hubo un error al eliminar dirección";
  }
  return { data, messageError };
};
