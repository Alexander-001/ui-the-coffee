import {
  ProductResponse,
  ProductService,
} from "@/interfaces/product.interface";
import { request } from "@/utils/request";

export const updateProductById = async (body: ProductService, id: string) => {
  let data: ProductResponse = {
    message: "",
    product: { id: 0, name: "", price: 0, description: "", sku: "", image: "" },
  };
  let messageError: string = "";
  try {
    const response = await request(`products/${id}`, undefined, "PUT", body);
    data = response;
  } catch (error) {
    data = {
      message: "",
      product: {
        id: 0,
        name: "",
        price: 0,
        description: "",
        sku: "",
        image: "",
      },
    };
    messageError = "Hubo un error al actualizar producto";
  }
  return { data, messageError };
};
