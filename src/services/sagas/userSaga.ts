import { call, put, takeLatest } from 'redux-saga/effects';

import authApi, { IAuthResponse } from '../api/auth';
import userApi from '../api/user';
import {
  loginRequest,
  registerRequest,
  updateRequest,
  requsetSuccess,
  resetRequest,
  sendCodeRequest,
  changePasswordRequest,
  requsetUserError
} from '../reducers/userSlice';
import paths from '../router/paths';
import { errorAction, errorCodes } from '../constants/errors';

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
      throw new Error(res?.errorCode);
    }
    yield put(requsetSuccess(res.user));
  } catch (error) {
    yield put(requsetUserError());
    yield put({ type: errorAction, error });
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
      throw new Error(errorCodes.PASSWORD_MISMATCH);
    }

    const res = (yield call(authApi.register, {
      email,
      password
    })) as IAuthResponse;

    if (!res?.success) {
      throw new Error(res?.errorCode);
    }
    yield put(requsetSuccess(res.user));
  } catch (error) {
    yield put(requsetUserError());
    yield put({ type: errorAction, error });
  }
}

function* userUpdate(action: any): Generator {
  try {
    const {
      password,
      confirmPassword,
      successCallback
    } = action.payload;

    if (password !== confirmPassword) {
      throw new Error(errorCodes.PASSWORD_MISMATCH);
    }

    const res = (yield call(userApi.update, action.payload)) as IAuthResponse;

    if (!res?.success) {
      throw new Error(res?.errorCode);
    }
    yield put(requsetSuccess(res.user));

    if (typeof successCallback !== 'undefined') {
      successCallback(res.user);
    }
  } catch (error) {
    yield put(requsetUserError());
    yield put({ type: errorAction, error });
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
      throw new Error(res?.errorCode);
    }
    yield put(requsetSuccess(res.user));
  } catch (error) {
    yield put(requsetUserError());
    yield put({ type: errorAction, error });
  }
}

function* sendCode(action: any): Generator {
  try {
    const res = (yield call(authApi.sendCode, action.payload)) as IAuthResponse;

    if (!res?.success) {
      throw new Error(res?.errorCode);
    }
    yield put(requsetSuccess(res.user));
  } catch (error) {
    yield put(requsetUserError());
    yield put({ type: errorAction, error });
  }
}

function* changePassword(action: any): Generator {
  try {
    const {
      email,
      password,
      confirmPassword,
      navigate
    } = action.payload;

    if (password !== confirmPassword) {
      throw new Error(errorCodes.PASSWORD_MISMATCH);
    }

    const res = (yield call(userApi.changePassword, {
      email,
      password
    })) as IAuthResponse;

    if (!res?.success) {
      throw new Error(res?.errorCode);
    }
    yield put(requsetSuccess(res.user));
    navigate(paths.home.url);
  } catch (error) {
    yield put(requsetUserError());
    yield put({ type: errorAction, error });
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