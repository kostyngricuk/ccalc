import { ISelectedProduct } from '@services/types/products';

export const getKkal = ({
  proto,
  carbo,
  fats
}: {
  proto: number,
  carbo: number,
  fats: number
}) => proto * 4 + carbo * 4 + fats * 9;

export interface ITottalValues {
  weight: number,
  kkal: number,
  proto: number,
  carbo: number,
  fats: number
}

export const getTottal = (items: ISelectedProduct[]): ITottalValues => {
  const weight = items.reduce((acc, item) => acc + item.weight, 0);
  const kkal = items.reduce((acc, item) => acc + item.kkal, 0);
  const proto = items.reduce((acc, item) => acc + item.proto, 0);
  const carbo = items.reduce((acc, item) => acc + item.carbo, 0);
  const fats = items.reduce((acc, item) => acc + item.fats, 0);
  return {
    weight,
    kkal,
    proto,
    carbo,
    fats
  }
}

export const getNutritionByWeight = ({
  product,
  newWeight
}: {
  product: ISelectedProduct,
  newWeight: number
}) => {
  const {
    kkal,
    proto,
    fats,
    carbo,
    weight
  } = product;

  const validWeight = newWeight || 1;

  return {
    kkal: kkal / weight * validWeight,
    proto: proto / weight * validWeight,
    fats: fats / weight * validWeight,
    carbo: carbo / weight * validWeight,
    weight: validWeight
  };;
}
