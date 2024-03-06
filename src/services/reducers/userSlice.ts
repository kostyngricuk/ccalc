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
    loginSuccess: (
      state: IUserState,
      {
        payload: user
      }: PayloadAction<TUser>
    ) => {
      state.user = user;
      state.isLoading = false;
    },
    loginError: (
      state: IUserState,
    ) => {
      state.user = null;
      state.isLoading = false;
    }
  }
})

export const {
  loginRequest,
  loginSuccess,
  loginError
} = userSlice.actions;

export default userSlice.reducer;