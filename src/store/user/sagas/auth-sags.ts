import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading, setToken } from '../slices/auth-slice';
import * as api from '../api';
import { loginSagaAction, registerSagaAction } from './auth-actions';

function* loginSaga(action: ReturnType<typeof loginSagaAction>) {
  try {
    yield put(setLoading(true));

    yield call(api.login, action.payload);
    yield put(setToken('abc'));
  } finally {
    yield put(setLoading(false));
  }
}

function* registerSaga(action: ReturnType<typeof registerSagaAction>) {
  try {
    yield put(setLoading(true));
    yield call(api.register, action.payload);
    yield put(setToken('abc'));
  } finally {
    yield put(setLoading(false));
  }
}

export function* authSagas() {
  yield takeLatest(loginSagaAction.toString(), loginSaga);
  yield takeLatest(registerSagaAction.toString(), registerSaga);
}
