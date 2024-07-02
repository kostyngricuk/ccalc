import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SLICE_NOTIFICATION_NAME } from '@constants/store';

import { INotification, INotificationState } from '@services/types/notification';

export const initialState: INotificationState = {
  items: []
}

export const notificationSlice = createSlice({
  name: SLICE_NOTIFICATION_NAME,
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