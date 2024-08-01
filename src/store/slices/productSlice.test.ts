import { IProduct, ISelectedProduct, KEY_PRODUCT_ID, TProducts } from 'types/products';
import { getNutritionByWeight } from 'utils/calculations';
import productReducer, {
  initialState,
  getProducts,
  getProductsSuccess,
  getProductsError,
  addProduct,
  addCustomProduct,
  removeProduct,
  updateProductWeight,
  saveProductsSuccess
} from './productSlice';

describe('productSlice testing', () => {
  let mockProducts: TProducts;
  let mockSelectedProducts: ISelectedProduct[];
  beforeEach(() => {
    mockProducts = [
      {
        [KEY_PRODUCT_ID]: 0,
        name: 'Milk',
        kkal: 34,
        proto: 1,
        carbo: 3,
        fats: 2,
      }
    ];
    mockSelectedProducts = [
      {
        [KEY_PRODUCT_ID]: 0,
        name: 'Milk',
        kkal: 34,
        proto: 1,
        carbo: 3,
        fats: 2,
        weight: 100,
      }
    ];
  })

  it('Get products', () => {
    const state = {
      items: mockProducts,
      selectedItems: mockSelectedProducts
    }
    expect(productReducer(state, getProducts())).toEqual({
      items: [],
      selectedItems: state.selectedItems
    })
  })

  it('Get products success', () => {
    expect(productReducer(initialState, getProductsSuccess(mockProducts))).toEqual({
      items: mockProducts,
      selectedItems: initialState.selectedItems
    })
  })

  it('Get products error', () => {
    expect(productReducer(initialState, getProductsError())).toEqual({
      items: [],
      selectedItems: initialState.selectedItems
    })
  })

  it('Save products success', () => {
    const state = {
      items: mockProducts,
      selectedItems: mockSelectedProducts
    }
    expect(productReducer(state, saveProductsSuccess())).toEqual({
      items: state.items,
      selectedItems: []
    })
  })

  it('Remove the product', () => {
    const state = {
      items: mockProducts,
      selectedItems: mockSelectedProducts
    }
    const id = mockSelectedProducts[0][KEY_PRODUCT_ID];
    expect(productReducer(state, removeProduct(id))).toEqual({
      items: state.items,
      selectedItems: state.selectedItems.filter(product => product[KEY_PRODUCT_ID] !== id),
    })
  })

  it('Update product weight', () => {
    const state = {
      items: mockProducts,
      selectedItems: [
        mockSelectedProducts[0]
      ]
    }
    const id = mockSelectedProducts[0][KEY_PRODUCT_ID];
    const newWeight = 200;
    const nutrition = getNutritionByWeight({
      product: mockSelectedProducts[0],
      newWeight
    });
    const updatedItem = {
      ...mockSelectedProducts[0],
      ...nutrition
    }

    expect(productReducer(state, updateProductWeight({ id, newWeight }))).toEqual({
      items: state.items,
      selectedItems: [
        updatedItem
      ],
    })
  })

  it('Update product weight - Error', () => {
    const state = {
      items: mockProducts,
      selectedItems: [
        mockSelectedProducts[0]
      ]
    }
    const id = 999;
    const newWeight = 200;

    expect(productReducer(state, updateProductWeight({ id, newWeight }))).toEqual(state)
  })

  it('Add product to selected products', () => {
    const product:IProduct = {
      [KEY_PRODUCT_ID]: mockProducts.length + mockSelectedProducts.length,
      name: 'Milk',
      kkal: 34,
      proto: 1,
      carbo: 3,
      fats: 2,
    };

    const addedItem = {
      ...product,
      weight: 100,
    }

    const state = {
      items: mockProducts,
      selectedItems: mockSelectedProducts
    }
    expect(productReducer(state, addCustomProduct(product))).toEqual({
      items: state.items,
      selectedItems: [
        addedItem,
        ...state.selectedItems,
      ]
    })
  })

  it('Add custom product', () => {
    const product = mockProducts[0];
    const productId = product[KEY_PRODUCT_ID];

    const weight = 100;
    const addedItem = {
      ...product,
      weight
    }

    const state = {
      items: mockProducts,
      selectedItems: []
    }
    expect(productReducer(state, addProduct(productId))).toEqual({
      items: state.items,
      selectedItems: [
        addedItem
      ]
    })
  })
})