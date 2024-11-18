import { ProductResponse } from "@/interfaces/product.interface";
import { request } from "@/utils/request";

export const deleteProductById = async (id: string) => {
  let data: ProductResponse = {
    message: "",
    product: { id: 0, name: "", price: 0, description: "", sku: "", image: "" },
  };
  let messageError: string = "";
  try {
    const response = await request(`products/${id}`, undefined, "DELETE", {});
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
    messageError = "Hubo un error al eliminar producto";
  }
  return { data, messageError };
};
