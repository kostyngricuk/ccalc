import { call, put, takeLatest } from 'redux-saga/effects';

import authApi, { IAuthResponse } from 'services/api/auth';
import userApi from 'services/api/user';
import {
  loginRequest,
  registerRequest,
  updateRequest,
  requestSuccess,
  resetRequest,
  sendCodeRequest,
  changePasswordRequest,
  requsetUserError
} from 'store/slices/userSlice';
import paths from 'router/paths';
import { saveProductsSuccess } from 'store/slices/productSlice';
import { errorAction, errorCodes } from 'constants/errors';
import { reqSaveCalcAction } from 'constants/global';

export function* userLogin(action: any): Generator {
  try {
    const {
      email,
      password
    } = action.payload;

    const res = (yield call(authApi.login, {
      email,
      password
    })) as IAuthResponse;
    if (res.success) {
      yield put(requestSuccess(res.user));
      return;
    }
    throw new Error(res.errorCode);
  } catch (error) {
    yield put(requsetUserError());
    yield put({ type: errorAction, error });
  }
}

export function* userRegister(action: any): Generator {
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

    if (res.success) {
      yield put(requestSuccess(res.user));
      return;
    }
    throw new Error(res.errorCode);
  } catch (error) {
    yield put(requsetUserError());
    yield put({ type: errorAction, error });
  }
}

export function* userUpdate(action: any): Generator {
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

    if (res.success) {
      yield put(requestSuccess(res.user));
      return;
    }
    throw new Error(res.errorCode);

    if (typeof successCallback !== 'undefined') {
      successCallback(res.user);
    }
  } catch (error) {
    yield put(requsetUserError());
    yield put({ type: errorAction, error });
  }
}

export function* resetPassword(action: any): Generator {
  try {
    const {
      email
    } = action.payload;
    const res = (yield call(authApi.resetPassword, {
      email
    })) as IAuthResponse;

    if (res.success) {
      yield put(requestSuccess(res.user));
      return;
    }
    throw new Error(res.errorCode);
  } catch (error) {
    yield put(requsetUserError());
    yield put({ type: errorAction, error });
  }
}

export function* sendCode(action: any): Generator {
  try {
    const res = (yield call(authApi.sendCode, action.payload)) as IAuthResponse;

    if (res.success) {
      yield put(requestSuccess(res.user));
      return;
    }
    throw new Error(res.errorCode);
  } catch (error) {
    yield put(requsetUserError());
    yield put({ type: errorAction, error });
  }
}

export function* changePassword(action: any): Generator {
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

    if (res.success) {
      yield put(requestSuccess(res.user));
      navigate(paths.home.path);
      return;
    }
    throw new Error(res.errorCode);
  } catch (error) {
    yield put(requsetUserError());
    yield put({ type: errorAction, error });
  }
}

export function* saveCalcRequset(action: any): Generator {
  try {
    const res = (yield call(userApi.eaten, action.payload)) as IAuthResponse;

    if (res.success) {
      yield put(saveProductsSuccess());
      yield put(requestSuccess(res.user));
      return;
    }
    throw new Error(res.errorCode);
  } catch (error) {
    yield put({ type: errorAction, error });
  }
}

export function* userSaga() {
  yield takeLatest(loginRequest.type, userLogin);
  yield takeLatest(registerRequest.type, userRegister);
  yield takeLatest(updateRequest.type, userUpdate);
  yield takeLatest(resetRequest.type, resetPassword);
  yield takeLatest(sendCodeRequest.type, sendCode);
  yield takeLatest(changePasswordRequest.type, changePassword);
  yield takeLatest(reqSaveCalcAction, saveCalcRequset)
}

export default userSaga;