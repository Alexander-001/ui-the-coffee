import { GetProductResponse } from "@/interfaces/product.interface";
import { manageSessionError } from "@/utils/Common";
import { request } from "@/utils/request";

export const getAllProducts = async () => {
  let data: GetProductResponse = {
    message: "",
    products: [],
    errorSession: false,
  };
  try {
    const response = await request("products", undefined, "GET", {});
    data.products = response.products || [];
    data.message = response.message || "";
  } catch (error: any) {
    const { message, errorSession } = manageSessionError(
      error,
      "Obtener productos"
    );
    data = { message: message, products: [], errorSession };
  }
  return { data };
};
