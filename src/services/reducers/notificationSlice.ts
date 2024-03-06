import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { INotification, INotificationState } from "../types/notification";

const initialState: INotificationState = {
  notifications: []
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
      state.notifications = [...state.notifications, {
        id: state.notifications.length,
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
      state.notifications = state.notifications.filter(item => item.id !== id)
    },
  }
})

export const {
  addNotification,
  removeNotification
} = notificationSlice.actions;

export default notificationSlice.reducer;