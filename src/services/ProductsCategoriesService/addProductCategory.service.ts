import {
  ProductsCategoriesResponse,
  ProductsCategoriesService,
} from "@/interfaces/productsCategories.interface";
import { manageSessionError } from "@/utils/Common";
import { request } from "@/utils/request";

export const addProductCategory = async (
  bodyParams: ProductsCategoriesService
) => {
  let data: ProductsCategoriesResponse = {
    message: "",
    category: null,
    name: undefined,
    errorSession: false,
  };
  try {
    const response = await request(
      "products-categories",
      undefined,
      "POST",
      bodyParams
    );
    data.category = response.category || null;
    data.message = response.message || "";
  } catch (error: any) {
    const { message, errorSession } = manageSessionError(
      error,
      "Agregar categoria"
    );
    data = { message, category: null, name: error?.name, errorSession };
  }
  return { data };
};
