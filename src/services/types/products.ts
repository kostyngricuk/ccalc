export interface IProduct {
  id: number;
  name: string;
  kkal?: number;
  proto?: number;
  fats?: number;
  carbo?: number;
}

export type TProducts = IProduct[];