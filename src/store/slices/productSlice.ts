import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SLICE_PRODUCT_NAME } from 'constants/store';

import { IProduct, IProductState, TProducts } from 'types/products';
import { getNutritionByWeight } from 'utils/calculations';

export const initialState: IProductState = {
  items: [],
  selectedItems: []
}

export const productSlice = createSlice({
  name: SLICE_PRODUCT_NAME,
  initialState,
  reducers: {
    getProducts: (
      state: IProductState,
    ) => {
      state.items = [];
    },
    getProductsSuccess: (
      state: IProductState,
      {
        payload: products
      }: PayloadAction<TProducts>
    ) => {
      state.items = products;
    },
    getProductsError: (
      state: IProductState
    ) => {
      state.items = [];
    },
    addProduct: (
      state: IProductState,
      {
        payload: id
      }: PayloadAction<number>
    ) => {
      const selectedItem = state.items.find((item) => item.id === id);
      if (selectedItem) {
        state.selectedItems = [
          {
            ...selectedItem,
            weight: 100
          },
          ...state.selectedItems
        ];
      }
    },
    addCustomProduct: (
      state: IProductState,
      {
        payload: product
      }: PayloadAction<IProduct>
    ) => {
      state.selectedItems = [
        {
          ...product,
          weight: 100
        },
        ...state.selectedItems
      ];
    },
    removeProduct: (
      state: IProductState,
      {
        payload: id
      }: PayloadAction<number>
    ) => {
      state.selectedItems = state.selectedItems.filter(item => item.id !== id);
    },
    updateProductWeight: (
      state: IProductState,
      {
        payload: {
          id,
          newWeight
        }
      }: PayloadAction<{
        id: number,
        newWeight: number
      }>
    ) => {
      const targetIndex = state.selectedItems.findIndex(item => item.id === id);
      if (targetIndex === -1) {
        return;
      }

      const product = state.selectedItems[targetIndex];

      const nutrition = getNutritionByWeight({
        product,
        newWeight
      });

      state.selectedItems[targetIndex] = {
        ...product,
        ...nutrition,
      };
    },
    saveProductsSuccess: (
      state: IProductState
    ) => {
      state.selectedItems = [];
    },
  }
})

export const {
  getProducts,
  getProductsSuccess,
  getProductsError,
  addProduct,
  addCustomProduct,
  removeProduct,
  updateProductWeight,
  saveProductsSuccess,
} = productSlice.actions;

export default productSlice.reducer;