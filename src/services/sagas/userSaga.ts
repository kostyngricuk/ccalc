import { call, put, takeLatest } from 'redux-saga/effects'

import userApi, { ILoginResponse } from '../api/userApi';
import { loginRequest, loginError, loginSuccess } from '../reducers/userSlice';
import ENotificationType from '../../components/UI/Notifications/types';
import { addNotification } from '../reducers/notificationSlice';

function* userLogin(action: any): Generator {
  try {
    const {
      email,
      password
    } = action.payload;

    const res = (yield call(userApi.login, {
      email,
      password
    })) as ILoginResponse;

    if (res?.success) {
      yield put(loginSuccess(res.user));
      return;
    }
    yield put(loginError());
    yield put(addNotification({
      type: ENotificationType.error,
      message: res?.message
    }));

  } catch (e) {
    yield put(loginError());
    yield put(addNotification({
      type: ENotificationType.error,
      message: (e as Error).message
    }));
  }
}

function* userSaga() {
  yield takeLatest(loginRequest.type, userLogin)
}

export default userSaga;