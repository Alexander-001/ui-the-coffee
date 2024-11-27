import {
  ProductResponse,
  ProductService,
} from "@/interfaces/product.interface";
import { manageSessionError } from "@/utils/Common";
import { request } from "@/utils/request";

export const updateProductById = async (body: ProductService, id: string) => {
  let data: ProductResponse = {
    message: "",
    product: null,
    errorSession: false,
  };
  try {
    const response = await request(`products/${id}`, undefined, "PUT", body);
    data.product = response.product || null;
    data.message = response.message || "";
  } catch (error: any) {
    const { message, errorSession } = manageSessionError(
      error,
      "Actualizar producto"
    );
    data = { message, product: null, errorSession };
  }
  return { data };
};
