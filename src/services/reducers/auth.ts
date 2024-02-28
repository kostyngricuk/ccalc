import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import { IUser } from "../../types/user";

interface AuthState {
  currentUser?: IUser | null,
  currentToken?: string | null
}

const initialState: AuthState = {
  currentUser: null,
  currentToken: null
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
        state.currentToken = null;
        return;
      }
      const { currentUser, currentToken } = action.payload;
      state.currentUser = currentUser;
      state.currentToken = currentToken;
    },
  }
})

export default slice.reducer;

export const { setCredentials } = slice.actions;

export const selectCurrenIUser = (state: RootState) => state.auth.currentUser;
export const selectCurrentToken = (state: RootState) => state.auth.currentToken;
