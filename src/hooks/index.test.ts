import { RootState } from 'store/store';
import { ISelectedProduct, KEY_PRODUCT_ID } from 'types/products';
import { selectCurrentUser, selectIsLoading, selectNotificationItems, selectProductItems, selectProductSelectedItems } from './selectors'

describe('Test cases for hooks', () => {
  const mockProduct: ISelectedProduct = {
    [KEY_PRODUCT_ID]: 0,
    name: 'Milk',
    kkal: 34,
    proto: 1,
    carbo: 3,
    fats: 2,
    weight: 100,
  };

  const mockState: RootState = {
    user: {
      user: {
        email: 'mockUser@gmail.com'
      },
      isLoading: false
    },
    product: {
      items: [
        mockProduct
      ],
      selectedItems: [
        mockProduct
      ]
    },
    notification: {
      items: []
    }
  }

  it('Select current user', () => {
    const object = selectCurrentUser(mockState);
    expect(object).toEqual(mockState.user.user);
  })

  it('Select product items', () => {
    const object = selectProductItems(mockState);
    expect(object).toEqual(mockState.product.items);
  })

  it('Select selected products', () => {
    const object = selectProductSelectedItems(mockState);
    expect(object).toEqual(mockState.product.selectedItems);
  })

  it('Select loading', () => {
    const object = selectIsLoading(mockState);
    expect(object).toEqual(mockState.user.isLoading);
  })

  it('Select loading', () => {
    const object = selectNotificationItems(mockState);
    expect(object).toEqual(mockState.notification.items);
  })
})