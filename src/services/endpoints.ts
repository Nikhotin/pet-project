import { axiosInstance, routes } from './api';
import { Product, SingleResponse } from './types';

export const readProducts = async (): Promise<Array<Product> | undefined> => {
  try {
    const res = await axiosInstance.get<void, SingleResponse<{ products: Array<Product> }>>(
      routes.products,
    );
    return res.data.products;
  } catch (e) {
    console.error(e);
  }
};
