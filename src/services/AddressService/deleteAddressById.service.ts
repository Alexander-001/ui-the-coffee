import { AddressResponse } from "@/interfaces/address.interface";
import { manageSessionError } from "@/utils/Common";
import { request } from "@/utils/request";

export const deleteAddressById = async (id: string) => {
  let data: AddressResponse = {
    message: "",
    address: null,
    errorSession: false,
  };
  try {
    const response = await request(`address/${id}`, undefined, "DELETE", {});
    data.address = response.address || null;
    data.message = response.message || "";
  } catch (error: any) {
    const { message, errorSession } = manageSessionError(
      error,
      "Eliminar dirección"
    );
    data = { message, address: null, errorSession };
  }
  return { data };
};
