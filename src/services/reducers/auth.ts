import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import { IUser } from "../../types/user";

interface AuthState {
  currentUser?: IUser | null,
}

const initialState: AuthState = {
  currentUser: null,
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
