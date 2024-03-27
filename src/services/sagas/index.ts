import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import globalSaga from "./globalSaga";

export default function* rootSaga() {
  yield all([
    userSaga(),
    globalSaga()
  ])
}