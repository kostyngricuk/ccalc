import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

import type { RootState } from "../store";
import { IUser } from "../../types/user";

interface IAuthState {
  currentUser?: IUser | null,
  isChangePassword?: boolean | null
}

const accessToken = Cookies.get('e-access-token');

const initialState: IAuthState = {
  currentUser: accessToken ? jwtDecode(accessToken) : null,
  isChangePassword: false
}

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<IAuthState | null>
    ) => {
      if (action.payload === null) {
        state.currentUser = null;
        Cookies.remove('e-access-token');
        return;
      }
      const { currentUser } = action.payload;
      state.currentUser = currentUser;
    },
    setChangePassword: (
      state,
      action: PayloadAction<boolean | null>
    ) => {
      state.isChangePassword = action.payload;
    }
  }
})

export default slice.reducer;

export const { setCredentials, setChangePassword } = slice.actions;

export const selectCurrenUser = (state: RootState) => state.auth.currentUser;
export const selectIsChangePass = (state: RootState) => state.auth.isChangePassword;
