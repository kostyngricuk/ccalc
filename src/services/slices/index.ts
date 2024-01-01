import { combineReducers } from "@reduxjs/toolkit";
import productListReducer from "./productListSlice";

export default combineReducers({
    productList: productListReducer
})