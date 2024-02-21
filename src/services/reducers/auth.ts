import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import { IUser } from "../../types/user";

interface AuthState {
  user?: IUser | null,
  token?: string | null
}

const initialState: AuthState = {
  user: null,
  token: null
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
        state.user = null;
        state.token = null;
        return;
      }
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
  }
})

export default slice.reducer;

export const { setCredentials } = slice.actions;

export const selectCurrenIUser = (state: RootState) => state.auth.user;
