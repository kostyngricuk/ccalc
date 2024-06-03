import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IProduct, IProductState, TProducts } from "../types/products";

const initialState: IProductState = {
  items: [],
  selectedItems: []
}

export const productSlice = createSlice({
  name: 'product',
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
      state.selectedItems = state.selectedItems.filter(item => item.id !== id)
    }
  }
})

export const {
  getProducts,
  getProductsSuccess,
  getProductsError,
  addProduct,
  addCustomProduct,
  removeProduct
} = productSlice.actions;

export default productSlice.reducer;