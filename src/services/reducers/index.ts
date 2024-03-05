import { type Action, combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const appReducer = combineReducers({
  user: userReducer,
});

const rootReducer = (
  state: any,
  action: Action,
): ReturnType<typeof appReducer> => appReducer(state, action);

export default rootReducer;