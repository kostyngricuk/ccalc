import { TUser } from 'types/user'
import { ISelectedProduct, KEY_PRODUCT_ID } from 'types/products'
import { defaultMockUser } from 'constants/mocks'
import hasAdditionalInfo from './auth'
import { getKkal, getNutritionByWeight, getTottal, ITottalValues } from './calculations'

describe('Auth utils', () => {
  let mockUser: TUser;
  beforeEach(() => {
    mockUser = defaultMockUser
  })

  it('User has additional information', () => {
    const hasInfo = hasAdditionalInfo(mockUser);
    expect(hasInfo).toBe(true);
  })

  it('User does not have age', () => {
    delete mockUser?.age;
    const hasInfo = hasAdditionalInfo(mockUser);
    expect(hasInfo).toBe(false);
  })

  it('User does not have weight', () => {
    delete mockUser?.weight;
    const hasInfo = hasAdditionalInfo(mockUser);
    expect(hasInfo).toBe(false);
  })

  it('User does not have height', () => {
    delete mockUser?.height;
    const hasInfo = hasAdditionalInfo(mockUser);
    expect(hasInfo).toBe(false);
  })

  it('User does not have weightGoal', () => {
    delete mockUser?.weightGoal;
    const hasInfo = hasAdditionalInfo(mockUser);
    expect(hasInfo).toBe(false);
  })

  it('User does not have gender', () => {
    delete mockUser?.gender;
    const hasInfo = hasAdditionalInfo(mockUser);
    expect(hasInfo).toBe(false);
  })
})

describe('Calculation utils', () => {
  const mockProduct: ISelectedProduct = {
    [KEY_PRODUCT_ID]: 0,
    name: 'Milk',
    kkal: 34,
    proto: 1,
    carbo: 3,
    fats: 2,
    weight: 100,
  };

  it('Get calories by proto, carbo and fats', () => {
    interface IMockValues {
      proto: number;
      carbo: number;
      fats: number;
    }
    const mockValues = {
      proto: 15,
      carbo: 20,
      fats: 10,
    } as IMockValues;
    const kkal = getKkal(mockValues);
    expect(kkal).toBe(230);
  })

  it('Get tottal values of selected products', () => {
    const mockProducts = [
      mockProduct,
      {
        [KEY_PRODUCT_ID]: 1,
        name: 'Cream',
        kkal: 34,
        proto: 1,
        carbo: 3,
        fats: 2,
        weight: 100,
      }
    ] as ISelectedProduct[];

    const tottal: ITottalValues = getTottal(mockProducts);
    const expResult: ITottalValues = {
      weight: 200,
      kkal: 68,
      proto: 2,
      carbo: 6,
      fats: 4
    }
    expect(tottal).toEqual(expResult);
  })

  it('Get nutrition by weight', () => {
    const nutrition: Object = getNutritionByWeight({
      product: mockProduct,
      newWeight: 200
    });
    const expResult: Object = {
      weight: 200,
      kkal: 68,
      proto: 2,
      carbo: 6,
      fats: 4
    }
    expect(nutrition).toEqual(expResult);
  })

  it('Get nutrition with default weight', () => {
    const nutrition: Object = getNutritionByWeight({
      product: mockProduct
    });
    const expResult: Object = {
      kkal: 34,
      proto: 1,
      carbo: 3,
      fats: 2,
      weight: 100,
    }
    expect(nutrition).toEqual(expResult);
  })
})