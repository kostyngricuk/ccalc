import { ISelectedProduct } from 'types/products';

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

export const getTottal = (items: ISelectedProduct[]): ITottalValues => (
  items.reduce((acc, item) => (
    {
      weight: acc.weight + item.weight,
      kkal: acc.kkal + item.kkal,
      proto: acc.proto + item.proto,
      carbo: acc.carbo + item.carbo,
      fats: acc.fats + item.fats
    }
  ), { weight: 0, kkal: 0, proto: 0, carbo: 0, fats: 0 })
)

export const getNutritionByWeight = ({
  product,
  newWeight = 100
}: {
  product: ISelectedProduct,
  newWeight?: number
}) => {
  const {
    kkal,
    proto,
    fats,
    carbo,
    weight
  } = product;

  return {
    kkal: kkal / weight * newWeight,
    proto: proto / weight * newWeight,
    fats: fats / weight * newWeight,
    carbo: carbo / weight * newWeight,
    weight: newWeight
  };
}
