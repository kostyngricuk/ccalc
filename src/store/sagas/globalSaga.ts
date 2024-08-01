import { put, takeEvery } from 'redux-saga/effects';
import { addNotification } from 'store/slices/notificationSlice';
import { ENotificationType } from 'types/notification';
import i18n from 'i18next';
import { errorAction } from 'constants/errors';

export function* showError(action: any): Generator {
  const errorCode = action.error?.code || action.error?.message
  yield put(addNotification({
      type: ENotificationType.error,
      message: i18n.t(`errors.${errorCode}`)
    }));
}

export function* globalSaga() {
    yield takeEvery(errorAction, showError)
}

export default globalSaga;