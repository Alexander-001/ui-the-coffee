//* Address body params
export interface AddressService {
  image: string;
  latitude: number;
  longitude: number;
  description: string;
  name: string;
}

//* Response Address Api services
interface Address {
  id: number;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  image: string;
}

export interface AddressResponse {
  address: Address | null;
  message: string;
  errorSession: boolean;
}

export interface GetAddressResponse {
  addresses: Address[];
  message: string;
  errorSession: boolean;
}
