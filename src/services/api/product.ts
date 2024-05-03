import http from '../http';
import { IProductState, TProducts } from '../types/products';

export interface IProductResponse {
  items: TProducts,
  errorCode: string,
  success: boolean
}

const getProducts = async () => {
  const { data } = await http.get<IProductState>('/product/all');
  return data;
};

export default {
  getProducts
};