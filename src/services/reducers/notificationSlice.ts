import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { INotification, INotificationState } from "../types/notification";

const initialState: INotificationState = {
  items: []
}

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (
      state: INotificationState,
      {
        payload: {
          type,
          message
        }
      }: PayloadAction<INotification>
    ) => {
      state.items = [...state.items, {
        id: state.items.length,
        type,
        message,
      }]
    },
    removeNotification: (
      state: INotificationState,
      {
        payload: id
      }: PayloadAction<number>
    ) => {
      state.items = state.items.filter(item => item.id !== id)
    },
  }
})

export const {
  addNotification,
  removeNotification
} = notificationSlice.actions;

export default notificationSlice.reducer;