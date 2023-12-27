import { createSlice } from "@reduxjs/toolkit";

type TState = {
    isLoading: boolean
}

const initialState = {
    isLoading: true
} as TState;

export const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        deactiveteLoading: (state) => {
            state.isLoading = false;
        }
    }
});

export const {
    deactiveteLoading
} = productListSlice.actions;

export default productListSlice.reducer;