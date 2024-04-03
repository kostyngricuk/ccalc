import { type Action, combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import notificationReducer from './notificationSlice';

const appReducer = combineReducers({
  user: userReducer,
  notification: notificationReducer
});

const rootReducer = (
  state: any,
  action: Action,
): ReturnType<typeof appReducer> => appReducer(state, action);

export default rootReducer;