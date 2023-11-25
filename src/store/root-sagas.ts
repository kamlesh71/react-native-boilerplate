import { all, fork } from 'redux-saga/effects';
import { authSagas } from './user/sagas/auth-sags';

const rootSaga = function* () {
  yield all([
    fork(authSagas),
    // Other forks
  ]);
};

export default rootSaga;
