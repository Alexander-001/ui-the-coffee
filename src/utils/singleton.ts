import { Product } from "@/interfaces/product.interface";
import { ProductsCategories } from "@/interfaces/productsCategories.interface";

let product: Product = {
  id: 0,
  name: "",
  price: 0,
  description: "",
  sku: "",
  image: "",
  category: "",
};

let categories: ProductsCategories[] = [];

export const singletonProduct = {
  getProduct: () => product,
  setProduct: (prod: Product) => (product = prod),
  getCategories: () => categories,
  setCategories: (cat: ProductsCategories[]) => (categories = cat),
};
