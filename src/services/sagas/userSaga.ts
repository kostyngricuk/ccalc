import { call, put, takeLatest } from 'redux-saga/effects';
import i18n from '../i18n';

import authApi, { IAuthResponse } from '../api/auth';
import userApi from '../api/user';
import {
  loginRequest,
  registerRequest,
  updateRequest,
  requsetSuccess,
  requsetError,
  resetRequest,
  sendCodeRequest,
  changePasswordRequest
} from '../reducers/userSlice';
import { addNotification } from '../reducers/notificationSlice';
import { ENotificationType } from '../types/notification';

function* userLogin(action: any): Generator {
  try {
    const {
      email,
      password
    } = action.payload;

    const res = (yield call(authApi.login, {
      email,
      password
    })) as IAuthResponse;

    if (!res?.success) {
      throw new Error(res?.message);
    }
    yield put(requsetSuccess(res.user));

  } catch (e) {
    yield put(requsetError());
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
      throw new Error(i18n.t('errors.passwordMismatch'));
    }

    const res = (yield call(authApi.register, {
      email,
      password
    })) as IAuthResponse;

    if (!res?.success) {
      throw new Error(res?.message);
    }
    yield put(requsetSuccess(res.user));
  } catch (e) {
    yield put(requsetError());
    yield put(addNotification({
      type: ENotificationType.error,
      message: (e as Error).message
    }));
  }
}

function* userUpdate(action: any): Generator {
  try {
    const {
      password,
      confirmPassword
    } = action.payload;

    if (password !== confirmPassword) {
      throw new Error(i18n.t('errors.passwordMismatch'));
    }

    const res = (yield call(userApi.update, action.payload)) as IAuthResponse;

    if (!res?.success) {
      throw new Error(res?.message);
    }
    yield put(requsetSuccess(res.user));
  } catch (e) {
    yield put(requsetError());
    yield put(addNotification({
      type: ENotificationType.error,
      message: (e as Error).message
    }));
  }
}

function* resetPassword(action: any): Generator {
  try {
    const {
      email
    } = action.payload;
    const res = (yield call(authApi.resetPassword, {
      email
    })) as IAuthResponse;

    if (!res?.success) {
      throw new Error(res?.message);
    }
    yield put(requsetSuccess(res.user));
  } catch (e) {
    yield put(requsetError());
    yield put(addNotification({
      type: ENotificationType.error,
      message: (e as Error).message
    }));
  }
}

function* sendCode(action: any): Generator {
  try {
    const res = (yield call(authApi.sendCode, action.payload)) as IAuthResponse;

    if (!res?.success) {
      throw new Error(res?.message);
    }
    yield put(requsetSuccess(res.user));
  } catch (e) {
    yield put(requsetError());
    yield put(addNotification({
      type: ENotificationType.error,
      message: (e as Error).message
    }));
  }
}

function* changePassword(action: any): Generator {
  try {
    const {
      email,
      password,
      confirmPassword
    } = action.payload;

    if (password !== confirmPassword) {
      throw new Error(i18n.t('errors.passwordMismatch'));
    }

    const res = (yield call(userApi.changePassword, {
      email,
      password
    })) as IAuthResponse;

    if (!res?.success) {
      throw new Error(res?.message);
    }
    yield put(requsetSuccess(res.user));
    window.location.href = '/';
  } catch (e) {
    yield put(requsetError());
    yield put(addNotification({
      type: ENotificationType.error,
      message: (e as Error).message
    }));
  }
}

function* userSaga() {
  yield takeLatest(loginRequest.type, userLogin);
  yield takeLatest(registerRequest.type, userRegister);
  yield takeLatest(updateRequest.type, userUpdate);
  yield takeLatest(resetRequest.type, resetPassword);
  yield takeLatest(sendCodeRequest.type, sendCode);
  yield takeLatest(changePasswordRequest.type, changePassword);
}

export default userSaga;