import { call, put, takeLatest } from 'redux-saga/effects'

import userApi from '../api/userApi';
import { IRes } from '../types/api';
import { USER_LOGIN_REQUEST } from '../constants/user';
import { loginError, loginSuccess } from '../reducers/userSlice';
import { IUserState } from '../types/user';

function* loginUser(action: any): Generator {
  try {
    const {
      email,
      password
    } = action.payload;

    const res = yield call(userApi.login, {
      email,
      password
    });

    if ((res as IRes).success) {
      yield put(loginSuccess((res as IUserState).user));
      return;
    }
    yield put(loginError((res as IRes).message));

  } catch (e) {
    yield put(loginError((e as Error).message));
  }
}

function* userSaga() {
  yield takeLatest(USER_LOGIN_REQUEST, loginUser)
}

export default userSaga;