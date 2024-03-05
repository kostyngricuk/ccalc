import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

import { IUserState, TUser } from "../types/user";

const accessToken = Cookies.get('e-access-token');

const initialState: IUserState = {
  user: accessToken ? jwtDecode(accessToken) : null,
  isLoading: false,
  message: '',
  success: true
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest: (
      state: IUserState,
    ) => {
      state.isLoading = true;
      state.message = '';
    },
    loginSuccess: (
      state: IUserState,
      {
        payload: user
      }: PayloadAction<TUser>
    ) => {
      state.user = user;
      state.isLoading = false;
      state.message = '';
    },
    loginError: (
      state: IUserState,
      {
        payload: message
      }: PayloadAction<string>
    ) => {
      state.user = null;
      state.isLoading = false;
      state.message = message;
    }
  }
})

export const {
  loginRequest,
  loginSuccess,
  loginError
} = userSlice.actions;

export default userSlice.reducer;