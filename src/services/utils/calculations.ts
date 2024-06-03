import { ISelectedProduct } from "../types/products";

export const getKkal = ({
  proto,
  carbo,
  fats
}: {
  proto: number,
  carbo: number,
  fats: number
}) => proto * 4 + carbo * 4 + fats * 9;

export const getTottal = (items: ISelectedProduct[]) => {
  const weight = items.reduce((acc, item) => acc + item.weight, 0);
  const kkal = items.reduce((acc, item) => acc + item.kkal, 0);
  const proto = items.reduce((acc, item) => acc + item.kkal, 0);
  const carbo = items.reduce((acc, item) => acc + item.kkal, 0);
  const fats = items.reduce((acc, item) => acc + item.kkal, 0);
  return {
    weight,
    kkal,
    proto,
    carbo,
    fats
  }
}
