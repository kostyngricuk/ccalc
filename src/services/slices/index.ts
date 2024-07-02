import { type Action, combineReducers } from '@reduxjs/toolkit';

import { SLICE_USER_NAME, SLICE_PRODUCT_NAME, SLICE_NOTIFICATION_NAME } from '@constants/store';

import userReducer from './userSlice';
import productReducer from './productSlice';
import notificationReducer from './notificationSlice';

export const appReducer = combineReducers({
  [SLICE_USER_NAME]: userReducer,
  [SLICE_PRODUCT_NAME]: productReducer,
  [SLICE_NOTIFICATION_NAME]: notificationReducer
});

const rootReducer = (
  state: any,
  action: Action,
): ReturnType<typeof appReducer> => appReducer(state, action);

export default rootReducer;