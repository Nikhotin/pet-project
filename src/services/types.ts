export interface SingleResponse<T> {
  data: T;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  full_image: string;
  cart_image: string;
  favorite: boolean;
}
