//* Product Body params
export interface ProductService {
  name: string;
  price: number | string;
  description: string;
  sku: string;
  image: string;
  category: string;
}

//* Response Product Api services
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  sku: string;
  image: string;
  category: string;
}

export interface ProductResponse {
  product: Product | null;
  message: string;
  errorSession: boolean;
}

export interface GetProductResponse {
  message: string;
  products: Product[];
  errorSession: boolean;
}
