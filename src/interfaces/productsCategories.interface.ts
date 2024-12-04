//* Product Categories Body params
export interface ProductsCategoriesService {
  name: string;
}

export interface ProductsCategories {
  id: number;
  name: string;
}

export interface ProductsCategoriesResponse {
  message: string;
  category: ProductsCategories | null;
  name: string | undefined;
  errorSession: boolean;
}

export interface GetProductsCategoriesResponse {
  message: string;
  categories: ProductsCategories[];
  errorSession: boolean;
}
