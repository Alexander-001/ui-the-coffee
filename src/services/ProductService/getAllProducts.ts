import { GetProductResponse } from "@/interfaces/product.interface";
import { request } from "@/utils/request";

export const getAllProducts = async () => {
  let data: GetProductResponse = { message: "", products: [] };
  let messageError: string = "";
  try {
    const response = await request("products", undefined, "GET", {});
    data = response;
  } catch (error) {
    data = { message: "", products: [] };
    messageError = "Hubo un error al obtener productos";
  }
  return { data, messageError };
};
