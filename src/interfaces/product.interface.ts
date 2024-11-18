//* Product Body params
export interface ProductService {
  name: string;
  price: number;
  description: string;
  sku: string;
  image: string;
}

//* Response Product Api services
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  sku: string;
  image: string;
}

export interface ProductResponse {
  product: Product;
  message: string;
}

export interface GetProductResponse {
  message: string;
  products: Product[];
}
