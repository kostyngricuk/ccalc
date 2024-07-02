import { put, takeEvery } from 'redux-saga/effects';
import { addNotification } from '@services/slices/notificationSlice';
import { ENotificationType } from '@services/types/notification';
import i18n from '@services/i18n';
import { errorAction } from '@constants/errors';

function* showError(action: any): Generator {
    const errorCode = action.error?.code ? action.error?.message : action.error?.message
    yield put(addNotification({
      type: ENotificationType.error,
      message: i18n.t(`errors.${errorCode}`)
    }));
}

function* globalSaga() {
    yield takeEvery(errorAction, showError)
}

export default globalSaga;