import productApi, { IProductResponse } from "services/api/product";
import { head, last } from 'lodash';
import { createMockApiRequest, IDispatchRes, runMockSaga } from 'utils/test-utils';
import {
  addProduct,
  getProducts,
  getProductsSuccess,
  removeProduct
} from 'store/slices/productSlice';
import productSaga, {
  addProductToItems,
  getProductsRequest,
  removeProductFromItems
} from './productSaga';


describe('Test saga init', () => {
  const genObj = productSaga();

  it('Should exist getProducts', () => {
    const res = genObj.next();
    expect(head(res.value?.payload?.args)).toBe(getProducts.type)
  })

  it('Should exist addProduct', () => {
    const res = genObj.next();
    expect(head(res.value?.payload?.args)).toBe(addProduct.type)
  })

  it('Should exist removeProduct', () => {
    const res = genObj.next();
    expect(head(res.value?.payload?.args)).toBe(removeProduct.type)
  })
})

describe('Test each productSaga', () => {
  const productResponseSuccess: IProductResponse = {
    items: [],
    success: true
  }

  const productResponseErrorCode: IProductResponse = {
    items: [],
    success: false,
    errorCode: 'some_error'
  }

  let dispatched: IDispatchRes[];
  let mockRequest: jest.SpyInstance;

  beforeEach(() => {
    dispatched = [];
  })

  afterEach(() => {
    mockRequest.mockClear();
  })

  describe('Test getProductsRequest saga', () => {
    const sagaFunc = getProductsRequest;
    const mockData = {}

    const api = productApi;
    const apiMethod = 'getProducts';

    it('Should use mock request', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, productResponseSuccess)

      await runMockSaga(sagaFunc, mockData);

      expect(mockRequest).toHaveBeenCalledTimes(1);
    })

    it('Should success', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, productResponseSuccess)

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)?.type).toBe(getProductsSuccess.type);
    })

    it('Should get error code', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, productResponseErrorCode)

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)?.error).toEqual(new Error(productResponseErrorCode.errorCode));
    })

    it('Should error request', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, productResponseErrorCode);

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)?.type).toBe('REQUEST_ERROR');
    })
  });

  it('Test addProductToItems saga', () => {
    const mockData = {
      payload: {
        id: '0'
      }
    }

    const genObj = addProductToItems(mockData);
    genObj.next();
    expect(genObj.next().done).toBeTruthy()
  });

  it('Test removeProductFromItems saga', () => {
    const mockData = {
      payload: {
        id: '0'
      }
    }

    const genObj = removeProductFromItems(mockData);
    genObj.next();
    expect(genObj.next().done).toBeTruthy()
  });
})