import {all, fork, takeLatest, put} from 'redux-saga/effects';

import * as actionCreators from '../actionCreators/userActionCreators';
import * as actionTypes from '../actionTypes/userActionTypes';

function* onLogin({registerRequest}: actionTypes.RegisterAction) {
  console.log('register dispatched with value', registerRequest);
  yield put(actionCreators.registerSuccess(registerRequest));
}

function* watchOnRegister() {
  yield takeLatest(actionTypes.REGISTER, onLogin);
}

export default function* userSaga() {
  yield all([fork(watchOnRegister)]);
}
