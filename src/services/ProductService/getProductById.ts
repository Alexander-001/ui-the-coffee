import { ProductResponse } from "@/interfaces/product.interface";
import { request } from "@/utils/request";

export const getProductById = async (id: string) => {
  let data: ProductResponse = {
    message: "",
    product: { id: 0, name: "", price: 0, description: "", sku: "", image: "" },
  };
  let messageError: string = "";
  try {
    const response = await request(`products/${id}`, undefined, "GET", {});
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
    messageError = "Hubo un error al obtener producto";
  }
  return { data, messageError };
};
