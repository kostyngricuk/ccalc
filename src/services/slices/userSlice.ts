import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

import { IUserState, TUser } from '@services/types/user';
import { SLICE_USER_NAME } from '@constants/store';

const accessToken = Cookies.get('e-access-token');

export const initialState: IUserState = {
  user: accessToken ? jwtDecode(accessToken) : null,
  isLoading: false,
}

export const userSlice = createSlice({
  name: SLICE_USER_NAME,
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
    sendCodeRequest: (
      state: IUserState
    ) => {
      state.isLoading = true;
    },
    changePasswordRequest: (
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
    requestSuccess: (
      state: IUserState,
      {
        payload: user
      }: PayloadAction<TUser>
    ) => {
      state.user = user;
      state.isLoading = false;
    },
    requsetUserError: (
      state: IUserState,
    ) => {
      state.isLoading = false;
    },
  }
})

export const {
  loginRequest,
  registerRequest,
  updateRequest,
  resetRequest,
  sendCodeRequest,
  changePasswordRequest,
  logoutRequest,
  requestSuccess,
  requsetUserError,
} = userSlice.actions;

export default userSlice.reducer;