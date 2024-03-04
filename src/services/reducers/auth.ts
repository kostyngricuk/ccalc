import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

import type { RootState } from "../store";
import { IUser } from "../../types/user";

interface AuthState {
  currentUser?: IUser | null,
}

const accessToken = Cookies.get('e-access-token');

const initialState: AuthState = {
  currentUser: accessToken ? jwtDecode(accessToken) : null,
}

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<AuthState | null>
    ) => {
      if (action.payload === null) {
        state.currentUser = null;
        Cookies.remove('e-access-token');
        return;
      }
      const { currentUser } = action.payload;
      state.currentUser = currentUser;
    },
  }
})

export default slice.reducer;

export const { setCredentials } = slice.actions;

export const selectCurrenIUser = (state: RootState) => state.auth.currentUser;
