import { saga1 } from './Feature1Sagas';
import { fork, all } from 'redux-saga/effects';

export function* watchSagas() {
  yield all([fork(saga1)]);
}
