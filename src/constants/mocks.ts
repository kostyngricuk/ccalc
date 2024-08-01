import { IProduct, ISelectedProduct, KEY_PRODUCT_ID } from "types/products"
import { Genders, TUser } from "types/user"

export const defaultMockUser: TUser = {
  id: 'unicStringId',
  height: 180,
  weight: 85,
  weightGoal: 80,
  age: 26,
  gender: Genders.man,
  email: 'mockUser@gmail.com',
  calorieWidget: {
    limit: 2300,
    eaten: 1980,
  },
}

export const defaultMockProduct: IProduct = {
  [KEY_PRODUCT_ID]: 0,
  name: 'Milk',
  kkal: 34,
  proto: 1,
  carbo: 3,
  fats: 2,
}

export const defaultMockSelectedProduct: ISelectedProduct = {
  [KEY_PRODUCT_ID]: 0,
  name: 'Milk',
  kkal: 34,
  proto: 1,
  carbo: 3,
  fats: 2,
  weight: 100,
}
