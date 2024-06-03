export interface IProduct {
  id: number;
  name: string;
  kkal: number;
  proto: number;
  fats: number;
  carbo: number;
}

export interface ISelectedProduct extends IProduct {
  weight: number;
}

export type TProducts = IProduct[];

export interface IProductState {
  items: TProducts,
  selectedItems: ISelectedProduct[]
}