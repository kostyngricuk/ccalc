import { call, put, takeLatest } from 'redux-saga/effects';
import {
  addProduct,
  getProductsError,
  getProducts,
  getProductsSuccess,
  removeProduct
} from 'store/slices/productSlice';
import productApi, { IProductResponse } from"services/api/product";
import { errorAction } from 'constants/errors';

export function* getProductsRequest(): Generator {
  try {
    const res = (yield call(productApi.getProducts)) as IProductResponse;
    if (res.success) {
      yield put(getProductsSuccess(res.items));
      return;
    }
    throw new Error(res.errorCode);
  } catch (error) {
    yield put(getProductsError());
    yield put({ type: errorAction, error });
  }
}

export function* addProductToItems(action: any): Generator {
  if (!action?.payload) {
    return;
  }
  const {
    id
  } = action.payload;
  yield put(addProduct(id));
}

export function* removeProductFromItems(action: any): Generator {
  if (!action?.payload) {
    return;
  }
  const {
    id
  } = action.payload;
  yield put(removeProduct(id));
}


function* productSaga() {
  yield takeLatest(getProducts.type, getProductsRequest);
  yield takeLatest(addProduct.type, addProductToItems);
  yield takeLatest(removeProduct.type, removeProductFromItems);
}

export default productSaga;