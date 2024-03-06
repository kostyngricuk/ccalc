import { call, put, takeLatest } from 'redux-saga/effects'

import userApi, { IAuthResponse } from '../api/user';
import { loginRequest, loginError, loginSuccess, registerRequest, registerError, registerSuccess } from '../reducers/userSlice';
import { addNotification } from '../reducers/notificationSlice';
import { ENotificationType } from '../types/notification';

function* userLogin(action: any): Generator {
  try {
    const {
      email,
      password
    } = action.payload;

    const res = (yield call(userApi.login, {
      email,
      password
    })) as IAuthResponse;

    if (!res?.success) {
      throw new Error(res?.message);
    }
    yield put(loginSuccess(res.user));

  } catch (e) {
    yield put(loginError());
    yield put(addNotification({
      type: ENotificationType.error,
      message: (e as Error).message
    }));
  }
}

function* userRegister(action: any): Generator {
  try {
    const {
      email,
      password,
      confirmPassword
    } = action.payload;

    if (password !== confirmPassword) {
      throw new Error('Password not equally');
    }

    const res = (yield call(userApi.register, {
      email,
      password
    })) as IAuthResponse;

    if (!res?.success) {
      throw new Error(res?.message);
    }
    yield put(registerSuccess(res.user));
  } catch (e) {
    yield put(registerError());
    yield put(addNotification({
      type: ENotificationType.error,
      message: (e as Error).message
    }));
  }
}

function* userSaga() {
  yield takeLatest(loginRequest.type, userLogin)
  yield takeLatest(registerRequest.type, userRegister)
}

export default userSaga;