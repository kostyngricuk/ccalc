import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga)

export const storeState = store.getState();
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;