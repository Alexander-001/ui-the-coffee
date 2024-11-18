import {
  ProductResponse,
  ProductService,
} from "@/interfaces/product.interface";
import { request } from "@/utils/request";

export const addProduct = async (bodyParams: ProductService) => {
  let data: ProductResponse = {
    message: "",
    product: { id: 0, name: "", price: 0, description: "", sku: "", image: "" },
  };
  let messageError: string = "";
  try {
    const response = await request("products", undefined, "POST", bodyParams);
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
    messageError = "Hubo un error al agregar producto";
  }
  return { data, messageError };
};
