import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

import { IUserState, TUser } from "../types/user";

const accessToken = Cookies.get('e-access-token');

const initialState: IUserState = {
  user: accessToken ? jwtDecode(accessToken) : null,
  isLoading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest: (
      state: IUserState,
    ) => {
      state.user = null;
      state.isLoading = true;
    },
    registerRequest: (
      state: IUserState,
    ) => {
      state.user = null;
      state.isLoading = true;
    },
    updateRequest: (
      state: IUserState,
    ) => {
      state.isLoading = true;
    },
    resetRequest: (
      state: IUserState
    ) => {
      state.isLoading = true;
    },
    logoutRequest: (
      state: IUserState
    ) => {
      Cookies.remove('e-access-token');
      state.user = null;
    },

    requsetSuccess: (
      state: IUserState,
      {
        payload: user
      }: PayloadAction<TUser>
    ) => {
      state.user = user;
      state.isLoading = false;
    },
    requsetError: (
      state: IUserState,
    ) => {
      state.user = null;
      state.isLoading = false;
    },
  }
})

export const {
  loginRequest,
  registerRequest,
  updateRequest,
  resetRequest,
  logoutRequest,
  requsetSuccess,
  requsetError,
} = userSlice.actions;

export default userSlice.reducer;