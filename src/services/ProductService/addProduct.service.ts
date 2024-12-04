import {
  ProductResponse,
  ProductService,
} from "@/interfaces/product.interface";
import { manageSessionError } from "@/utils/Common";
import { request } from "@/utils/request";

export const addProduct = async (bodyParams: ProductService) => {
  let data: ProductResponse = {
    message: "",
    product: null,
    errorSession: false,
  };
  try {
    const response = await request("products", undefined, "POST", bodyParams);
    data.product = response.product || null;
    data.message = response.message || "";
  } catch (error: any) {
    const { message, errorSession } = manageSessionError(
      error,
      "Agregar productos"
    );
    data = { message, product: null, errorSession };
  }
  return { data };
};
