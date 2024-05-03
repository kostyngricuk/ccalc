import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IProductState, TProducts } from "../types/products";

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
        state.selectedItems = [...state.selectedItems, {
          ...selectedItem,
          id: state.selectedItems.length,
        }];
      }
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
  removeProduct
} = productSlice.actions;

export default productSlice.reducer;