import { GetProductsCategoriesResponse } from "@/interfaces/productsCategories.interface";
import { manageSessionError } from "@/utils/Common";
import { request } from "@/utils/request";

export const getAllCategories = async () => {
  let data: GetProductsCategoriesResponse = {
    message: "",
    categories: [],
    errorSession: false,
  };
  try {
    const response = await request("products-categories", undefined, "GET", {});
    data.categories = response.categories || [];
    data.message = response.message || "";
  } catch (error: any) {
    const { message, errorSession } = manageSessionError(
      error,
      "Obtener categorias"
    );
    data = { message, categories: [], errorSession };
  }
  return { data };
};
